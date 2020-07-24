const moneys = require('../../models/money')
module.exports = {
    name: 'donate',
    description: "donate to homeless people and hope its a social experiment",
    category: 'money',
    usage: 'donate <amt>',
    dm: false,
    perms: "Send Messages",
    run: async (bot, message, args) => {
        let person = ["Johnny Dang", "Patricia", "Mia khalifa", "Charli Damelio", "Pennywise", "<@719890899517046866>", "Avatar Aang"]
        let amt = args.slice(0).join(" ")
        if (!amt) return message.channel.send("You need to specify the amount of coins you want to give!")
        if (isNaN(amt)) return message.channel.send('??!!')
        if(amt < 1) return message.channel.send('why would you give a homeless person $0 thats mean')
        console.log(amt)
        moneys.findOne({ User: message.author.id }, async (err, data) => {
            if (err) console.log(err)
            if (!data) {
                message.channel.send("You have no coins or a bank account use the coin command to make a coin account!")
                console.log(`${message.author.username} has no coins to gamble`)
            } else {
                if(data.Money == 0) return message.channel.send(`You dont even have coins`)
                if (amt > data.Money) return message.channel.send(`You dont even have this many coins you can only give $${data.Money}`)
                let chances = ["win", "lose"]
                const pick = chances[Math.floor(Math.random() * (chances.length))];
                let newMoney = Math.round(Math.random() * amt * 2);
                if(pick == "lose") {
                    data.Money -= newMoney
                    data.save();
                    console.log(`${pick} - ${newMoney}`)
                    message.channel.send(`${person} was thankful for the money!`)
                } else {
                    data.Money += newMoney;
                    data.save();
                    console.log(`${pick} - ${newMoney}`)
                    message.channel.send(`It turns out the person you just gave money was a random youtuber doing a social experiment and gave you $${newMoney}!`)
                } 
                console.log(data)
            }
        }
        )
    }
}