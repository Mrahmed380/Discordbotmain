const { MessageEmbed } = require('discord.js')
const moneys = require('../../models/money')
module.exports = {
    name: 'beg',
    description: 'Gives a random amount of money',
    usage: 'beg',
    //timeout: 200000,
    category: 'money',
    perms: 'Send Messages',
    run: async (bot, message, args) => {
        const newBeg = (Math.random() * 5000);
        //**Recovery servant just gave 
        moneys.findOne({ User: message.author.id }, async (err, data) => {
            if (err) console.log(err)
            if (!data) {
                let newMoney = new moneys({
                    User: message.author.id,
                    Money: Math.round(newBeg),
                    Purchases: 0,
                    inventory: {
                        CoinCard: 0
                    },
                    shop: {
                        BasicRecovery: 75000,
                        StandardRecovery: 100000,
                        PremiumRecovery: 150000,
                        PlatinumRecovery: 200000,
                    }
                })
                newMoney.save()
                console.log(`New money created Could not console log for dumb reason idk`)
                const embed = new MessageEmbed()
                .setTitle('Coins')
                .setDescription(`**Recovery Servant just gave you $${Math.round(newBeg)}**`)
                .setColor('RANDOM')
                message.channel.send(embed)
            } else {
                console.log(data)
                let moneyamt = data.Money
                let newMoneyAdd = parseInt(moneyamt) + parseInt(newBeg);
                data.Money = newMoneyAdd
                data.save()
                const WWembed = new MessageEmbed()
                    .setTitle('Coins')
                    .setDescription(`**Recovery Servant just gave you $${Math.round(newBeg)}!**`)
                    .setColor('RANDOM')
                message.channel.send(WWembed)
            }
        }
        )
    }
}