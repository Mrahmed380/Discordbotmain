const { Client , MessageEmbed } = require('discord.js');
const config = require('../../config.json')
module.exports={
    name: 'sc',
    description: 'Shows ERG\'s Social Club Name',
    category: 'info',
    usage: 'e!sc',
    perms: 'Send Messages',
    run: async (bot,message,args)=>{
        message.channel.send(config.SC)

    }
}