const moneys = require('../../models/money')
const { MessageEmbed } = require('discord.js')
const shop = require('../../models/money')
module.exports = {
    name: 'shop',
    description: 'Shows the shop',
    usage: 'shop',
    category: 'money',
    perms: 'Send Messages',
    run: async (bot, message, args) => {
        moneys.findOne({ User: message.author.id }, async (err, data) => {
            if (err) console.log(err)
            if (!data) {
                message.channel.send('You dont even have a bank account how are you going to buy anything... "niggas look around the store but never cop shit" - lil yachty 🙃')
                message.channel.send('You can use the coins command to make a account ')
            } else {
                console.log(data)
                const WWembed = new MessageEmbed()
                    .setTitle(`Shop`)
                    .setDescription(`\n\n${Object.keys(data.shop).map(e => `\`${e}\`: ${data.shop[e]} Coins`).join("\n")}`)
                    .setColor('RANDOM')
                message.channel.send(WWembed)
            }
        }
        )

    }
}