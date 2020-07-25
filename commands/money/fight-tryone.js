const money = require('../../models/money');
module.exports = {
    name: 'fight',
    description: 'Fight a random person  ',
    category: 'money',
    timeout: 45000,
    dm: true,
    usage: 'fight',
    perms: 'Send Messages',
    aliases: ['fold'],
    run: async (bot, message, args) => {
        money.findOne({ User: message.author.id }, async (err, data) => {
            if (err) console.log(err);
            if (!data || data.Money == 0) return message.channel.send("You have no money haha💀");
            let amt = Math.round(Math.random() * 3000);
            let lose$ = Math.floor(data.Money / 4 * 3)
            let chances = ["win", "dad", "pad", "lose"]
            const pick = chances[Math.floor(Math.random() * (chances.length))];
            let fighters = ["Hakeem", "Tyrone", "Louis", "JJ", "Djay", "Aaron", "Jamal", "Zion"]
            const fightpick = fighters[Math.floor(Math.random() * (fighters.length))];
            if (pick == "lose") {
                message.channel.send(`You tried to run ${fightpick}'s pocket's but realize he got that ***blicky icky*** on him and take 2 shots to the chest and as you \`crawl\` away he takes your wallet with $${lose$} 🤡`);
                console.log(`user lost ${data.Money} - ${lose$}`);
                data.Money -= lose$;
                data.save();
                console.log(data);
            } else {
                message.channel.send(`You hit ${fightpick} with that mink mink and have him folded and has he folds like oragami you quickly run his pockets grabbing ${amt} `)
                data.Money += amt;
                data.save();
                console.log(data.Money)
            }
        })
    }
}