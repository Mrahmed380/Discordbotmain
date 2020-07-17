const { Client, MessageEmbed } = require('discord.js');
module.exports = {
    name: 'kick',
    category: 'guild',
    description: 'Kicks the mentioned user',
    usage: 'kick <@user>',
    perms: 'Administrator',
    run: async (bot, message, args) => {
        const Mention = message.mentions.members.first()
        if (!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send('You need administrator to use this commmand')
        if (!Mention) return message.channel.send('You must mention someone to kick durdur goofy')
        if (!Mention.kickable) return message.channel.send('You cannot kick this person')
        Mention.send('You have been kicked from ' + (message.guild.name))
        Mention.kick();
        message.channel.send(`${Mention} was kicked from the server!`)


    }
}