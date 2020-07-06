const { Client , MessageEmbed } = require('discord.js');
const config = require('../../config.json')
module.exports={
    name: 'stars',
    description: 'Gives a list of the best porn stars of the month',
    category: 'entertainment',
    usage: 'e!stars',
    perms: 'Send Messages',
    run: async(bot,message,args)=>{
        message.channel.send(config.stars)
    }
}