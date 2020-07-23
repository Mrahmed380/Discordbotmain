const money = require('../../models/money');
const { MessageEmbed } = require('discord.js');
module.exports = {
    name: 'rich',
    description: '`Try` to rob a user',
    usage: 'rob <@user>',
    category: 'money',
    dm: false,
    timeout: 12000,
    perms: 'Send Messages',
    run: async (bot, message, args) => {
        const memIDs = message.guild.members.fetch(mem => mem.id);
        //fetch all the members id
        money.find({ Guild: message.guild.id }, async (err, data) =>{
            const embed = new MessageEmbed()
            .setTitle("Coins")
            .setDescription('uhh no clue')
            message.channel.send(data.Money)
        }).sort(data.Money, 'descending')
    }
}