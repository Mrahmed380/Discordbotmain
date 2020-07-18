const moneys = require('../../models/money')
const { MessageEmbed } = require('discord.js')
module.exports = {
    name: 'coins',
    description: 'Shows how many coins you have',
    usage: 'coins [user]',
    category: 'money',
    timeout: 5000,
    perms: 'Send Messages',
    run: async (bot, message, args) => {
        const Mention = message.mentions.members.first()
        if (Mention) {
            moneys.findOne({ User: Mention.id }, async (err, data) => {
                if (err) console.log(err)
                if (!data) {
                    message.channel.send('This user has no coins')
                } else {
                    console.log(data)
                    const WWembed = new MessageEmbed()
                        .setTitle('Coins')
                        .setDescription(`${Mention} has $${data.Money} coins!`)
                        .setColor('RANDOM')
                    message.channel.send(WWembed)
                }
            }
            )
        } else {
            moneys.findOne({ User: message.author.id }, async (err, data) => {
                if (err) console.log(err)
                if (!data) {
                    let newMoney = new moneys({
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
                            PlatinumRecovery: 200000,
                        }
                    })
                    newMoney.save()
                    console.log(`New money created Could not console log for dumb reason idk`)
                    const embed = new MessageEmbed()
                        .setTitle('Coins')
                        .setDescription(`You have $0 coins!\nSince your bank account was just created here are some ways you can make money!\n1. Coming to money drop sessions\n2. Being a moderator or admin (weekly paycheck of $500 coins)\n\nUse the (not set) command for things you can buy with your coins!`)
                        .setColor('RANDOM')
                    message.channel.send(embed)
                } else {
                    console.log(data)
                    const WWembed = new MessageEmbed()
                        .setTitle('Coins')
                        .setDescription(`You have $${data.Money} coins!\nUse the (not set) command for things you can spend your money on!`)
                        .setColor('RANDOM')
                        .setFooter(`Use the redeem command if you havent already...`)
                    message.channel.send(WWembed)
                }
            }
            )
        }
    }
}
