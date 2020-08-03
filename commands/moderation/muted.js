const { MessaeEmbed, GuildMember, Collection } = require('discord.js')
module.exports = {
    name: 'muted',
    desription: 'Shows all muted users',
    usage: 'muted',
    category: 'moderation',
    perms: 'Send Messages',
    run: async (bot, message, args) => {
        const hb = require('hastebin-generator')
        const modrole = message.guild.roles.cache.find(r => r.name === 'Muted')
        var formattedMsgs = modrole.members.map(m => `${m.user.tag},\n`)
        hb(formattedMsgs.join(""), 'js').then(r => {

            message.channel.send(`Here is a list of all the muted users! ${r}`)
        }).catch(e => {
            if (e) return;
        })
    }
}