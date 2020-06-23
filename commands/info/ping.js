const { Client, MessageEmbed} = require('discord.js');
module.exports={
    name: 'ping',
    category: 'info',
    description: 'Returns latency and API ping',
    usage: 'e!ping',
    run: async(bot,message,args)=>{
        const msg = await message.channel.send('Pinging ...')
        const PONGembed = new MessageEmbed()
        .setTitle('Pong!')
        .setDescription(`\nLatency is ${Math.floor(msg.createdTimestamp - message.createdTimestamp)}ms \nAPI latency is ${Math.round(bot.ws.ping)}ms`)
        .setColor('RANDOM');
        msg.edit(PONGembed)
    }
}