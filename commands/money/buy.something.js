const moneys = require('../../models/money')
const { MessageEmbed } = require('discord.js')
const shop = require('../../models/money')
const money = require('../../models/money')
const { db } = require('../../models/money')
module.exports = {
    status: true,
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
                if (data.Money < data.shop[item]) return message.channel.send("Did you just try to buy something with out enough money? I sHoUlD sMaCk FiRe oUt Of yoU lIkE DeAdAsS")
                console.log(data)
                let moneyamt = data.Money
                let newMoneyAdd = parseInt(moneyamt) - parseInt(data.shop[item]);
                data.Money = newMoneyAdd
                let nowpurchase = data.Purchases;
                let newPurchaseAdd = parseInt(nowpurchase) + parseInt(1)
                data.Purchases = newPurchaseAdd
                //data.inventory[0].insertOne({item: 0})
                //data.inventory.update({ item:1}).then(console.log('put in data'))
                data.update(
                    { $add: { item: 1} }
                )
                data.save()
                console.log('saving data...')
                console.log("data was saved")
                console.log(data)
                const WWembed = new MessageEmbed()
                    .setTitle(`Shop`)
                    .setDescription(`you just bought ${item}!\nYou now have $${data.Money} and ${data.Purchases} purchases`)
                    .setColor('RANDOM')
                message.channel.send(WWembed)
            }
        }
        )

    }
}