const { Client , MessageEmbed } = require('discord.js');
const api = require("imageapi.js")
module.exports={
    name: 'nreddit',
    description: 'Get a NSFW/Nude image from a subreddit',
    category: 'entertainment',
    usage: 'e!nreddit',
    perms: 'Send Messages',
    run: async(bot,message,args)=>{
        let Subreddit = [
            "nudesfeed",
            "nudesfeed"
        ]
        try{
            let img = await api(Subreddit)
            const Embed = new MessageEmbed()
            .setTitle(`Image from r/${Subreddit}`)
            .setColor('RANDOM')
            .setURL(`https://www.reddit.com/r/nudesfeed/`)
            .setImage(img);
            message.channel.send(Embed)
        } catch(err){
            message.channel.send('There was a error! The subreddit may not exist.')
            console.log('Bruh there was a error the subreddit probably doesnt exist')
        }
        
    }
}