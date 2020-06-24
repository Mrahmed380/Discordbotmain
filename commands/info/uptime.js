const { Client , MessageEmbed } = require('discord.js')
const { category } = require('../entertainment/balance')
const ms = require('ms')
module.exports={
    name: 'uptime',
    category: 'info',
    description: 'Shows how long the bot has been online',
    usage: 'e!uptime',
    run: async(bot,message,args)=>{
        const Uembed = new MessageEmbed()
        .setTitle('Uptime')
        .setDescription(`My uptime is \`${ms(this.bot.uptime, { long: true})}\``)
        .setColor('RANDOM');
        message.channel.send(Uembed);
    }
}