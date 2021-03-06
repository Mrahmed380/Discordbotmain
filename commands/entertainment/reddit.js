const { Client , MessageEmbed } = require('discord.js');
const api = require("imageapi.js")
module.exports={
    name: 'reddit',
    description: 'Get a image from a specific subreddit',
    category: 'entertainment',
    usage: 'reddit <subreddit>',
    perms: 'Send Messages',
    run: async(bot,message,args)=>{
        let Subreddit =  args[0]
        if(!Subreddit)return message.channel.send('You did not specify the subreddit!')
        try{
            let img = await api(Subreddit)
            const Embed = new MessageEmbed()
            .setTitle(`Image from r/${Subreddit}`)
            .setColor('RANDOM')
            .setURL(`https://reddit.com/r/${Subreddit}`)
            .setImage(img);
            message.channel.send(Embed)
        } catch(err){
            message.channel.send('There was a error! The subreddit may not exist.')
            console.log('Bruh there was a error the subreddit probably doesnt exist')
        }
        
    }
}