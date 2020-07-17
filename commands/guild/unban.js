const { Client, MessageEmbed } = require('discord.js');
module.exports = {
    name: 'unban',
    category: 'guild',
    description: 'unbans anyone whos ID is listed',
    usage: 'e!unban <usersID>',
    perms: 'Send Messages',
    run: async (bot, message, args) => {
        const ID = message.content.slice(7);
        if (!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send('You dont have permission to unban people!')
        else {
            const ID = args[0]
            message.guild.members.unban(ID)
            message.channel.send(`<@${ID}> was unbanned!`)
        }

    }
}