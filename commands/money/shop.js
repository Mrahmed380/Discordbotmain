const { MessageEmbed } = require('discord.js');
const shop = require('../../models/shop');
const fs = require("fs");
module.exports = {
    name: 'shop',
    description: 'Shows the shop',
    usage: 'shop',
    category: 'money',
    aliases: ['store'],
    perms: 'Send Messages',
    run: async (bot, message, args) => {
        shop.findOne({ place: message.guild.id }, async (err, data) => {
            if (err) console.log(err)
            if (!data) {
                let newMoney = new shop({
                    place: message.guild.id,
                    shop: {
                        BasicRecovery: 150000,
                        StandardRecovery: 200000,
                        PremiumRecovery: 3500000,
                        PlatinumRecovery: 20000000,
                    },
                })
                message.channel.send('There was a error grabbing the shop info try running the command again')
                newMoney.save()
            } else {
                console.log(data)
                const WWembed = new MessageEmbed()
                    .setTitle(`Shop`)
                    .setDescription(`\n\n${Object.keys(data.shop).map(e => `\`${e}\`: ${data.shop[e]} Coins`).join("\n")}`)
                    .setColor('RANDOM')
                message.channel.send(WWembed)
                let obj = {
                    shop: {
                        item: message.content
                    }
                };
                let json = JSON.stringify(obj);
                fs.writeFile('testwrite.json', json);
            }
        }
        )

    }
}