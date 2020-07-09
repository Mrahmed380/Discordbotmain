const { Client, MessageEmbed} = require('discord.js');
module.exports={
    name: 'ping',
    category: 'info',
    description: 'Returns latency and API ping',
    usage: 'e!ping',
    perms: 'Send Messages',
    run: async(bot,message,args)=>{
        const msg = await message.channel.send('Pinging ...')
        const PONGembed = new MessageEmbed()
        .setTitle('Pong!')
        .setDescription(`\nLatency is ${Math.floor(msg.createdTimestamp - message.createdTimestamp)}ms \nAPI latency is ${Math.round(bot.ws.ping)}ms`)
        .setColor('RANDOM');
        setTimeout(() => {
            msg.edit(PONGembed)
        }, 2500);
        // const PONGembed = new MessageEmbed()
        // .setTitle('Pong!')
        // .setDescription(`\nLatency is ${Math.floor(msg.createdTimestamp - message.createdTimestamp)}ms \nAPI latency is ${Math.round(bot.ws.ping)}ms`)
        // .setColor('RANDOM');
    }
}