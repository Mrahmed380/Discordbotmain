const fs = require('fs');
const moment = require('moment');
const hb = require('hastebin-generator');

module.exports={
    name: 'archive',
    description: 'logs a number of messages to a channel',
    usage: 'zarchive <# of msgs>',
    category: 'guild',
    perms: 'Moderator role',
    run: async (bot,message,args)=>{
        const maddyrole = message.guild.roles.cache.find(r => r.name === 'Moderator')
        const modrole = message.guild.roles.cache.find(r => r.name === 'Moderator')
        const chan = message.guild.channels.cache.find(ch => ch.name === 'archivelog')
        if(!message.member.roles.cache.has(modrole.id)) return message.channel.send('You are not allowed to archive chats!')
        var amount = args[0]
        if(!amount) return message.channel.send('How many messages would you like to archive?')
        if(isNaN(amount)) return message.channel.send('That is not a number!'), console.log(`${amount} is not a number so archived was canceled`)
        if(parseInt(amount) > 100) return message.channel.send('You cannot archive more than 100 messages!')
        const fetchedmessages = await message.channel.messages.fetch({ limit: amount })
        var formattedMsgs = fetchedmessages.map(m => `[${m.createdAt.toLocaleString()}] ${m.author.tag}: ${m.content}\n`)
        hb(formattedMsgs.join(""), 'js').then(r => {
            message.channel.send(`Succesfully archived ${amount} messages in <#${chan.id}>`)
            chan.send(`Succesfully archived ${amount} messages: ${r}`) 
        }).catch(e => {
            if(e) return message.channel.send('There was a error archiving the messages!')
        })
    }
}