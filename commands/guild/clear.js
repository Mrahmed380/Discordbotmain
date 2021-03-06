const { Client , MessageEmbed } = require('discord.js');
module.exports={
    name: 'clear',
    dm: false,
    category: 'guild',
    description: 'Deletes specific amount of messages `Messages can only be deleted within 14 days`',
    usage: 'clear <amt of msgs>',
    perms: 'Administrator',
    aliases: ['purge'],
    run: async(bot,message,args)=>{
        message.delete();
        if(!message.member.hasPermission("ADMINISTRATOR")) {
            return message.reply("You need administrator to delete messages").then(m => m.delete(5000));
        }
        let deleteAmount;
        if(parseInt(args[0]) > 1000) {
            deleteAmount = 100;
        } else {
            deleteAmount = parseInt(args[0]);
        }
        if(isNaN(args[0]) || parseInt(args[0]) <= 0 ) {
            return message.channel.send('This is not a number!').then(m => m.delete({ timeout: 5000}));
        }
        message.channel.bulkDelete(deleteAmount, true)
        .catch(err => message.reply(`Something went wrong... ${err}`));
    }
}