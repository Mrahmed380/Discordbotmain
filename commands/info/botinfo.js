const { Client , MessageEmbed } = require('discord.js')
const config = require('../../config.json')
module.exports={
    name: 'botinfo',
    category: 'info',
    description: 'Shows bot information ; version, commands, author',
    usage: 'e!botinfo',
    perms: 'Send Messages',
    run: async(bot,message,args)=>{
        const INFOembed = new MessageEmbed()
            .setTitle('All Commands + Bot info')
            .addField('commands' , 'menu, botinfo, prices, sells, moneydrop, stream, ping, cracked, serverjoin, botinv, methods, hgames, rate, suggest, ticket, cticket, stats, penis, ban, clear, kick, unban, poll, reddit, meme and giveaway (prefix = e!)')
            .addField('Mod commands' , '[e!reject @user (Suggestion ID: 1234)], [e!approve @user (Suggestion ID: 1234)]')
            .setThumbnail(message.guild.iconURL())
            .addField('Information' , config.botinfo)
            .addField('Command Help', 'Use e!help to get help on any command!')
            .addField('Dedicated Server' , 'ERGs Recoverys')
            .setColor(0x119e32)            
            message.channel.send(INFOembed);
    }
    
}