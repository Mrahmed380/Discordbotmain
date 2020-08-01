const warns = require("../../models/warns");
module.exports={
    name:"reset",
    description:"Reset a users warnings",
    usage: "reset <user>",
    perms:"Moderator Role",
    dm: false,
    category: "moderation",
    run:async(bot,message,args)=>{
        const mention = message.mentions.members.first();
        if(!mention) return message.channel.send("You need to mention the user you want to reset!");
        warns.findOne({Guild: message.guild.id, User: mention.id},async(err,data)=>{
            if(err) console.log(err);
            if(!data) return message.channel.send("This user has no warns");
            console.log(data);
            data.deleteOne();
            message.channel.send(`${mention}'s warns were reset\nThe user now has 0 warnings!`).then(msg=>msg.react("718678524101132288"));
            console.log("Data deleted");
        })
    }
}