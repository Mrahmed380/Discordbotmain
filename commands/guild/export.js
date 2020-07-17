const { Client, MessageEmbed } = require('discord.js');
const servers = require('../../models/export')
var d = new Date,
dformat = [d.getMonth()+1,
       d.getDate(),
       d.getFullYear()].join('/')+' ';
module.exports = {
    name: 'export',
    description: 'Exports all the server info to a document',
    category: 'guild',
    usage: 'export',
    perms: 'Send Messages',
    run: async (bot, message, args) => {
        servers.findOne({ Guild: message.guild.id }, async (err, data) => {
            if (err) console.log(err)
            if (!data) {
                let newServer = new servers({
                    Guild: message.guild.id,
                    Server: [
                        {
                            Server: message.guild.name,
                            ServerInfo: [{
                                Date: `Created on, ${message.guild.createdAt}`,
                                Owner: `Guild Owner, ${message.guild.owner.user.tag}`,
                                Members: `Total Members, ${message.guild.members.cache.filter(member => !member.user.bot).size}`,
                                Bots: `Total Bots, ${message.guild.members.cache.filter(member => member.user.bot).size}`,
                                Channels: `Total Channels, ${message.guild.channels.cache.size}`,
                                Roles: (`${message.guild.roles.cache.map(role => role.name.toString()).join(' , ')}`)
                            }]
                        }
                    ],
                    Date: dformat
                })
                newServer.save()
                message.channel.send("Data exported to database")
            } else {
                message.channel.send("Data already exists")
                console.log(data.Server[0])
                data.deleteOne()
                let newServer = new servers({
                    Guild: message.guild.id,
                    Server: [
                        {
                            Server: message.guild.name,
                            ServerInfo: [{
                                Date: `Created on, ${message.guild.createdAt}`,
                                Owner: `Guild Owner, ${message.guild.owner.user.tag}`,
                                Members: `Total Members, ${message.guild.members.cache.filter(member => !member.user.bot).size}`,
                                Bots: `Total Bots, ${message.guild.members.cache.filter(member => member.user.bot).size}`,
                                Channels: `Total Channels, ${message.guild.channels.cache.size}`,
                                Roles: (`${message.guild.roles.cache.map(role => role.name.toString()).join(' , ')}`)
                            }]
                        }
                    ],
                    Date: dformat
                })
                newServer.save()
                
            }
        })
    }
}