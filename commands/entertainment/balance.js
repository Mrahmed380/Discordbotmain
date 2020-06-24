const { Client , MessageEmbed } = require('discord.js');
module.exports={
    name: 'balance',
    category: 'entertainment',
    description: 'Balance/Currency system for GTA V Recoverys',
    usage: 'e!balance',
    run: async(bot,message,args)=>{
        message.channle.send('The currency system is under development')
    }
}