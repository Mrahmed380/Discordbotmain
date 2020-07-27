const { Client, MessageEmbed } = require('discord.js')
const config = require('../../config.json')
const money = require('../../models/money');
module.exports = {
    name: 'stats',
    dm: false,
    category: 'info',
    description: 'Shows bot information ; version, commands, author',
    usage: 'e!botinfo',
    perms: 'Send Messages',
    aliases: ['user'],
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
                .setDescription(`${memberM.roles.cache.map(role => role.toString()).join(' ')}`)
                .setColor('RANDOM');
            money.findOne({ User: memberM.id }, async (err, data) => {
                if (err) console.log(err);
                if (!data) {
                    console.log('nothing');
                    STembed.addField(`Coins: $0`);
                } else {
                    console.log(data);
                    STembed.addField(`Coins: $${data.Money}`);
                }
            })
            /*if (memberM.presence.activities[0]) {
                if (memberM.presence.activities[0].state !== null) {
                    STembed.addField('Status', memberM.presence.activities[0].state);
                } else {
                    STembed.addField('Status', "None");
                };
            };
            if (memberM.nickname == null) {
                STembed.addField('Nickname', "None");
            } else {
                STembed.addField('Nickname', memberM.nickname);
            }
            if (memberM.presence.status !== 'dnd') {
                STembed.addField('Presence', capitalizeFirstLetter(memberM.presence.status));
            } else {
                STembed.addField('Presence', "Do not Disturb");
            }*/
            message.channel.send(STembed);
        } else {
            const { guild } = message;
            const GSembed = new MessageEmbed()
                .setAuthor(`${guild.name} (${guild.id})`, guild.iconURL({ dynamic: true }))
                .setThumbnail(guild.iconURL({ dynamic: true }))
                .addField('Created on', guild.createdAt.toLocaleString(), true)
                .addField('Guild Owner', guild.owner.user.tag)
                .addField('Total Members', guild.members.cache.filter(member => !member.user.bot).size)
                .addField('Total Bots', guild.members.cache.filter(member => member.user.bot).size)
                .addField('Total Channels', guild.channels.cache.size)
                .addField('Boost', `Server boost tier: ${message.guild.premiumTier}\nServer boosts: ${message.guild.premiumSubscriptionCount}`)
                .setDescription(`${guild.roles.cache.map(role => role.toString()).join(' ')}`)
                .setColor('RADNOM');
            message.channel.send(GSembed);

        }
    }
}
function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}