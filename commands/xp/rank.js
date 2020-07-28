const xp = require('../../models/xp');
const { model } = require('mongoose');
const { MessageEmbed } = require('discord.js');
module.exports = {
    name: 'rank',
    description: 'shows xp',
    status: true,
    dm: true,
    usage: "rank",
    category: 'xp',
    run: async (bot, message, args) => {
        xp.findOne({ User: message.author.id }, async (err, data) => {
            //let xpNeeded = data.level * 50 + 500
            if (err) console.log(err);
            if (!data) {
                console.log('data created');
                message.channel.send('You are level 0 and have no xp')
            } else {
                let xpNeeded = data.level * 500 + 90 - 17;
                //let newXp = parseInt()
                setTimeout(() => {
                    const xpembed = new MessageEmbed()
                        .setTitle(`${message.author.tag}'s Level and XP`)
                        .setDescription(`XP - ${data.xp}\nLevel - ${data.level}\nXP needed until next level - ${parseInt(xpNeeded) - parseInt(data.xp)} `)
                        .setColor(`PURPLE`)
                    message.channel.send(xpembed);
                }, 500);
            }
        })
    }
}