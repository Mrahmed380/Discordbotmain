const { MessageEmbed } = require('discord.js')
module.exports = {
    name: 'simprate',
    desription: 'Gives a simp rate',
    category: 'entertainment',
    usage: 'simprate [person]',
    aliases: ['simp','simplvl'],
    perms: 'Send Messages',
    run: async (bot, message, args) => {
        const person = message.mentions.members.first()
        if (!person) {
            const simprate = Math.random() * 100;
            const hoes = Math.random() * 18;
            const hoeIndex = Math.round(10 * hoes) / 10;
            const simpIndex = Math.floor(simprate / 10);
            const simpLevel = "🤡 ".repeat(simpIndex) + "🍑".repeat(10 - simpIndex)
            const embed = new MessageEmbed()
                .setTitle(`simp rate for ${message.author.tag}`)
                .setDescription(`🤡 Simp level:${Math.round(simprate)}%\nAverage Hoes a year: ${hoeIndex}\n\n${simpLevel}`)
                .setColor(0xf29583)
            if (Math.round(simprate) >= 70) embed.setFooter('Woah you a hard core simp')
            if (Math.round(simprate) > 69 && Math.round(hoes) > 2) embed.setDescription(`🤡 Simp level:${Math.round(simprate)}%\nAverage Hoes a year: ${Math.round(hoes)} (unaccurate)\n\n${simpLevel}`)
            message.channel.send(embed)
        } else {
            const hoes = (Math.random() * 20);
            const hoeIndex = Math.round(10 * hoes) / 10;
            const simprate = Math.random() * 100;
            const simpIndex = Math.floor(simprate / 10);
            const simpLevel = "🤡 ".repeat(simpIndex) + "🍑".repeat(10 - simpIndex)
            const pembed = new MessageEmbed()
                .setTitle(`simp rate for ${person.user.username}`)
                .setDescription(`🤡 Simp level:${Math.round(simprate)}%\nAverage Hoes a year: ${hoeIndex}\n\n${simpLevel}`)
                .setColor(0xf29583)
            if (Math.round(simprate) >= 70) pembed.setFooter(`Woah ${person.user.tag} simpin a lil to much`)
            if (Math.round(simprate) > 69 && Math.floor(hoes) > 2) pembed.setDescription(`🤡 Simp level:${Math.round(simprate)}%\nAverage Hoes a year: ${Math.round(hoes)} (unaccurate)\n\n${simpLevel}`)
            message.channel.send(pembed)
        }
    }
}