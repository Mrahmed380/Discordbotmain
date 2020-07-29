const { MessageEmbed } = require("discord.js");

module.exports = {
    name: 'invites',
    aliases: ['invite'],
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
                inviteCounter[name] = (inviteCounter[name]) + uses;
            })
            let replyText = 'Invites:'

            for(const invite in inviteCounter){
                const count = inviteCounter[invite]
                replyText += `\n${invite} has invited ${inviteCounter[uses]} members`
            }
            const embed = new MessageEmbed()
                .setTitle('Invites')
                .setDescription(`${replyText}`)
                .setColor('RANDOM')
                .setFooter('Invites for ' + message.guild.name)
            message.channel.send(embed)
        })
    }
}