const { Client , MessageEmbed } = require('discord.js');
const { runInContext } = require('vm');
const ms = require('ms');
module.exports={
    name: 'uptime',
    description: 'Shows how long the bot has been online',
    category: 'info',
    usage: 'e!uptime',
    run: async(bot,message,args)=>{
        const UPembed = new MessageEmbed()
        .setTitle('Uptime')
        .setDescription(`My uptime is \`${this.bot.uptime, { long: true}}\``)
    }
}