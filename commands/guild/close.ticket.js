const hb = require('hastebin-generator')
module.exports = {
    name: 'cticket',
    description: 'close a ticket',
    usage: 'cticket',
    category: 'guild',
    perms: "Send Messages",
    dm: false,
    status: true,
    run: async (bot, message, args) => {
        const tname = message.author.id;
        const ctname = "t-" + tname;
        let regex = new RegExp(/(t-[0-9]+)/);
        let channelName = message.channel.name;
        if (regex.test(channelName) && message.member.roles.cache.has('730608207067742310')) {
            console.log("Delete Channel");
            message.channel.delete().then(console.log('Ticket closed and channel deleted'))
            message.guild.owner.send('Your clients ticket was closed hopefully this helped them!😊')
            const fetchedmessages = await message.channel.messages.fetch({ limit: 100 })
            var formattedMsgs = fetchedmessages.map(m => `[${moment(m.createdAt).format()}] ${m.author.tag}: ${m.content}\n`)
            hb(formattedMsgs.join(""), 'js').then(r => {
                message.author.send(`Succesfully closed ticket and archived messages: ${r} - chat transcript`)
            }).catch(e => {
                if (e) return msg.channel.send('There was a error archiving the messages!')
            })
        };
    }
}