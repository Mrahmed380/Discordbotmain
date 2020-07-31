const { MessageEmbed } = require("discord.js");

module.exports={
    name: "snipe",
    descripton: "snipe a message",
    usage: "snipe [number]",
    category: "entertainment",
    perms: "Send Messages",
    dm: false,
    run: async(bot,message,args)=>{
        const snipes = bot.snipes.get(message.channel.id) || [];
        const msg = snipes[args[0]-1||0];
        if(!msg) return message.channel.send('There is nothing to snipe');
        const embed = new MessageEmbed()
        .setAuthor(msg.author.tag, msg.author.displayAvatarURL({dynamic: true}))
        .setDescription(msg.content)
        .setFooter(`Date: ${msg.date} | ${args[0]||1}/${snipes.length}`)
        if(msg.attatchment) embed.setDescription(msg.attatchment);
        message.channel.send(embed);
        console.log('sniped')
    }

}