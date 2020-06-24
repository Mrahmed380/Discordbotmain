const { Client , MessageEmbed } = require('discord.js');
module.exports={
    name: 'poll',
    description: 'Sends a poll for the guild to react to',
    category: 'entertainment',
    usage: 'e!poll <Your poll>',
    run: async(bot,message,args)=>{
        message.delete();
        let msArgs = args.slice(1).join(" ");
        const YPembed =  new MessageEmbed()
        .setColor(0x119e32)
        .setTitle('Poll')
        .setDescription("📋" + msArgs)
        .setFooter("Poll from: " + message.author.tag)
        .setThumbnail(message.author.displayAvatarURL())
        message.channel.send(YPembed).then(messageReaction => {
            messageReaction.react("✅")
             messageReaction.react("❌")
        })
    }
}