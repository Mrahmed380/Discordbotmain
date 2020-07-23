const moneys = require('../../models/money')
module.exports = {
    name: 'bet',
    description: "bet a specific amout of money",
    category: 'money',
    usage: 'bet <amt>',
    dm: false,
    perms: "Send Messages",
    run: async (bot, message, args) => {
        let amt = args.slice(0).join(" ")
        if (!amt) return message.channel.send("You need to specify the amount of coins you want to gamble!")
        if (isNaN(amt)) return message.channel.send('That is not a number *are you trying to gamble a sentence?*')
        console.log(amt)
        moneys.findOne({ User: message.author.id }, async (err, data) => {
            if (err) console.log(err)
            if (!data) {
                message.channel.send("You have no coins or a bank account use the coin command to make a coin account!")
                console.log(`${message.author.username} has no coins to gamble`)
            } else {
                if(amt !== Math.floor(amt)) return message.channel.send('You can only gamble whole numbers');
                let chances = ["win", "lose"]
                const pick = chances[Math.floor(Math.random() * chances)];
                let newMoney = Math.random() * amt;
                if(pick == "lose") {
                    data.Money -= newMoney
                    data.save();
                    console.log(`${pick} - ${newMoney}`)
                } else {
                    const oldMon = data.Money;
                    parseInt(oldMon) += parseInt(newMoney);
                    data.save();
                    console.log(`${pick} - ${newMoney}`)
                    message.channel.send(`Congradulations you won ${newMoney}, you now have ${data.Money}`)
                } 
                console.log(data)
                if(data.Money == 0) return message.channel.send(`You dont even have coins`)
                if (amt > data.Money) return message.channel.send(`You dont even have this many coins you can only gamble $${data.Money}`)
                message.channel.send('***`test good job you just gambled :)`***')
            }
        }
        )
    }

}