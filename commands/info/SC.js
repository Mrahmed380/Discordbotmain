const { Client , MessageEmbed } = require('discord.js');
const config = require('../../config.json')
module.exports={
    name: 'SC',
    description: 'Shows ERG\'s Social Club Name',
    category: 'info',
    usage: 'e!SC',
    perms: 'Send Messages',
    run: async (bot,message,args)=>{
        message.channel.send(config.SC)

    }
}