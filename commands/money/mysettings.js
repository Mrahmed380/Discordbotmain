const money = require('../../models/money');
const { MessageEmbed } = require('discord.js');
module.exports = {
    name: 'mysettings',
    description: 'shows settings',
    usage: 'MySettings',
    perms: 'Send Messages',
    category: 'money',
    dm: true,
    //timeout: 3.6e+6,
    run: async (bot, message, args) => {
        console.log(message.content)
        money.findOne({ User: message.author.id }, async (err, data) => {
            if (err) console.log(err)
            if (!data) {
                let newSetting = new money({
                    Guild: message.guild.id,
                    User: message.author.id,
                    Money: 0,
                    Purchases: 0,
                    inventory: {
                        CoinCard: 0
                    },
                    passive: false,
                    notifications: true,
                })
                newSetting.save()
                //console.log(data)
                //message.channel.send(data.passive)
                message.channel.send('I couldnt find you in the database to I created your coins and set the setting: "passive" to false, notifications to true')
            } else {
                console.log(data)
                let settings = new MessageEmbed()
                    .setTitle(`${message.author.username}'s settings`)
                    .setDescription(`Passive mode: ${data.passive}\nNotifications: ${data.notifications}\nYou can use the settings command to change your settings anytime!`)
                    .setColor('RANDOM');
                message.channel.send(settings)
            }
        })
    }
}