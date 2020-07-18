const moneys = require('../../models/money')
const { MessageEmbed } = require('discord.js')
module.exports = {
    name: 'coins',
    description: 'Shows how many coins you have',
    usage: 'coins',
    category: 'money',
    timeout: 5000,
    perms: 'Send Messages',
    run: async (bot, message, args) => {
        moneys.findOne({ User: message.author.id }, async (err, data) => {
            if (err) console.log(err)
            if (!data) {
                let newMoney = new moneys({
                    User: message.author.id,
                    Money:[
                        {
                            Purchases: 0,
                            Money: 0,
                        }
                    ]
                })
                newMoney.save()
                console.log(`New money created ${data.Money}`)
                let embed = new MessageEmbed()
                    .setTitle('Coins')
                    .setDescription(`You have $${data.Money[0].Money} coins!\nSince your bank account was just created here are some ways you can make money! ***I gave you 5000 use the redeem command to get it!***\n1. Coming to money drop sessions\n2. Being a moderator or admin (weekly paycheck of $500 coins)\n\nUse the (not set) command for things you can buy with your coins!`)
                    .setColor('RANDOM')
                message.channel.send()
            } else {
                console.log(data.Money[0])
                const WWembed = new MessageEmbed()
                    .setTitle('Coins')
                    .setDescription(`You have $${data.Money[0].Money} coins!\nUse the (not set) command for things you can spend your money on!`)
                    .setColor('RANDOM')
                    .setFooter(`Use the redeem command if you havent already...`)
                message.channel.send(WWembed)
            }
        }
        )
    }
}

