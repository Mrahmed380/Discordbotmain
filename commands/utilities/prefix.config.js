const config = require('../../config.json')
const prefix = require('../../models/config')
const { MessageEmbed } = require('discord.js')
module.exports = {
    name: 'prefix',
    description: 'Changes the bot prefix',
    usage: `prefix`,
    dm: false,
    category: 'utilities',
    timeout: 45000,
    perms: `Send Messages`,
    run: async (bot, message, args) => {
        let newpre = args[0]
        if (!newpre) return message.channel.send("You need to specify the new prefix!")
        if (newpre.length > 5) return message.channel.send('Are you crazy!? Prefixes can only have 5 or less characters ')
        prefix.findOne({ Guild: message.guild.id }, async (err, data) => {
            if (err) console.log(err)
            if (!data) {
                let newPrefix = new prefix({
                    Guild: message.guild.id,
                    Prefix: newpre
                })
                console.log(`New prefix \`${newpre}\``)
                newPrefix.save()
                message.channel.send(`prefix was changed from \`"e!"\` to \`${newpre}\``)
            } else {
                data.Prefix = newpre
                data.save()
                console.log(data.Prefix)
                const WWembed = new MessageEmbed()
                    .setTitle('Prefix change')
                    .setDescription(`Prefix changed to \`${newpre}\` `)
                    .setColor('RANDOM')
                    .setFooter(`${data.Prefix}prefix <newPrefix> for new custom prefix`)
                message.channel.send(WWembed)
            }
        }

        )
    }

}