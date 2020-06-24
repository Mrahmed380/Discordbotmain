const { Client , MessageEmbed } = require('discord.js');
const fs = require('fs')
const money = require('/Users/Asus/Documents/GitHub/Discordbotmain/money.json');
module.exports={
    name: 'balance',
    category: 'entertainment',
    description: 'Balance/Currency system for GTA V Recoverys',
    usage: 'e!balance',
    run: async(bot,message,args)=>{
        if(!args[0]) {
            var user = message.author;
        } else {
            var user = message.mentions.members.first() || bot.users.get(args[0]);
        }
        if(!money[user.id]) {
            money[user.id] = {
                name: bot.users.get(user.id).tag,
            }
        }
    }
}