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
        money.find({ Guild: message.guild.id, }).sort(['Money', 'descending']).exec((err, res) => {
            if (err) console.log(err)
            let rankEmbed = new Discord.MessageEmbed()
                .setTitle(`${message.guild.name} Richest Users`);

            let newRes = [];
            res.forEach(elem => {
                if (elem.Money != 0) newRes.push(elem);
            });
            res = newRes;

            if (res.length == 0) {
                rankEmbed.addField('There are not any members in the database', '\u200b');
            }
            else if (res.length > 10) {
                for (let i = 0; i < 10; i++) {
                    let elem = res[i];
                    rankEmbed.addField(`${i + 1}. @${message.guild.members.cache.get(elem.User).user.tag}`, `${elem.Mone}`);
                }
            }
            message.channel.send(rankEmbed)
        })
    }
}