const { Client , MessageEmbed } = require('discord.js')
module.exports={
    name: 'botinfo',
    category: 'info',
    description: 'Shows bot information ; version, commands, author',
    usage: 'e!botinfo',
    run: async(bot,message,args)=>{
        var botinfo = 'Version 1.4.6, Created by ERG#1703 (bot is updated once a week)'
        const INFOembed = new Discord.MessageEmbed()
            .setTitle('All Commands + Bot info')
            .addField('commands' , 'menu, botinfo, prices, sells, moneydrop, stream, ping, cracked, serverjoin, botinv, methods, hgames, message @theUserYouWantToSendTo [The message you want to send to user], suggest, ticket, cticket [poll (Your message)], stats and [stats (@user)]. (prefix = e!)')
            .addField('Mod commands' , '[e!reject @user (Suggestion ID: 1234)], [e!approve @user (Suggestion ID: 1234)]')
            .setThumbnail(guild.iconURL())
            .addField('Information' , botinfo)
            .addField('Command Help', 'Use e!help to get help on any command!')
            .addField('Dedicated Server' , 'ERGs Recoverys')
            .setColor(0x119e32)            
            message.channel.send(INFOembed);
    }
    
}