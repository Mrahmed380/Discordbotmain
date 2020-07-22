const married = require('../../models/fake');
const { MessageEmbed, MessageMentions } = require('discord.js');


module.exports = {
    name: 'marry',
    description: 'marriage command',
    dm: false,

    run: async (client, message, args) => {
        const mention = message.mentions.members.first();
        const filter = m => m.author.id === message.author.id || m.id === mention.id;
        if(!mention) return message.channel.send('Who do you want to marry ' + message.author.username + '?')
        const answer = 'i do' || 'i dont';
        message.channel.awaitMessages(filter, {
            max: 1,
            time: 10000
        }).then(collected => {
            if (collected.first().content === "i dont") return message.channel.send('ok canceled')
            if (collected.first().content !== answer) return message.channel.send('thats not one of the options ***goofy fucking goober***')
            if (collected.first().content == "i do") message.channel.send('Ok starting the server cannon...').then(r => r.delete({ timeout: 5000 }))
            married.findOne({ User: message.author.id }, async (err, data) => {
                if (err) console.log(err);
                if (!data) {
                    const newmarriage = new married({
                        couple: `${message.author} + ${Mention}`,
                        adopted: 'Lonely',
                        user: message.author.id,
                        user2: mention.id
                    });
                    newmarriage.save();
                }
                else {
                    console.log(data);

                    const WWembed = new MessageEmbed()
                        .setTitle('r')
                        .setDescription('d')
                        .setColor('d');
                    message.channel.send(WWembed);
                }
            });

        })
    }
}
