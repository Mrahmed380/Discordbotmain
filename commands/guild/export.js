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
                                Roles: (`${message.guild.roles.cache.map(role => role.name.toString()).join(', ')}`)
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
                /*data.Warns.unshift({
                    Moderator: message.author.id,
                    Reason: args.slice(1).join(" "),
                    Date: dformat
                })
                data.save()
                console.log(data.Warns)
                const WWembed = new MessageEmbed()
                    .setTitle('Warning')
                    .setDescription(`${user.tag} has been warned for ${args.slice(1).join(" ")}.`)
                    .setColor('RANDOM')
                    .setFooter(`${user.username} has ${data.Warns.length} warns.`)
                message.channel.send(WWembed)
                if (data.Warns.length >= 3) {
                    const mention = message.mentions.members.first()
                    message.channel.send(`${user} received 3 warnings or more, banned and has been deleted from the database`)
                    mention.ban({ reason: "Recieved 3 warnings" })
                    warns.findOneAndDelete({
                        User: user.id,
                        Guild: message.guild.id
                    }, (err, res) => {
                        if (err) console.log('Please check and make sure the data was deleted i recieved a error!')
                        console.log(`User with ID ${user.id} has been deleted from the Database`)
                    })
                }*/
            }
        })
    }
}