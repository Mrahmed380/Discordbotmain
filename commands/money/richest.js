const money = require('../../models/money');
module.exports = {
    //name: 'rich',
    description: '`Try` to rob a user',
    usage: 'rob <@user>',
    category: 'money',
    dm: false,
    timeout: 12000,
    perms: 'Send Messages',
    run: async (bot, message, args) => {
        const memIDs = message.guild.members.fetch
        //message.guild.members.cache.fetch(mem => mem.id)
    }
}