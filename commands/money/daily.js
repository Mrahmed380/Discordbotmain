const ms = require('ms')
const moneys = require('../../models/money')
let cd = 8.64e+7;
const { MessageEmbed } = require('discord.js')
module.exports = {
    name: 'daily',
    description: 'Gives 1000 every 24 hrs',
    usage: 'daily',
    category: 'money',
    dm: false,
    timeout: cd,
    perms: 'Send Messages',
    run: async (bot, message, args) => {
        moneys.findOne({ User: message.author.id }, async (err, data) => {
            if (err) console.log(err)
            if (!data) {
                let newCoin = new moneys({
                    Money: 1000,
                    Purchases: 0,
                    inventory: {
                        CoinCard: 0
                    },
                    shop: {
                        BasicRecovery: 75000,
                        StandardRecovery: 100000,
                        PremiumRecovery: 150000,
                    },
                })
            } else {
                console.log(data)
                let oldMone = data.Money;
                let newMon = parseInt(oldMone) + parseInt(1000)
                data.Money = newMon;
                data.save()
                const WWembed = new MessageEmbed()
                    .setTitle('Coins')
                    .setDescription(`You just collected your daily reward!\nYou now have $${data.Money} coins!`)
                    .setColor('RANDOM')
                message.channel.send(WWembed)
            }
        }
        )
    }
}