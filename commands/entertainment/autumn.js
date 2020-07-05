const { Client , MessageEmbed } = require('discord.js')
module.exports={
    name: 'autumn',
    category: 'entertainment',
    description: 'shows how big <@719890899517046866>\'s dick is',
    usage: 'e!autumn',
    perms: 'Send Messages',
    run: async (message,bot,args)=>{
        const ddembed = new MessageEmbed()
        .setTitle('Autumns dick')
        .setColor('RANDOM')
        .setDescription('8==D')
        .setFooter('His snap chat is "Crip- ERG IUseMints" if you want his nudes');
        message.channel.send(ddembed)
        message.channel.send('Neggar')
    }
}