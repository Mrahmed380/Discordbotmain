const { Client , MessageEmbed } = require('discord.js');
const config = require('../../config.json')
module.exports={
    name: 'test',
    description: 'Get a dilf in your dms',
    category: 'entertainment',
    usage: 'e!test',
    perms: 'Send Messages',
    run: async (bot,message,args)=>{
        message.channel.send(config.dad)

    }
}