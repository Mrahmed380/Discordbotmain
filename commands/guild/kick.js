const { Client , MessageEmbed } = require('discord.js');
module.exports={
    name: 'kick',
    category: 'guild',
    description: 'Kicks the mentioned user',
    usage: 'e!kick <@user>',
    perms: 'Administrator',
    run: async(bot,message,args)=>{
        const Mention = message.mentions.members.first()
        if(message.content.toLowerCase().startsWith('e!kick')) {
            if(!message.member.hasPermission('ADMINISTRATOR')) {
                message.reply('You need administrator to use this command!')
            }
            if(!message.content.includes('@')) {
                message.channel.send('You must mention someone to kick durdur goofy')
            }
            if(!Mention.kickable) {
                message.channel.send('You cannot kick this person')
            } else {
                Mention.send('You have been kicked from ' + (message.guild.name))
                Mention.kick();
                message.channel.send(`${Mention} was kicked from the server!`)
            }
        }
    }
}