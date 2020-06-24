const { Client , MessageEmbed } = require('discord.js');
const fs = require('fs')
const money = require('../entertainment/currency/money.json')
module.exports={
    name: 'balance',
    category: 'entertainment',
    description: 'Balance/Currency system for GTA V Recoverys',
    usage: 'e!balance or e!balance <@user>',
    run: async(bot,message,args)=>{
        if(!args[0]) {
            var user = message.author;
        } else {
            var user = message.mentions.users.first() || bot.users.cache.get(args[0]);
        }
        if(!money[user.id]) {
            money[user.id] = {
                name: bot.users.cache.get(user.id).tag,
                money: 0
            }
            fs.writeFile("./commands/entertainment/currency/money.json", JSON.stringify(money), (err) => {
                if(err) console.log(err);
            })

            return message.channel.send(`${bot.users.cache.get(user.id).username} has $${money[user.id].money}`);

        }
    }
}