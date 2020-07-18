const moneys = require('../../models/money')
const { MessageEmbed } = require('discord.js')
const shop = require('../../models/money')
module.exports = {
    name: 'buy',
    description: 'buy something or else',
    usage: 'buy <item>',
    category: 'money',
    perms: 'Send Messages',
    run: async (bot, message, args) => {
        let item = args[0]
        moneys.findOne({ User: message.author.id }, async (err, data) => {
            if (err) console.log(err)
            if (!data) {
                message.channel.send('You have dont even have a bank account how are you going to buy anything... "niggas look around the store but never cop shit" - lil yachty 🙃')
                message.channel.send('You can use the coins command to make a account ')
            } else {
                if (!item) return message.channel.send('so you going to tell me what you want to buy or nah?')
                if (!data.shop[item]) return message.channel.send('That is not a item in the shop...'), console.log(`Item: ${item} Items available ${JSON.stringify(data.shop)}`)
                if(data.Money < data.shop[item]) return message.channel.send("Did you just try to buy something with out enough money? I should smack fire out of you for thinking I'd give it to you")
                console.log(data)
                let moneyamt = data.Money
                let newMoneyAdd = parseInt(moneyamt) - parseInt(data.shop[item]);
                data.Money = newMoneyAdd
                data.save()
                const WWembed = new MessageEmbed()
                    .setTitle(`Shop`)
                    .setDescription(`you just bought ${item}!\nYou now have ${data.Purchases}`)
                    .setColor('RANDOM')
                message.channel.send(WWembed)
            }
        }
        )

    }
}