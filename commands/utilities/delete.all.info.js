const Moneydb = require("../../models/money");
const XPdb = require("../../models/xp");
const GTAdb = require("../../models/gta");
module.exports={
    name:'delete_all_info',
    aliases: ['duserinfo', 'deleteinfo','DLAI'],
    description: "delete all info out of DB including coins, XP and GTA username",
    usage: "delet_all_info",
    perms: 'Send Messages',
    category: "utilities",
    dm: false,
    status: true,
    run:async(bot,message,args)=>{
        const filter = m => m.author.id === message.author.id;
        message.channel.send("Are you sure you want to delete all your data out of the DB? This includes your coins, XP and GTA username\n `confirm` to continue or `cancel` to stop this operation")
        message.channel.awaitMessages(filter, {
            max: 1,
            time: 10000
        }).then(collected=>{
            const answer = 'confirm'||'cancel'
            if(collected.first().content !== answer) return message.channel.send("That was not a valid answer so I stopped the operation");
            if(collected.first().content == "cancel") return message.channel.send("Ok I cancelled!");
            Moneydb.findOne({ User: message.author.id }, async(err,data)=>{
                if(err) console.log(err)
                if(!data)  message.channel.send("Money data does not exist")
                if(data) data.deleteOne().then(message.channel.send('Money data deleted'));
            })
            XPdb.findOne({User:message.author.id},async(err,data)=>{
                if(err) console.log(err)
                if(!data) message.channel.send("XP data does not exist");
                if(data) data.deleteOne().then(message.channel.send("XP data deleted"));
            })
            GTAdb.findOne({User:message.author.id},async(err,data)=>{
                if(err) console.log(err)
                if(!data) message.channel.send("GTA data does not exist");
                if(data) data.deleteOne().then(message.channel.send("GTA data deleted"));
            })
            message.channel.send("All data was deleted!")
        })
    }
}