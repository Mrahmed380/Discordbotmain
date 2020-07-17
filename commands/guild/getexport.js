const { Client, MessageEmbed } = require('discord.js');
const servers = require('../../models/export')
module.exports = {
    name: 'getexport',
    description: 'Shows all the server info',
    category: 'guild',
    usage: 'getexport',
    perms: 'Send Messages',
    run: async (bot, message, args) => {
        servers.findOne({ Guild: message.guild.id }, async (err, data) => {
            if (err) console.log(err)
            if (!data) {
                message.channel.send("This server was never saved in the database use the export command to save all info")
            } else {
                message.channel.send("I found your server in the database!")
                console.log(data.Server[0])
                message.channel.send(data.Server[0].ServerInfo[0].Owner)
                data.Warns.unshift({
                    Moderator: message.author.id,
                    Reason: args.slice(1).join(" "),
                    Date: dformat
                })
                data.save()
                console.log(data.Warns)
                const WWembed = new MessageEmbed()
                    .setTitle('Server Data')
                    .setDescription(`Date Created: ${data.Server[0].ServerInfo[0].Date}\nServer Owner: ${data.Server[0].ServerInfo[0].Owner}\nMember Count: ${data.Server[0].ServerInfo[0].Members}\nBot Count: ${data.Server[0].ServerInfo[0].Bots}\nChannel Count: ${data.Server[0].ServerInfo[0].Channels}\nRoles:${data.Server[0].ServerInfo[0].Roles}`)
                    .setColor('RANDOM')
                    .setFooter(`${user.username} has ${data.Warns.length} warns.`)
                message.channel.send(WWembed)
            }
        })
    }
}
