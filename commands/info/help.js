const { Client , MessageEmbed } = require('discord.js');
const { category } = require('../guild/unban');
module.exports={
    name: 'help',
    category: 'info',
    description: 'Shows you how to use a command and what it does!',
    run: async(bot,message,args)=>{
        if(bot.commands.has(command)) {
            command = bot.commands.get(command)
            const HELPembed = new MessageEmbed()
            .setTitle('Command help')
            .setDescription(`Prefix: e!\n**Command:** ${command.config.name}`)
            message.channel.send(HELPembed)
        }
    }
}