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
            if (!data || data.Money < 10000) return message.channel.send("You need to pay $10000 to start a heist you dont have this money yet!")
            message.channel.send(`heist from ${message.author} react to enter\n**YOU HAVE 30 SECONDS**`).then(async msg => {
                msg.react("718678524101132288")
                setTimeout(() => {
                    let reactors = new Map();
                    //if (msg.reactions.cache.size < 3) return message.channel.send('less than 2 people reacted so the heist was canceled you must wait another hour until you start another heist!')
                    let winner = msg.reactions.cache.get("718678524101132288").users.cache.filter(u => !u.bot);
                    console.log(reactors)
                    let wins = winner.map(user => `${user.tag}, `);
                    reactors.set(`${wins}`, "reactor")
                    message.channel.send(`Users in the heist ${wins}\n wait 30 seconds while I calculate the results...`).then(r => r.delete({ timeout: 30000 }))
                    setTimeout(() => {
                        const filt = msg.reactions.cache.get("718678524101132288").users.cache.filter(u => !u.bot);
                        console.log(wins);
                        const get = reactors.get(`${message.guild.members.cache.get(wins).user.id}`);
                        console.log(winner)
                        console.log(reactors);
                        if(!get) return message.channel.send("no")
                        let amt = Math.random(100000)
                        message.channel.send('Send any message to collect the money from the heist')
                        let DivAmt = Math.round(amt / (msg.reactions.cache.size - 1));
                        data.Money += DivAmt;
                        data.save()
                        message.channel.awaitMessages(filt, {
                            max: 1,
                            time: 60000
                        }).then(collected => {
                            const answer = 'get';
                            if(collected.first().content !== "afdsfw2") message.channel.send(`You just collected ${DivAmt}`) //wake up and start
                            
                        }).catch(err => {console.log(err); message.channel.send("you never replied so you didnt get your check")});
                    }, 30000);
                }, 30000);
            })
        })
    }
}