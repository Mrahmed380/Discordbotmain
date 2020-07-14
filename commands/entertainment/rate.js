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
            "Glizzy gobbling",
            "Cooking",
            "Twerking",
            "Clingyness",
            "69 Position",
            "Cowgirl Position",
            "Mirror pics"
        ]
        let skillselect = skillrate[Math.floor(Math.random()*(skillrate.length))]
        const Mention = message.mentions.members.first();
        const egirlrate = message.content.slice(29)
        const erole = message.guild.roles.cache.find(r => r.name === 'egirls')
        const formattedMsgs = erole.members.map(m => `${m.user} `)
        if(!Mention) return message.channel.send('You must mention the **egirl** you want to rate.')
         if(!egirlrate) return message.channel.send('You didnt give a rate')
         if(egirlrate > 10 ) return message.channel.send('Rates are out of 10, use a number 10 or below!')
         if(message.content.includes('/')) return message.channel.send('Rates are automatically out of 10! Choose a number 1-10')
        if(!message.mentions.members.first().hasPermission('PRIORITY_SPEAKER')) return message.channel.send(`This user isnt a egirl stuped. Egirls that will ride for $$$$$$; ${formattedMsgs}. `)
        message.delete()
        const embed = new MessageEmbed()
        .setTitle(`Egirl skill`)
        .setDescription(`**Egirl skill rating for ${Mention}**\n**Rate: ${egirlrate}/10**\n**Skill: ${skillselect}**`)
        .setColor('RANDOM')
        .setFooter(config.loyal)
        .setThumbnail(Mention.displayAvatarURL)
        message.channel.send(embed)
        

    }
}