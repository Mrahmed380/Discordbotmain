const money = require('../../models/money');
const { MessageEmbed } = require('discord.js');
module.exports = {
    name: 'rich',
    description: '`Try` to rob a user',
    usage: 'rob <@user>',
    category: 'money',
    dm: false,
    timeout: 5000,
    perms: 'Send Messages',
    run: async (bot, message, args) => {
        const memIDs = message.guild.members.fetch(mem => mem.id);
        //fetch all the members id
        money.find({ Guild: message.guild.id, }).sort([
            ['Money', 'descending']
        ]).exec((err, res) => {
            if (err) console.log(err)
            let rankEmbed = new MessageEmbed()
                .setTitle(`${message.guild.name} Richest Users`)
                .setColor('RANDOM')
            let newRes = [];
            res.forEach(elem => {
                if (elem.Money != 0) newRes.push(elem);
            
            res = newRes;
            rankEmbed.addField(`<@${message.guild.members.cache.get(elem.User).user.username}>'s Money`, `>$${elem.Money}`);
            message.channel.send(rankEmbed)
            });
        })
    }
}