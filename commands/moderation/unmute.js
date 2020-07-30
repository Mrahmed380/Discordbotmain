const { MessageEmbed } = require('discord.js')
module.exports={
    name: 'unmute',
    description: 'unmutes a user',
    category: 'guild',
    usage: 'zunmute <@user>',
    perms: 'Moderator role',
    run: async(bot,message,args)=>{
        const mch = message.guild.channels.cache.find(ch => ch.name === 'mutelog');
        const role = message.guild.roles.cache.find(r => r.name === 'Muted')
        const modrole = message.guild.roles.cache.find(r => r.name === 'Moderator')
        if(!message.member.roles.cache.has(modrole.id)) return message.channel.send('You need Moderator role to unmute users')
        const Mention = message.mentions.members.first();
        if(!Mention) return message.channel.send('You must mention the user you want to unmute!')
        if(!Mention.roles.cache.has(role.id)) return message.channel.send('This user isnt even muted :(')
        Mention.roles.remove(role)
        console.log('729521089893629963')
        console.log('User unmuted')
        message.channel.send(`Unmuted! <#730397183106351115>`)
        const embed = new MessageEmbed()
        .setTitle('Muted User')
        .setDescription(`${Mention}, You have been unmuted!\nModerator: ${message.author.id}; ${message.author}`)
        .setColor(`RANDOM`);
        mch.send(embed)
    }
}