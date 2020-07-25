const money = require('../../models/money');
const { MessageEmbed } = require('discord.js');
module.exports = {
    name: 'rich',
    status: true,
    description: '`Try` to rob a user',
    usage: 'rob <@user>',
    category: 'money',
    dm: false,
    timeout: 5000,
    aliases: ['richest'],
    perms: 'Send Messages',
    run: async (bot, message, args) => {
        money.find({ Guild: message.guild.id, }).sort([
            ['Money', 'descending']
        ]).exec((err, res) => {
            if (err) console.log(err)
            let rankEmbed = new MessageEmbed()
                .setTitle(`${message.guild.name} Richest Users`)
                .setColor('RANDOM')
            if (res.Money != 0) rankEmbed.addField(`${res.Money}, <@${res.User}>`)
            //rankEmbed.setDescription();
            message.channel.send(rankEmbed)
        })
    }
}