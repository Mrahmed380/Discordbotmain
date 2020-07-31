const { MessageEmbed } = require('discord.js');
module.exports = {
    name: 'suggest',
    description: 'Makes a suggestion for moderators or admins to consider',
    usage: 'suggest <Your suggestion>',
    perms: 'Send Messages',
    dm: false,
    timeout: 600000,
    category: 'guild',
    aliases: ['suggestion', 'sgt'],
    run: async (bot, message, args) => {
        let mssArgs = args.slice(0).join(" ");
        const sgstID = Math.floor(Math.random() * 10000000 + 5);
        if (!mssArgs) return message.channel.send('You need to add a suggestion')
        const DMembed = new MessageEmbed()
            .setTitle('Suggestion')
            .addField('Suggestion Info', 'Your suggestion has been submitted! In order for your suggestion to be accepted it must have more ✅ votes and then checked by a mod or admin.')
            .setFooter(message.author.tag)
            .setColor(0xead611)
        message.author.send(DMembed)
        const sembed = new MessageEmbed()
            .setTitle('Suggestion')
            .addField('New Suggestion from:', message.author.tag)
            .setColor(0x119e32)
            .addField('Suggestion', mssArgs)
            .addField('suggestion ID', sgstID)
            .setFooter('Please wait while a moderator or admin rejects or accepts your suggestion. (note check your DMs.)');
        bot.idMap.set(`${message.author.id}${sgstID}`).then(console.log("set"));
        message.channel.send(sembed).then(messageReaction => {
            messageReaction.react("✅")
            messageReaction.react("❌")
        });
    }
}