const moneys = require('../../models/money')
const { MessageEmbed } = require('discord.js')
module.exports = {
    name: 'inventory',
    description: 'Shows what items you have in your inventory',
    usage: 'inventory [user]',
    category: 'money',
    timeout: 5000,
    perms: 'Send Messages',
    run: async (bot, message, args) => {
        const Mention = message.mentions.members.first()
        if (Mention) {
            moneys.findOne({ User: Mention.id }, async (err, data) => {
                if (err) console.log(err)
                if (!data) {
                    message.channel.send('This user has no recovery codes or items in his inventory')
                } else {
                    console.log(data)
                    const WWembed = new MessageEmbed()
                        .setTitle('Coins')
                        .setDescription(`${Mention} has $${data.inventory} items!`)
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
                        inventory:{
                             
                        }
                    })
                    newMoney.save()
                    console.log(`New money created Could not console log for dumb reason idk`)
                    const embed = new MessageEmbed()
                        .setTitle('Coins')
                        .setDescription(`You have $0 coins and nothing in your inventory!\nSince your bank account was just created here are some ways you can make money!\n1. Coming to money drop sessions\n2. Being a moderator or admin (weekly paycheck of $500 coins)\n\nUse the (not set) command for things you can buy with your coins!`)
                        .setColor('RANDOM')
                    message.channel.send(embed)
                } else {
                    console.log(data)
                    const WWembed = new MessageEmbed()
                        .setTitle('Coins')
                        .setDescription(` $${data.inventory}!\nUse the (not set) command for things you can spend your money on!`)
                        .setColor('RANDOM')
                    message.channel.send(WWembed)
                }
            }
            )
        }
    }
}

