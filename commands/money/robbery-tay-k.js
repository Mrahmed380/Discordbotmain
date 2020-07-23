const money = require('../../models/money');
module.exports = {
    name: 'rob',
    description: '`Try` to rob a user',
    usage: 'rob <@user>',
    category: 'money',
    dm: false,
    timeout: 12000,
    perms: 'Send Messages',
    run: async (bot, message, args) => {
        const mention = message.mentions.members.first();
        if (!mention) return message.channel.send("You need to mention the person you want to steal from")
        money.findOne({ User: mention.id }, async (err, data) => {
            if (err) console.log(err)
            if (!data || data.Money <= 300) {
                message.channel.send(`${mention.user.username} is broke why would you rob a broke person :(`)
            } else {
                let chances = ["win", "lose"]
                const pick = chances[Math.floor(Math.random() * (chances.length))];
                let newMoney = Math.round(Math.random() * data.Money);
                if (pick == "lose") {
                    data.Money += newMoney;
                    data.save();
                    console.log(`${pick} - ${newMoney}`)
                    money.findOne({ User: message.author.id }, async (err, dat) => {
                        if (err) console.log(err)
                        if(!dat) return message.channel.send('Imagine robbing someone wit no money :( *like its not the whole poing*')
                        dat.Money -= newMoney;
                        dat.save();
                        message.channel.send(`You tryed to rob ${mention.user.username} but ended up getting caught you paid him ***\`$${newMoney}\`***, you now have ***\`$${dat.Money}\`***`)
                        console.log(dat)
                    })
                } else {
                    data.Money -= newMoney;
                    data.save();
                    console.log(`${pick} - ${newMoney}`)
                    money.findOne({ User: message.author.id }, async (err, dat) => {
                        if (err) console.log(err)
                        if(!dat) return message.channel.send('Imagine robbing someone wit no money :( *like its not the whole poing*')
                        dat.Money += newMoney;
                        dat.save();
                        message.channel.send(`You robbed ${mention.user.username} and got ***\`$${newMoney}\`***, you now have ***\`$${dat.Money}\`***`)
                        console.log(dat)
                    })
                }
                console.log(data)
            }
        }
        )
    }
}