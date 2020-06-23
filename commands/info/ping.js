const { Client, MessageEmbed} = require('discord.js');
module.exports={
    name: 'ping',
    category: 'info',
    description: 'Returns latency and API ping',
    run: async(bot,message,args)=>{
        const msg = await message.channel.send('Pinging ...')
        const PONGembed = new MessageEmbed()
        .setTitle('Pong!')
        .setDescription(`Latency is ${Math.floor(msg.createdTimeStamp - message.createdTimeStamp)}ms | API latency is ${Math.round(bot.ws.ping)}ms`);
        msg.edit(PONGembed)
    }
}