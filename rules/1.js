const { MessageEmbed, Message } = require('discord.js')
module.exports = async (bot, message, args) => {
    let embed = new MessageEmbed()
        .setTitle('Rule 1')
        .setDescription('1. No backstage Recruiting = Instant ban')
        .setFooter('DM mods and admins for rule suggestions')
    message.channel.send(embed)
}