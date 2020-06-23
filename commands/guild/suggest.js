const { CLient, MessageEmbed } = require('discord.js');
const { category } = require('../info/ping');
module.exports={
    name: 'suggestion',
    category: 'guild',
    description: 'use this command to make public suggestions',
    run: async(bot,message,args)=>{
        message.delete()
        let msssArgs = args.slice(1).join(" ");
        const DMembed = new MessageEmbed()
        .setTitle('Suggestion')
        .addField('Suggestion Info' , 'Your suggestion has been submitted! In order for your suggestion to be accepted it must have more ✅ votes and then checked by a mod or admin.')
        .setFooter(message.author.tag)
        .setColor(0xead611)
        message.author.send(DMembed)
        const sembed = new MessageEmbed()
        .setTitle('Suggestion')
        .addField('New Suggestion from:', message.author.tag)
        .setColor(0x119e32)
        .addField('Suggestion' , msssArgs)
        .addField('suggestion ID' , Math.floor(Math.random() * 10000000 + 5))
        .setFooter('Please wait while a moderator or admin rejects or accepts your suggestion. (note check your DMs.)')
        message.channel.send(sembed).then(messageReaction => {
            messageReaction.react("✅")
            messageReaction.react("❌")
        })
    }
}