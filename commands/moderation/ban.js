const { CLient, MessageEmbed } = require('discord.js');
const { category } = require('./ban');
module.exports = {
    name: 'ban',
    dm: false,
    category: 'moderation',
    description: 'Bans any mentioned user',
    usage: 'ban <@user>',
    perms: 'Administrator',
    run: async (bot, message, args) => {
        const banID = message.content.slice(6)
        const Mention = message.mentions.members.first()
        const reason = args.slice(1).join(" ")
        if (!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send('You need administrator to use this command!')
        if (!Mention) return message.channel.send('You did not specify the user')
        if (!reason) return message.channel.send('You did not give a reason')
        if (!Mention.bannable) {
            return message.channel.send('You cannot ban this user!!!')
        }
        const Bembed = new MessageEmbed()
            .setTitle('Ban Hammer')
            .setDescription(`${message.author} just banned yo ass!`)
            .addField('Reason', reason)
            .setThumbnail(message.guild.iconURL())
            .setColor(0xd5eb34)
            .setFooter(message.guild.name);
        Mention.send(Bembed);
        Mention.ban({ reason: reason });
        message.channel.send(`${Mention} was banned!`)


    }

}