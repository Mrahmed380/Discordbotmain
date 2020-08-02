const config = require('../../config.json')
const prefix = require('../../models/config')
const { MessageEmbed, DataResolver } = require('discord.js')
module.exports = {
    name: 'prefix',
    description: 'Changes the bot prefix',
    usage: `prefix <new Prefix> (use ":" to represent a space in a new prefix)`,
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
                if (message.content.includes(":")) {
                    const str = newpre
                    if(str === ":") return message.channel.send('You prefix needs to contain at least 1 character!')
                    const res = str.replace(":", " ");
                    let newPrefix = new prefix({
                        Guild: message.guild.id,
                        Prefix: res
                    })
                    newPrefix.save()
                    console.log(`new prefix = "${res}"`)
                    const resembed = new MessageEmbed()
                        .setTitle('Prefix change')
                        .setDescription(`Prefix changed from \`e!\` to \`${res}\` `)
                        .setColor('RANDOM')
                        .setFooter(`${res}prefix <newPrefix> for new custom prefix`)
                    message.channel.send(resembed);
                    message.guild.me.setNickname(`my prefix is "${res}"`)
                } else {
                    let newPrefix = new prefix({
                        Guild: message.guild.id,
                        Prefix: newpre
                    })
                    console.log(`New prefix \`${newpre}\``)
                    newPrefix.save()
                    message.channel.send(`prefix was changed from \`e!\` to \`${newpre}\``)
                    message.guild.me.setNickname(`my prefix is "${newpre}"`)
                }
            } else {
                if (message.content.includes(":")) {
                    const str = newpre
                    let space = ":"
                    if(str === ":") return message.channel.send('You prefix needs to contain at least 1 character!')
                    if([":"].some(char => (str.includes(char)))) return message.channel.send("You can only put one space in a prefix!");
                    const res = str.replace(":", " ");
                    console.log(`"${res}"`)
                    const oldpre = data.Prefix
                    if (res == oldpre) return message.channel.send(`The prefix is already \`${data.Prefix}\``)
                    data.Prefix = res;
                    data.save()
                    console.log(`new prefix = "${data.Prefix}"`)
                    const resembed = new MessageEmbed()
                        .setTitle('Prefix change')
                        .setDescription(`Prefix changed from \`${oldpre}\` to \`${res}\` `)
                        .setColor('RANDOM')
                        .setFooter(`${data.Prefix}prefix <newPrefix> for new custom prefix`)
                    message.channel.send(resembed);
                    message.guild.me.setNickname(`my prefix is "${data.Prefix}"`)
                } else {
                    const oldpre = data.Prefix;
                    if (newpre == oldpre) return message.channel.send(`The prefix is already \`${data.Prefix}\``);
                    data.Prefix = newpre;
                    data.save();
                    console.log(`new prefix = "${data.Prefix}"`)
                    const WWembed = new MessageEmbed()
                        .setTitle('Prefix change')
                        .setDescription(`Prefix changed from \`${oldpre}\` to \`${newpre}\` `)
                        .setColor('RANDOM')
                        .setFooter(`${data.Prefix}prefix <newPrefix> for new custom prefix`)
                    message.channel.send(WWembed);
                    message.guild.me.setNickname(`my prefix is "${data.Prefix}"`)
                }
            }
        }
        )
    }

}