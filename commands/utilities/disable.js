const server = require("../../models/server.config");
module.exports = {
    name: 'disable',
    category: 'utilities',
    usage: 'disable [command] [true/fals]',
    description: 'Disable a certain command!',
    perms: 'Admin',
    dm: false,
    run: async (bot, message, args) => {
        const admin = message.guild.roles.cache.find(r=>r.name==="Admin");
        if(!admin) return message.channel.send("You need to create a role named \"Admin\"");
        if(!message.member.roles.cache.has(admin.id)) return message.channel.send("You do not have permissions to disable commands!")
        if(!args[0]) return message.channel.send("You need to specify the command")
        if (args[0] == "disable") message.channel.send(':| You cannot disable the disable command |:');
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
                message.channel.send(`${args[0]} was disabled!`)
            } else{
                if(data.cmd == [{
                    disable: args[0]
                }]) return message.channel.send("This command is already disabled!")
                data.cmd.unshift({
                    disable: args[0]
                });
                message.channel.send(`${args[0]} was disabled!`)
                console.log(data)
            }
        })
    }
}