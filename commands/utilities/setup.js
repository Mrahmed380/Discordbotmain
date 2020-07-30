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
                        deny: ['SEND_MESSAGES'],
                    },
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
                        deny: ['SEND_MESSAGES'],
                    },
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
                        deny: ['SEND_MESSAGES'],
                    },
                ],
            })
            console.log("verify log was created")
            message.channel.send("verifylog was created").then(msg => msg.react("✅"));
        }
    }
}