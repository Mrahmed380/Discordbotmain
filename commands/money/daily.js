const ms = require('ms')
const moneys = require('../../models/money')
const { MessageEmbed } = require('discord.js')
module.exports = {
    name: 'daily',
    description: 'Gives 1000 every 24 hrs',
    usage: 'daily',
    category: 'money',
    dm: false,
    timeout: 8.64e+7,
    perms: 'Send Messages',
    run: async (bot, message, args) => {
        moneys.findOne({ User: message.author.id }, async (err, data) => {
            if (err) console.log(err)
            if (!data) {
                let newCoin = new moneys({
                    Guild: message.guild.id,
                    User: message.author.id,
                    Money: 1000,
                    Purchases: 0,
                    inventory: {
                        CoinCard: 0
                    },
                    passive: false,
                    notis: true,
                })
                newCoin.save();
                message.channel.send("You just gained 1000 coins come back in 24 hours!")
                if(data.notis == "false") {console.log('can not send notification')} else message.author.send(`You collected your daily reward of $1000`)
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
                if(data.notis == "false") {console.log('can not send notification')} else message.author.send(`You collected your daily reward of $1000`)
            }
        }
        )
    }
}