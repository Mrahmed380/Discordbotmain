const { Client , MessageEmbed } = require('discord.js');
module.exports={
    name: 'clear',
    category: 'guild',
    description: 'Deletes specific amount of messages `Messages can only be deleted within 14 days`',
    usage: 'e!clear <amt of msgs>',
    run: async(bot,message,args)=>{
        message.delete();
        if(!message.member.hasPermission("ADMINISTRATOR")) {
            return message.reply("You need administrator to delete messages").then(m => m.delete(5000));
        }

        if(isNaN(args[0]) || parseInt(args[0]) <= 0) {
            return message.channel.send('This is not a number!').then(m => m.delete(6000));
        }

        let deleteAmount;
        if(parseInt(args[0]) > 1000) {
            deleteAmount = 100;
        } else {
            deleteAmount = parseInt(args[0]);
        }

        message.channel.send('Deleting messages!').then(m => m.delete(10000));
        message.channel.bulkDelete(deleteAmount, true)
        .catch(err => message.reply(`Something went wrong... ${err}`));
    }
}