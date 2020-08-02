const { MessageEmbed } = require("discord.js");
module.exports={
    name: "imagine",
    description: "Show your imagination on a embed",
    usage: "imagine [text]",
    aliases: ["imagination"],
    perms: "Send Messages",
    dm: true,
    status: true,
    category: "entertainment",
    run:async(bot,message,args)=>{
        let string = ["Gay lord hotel being one of the twin towers", "Donald Trump wasn't a peach", "Addison Rae had a onlyfans", "Trippie Red was the best rapper"];
        const str = string[Math.floor(Math.random() * (string.length))]
        let img = args.slice(0).join(" ");
        if(!img) img = str;
        const embed = new MessageEmbed()
        .setTitle(`${message.author.username}'s imagination`)
        .setDescription(`imagine ${img}`)
        .setColor("ORANGE")
        .setAuthor(message.author.displayAvatarURL({dynamic: true}))
        .setFooter(`${message.author.username} is going to have a stroke from imagining`)
        message.channel.send(embed)
    }
}