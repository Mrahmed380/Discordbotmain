const { Client , MessageEmbed } = require('discord.js');
const accounts = require('../../cracked')
module.exports={
    name: 'test',
    description: 'test',
    category: 'info',
    usage: 'e!test',
    perms: 'Send Messages',
    run: async(bot,message,args)=>{
        let efe = acc[Math.floor(Math.random()*(acc.length))]
        message.channel.send(efe)
        
    }
}