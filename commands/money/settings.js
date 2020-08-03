const money = require('../../models/money');
const { MessageEmbed } = require('discord.js');
const { db } = require('../../models/money');
const { set } = require('mongoose');
module.exports = {
    name: 'settings',
    description: 'set preferences for the coins system',
    usage: 'settings <setting> <true/false>',
    perms: 'Send Messages',
    category: 'money',
    aliases: ['set', 'setting', 'sett'],
    dm: true,
    timeout: 900000,
    run: async (bot, message, args) => {
        let settings = new MessageEmbed()
            .setTitle("Available settings")
            .setDescription(`Passive mode: true/false || Users can not rob you in while you are in passive mode\nNotifications: true/false`)
        let sett = args[0];
        let Switch = args.slice(1).join(" ");
        let setting = "passive" || "Passive" || "notifications" || "Notifications";
        if (!sett) return message.channel.send('Usage: settings <settingName> <true/false>'); console.log(sett)
        if (!Switch) return message.channel.send('Usage: settings <settingName> <true/false>')
        if (sett !== setting) return message.channel.send(settings);
        //if(Switch !== "false" || "true") return message.channel.send('Settings must be false or true')
        console.log(message.content)
        money.findOne({ User: message.author.id }, async (err, data) => {
            if (err) console.log(err)
            if (!data) {
                if (sett == "passive") {
                    let newSetting = new money({
                        Guild: message.guild.id,
                        User: message.author.id,
                        Money: 0,
                        Purchases: 0,
                        inventory: {
                            CoinCard: 0
                        },
                        passive: Switch,
                        notifications: true,
                    })
                    newSetting.save()
                } else if (sett == "notifications") {
                    let newSettings = new money({
                        Guild: message.guild.id,
                        User: message.author.id,
                        Money: 0,
                        Purchases: 0,
                        inventory: {
                            CoinCard: 0
                        },
                        passive: false,
                        notifications: Switch,
                    })
                    newSettings.save()
                }
            } else {
                console.log(data)
                if (sett == "passive") data.passive = Switch;
                if (sett == "notifications") data.notifications = Switch;
                data.save();
                const setbed = new MessageEmbed()
                    .setColor('RED')
                    .setTitle("Your settings")
                    .setAuthor("", message.author.displayAvatarURL({ dynamic: true }))
                    .setFooter("You can change this anytime!")
                    .setDescription(`Passive mode: ${data.passive}\nNotifications: ${data.notifications}`)
                message.channel.send(embed)
            }
        })
    }
}