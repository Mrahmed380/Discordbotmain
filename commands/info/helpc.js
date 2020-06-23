const { Client , MessageEmbed  } = require('discord.js');
module.exports={
    name: 'helpc',
    category: 'info',
    description: 'shows you how to get info on commands',
    usage: 'e!helpc',
    run: async(bot,message,args)=>{
        const HELPbed = new MessageEmbed()
            .setTitle('Command help')
            .setDescription('To get help on any command type "e!help [command]')
            .setColor('RANDOM');
            msg.channel.send(HELPbed)
    }
}