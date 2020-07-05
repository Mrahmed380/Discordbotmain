const { Client , MessageEmbed  } = require('discord.js');
module.exports={
    name: 'unban',
    category: 'guild',
    description: 'unbans anyone whos ID is listed',
    usage: 'e!unban <usersID>',
    perms: 'Send Messages',
    run: async(bot,message,args)=>{
        const ID = message.content.slice(7);
        if(message.content.toLowerCase().startsWith('e!unban')) {
            if(!message.member.hasPermission('ADMINISTRATOR')) {
                message.channel.send('You dont have permission to unban people!')
            } else {
                const ID = message.content.slice(7);
                message.guild.members.unban(ID)
                message.channel.send(`The <@${ID}> was unbanned!`)
            }
        }
    }
}