const { Client , MessageEmbed } = require('discord.js');
const config = require('../../config.json')
module.exports={
    name: 'rate',
    description: 'rate a egirl',
    category: 'entertainment',
    usage: 'e!rate <@user> <Rate/10>',
    perms: 'Send Messages',
    run: async(bot,message,args)=>{
        let skillrate = [
            "Head",
            "Loyalness",
            "Riding",
            "Gaming",
            "Cooking",
            "Twerking"
        ]
        let skillselect = skillrate[Math.floor(Math.random()*(skillrate.length))]
        const Mention = message.mentions.members.first();
        const egirlrate = message.content.slice(30)
        if(!Mention) return message.channel.send('You must mention the **egirl** you want to rate.')
         if(!egirlrate) return message.channel.send('You didnt give a rate')
        if(!message.mentions.members.first().hasPermission('PRIORITY_SPEAKER')) return message.channel.send('This user isnt a egirl stuped')
        const embed = new MessageEmbed()
        .setTitle(`Egirl skill`)
        .setDescription(`**Egirl skill rating for ${Mention}**\n**Rate: ${egirlrate}**\n**Skill: ${skillselect}**`)
        .setColor('RANDOM')
        .setThumbnail(Mention.displayAvatarURL)
        message.channel.send(embed)
        

    }
}