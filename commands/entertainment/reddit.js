const { Client , MessageEmbed } = require('discord.js');
const api = require("imageapi.js")
module.exports={
    name: 'reddit',
    description: 'Get a meme from a specific subreddit',
    category: 'entertainment',
    usage: 'e!reddit <subreddit>',
    perms: 'Send Messages',
    run: async(bot,message,args)=>{
        let imgp = await api(Subreddit)
        const Sembed = new MessageEmbed()
        .setTitle('Porno from reddit')
        .setColor('RANDOM')
        .setURL(`https://reddit.com/r/${Subreddit}`)
        .setImage(imgp);
        let Subreddit =  message.content.slice(9)
        if(!Subreddit)return message.channel.send('You did not specify the subreddit!')
        if(message.content.includes("Nude")) return message.channel.send(Sembed)
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