const hb = require('hastebin-generator');
const moment = require('moment');
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
            const fetchedmessages = await message.channel.messages.fetch({ limit: 100 })
            const formattedMsgs = fetchedmessages.map(m => `[${moment(m.createdAt).format()}] ${m.author.tag}: ${m.content}\n`);
            hb(formattedMsgs.join(""), 'js').then(r => {
                message.channel.send("This ticket will be deleted in 25 seconds!")
                setTimeout(() => {
                    message.channel.delete().then(console.log('Ticket closed and channel deleted'))
                    message.author.send(`Thank you for reaching support! here is a chat trasnscript! ${r}`)
                }, 25000);
            }).catch(e => {
                if (e) return message.channel.send('There was a error archiving the messages!')
            })
        }
    }
}