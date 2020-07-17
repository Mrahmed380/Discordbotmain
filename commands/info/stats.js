const { Client, MessageEmbed } = require('discord.js')
const config = require('../../config.json')
module.exports = {
    name: 'stats',
    category: 'info',
    description: 'Shows bot information ; version, commands, author',
    usage: 'e!botinfo',
    perms: 'Send Messages',
    run: async (bot, message, args) => {
        const args = msg.content.split(' ');
        console.log(args);
        if (args.length > 2) {
            message.channel.send('Incorrect Usage: e!stats | e!stats @User | e!stats self');
        } else if (args.length === 2) {
            const memberM = message.mentions.members.first();
            const STembed = new MessageEmbed()
                .setAuthor(`${memberM.user.tag} (${memberM.id})`, memberM.user.displayAvatarURL())
                .setThumbnail(memberM.user.displayAvatarURL())
                .addField('Created on', memberM.user.createdAt.toLocaleString(), true)
                .addField('Joined Server on', memberM.joinedAt, true)
                .addField('Player is Kickable', memberM.kickable, false)
                .addField('Player is Banable', memberM.bannable, false)
                .addField('Prescence', memberM.presence.status, false)
                .setDescription(`${memberM.roles.cache.map(role => role.toString()).join(' ')}`)
            message.channel.send(STembed);
        } else {
            const { guild } = msg;
            const GSembed = new MessageEmbed()
                .setAuthor(`${guild.name} (${guild.id})`, guild.iconURL())
                .setThumbnail(guild.iconURL())
                .addField('Created on', guild.createdAt.toLocaleString(), true)
                .addField('Guild Owner', guild.owner.user.tag)
                .addField('Total Members', guild.members.cache.filter(member => !member.user.bot).size)
                .addField('Total Bots', guild.members.cache.filter(member => member.user.bot).size)
                .addField('Total Channels', guild.channels.cache.size)
                .setDescription(`${guild.roles.cache.map(role => role.toString()).join(' ')}`);
            message.channel.send(GSembed);

        }
    }
}