const { Client , MessageEmbed } = require('discord.js');
const accounts = require('../../cracked')
module.exports={
    name: 'test',
    description: 'test',
    category: 'info',
    usage: 'e!test',
    perms: 'Send Messages',
    run: async(bot,message,args)=>{
        let efe = accounts[Math.floor(Math.random()*(accounts.length))]
        message.channel.send(efe)
        
    }
}