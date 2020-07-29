module.exports = async (bot) => {
    let invites = {}
    const getInviteCounts = async (guild) => {
        return await new Promise(resolve => {
            guild.fetchInvites().then(invites => {
                const inviteCounter = {}

                invites.forEach(invite => {
                    console.log(`INVITE: ${invite}`);
                    const { uses, inviter } = invite
                    const { username, discriminator } = inviter
                    const name = `${username}#${discriminator}`

                    inviteCounter[name] = (inviteCounter[name] || 0) + uses;
                })
            })
        })
    }
    bot.guilds.cache.forEach(async (guild) => {
        invites[guild.id] = await getInviteCounts(guild)
        console.log(`Invites: ${invites[guild.id]}`);
    })

    bot.on('guildMemberAdd',async (member) => {
        let chan = guild.channels.cache.find(c => c.name === '『🤘🏻』invites')
        if(!chan) return console.log('channel doesnt exist')
        const { guild } = member;
        const invitesBefore = invites[guild.id]
        const invitesAfter = await getInviteCounts(guild);
        console.log(`BEFORE ${invitesBefore}`);
        console.log(`AFTER ${invitesAfter}`);
        for (const inviter in invitesAfter) {
            if (invitesBefore[inviter] === invitesAfter[inviter] - 1) {
                const count = invitesAfter[inviter]
                chan.send(`${member} joined!, invited by ${inviter} (${count} total invites)`)
                invites[guild.id] = invitesAfter;
                return
            }
        }
    })
}