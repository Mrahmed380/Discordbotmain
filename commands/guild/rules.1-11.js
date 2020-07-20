const { MessageEmbed, Message } = require('discord.js')
const fs = require('fs')
//const rules = require('../../rules/')
module.exports = {
    timeout: 5000,
    status: true,
    name: ['rules', 'rule'],
    descriptions: 'Shows a rule of choice for members',
    category: 'guild',
    perms: 'Send Messages',
    run: async (bot, message, args) => {
        let rulenum = args[0]
        if (!rulenum) return message.channel.send('You did not give a rule number so here is the full page!\nhttps://hastebin.com/mumehimuwa.coffeescript')
        if(isNaN(rulenum)) return message.channel.send('That isnt even a number ***`Paid goofy`***')
        if(rulenum >= 11) return message.channel.send('That is not a rule :(')
        if(rulenum < 1) return message.channel.send('how can this server have a rule number below 0 :()')
        if (rulenum == 1) {
            let embed = new MessageEmbed()
                .setTitle('Rule 1')
                .setDescription('1. No backstage Recruiting = Instant ban')
                .setFooter('DM mods and admins for rule suggestions')
            message.channel.send(embed)
        }
        if (rulenum == 2) {
            let embed2 = new MessageEmbed()
                .setTitle('Rule 2')
                .setDescription('2. No disscusion of hacking or ddos = warning')
                .setFooter('DM mods and admins for rule suggestions')
            message.channel.send(embed2)
        }
        if (rulenum == 3) {
            let embed3 = new MessageEmbed()
                .setTitle('Rule 3')
                .setDescription('3. No toxic behavior = warning')
                .setFooter('DM mods and admins for rule suggestions')
            message.channel.send(embed3)
        }
        if (rulenum == 4) {
            let embed4 = new MessageEmbed()
                .setTitle('Rule 4')
                .setDescription('4. No abusing text, voice channels or spam = warning')
                .setFooter('DM mods and admins for rule suggestions')
            message.channel.send(embed4)
        }
        if (rulenum == 5) {
            let embed5 = new MessageEmbed()
                .setTitle('Rule 5')
                .setDescription('5. No spaming owner/admins/moderators')
                .setFooter('DM mods and admins for rule suggestions')
            message.channel.send(embed5)
        }
        if (rulenum == 6) {
            let embed6 = new MessageEmbed()
                .setTitle('Rule 6')
                .setDescription('6. We accept Steam and Epic Games of Grand Theft Auto 5')
                .setFooter('DM mods and admins for rule suggestions')
            message.channel.send(embed6)
        }
        if (rulenum == 7) {
            let embed7 = new MessageEmbed()
                .setTitle('Rule 7')
                .setDescription('7. If you have questions about trust DM <@&697343291825455126> or <@&697343291825455128> for more info or look in <#697343291955478529> and <#698360689810735134>')
                .setFooter('DM mods and admins for rule suggestions')
            message.channel.send(embed7)
        }
        if (rulenum == 8) {
            let embed8 = new MessageEmbed()
                .setTitle('Rule 8')
                .setDescription('8. I accept Cashapp and PayPal only')
                .setFooter('DM mods and admins for rule suggestions')
            message.channel.send(embed8)
        }
        if (rulenum == 9) {
            let embed9 = new MessageEmbed()
                .setTitle('Rule 9')
                .setDescription('9. We screen share to make sure you can see what we are doing at all times')
                .setFooter('DM mods and admins for rule suggestions')
            message.channel.send(embed9)
        }
        if (rulenum == 10) {
            let embed10 = new MessageEmbed()
                .setTitle('Rule 10')
                .setDescription('Keep chatting in proper channels = warning')
                .setFooter('DM mods and admins for rule suggestions')
            message.channel.send(embed10)
        }
    }
}