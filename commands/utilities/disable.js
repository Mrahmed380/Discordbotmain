const server = require("../../models/server.config");
module.exports = {
    name: 'disable',
    category: 'utilities',
    usage: 'disable [command] [true/fals]',
    description: 'Disable a certain command!',
    perms: 'Admin',
    dm: false,
    run: async (bot, message, args) => {
        let cmd = bot.commands.get(args[0].toLowerCase());
        if(!cmd) return message.channel.send("That is not a valid command!")
        server.findOne({ Guild: message.guild.id }, async (err, data) => {
            if (!data) {
                let newDisable = new server({
                    cmd: {
                        disable: args[0]
                    },
                    Guild: message.guild.id,
                });
                newDisable.save();
            }
        })
    }
}