const { Client, MessageEmbed } = require('discord.js');
const servers = require('../../models/export')
module.exports = {
    name: 'dltexport',
    description: 'Deletes the server info out of database',
    category: 'utilities',
    usage: 'dltexport',
    perms: 'Admin',
    run: async (bot, message, args) => {
        if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send("You need admin to delete all the server data!")
        servers.findOne({ Guild: message.guild.id }, async (err, data) => {
            if (err) console.log(err)
            if (!data) {
                message.channel.send("This server was never saved in the database use the export command to save all info")
            } else {
                message.channel.send("I found your server in the database and deleted it!")
                console.log(data.Server[0])
                data.save()
                data.deleteOne()
                console.log('data deleted')
            }
        })
    }
}
