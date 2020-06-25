const { Client , MessageEmbed } = require('discord.js');
const api = require("imageapi.js")
module.exports={
    name: 'reddit',
    description: 'Get a meme from a specific subreddit',
    category: 'entertainment',
    usage: 'e!reddit <subreddit>',
    perm: 'Send Messages',
    run: async(bot,message,args)=>{
        let Subreddit =  message.content.slice(9)
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
            return message.channel.send(err)
            console.log('Bruh there was a error the subreddit probably doesnt exist')
        }
        
    }
}