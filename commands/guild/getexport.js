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
