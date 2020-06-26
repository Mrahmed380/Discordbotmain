const { Client , MessageEmbed } = require('discord.js')
const ms = require('ms')
module.exports={
    name: 'giveaway',
    category: 'entertainment',
    description: 'creates a custom giveaway',
    usage: 'e!giveaway <time> <channel> <prize>',
    perms: 'Administrator',
    run: async(bot,message,args)=>{
        if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send("You need administrator to create giveaways")
        if(!args[0]) return message.channel.send(`You did not specify the time`)
        if(!args[0].endsWith("d")&&!args[0].endsWith("h")&&!args[0].endsWith("m")) return message.channel.send(`You did not use the correct format for the time to get more info run e!help giveaway`)
        if(isNaN(args[0][0])) return message.channel.send(`That is not a number!`)
        let gchannel = message.mentions.channels.first()
        if(!gchannel) return message.channel.send(`I could not find that channel in the server`)
        let prize = args.slice(2).join(" ")
        if(!prize) return message.channel.send('You did not specify the prize')
        message.channel.send(`**Giveaway created in ${gchannel}**`)
        const Gembed = new MessageEmbed()
        .setTitle(`Giveaway from ${message.author.tag}`)
        .setColor(0x006eff)
        .setDescription(`Prize: ${prize}\nTime: ${Date.now()+(args[0])}\nWinners: 1`)
        let m = await gchannel.send(Gembed)
        m.react("✅")
        setTimeout(() => {
            if(m.reactions.cache.size<=0) return gchannel.send(`No one reacted`)
            let winner = m.reactions.cache.get("✅").users.cache.filter(u=>!u.bot).random()
            gchannel.send(`The winner of the giveaway for **${prize}** is... ${winner}!`)
        }, ms(args[0]));
    }
}