const { Client, MessageEmbed } = require('discord.js')
const config = require('../../config.json')
module.exports = {
    name: 'stats',
    dm: false,
    category: 'info',
    description: 'Shows bot information ; version, commands, author',
    usage: 'e!botinfo',
    perms: 'Send Messages',
    run: async (bot, message, args) => {
        const argss = message.content.split(' ');
        console.log(args);
        if (argss.length > 2) {
            message.channel.send('Incorrect Usage: e!stats | e!stats @User | e!stats self');
        } else if (argss.length === 2) {
            const memberM = message.mentions.members.first();
            const STembed = new MessageEmbed()
                .setAuthor(`${memberM.user.tag} (${memberM.id})`, memberM.user.displayAvatarURL())
                .setThumbnail(memberM.user.displayAvatarURL({ dynamic: true }))
                .addField('Created on', memberM.user.createdAt.toLocaleString(), true)
                .addField('Joined Server on', memberM.joinedAt.toLocaleString(), true)
                .addField('Player is Kickable', memberM.kickable, false)
                .addField('Player is Banable', memberM.bannable, false)
                .addField('Prescence', memberM.presence.status, false)
                .setDescription(`${memberM.roles.cache.map(role => role.toString()).join(' ')}`)
            message.channel.send(STembed);
        } else {
            const { guild } = message;
            const GSembed = new MessageEmbed()
                .setAuthor(`${guild.name} (${guild.id})`, guild.iconURL())
                .setThumbnail(guild.iconURL())
                .addField('Created on', guild.createdAt.toLocaleString(), true)
                .addField('Guild Owner', guild.owner.user.tag)
                .addField('Total Members', guild.members.cache.filter(member => !member.user.bot).size)
                .addField('Total Bots', guild.members.cache.filter(member => member.user.bot).size)
                .addField('Total Channels', guild.channels.cache.size)
                .addField('Boost', `Server boost tier: ${message.guild.premiumTier}\nServer boosts: ${message.guild.premiumSubscriptionCount}`)
                .setDescription(`${guild.roles.cache.map(role => role.toString()).join(' ')}`);
            message.channel.send(GSembed);

        }
    }
}