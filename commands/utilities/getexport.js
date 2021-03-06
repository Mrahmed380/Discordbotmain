const { Client, MessageEmbed } = require('discord.js');
const servers = require('../../models/export')
module.exports = {
    status: false,
    name: 'getexport',
    dm: false,
    args: false,
    description: 'Shows all the server info',
    category: 'utilities',
    usage: 'getexport',
    perms: 'Send Messages',
    run: async (bot, message, args) => {
        if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send("You need admin to get all the server data!")
        servers.findOne({ Guild: message.guild.id }, async (err, data) => {
            if (err) console.log(err)
            if (!data) {
                message.channel.send("This server was never saved in the database use the export command to save all info")
            } else {
                message.channel.send("I found your server in the database!")
                console.log(data.Server[0])
                data.save()
                const WWembed = new MessageEmbed()
                    .setTitle('Server Data')
                    .setDescription(`Server Name: ${data.Server[0].ServerInfo[0].ServerName}\nServer ID: ${data.Server[0].ServerInfo[0].ServerID}\nDate Created: ${data.Server[0].ServerInfo[0].Date}\nServer Owner: ${data.Server[0].ServerInfo[0].Owner}\nMember Count: ${data.Server[0].ServerInfo[0].Members}\nBot Count: ${data.Server[0].ServerInfo[0].Bots}\nChannel Count: ${data.Server[0].ServerInfo[0].Channels}\nRoles:${data.Server[0].ServerInfo[0].Roles}\nTemplate Link: ${data.Template}`)
                    .setColor(0x000000)
                    .setFooter(`Date data was exported: ${data.Date }`)
                message.channel.send(WWembed)
            }
        })
    }
}
