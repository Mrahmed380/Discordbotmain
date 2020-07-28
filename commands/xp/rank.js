const xp = require('../../models/xp');
const { model } = require('mongoose');
const { MessageEmbed } = require('discord.js');
module.exports = {
    name: 'rank',
    description: 'shows xp',
    status: true,
    dm: true,
    usage: "rank",
    aliases: ['xp', 'lvl', 'level'],
    category: 'xp',
    run: async (bot, message, args) => {
        xp.findOne({ User: message.author.id }, async (err, data) => {
            //let xpNeeded = data.level * 50 + 500
            if (err) console.log(err);
            if (!data) {
                console.log('data created');
                message.channel.send('You are level 0 and have no xp')
            } else {
                let xpNeeded = data.level * 500 * 300;
                let oldxp = data.xp;
                let calculus = Math.floor(xpNeeded / data.level / data.level);
                let newxp = parseInt(data.xp) + parseInt(calculus);
                const xpembed = new MessageEmbed()
                    .setTitle(`${message.author.tag}'s Level and XP`)
                    .setDescription(`XP - ${parseInt(data.xp) + parseInt(calculus)}\nLevel - ${data.level}\nXP needed until next level - ${xpNeeded - newxp} `)
                    .setColor(`PURPLE`)
                message.channel.send(xpembed);
            }
        })
    }
}