const moneys = require('../../models/money')
const { MessageEmbed } = require('discord.js')
module.exports = {
    name: 'give',
    description: 'Gives a user a number of coins',
    usage: 'give <user> <amt of coins>',
    category: 'money',
    timeout: 5000,
    perms: 'Admin',
    run: async (bot, message, args) => {
        const Mention = message.mentions.members.first()
        let amt = args.slice(1).join(" ")
        if(!Mention) return message.channel.send('You need to specify who you want to give to!')
        if(!amt) return message.channel.send('You need to include the amount that you want to give!')
        if(isNaN(amt)) return message.channel.send(`bruh you want me to give him "${amt}"? please speak numbers`)
        moneys.findOne({ User: Mention.id }, async (err, data) => {
            if (err) console.log(err)
            if (!data) {
                let newMoney = new moneys({
                    User: Mention.id,
                    Money: [
                        {
                            Purchases: 0,
                            Money: amt,
                        }
                    ]
                })
                newMoney.save()
                console.log(`New money created Could not console log for dumb reason idk`)
                const embed = new MessageEmbed()
                    .setTitle('Coins')
                    .setDescription(`You just gave $${amt} to ${Mention} he now has $${amt}`)
                    .setColor('RANDOM')
                message.channel.send(embed)
            } else {
                let moneyamt = data.Money[0].Money
                let newMoneyAdd = parseInt(moneyamt) + parseInt(amt);
                data.Money[0].Money = newMoneyAdd
                data.save()
                console.log(data.Money[0])
                const WWembed = new MessageEmbed()
                    .setTitle('Coins')
                    .setDescription(`You just gave $${amt} to ${Mention}, the user now has $${data.Money[0].Money}`)
                    .setColor('RANDOM')
                    .setFooter(`Use coins command for your coins!`)
                message.channel.send(WWembed)
            }
        }
        )
    }
}

