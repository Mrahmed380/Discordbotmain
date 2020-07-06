const { Client , MessageEmbed  } = require('discord.js');
const config = require('../../config.json')
module.exports={
    name: 'idgrab',
    category: 'guild',
    description: 'resolves a users id',
    usage: 'e!idgrab <user>',
    perms: 'Send Messages',
    run: async (bot,message,args)=>{
        const Mention = message.mentions.members.first();
        if(!Mention) return message.channel.send('You did not mention the user you want to resolve *goofy*')
        message.channel.send(`${Mention} ID is \`${Mention.id}\``)
        
    }
}