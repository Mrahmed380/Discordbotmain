const money = require('../../models/money');
module.exports = {
    name: 'heist',
    status: true,
    aliases: ['bankrob'],
    usage: 'heist',
    description: 'Rob a bank and get up to $100000',
    timeout: 3.6e+6,
    category: 'money',
    perms: "Send Messages",
    run: async (bot, message, args) => {
        money.findOne({ User: message.author.id }, async (err, data) => {
            if (err) console.log(err)
            if (!data || data.Money < 1000) return message.channel.send("You need to pay $10000 to start a heist you dont have this money yet!")
            message.channel.send(`heist from ${message.author} react to enter`).then(msg => {
                msg.react("718678524101132288")
                msg.reactions.cache.get("718678524101132288")
                setTimeout(() => {
                    //if (msg.reactions.cache.size < 3) return message.channel.send('less than 2 people reacted so the heist was canceled you must wait another hour until you start another heist!')
                    let winner = msg.reactions.cache.get("718678524101132288").users.cache.filter(u => !u.bot)
                    let wins = winner.map(user => `${user.tag}, `);
                    message.channel.send(`Users in the heist ${wins} wait 30 seconds while I calculate the results...`).then(r => r.delete({ timeout: 30000 }))
                    setTimeout(() => {
                        console.log(wins);
                        let amt = Math.random(10000)
                        
                        let DivAmt = Math.round(amt / msg.reactions.cache.size);
                        data.Money += DivAmt;
                        data.save()
                        console.log(winner.id + "the const" + wins)
                    }, 30000);
                }, 30000);
            })
        })
    }
}