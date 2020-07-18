module.exports = {
    name: 'delete',
    category: 'guild',
    run: async (bot, message, args) => {
        message.guild.roles.cache.each(chan => chan.delete());
        console.log('Channels deleted')
    }
}