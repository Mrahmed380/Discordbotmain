const { Client, MessageEmbed } = require('discord.js');
const servers = require('../../models/export')
module.exports = {
    name: 'export',
    description: 'Warns a user',
    category: 'guild',
    usage: 'e!warn <user> <reason>',
    perms: 'Moderator role',
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
                                Date: `Created on, ${guild.createdAt}`,
                                Owner: `Guild Owner, ${guild.owner.user.tag}`,
                                Members: `Total Members, ${guild.members.cache.filter(member => !member.user.bot).size}`,
                                Bots: `Total Bots, ${guild.members.cache.filter(member => member.user.bot).size}`,
                                Channels: `Total Channels, ${guild.channels.cache.size}`,
                                Roles: (`${guild.roles.cache.map(role => role.name.toString()).join(' ')}`)
                            }]
                        }
                    ]
                })
                newServer.save()
                message.channel.send(data)
                console.log(data)
                setTimeout(() => {
                    data.deleteOne()
                    console.log('No more data')
                }, 10000);
            } else {
                message.channel.send("Data already exists")
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