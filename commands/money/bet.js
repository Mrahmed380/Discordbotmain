const moneys = require('../../models/money')
module.exports = {
    name: 'bet',
    description: "bet a specific amout of money",
    category: 'money',
    usage: 'bet <amt>',
    dm: false,
    perms: "Send Messages",
    run: async (bot, message, args) => {
        let amt = args[0]
        if (!amt) return message.channel.send("You need to specify the amount of coins you want to gamble!")
        moneys.findOne({ User: message.author.id }), async (err, data) => {
            if (err) console.log(err)
            if (!data) {
                message.channel.send("You have no coins or a bank account use the coin command to make a coin account!")
                console.log(`${message.author.username} has no coins to gamble`)
            } else {
                if(amt > data.Money) return message.channel.send(`You dont even have this many coins you can only gamble $${data.Money}`)
            }
        }
    }
}