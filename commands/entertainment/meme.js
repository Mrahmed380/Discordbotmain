const { Client , MessageEmbed } = require('discord.js');
const api = require('imageapi.js')
module.exports={
    name: 'meme',
    alt: 'hush',
    description: 'Sends random reddit memes',
    category: 'entertainment',
    usage: 'meme',
    perms: 'Send Messages',
    run: async(bot,message,args)=>{
        let subreddits = [
            "comedyheaven",
            "dank",
            "meme",
            "dankmemes",
            "memes",
            "DarkHumorAndMemes",
            "DarkHumorAndMemes"
        ]
        let subreddit = subreddits[Math.floor(Math.random()*(subreddits.length))]
        console.log(subreddit)
        let img = await api(subreddit)
        console.log(img)
        const Membed = new MessageEmbed()
        .setTitle('Subreddit Meme')
        .setURL(`https://reddit.com/r/${subreddit}`)
        .setColor('RANDOM')
        .setImage(img)
        message.channel.send(Membed)
    }
}