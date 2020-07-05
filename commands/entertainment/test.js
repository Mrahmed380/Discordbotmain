const { Client , MessageEmbed } = require('discord.js');
const config = require('../../config')
module.exports={
    name: 'reddit',
    description: 'Get a image from a specific subreddit',
    category: 'entertainment',
    usage: 'e!reddit <subreddit>',
    perms: 'Send Messages',
    run: async (bot,message,args)=>{
        message.channel.send(config.dad)

    }
}