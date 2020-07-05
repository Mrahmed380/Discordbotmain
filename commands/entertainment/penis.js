const { Client , MessageEmbed } = require('discord.js')
module.exports={
    name: 'penis',
    category: 'entertainment',
    description: 'shows how big a user\'s dick is',
    usage: 'e!penis or e!penis [@user]',
    perms: 'Send Messages',
    run: async (bot,message,args)=>{
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
        const Mention = message.mentions.members.first();
        const mdembed = new MessageEmbed()
        .setTitle(`${Mention}\'s peen`)
        .setColor('RANDOM')
        .setDescription(`8${dickwheel}D`)
        .setFooter('His snap chat is "Crip- ERG IUseMints" if you want his nudes');
        if(Mention) return message.channel.send(mdembed)
        const ddembed = new MessageEmbed()
        .setTitle(`${message.author.tag}\'s peen`)
        .setColor('RANDOM')
        .setDescription(`8${dickwheel}D`)
        .setFooter('His snap chat is "Crip- ERG IUseMints" if you want his nudes');
        message.channel.send(ddembed)
    }
}