const money = require('../../models/money');
const { MessageEmbed } = require('discord.js');
module.exports = {
    name: 'settings',
    description: 'set preferences for the coins system',
    usage: 'settings <setting> <true/false>',
    perms: 'Send Messages',
    category: 'money',
    dm: true,
    //timeout: 3.6e+6,
    run: async (bot, message, args) => {
        let settings = new MessageEmbed()
            .setTitle("Available settings")
            .setDescription(`Passive mode: true/false || Users can not rob you in while you are in passive mode`)
        let sett = args[0];
        let Switch = args.slice(1).join(" ");
        let setting = "passive" || "Passive";
        if (!sett) return message.channel.send('Usage: settings <settingName> <true/false>');
        if (!Switch) return message.channel.send('Usage: settings <settingName> <true/false>')
        if (sett !== setting) return message.channel.send(settings);
        //if(Switch !== "false" || "true") return message.channel.send('Settings must be false or true')
        console.log(message.content)
        money.findOne({ User: message.author.id }, async (err, data) => {
            if (err) console.log(err)
            if (!data) {
                if (sett == "passive" && Switch == "true") {
                    let newSetting = new money({
                        User: message.author.id,
                        Money: 0,
                        Purchases: 0,
                        inventory: {
                            CoinCard: 0
                        },
                        shop: {
                            BasicRecovery: 75000,
                            StandardRecovery: 100000,
                            PremiumRecovery: 150000,
                        },
                        passive: true,
                    })
                    newSetting.save()
                    //console.log(data)
                    //message.channel.send(data.passive)
                } else if(sett == "passive" && Switch == "false") {
                    let newSettings = new money({
                        User: message.author.id,
                        Money: 0,
                        Purchases: 0,
                        inventory: {
                            CoinCard: 0
                        },
                        shop: {
                            BasicRecovery: 75000,
                            StandardRecovery: 100000,
                            PremiumRecovery: 150000,
                        },
                        passive: false,
                    })
                    newSettings.save()
                }
            } else {
                console.log(data)
                data.passive = Switch;
                data.save();
                message.channel.send(data.passive)
            }
        })
    }
}