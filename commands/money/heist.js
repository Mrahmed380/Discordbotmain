const money = require('../../models/money');
module.exports={
    name: 'heist',
    status: true,
    aliases: ['bankrob'],
    usage: 'heist',
    description: 'Rob a bank and get up to $100000',
    timeout: 3.6e+6,
    category: 'money',
    perms: "Send Messages",
    run: async(bot,message,args)=>{
        money.findOne({ User: message.author.id }, async (err,data)=>{
            if(err) console.log(err)
            if(!data || data.money == 0) return message.channel.send("You need to pay $10000 to start a heist you dont have this money yet!")
            message.channel.send(`heist from ${message.author} react to enter`).then(msg => {
                msg.react("718678524101132288")
            })
        })
    }
}