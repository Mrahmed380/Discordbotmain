const gtas = require('../../models/gta')
const config = require('../../config.json')
module.exports = {
    name: 'sc',
    description: 'Shows a user\'s Social Club Name',
    category: 'info',
    usage: 'sc <user>',
    perms: 'Send Messages',
    aliases: ['socialclub', 'gamertag', 'r*', 'rockstar'],
    run: async (bot,message,args) => {
        let Mention = message.mentions.members.first();
        if (!Mention) return message.channel.send("So you going to tell me who you want to find?")
        gtas.findOne({ UserID: Mention.id }, async (err, data) => {
            if (err) console.log(err)
            if (!data) {
                message.channel.send("This user isnt even in the database")
            } else {
                console.log(data)
                message.channel.send(`${Mention.user.username} Social club is **${data.GTA[0].SocialClub}**`)
            }
        })

    }
}