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
                console.log(`${elem.User}`);
                rankEmbed.setDescription(`${(res).map(e => `\`$${elem.Money}\` -- <@${elem.User}>`).join("\n")}`);
                message.channel.send(res)
                message.channel.send(rankEmbed)
            });
        })
    }
}