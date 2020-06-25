const { Client , MessageEmbed } = require('discord.js');
const api = require()
module.exports={
    name: 'meme',
    description: 'Sends random reddit memes',
    category: 'entertainment',
    usage: 'e!meme',
    run: async(bot,message,args)=>{
        let subreddits = [
            "comedyheaven",
            "dank",
            "meme",
            "memes",
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