const { Client , MessageEmbed  } = require('discord.js');
const ID = message.content.slice(7);
module.exports={
    name: 'unban',
    category: 'guild',
    description: 'unbans anyone whos ID is listed',
    usage: 'e!unban <usersID>',
    run: async(bot,message,args)=>{
        const ID = message.content.slice(7);
        if(message.content.toLowerCase().startsWith('e!unban')) {
            if(!message.member.hasPermission('ADMINISTRATOR')) {
                message.channel.send('You dont have permission to unban people!')
            } else {
                message.guild.members.unban(ID)
                message.channel.send(`${bot.user.cache.get(id).tag} was unbanned!`)
            }
        }
    }
}