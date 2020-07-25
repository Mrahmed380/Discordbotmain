const { Client , MessageEmbed } = require('discord.js')
module.exports={
    name: 'penis',
    category: 'entertainment',
    description: 'shows how big a user\'s dick is',
    usage: 'penis [@user]',
    perms: 'Send Messages',
    timeout: 3000,
    aliases: ['peen', 'dick'],
    run: async (bot,message,args)=>{
        let peen = [
            "8=D",
            "8===D",
            "8==D",
            "8===========================D",
            "8==========D",
            "8=================D",
            "8========D",
            "8====D",
            "8=======D",
            "8========================D",
            "8===D",
            "He doesnt have one"
        ]
        let dickwheel = peen[Math.floor(Math.random()*(peen.length))]
        const Mention = message.mentions.members.first();
        const mdembed = new MessageEmbed()
        .setTitle(`Penis tracker 2000`)
        .setColor('RANDOM')
        .setDescription(`${Mention}\'s peen size\n**${dickwheel}**`)
        .setFooter('His snap chat is "Crip- ERG IUseMints" if you want his nudes');
        if(Mention) return message.channel.send(mdembed)
        const ddembed = new MessageEmbed()
        .setTitle(`${message.author.tag}\'s peen`)
        .setColor('RANDOM')
        .setDescription(`${dickwheel}`)
        .setFooter('His snap chat is "Crip- ERG IUseMints" if you want his nudes');
        message.channel.send(ddembed)
    }
}