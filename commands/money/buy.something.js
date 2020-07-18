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
                    console.log(data)
                const WWembed = new MessageEmbed()
                    .setTitle(`Shop`)
                    .setDescription(`you just bought ${item}`)
                    .setColor('RANDOM')
                message.channel.send(WWembed)
            }
        }
        )

    }
}