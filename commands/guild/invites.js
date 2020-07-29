const { MessageEmbed } = require("discord.js");

module.exports = {
    name: 'invites',
    aliases: ['invite', 'invitations'],
    description: 'Fetch the guild invites',
    category: 'guild',
    perms: 'Send Messages',
    dm: false,

    usage: 'invites',
    run: async (bot, message, args) => {
        const { guild } = message;

        guild.fetchInvites().then((invites) => {
            const inviteCounter = {}

            invites.forEach((invite) => {
                console.log(`INVITE: ${invite}`)
                const { uses, inviter } = invite;
                const { username, discriminator } = inviter;
                const name = `${username}#${discriminator}`;
                inviteCounter[name] = (inviteCounter[name] || 0) + uses;
            })
            let replyText = ''

            for (const invite in inviteCounter) {
                const count = inviteCounter[invite]
                replyText += `\n${invite} has invited ${count} members`
            }
            const embed = new MessageEmbed()
                .setTitle('Invites')
                .setDescription(`${replyText}`)
                .setColor('RANDOM')
                .setFooter('Invites for ' + message.guild.name)
                if(replyText == '') embed.setDescription('Could not fetch the server invites!\nThere might not be any invites')
            message.channel.send(embed)
        })
    }
}