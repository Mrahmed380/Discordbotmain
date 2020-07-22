const married = require('../../models/fake');
const { MessageEmbed, MessageMentions } = require('discord.js');


module.exports = {
    name: 'marry',
    description: 'marriage command',
    dm: false,

    run: async (client, message, args) => {
        const mention = message.mentions.members.first();
        const filter = m => m.author.id === mention.id;
        if (!mention) return message.channel.send('Who do you want to marry ' + message.author.username + '?')
        message.channel.send(`${mention} do you take ${message.author} as your husband? "i do" to accept and "i dont" to decline`)
        const answer = 'i do' || 'i dont';
        married.findOne({ user: message.author.id }, async (err, data) => {
            if (err) console.log(err);
            if (!data) {
                message.channel.awaitMessages(filter, {
                    max: 1,
                    time: 10000
                }).then(collected => {
                    if (collected.first().content === "i dont") return message.channel.send('ok canceled').catch(err => message.channel.send('ok since you dont want to answer i cancelled have a good weekend :)'))
                    if (collected.first().content !== answer) return message.channel.send('thats not one of the options ***goofy fucking goober***')
                    if (collected.first().content == "i do") message.channel.send('Ok yall married now get the fuck on wit yo raggedy ass...')
                    const newmarriage = new married({
                        couple: `${message.author.id} + ${mention.id}`,
                        adopted: 'Lonely',
                        user: message.author.id,
                        user2: mention.id
                    });
                    newmarriage.save();
                    console.log('ok')
                    message.channel.send(`**You just married ${mention}\nAnd you will have no kids :)`)
                })
            }
            else {
                console.log(data);
                message.channel.send('bruh you already married :(')
                message.channel.send(WWembed);
            }
        });

    }
}
