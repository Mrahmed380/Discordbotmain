const { Client , MessageEmbed } = require('discord.js')
const ms = require('ms')
module.exports={
    name: 'uptime',
    category: 'info',
    description: 'Shows how long the bot has been online',
    usage: 'e!uptime',
    timeout: 5000,
    perms: 'Send Messages',
    run: async(bot,message,args)=>{
        const Uembed = new MessageEmbed()
        .setTitle('Uptime')
        .setDescription(`My uptime is \`${ms(bot.uptime, { long: true})}\``)
        .setColor('RANDOM');
        message.channel.send(Uembed);
    }
}