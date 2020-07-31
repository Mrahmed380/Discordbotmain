const { MessageEmbed } = require("discord.js")
module.exports = async (message) => {
    try {
        const snipes = message.client.snipes.get(message.channel.id) || [];
        snipes.unshift({
            content: message.content,
            author: message.author,
            image: message.attachments.first() ? message.attachments.first().proxyURL : null,
            date: new Date().toLocaleString("en-GB", { dataStyle: "full", timeStyle: "short" })
        });
        snipes.splice(10);
        message.client.snipes.set(message.channel.id, snipes)
    } catch(e){}
    const chan = message.guild.channels.cache.find(ch => ch.name === 'archivelog')
    if (message.attachments.size >= 1) { // If I change this to: message.attachments.size>0 && message it works with deleted image & text but as it is without this said line it doesn't function
        var Attachment = (message.attachments).array();
        Attachment.forEach(function (attachment) {
            const embed = new MessageEmbed()
                .setTitle('Deleted message from ' + message.author.id)
                .setDescription(`**${message.author}** has deleted a message in <#${message.channel.id}>\nImage link ${attachment.proxyURL}`)
                .setFooter(message.createdAt)
                .setColor(`RANDOM`)
            if (!chan) return;
            chan.send(embed);
            console.log('Message deleted, but was captured and logged in #archivelog')
        })
    } else {
        const embed = new MessageEmbed()
            .setTitle('Deleted message from ' + message.author.id)
            .setDescription(`**${message.author}** has deleted a message in <#${message.channel.id}>`)
            .setFooter(message.createdAt)
            .addField('Message', message.content, true)
            .setColor(`RANDOM`)
        if (!chan) return;
        chan.send(embed);
        console.log('Message deleted, but was captured and logged in #archivelog')
    }
}