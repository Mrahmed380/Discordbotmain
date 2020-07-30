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
        if (guild.parent.cache.find(c => c.name === 'mutelog')) {
            console.log('channel exists with the name "mutelog"');
            message.channel.send('Mutelog already exists so it wasnt created').then(msg => msg.reactd("❌"))
        } else {
            guild.channels.create('Loging', {
                type: 'parent',
                permissionOverwrites: [
                    {
                        id: message.guild.id,
                        deny: ['SEND_MESSAGES'],
                    },
                ],
            })
            message.channel.send("Mutelog was created").then(msg => msg.react("✅"));
        }
    }
}