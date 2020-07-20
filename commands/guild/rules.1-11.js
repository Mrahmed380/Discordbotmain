const { MessageEmbed } = require('discord.js')
const fs = require('fs')
//const rules = require('../../rules/')
module.exports = {
    timeout: 5000,
    status: true,
    name: 'rules',
    descriptions: 'Shows a rule of choice for members',
    category: 'guild',
    perms: 'Send Messages',
    run: async (bot, message, args) => {
        let rulenum = args[0]
        if (!rulenum) return message.channel.send('You did not give a rule number so here is the full page!\nhttps://hastebin.com/vofoceqoji.coffeescript')
        if (rulenum == 1) {
            require('../../rules/1')
        }
    }
}