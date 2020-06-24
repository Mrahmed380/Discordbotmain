const { Client , MessageEmbed } = require('discord.js');
const fs = require('fs')
const money = require('/Users/Asus/Documents/GitHub/Discordbotmain/currency/money.json');
module.exports={
    name: 'balance',
    category: 'entertainment',
    description: 'Balance/Currency system for GTA V Recoverys',
    usage: 'e!balance',
    run: async(bot,message,args)=>{
        if(!args[0]) {
            var user = message.author;
        } else {
            var user = message.mentions.users.first() || bot.users.cache.get(args[0]);
        }
        if(!money[user.id]) {
            money[user.id] = {
                name: bot.users.get(user.id).tag,
                money: 0
            }
            fs.writeFile('/Users/Asus/Documents/GitHub/Discordbotmain/currency/money.json'), JSON.stringify(money), (err) => {
                if(err) console.log(err);
            }

            return message.channel.send(`${bot.users.get(user.id).username} has $${money[user.id].money}`);

        }
    }
}