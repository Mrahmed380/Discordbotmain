const { Client, MessageEmbed } = require('discord.js')
module.exports = {
    name: 'ticket',
    dm: false,
    description: 'Creates a support ticket',
    category: 'guild',
    usage: 'ticket',
    perms: 'Send Messages',
    run: async (bot, message, args) => {
        const Tembed = new MessageEmbed()
            .setTitle('Support ticket')
            .setDescription(`You have created a support ticket!\n${tickchan.id}`)
            .setColor('RANDOM')
            .setFooter('Scroll up if you dont see the ticket channel')
        const tname = message.author.id;
        const ctname = "t-" + tname;
        if (message.guild.channels.cache.find(ch => ch.name == ctname)) return message.channel.send('You alredy have a ticket open, go to your ticket channel and use the cticket command to close your current ticket!')
        message.guild.channels.create(ctname, {
            type: 'text',
            permissionOverwrites: [
                {
                    allow: 'VIEW_CHANNEL',
                    id: message.author.id
                },
                {
                    deny: 'VIEW_CHANNEL',
                    id: message.guild.id
                },
                {
                    allow: ['VIEW_CHANNEL', "READ_MESSAGE_HISTORY"],
                    id: message.guild.roles.cache.find(r => r.name === "Client")
                },
                {
                    allow: 'SEND_MESSAGES',
                    id: message.guild.roles.cache.find(r => r.name === "Moderator")
                },
                {
                    allow: 'READ_MESSAGE_HISTORY',
                    id: message.guild.roles.cache.get('730608207067742310')
                }


            ]
        }).then(m=>m.send(`Support ticket created by ${message.author}!\nChat transcript will be created after this ticket is deleted.`).then(msg=>msg.pin().then(Tembed.setDescription(`You have created a support ticket!\n${tickchan}`))));
        console.log('ticket created.')
        message.channel.send(Tembed);

    }
}