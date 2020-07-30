module.exports = {
    name: 'setup',
    aliases: ['run'],
    perms: 'Admin',
    description: 'Setup bot logging channels and roles',
    category: 'utilities',
    usage: 'setup',
    dm: false,
    status: true,
    run: async (bot, message, args) => {
        if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send("You need admin to do this!")
        const { guild } = message;
        if (guild.channels.cache.find(c => c.name === 'mutelog')) {
            console.log('channel exists with the name "mutelog"');
            message.channel.send('Mutelog already exists so it wasnt created').then(msg => msg.react("❌"))
        } else {
            guild.channels.create('mutelog', {
                type: 'text',
                permissionOverwrites: [
                    {
                        id: message.guild.id,
                        deny: ['SEND_MESSAGES', 'VIEW_CHANNEL'],
                    },
                    {
                        id: guild.roles.cache.get('730608207067742310').id,
                        allow: ['VIEW_CHANNEL'],
                    }
                ],
            })
            console.log('mutelog was created')
            message.channel.send("Mutelog was created").then(msg => msg.react("✅"));
        }
        if (guild.channels.cache.find(c => c.name === 'archivelog')) {
            console.log('channel exists with the name "archivelog"');
            message.channel.send('archive already exists so it wasnt created').then(msg => msg.react("❌"))
        } else {
            guild.channels.create('archivelog', {
                type: 'text',
                permissionOverwrites: [
                    {
                        id: message.guild.id,
                        deny: ['SEND_MESSAGES', 'VIEW_CHANNEL'],
                    },
                    {
                        id: guild.roles.cache.get('730608207067742310').id,
                        allow: ['VIEW_CHANNEL'],
                    }
                ],
            })
            console.log("archive log was created")
            message.channel.send("archivelog was created").then(msg => msg.react("✅"));
        }
        if (guild.channels.cache.find(c => c.name === 'verifylog')) {
            console.log('channel exists with the name "verifylog"');
            message.channel.send('verifylog already exists so it wasnt created').then(msg => msg.react("❌"))
        } else {
            guild.channels.create('verifylog', {
                type: 'text',
                permissionOverwrites: [
                    {
                        id: message.guild.id,
                        deny: ['SEND_MESSAGES', 'VIEW_CHANNEL'],
                    },
                    {
                        id: guild.roles.cache.get('730608207067742310').id,
                        allow: ['VIEW_CHANNEL'],
                    }
                ],
            })
            console.log("verify log was created")
            message.channel.send("verifylog was created").then(msg => msg.react("✅"));
        }
        if (guild.roles.cache.find(r => r.name === 'Muted')) {
            console.log('role exists with the name "Muted"');
            message.channel.send('Muted already exists so it wasnt created').then(msg => msg.react("❌"))
        } else {
            guild.roles.create('Muted', {
                color: 'GREEN'
            })
            console.log("archive log was created")
            message.channel.send("Moderator was created was created").then(msg => msg.react("✅"));
        }
        if (guild.roles.cache.find(r => r.name === 'Moderator')) {
            console.log('role exists with the name "Moderator"');
            message.channel.send('Moderator already exists so it wasnt created').then(msg => msg.react("❌"))
        } else {
            guild.roles.create('Moderator', {
                color: 'GREEN'
            })
            console.log("Moderator was created")
            message.channel.send("Moderator role was created").then(msg => msg.react("✅"));
        }
    }
}