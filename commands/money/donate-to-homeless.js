const moneys = require('../../models/money')
module.exports = {
    name: 'donate',
    description: "donate to homeless people and hope its a social experiment",
    category: 'money',
    usage: 'donate <amt>',
    dm: false,
    aliases: ['dono', 'don'],
    perms: "Send Messages",
    run: async (bot, message, args) => {
        let person = ["Johnny Dang", "Patricia", "Mia khalifa", "Charli Damelio", "Pennywise", "<@719890899517046866>", "Avatar Aang", "Your ex", "Your step sis", "The owner of Papa's Pizzaria"]
        let personPick = person[Math.floor(Math.random() * (person.length))];
        let amt = args.slice(0).join(" ")
        if (!amt) return message.channel.send("You need to specify the amount of coins you want to give!")
        if (isNaN(amt)) return message.channel.send('??!!')
        if (amt < 1) return message.channel.send('why would you give a homeless person $0 thats mean')
        console.log(amt)
        moneys.findOne({ User: message.author.id }, async (err, data) => {
            if (err) console.log(err)
            if (!data) {
                message.channel.send("You have no coins or a bank account use the coin command to make a coin account!")
                console.log(`${message.author.username} has no coins to gamble`)
            } else {
                if (data.Money == 0) return message.channel.send(`You dont even have coins`)
                if (amt > data.Money) return message.channel.send(`You dont even have this many coins you can only give $${data.Money}`)
                let chances = ["win", "lose", ";ajf", "other", "ok"];
                const pick = chances[Math.floor(Math.random() * (chances.length))];
                let newMoney = Math.round(Math.random() * amt * 5);
                let RoundCoins = Math.ceil(newMoney / 100);
                let RoundedCoins = Math.round(RoundCoins * 100);
                if (pick == "win") {
                    data.Money += RoundedCoins
                    data.save();
                    console.log(`${pick} - ${newMoney}`)
                    message.channel.send(`It turns out the person you just gave money was a random youtuber doing a social experiment and gave you $${RoundedCoins}!`)
                } else {
                    data.Money -= amt;
                    data.save();
                    console.log(`${pick} - ${newMoney}`)
                    message.channel.send(`${personPick} was thankful for the money!`)
                }
                console.log(data)
            }
        }
        )
    }
}