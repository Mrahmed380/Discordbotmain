const { Client , MessageEmbed } = require('discord.js');
const ms = require('ms');
module.exports={
    name: 'mute',
    description: 'mutes a user a user',
    usage: 'mute <@user> <time (in minutes)>',
    category: 'moderation',
    perms: 'Moderator role',
    run: async(bot,message,args)=>{
        const chan = message.guild.channels.cache.find(channel => channel.name === 'mutelog')
        const role = message.guild.roles.cache.find(r => r.name === 'Muted')
        const modrole = message.guild.roles.cache.find(r => r.name === 'Moderator')
        const Mention = message.mentions.members.first();
        let time = args.slice(1).join(" ")
        if(!message.member.roles.cache.has(modrole.id)) return message.channel.send('You need the moderator role to mute members!')
        if(!Mention) return message.channel.send('You need to mention someone')
        if(Mention.id == message.author.id) return message.channel.send('You cant mute your self. I swear corona got yall looking dumb as hell')
        if(!time) return message.channel.send('Please specify how long you want to mute the user!')
        if(Mention.roles.cache.has(role.id)) return message.channel.send('This user is already muted')
        if(isNaN(time)) return message.channel.send('That is not a number')
        Mention.roles.add(role.id)
        const timems = Math.floor( time * 1000 * 60); 
        const embed = new MessageEmbed()
        .setTitle('Mute log')
        .setDescription(`${Mention} was muted\nTime: ${ms(timems)}\nModerator: ${message.author.id}; ${message.author}`)
        .setColor(`RANDOM`)
        setTimeout(() => {
            Mention.roles.remove(role.id)
            console.log(`User unmuted after ${ms(timems)}`)
            chan.send(`${Mention} was unmuted after ${ms(timems)}`)
        }, (timems));
        console.log(role.id)
        console.log('User muted')
        console.log(`Mod: ${message.author.id} ${ms(timems)}`)
        message.channel.send(`Muted! <#${chan.id}>`)
        chan.send(embed)
    }
}
    
