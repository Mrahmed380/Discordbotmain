const { Client , MessageEmbed } = require('discord.js')
module.exports={
    name: 'penis',
    category: 'entertainment',
    description: 'shows how big <@719890899517046866>\'s dick is',
    usage: 'e!penis',
    perms: 'Send Messages',
    run: async (bot,message,args)=>{
        const mdembed = new MessageEmbed()
        .setTitle(`${Mention}\'s peen`)
        .setColor('RANDOM')
        .setDescription(`8${dickwheel}D`)
        .setFooter('His snap chat is "Crip- ERG IUseMints" if you want his nudes');
        const Mention = message.mentions.members.first();
        if(Mention) return message.channel.send(mdembed)
        let peen = [
            "=",
            "===",
            "==",
            "===========================",
            "==========",
            "=================",
            "========"
        ]
        let dickwheel = peen[Math.floor(Math.random()*(peen.length))]
        const ddembed = new MessageEmbed()
        .setTitle(`${message.author.tag}\'s peen`)
        .setColor('RANDOM')
        .setDescription(`8${dickwheel}D`)
        .setFooter('His snap chat is "Crip- ERG IUseMints" if you want his nudes');
        message.channel.send(ddembed)
    }
}