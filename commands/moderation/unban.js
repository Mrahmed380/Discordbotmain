const { Client, MessageEmbed } = require('discord.js');
module.exports = {
    name: 'unban',
    category: 'moderation',
    dm: false,
    description: 'unbans anyone whos ID is listed',
    usage: 'unban <usersID>',
    perms: 'Send Messages',
    run: async (bot, message, args) => {
        const mod = message.guild.roles.cache.find(r => r.name === "Moderator")
        if (!message.member.roles.cache.has(mod.id)) return message.channel.send('You dont have permission to unban people!')
        else {
            const ID = args[0]
            if(!ID) return message.channel.send("***Give me the fucking id or else***")
            message.guild.members.unban(ID)
            message.channel.send(`<@${ID}> was unbanned!`)
        }

    }
}