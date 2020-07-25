const money = require('../../models/money');
module.exports = {
    name: 'fight',
    description: 'Fight a random person and fold them for there money ',
    category: 'money',
    timeout: 15000,
    dm: true,
    usage: 'fight [user]',
    perms: 'Send Messages',
    aliases: ['fold'],
    run: async (bot, message, args) => {
        let mention = message.mentions.members.first();
        if(!mention) return message.channel.send('You need to mention you want to fight!');
        money.findOne({ User: message.author.id }, async (err, data) => {
            money.findOne({ User: mention.id }, async (erro, dat) => {
                if (erro) console.log(err)
                if (err) console.log(err);
                if (!data || data.Money == 0) return message.channel.send("you have no money💀");
                if(data.passive == true) return message.channel.send('You are in passive! You can not use commands that can harm other users.')
                if(!dat || dat.Money == 0 || dat.passive == true) return message.channel.send('This user is either in passive mode or has no money!');
                let amt = Math.round(Math.random() * dat.Money);
                let lose$ = Math.floor(data.Money / 4 * 3)
                let chances = ["win", "dad", "pad", "lose"]
                const pick = chances[Math.floor(Math.random() * (chances.length))];
                if (pick == "lose") {
                    message.channel.send(`You tried to run ${mention.user.username}'s pocket's but realize he got that ***blicky icky*** on him and take 2 shots to the chest and as you \`crawl\` away he takes your wallet with $${lose$} 🤡`);
                    console.log(`user lost ${data.Money} - ${lose$}  user win ${data.Money} + ${lose$};`);
                    data.Money -= lose$;
                    dat.Money += lose$;
                    data.save();
                    dat.save();
                    console.log(data);
                } else {
                    message.channel.send(`You randomly decide to hit ${mention.user.username} with that mink mink and have him *or her* folded and as he folds like oragami you quickly run his pockets grabbing **$${amt}**\n***\`Black Air Force Activity\`***`)
                    console.log(`user win ${data.Money} + ${amt}; user who lost ${dat.Money} - ${amt}`);
                    data.Money += amt;
                    dat.Money -= amt;
                    data.save();
                    dat.save()
                    console.log(data.Money);
                    console.log(dat.Money);
                }
            })
        })
    }
}