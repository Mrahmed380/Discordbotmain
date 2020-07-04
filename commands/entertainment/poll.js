const { Client , MessageEmbed } = require('discord.js');
module.exports={
    name: 'poll',
    description: 'Sends a poll for the guild to react to',
    category: 'entertainment',
    usage: 'e!poll <Your poll>',
    perms: 'Manage Channels',
    run: async(bot,message,args)=>{
        if(!message.member.hasPermission("MANAGE_CHANNELS")) return message.channel.send('You need "Manage channels" permission to make polls')
        message.delete();
        const YPembed =  new MessageEmbed()
        .setColor(0x119e32)
        .setTitle('Poll')
        .setDescription("📋" + message.content.slice(6))
        .setFooter("Poll from: " + message.author.tag)
        .setThumbnail(message.author.displayAvatarURL())
        message.channel.send(YPembed).then(messageReaction => {
            messageReaction.react("✅")
            messageReaction.react("❌")
        })
    }
}