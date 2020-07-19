const { Client , MessageEmbed } = require('discord.js');
module.exports={
    name: 'clear',
    category: 'guild',
    description: 'Deletes specific amount of messages `Messages can only be deleted within 14 days`',
    usage: 'clear <amt of msgs>',
    perms: 'Administrator',
    run: async(bot,message,args)=>{
        message.delete();
        if(!message.member.hasPermission("ADMINISTRATOR")) {
            return message.reply("You need administrator to delete messages").then(m => m.delete(5000));
        }
        const channel = message.guild.channels.cache.find(ch => ch.name === message.channel.name);
        const options = {
            type: channel.type,
            topic: channel.topic,
            nsfw: channel.nsfw,
            parent: channel.parentID,
            permissionOverwrites: channel.permissionOverwrites,
            position: channel.rawPosition,
            rateLimitPerUser: channel.rateLimitPerUser,
        };
        let newChannel = await message.guild.channels.create(channel.name, options);
        if(deleteAmount = "max") return message.channel.delete().then(newChannel.send('Channel nuked!'))
        if(isNaN(args[0]) || parseInt(args[0]) <= 0 ) {
            return message.channel.send('This is not a number!').then(m => m.delete({ timeout: 5000}));
        }

        let deleteAmount;
        if(parseInt(args[0]) > 1000) {
            deleteAmount = 100;
        } else {
            deleteAmount = parseInt(args[0]);
        }
        

        message.channel.bulkDelete(deleteAmount, true)
        .catch(err => message.reply(`Something went wrong... ${err}`));
    }
}