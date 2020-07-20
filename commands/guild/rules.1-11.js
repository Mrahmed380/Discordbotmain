const { MessageEmbed } = require('discord.js')
const fs = require('fs')
const rules = require('../../rules/')
bot.categories = fs.readdirSync("../../rules");
module.exports = {
    timeout: 5000,
    status: true,
    name: 'rules',
    descriptions: 'Shows a rule of choice for members',
    category: 'guild',
    perms: 'Send Messages',
    run: async (bot, message, args) => {
        let rulenum = args[0]
        if(!rulenum) return message.channel.send('You did not give a rule number so here is the full page!\nhttps://hastebin.com/vofoceqoji.coffeescript')
        const prefix = require('./models/config')
        prefix.findOne({ Guild: message.guild.id }, async (err, data) => {
            if (!data) {
                if (err) console.log(err)
                if (message.author.bot) return;
                if (!message.content.startsWith(config.prefix)) return;
                if (!message.guild) return;
                if (!message.member) message.member = await message.guild.fetchMember(message);
                const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
                const cmd = args.shift().toLowerCase();
                if (cmd.length == 0) return;
                const command = bot.commands.get(cmd)
                if (command) {
                    if(command.status == false) {
                        console.log('command is off')
                        return message.channel.send("This command is currently under maintenance!")
                    }
                    if (command.timeout) {
                        if (Timeout.has(`${message.author.id}${command.name}`)) {
                            console.log(`User put in time out for ${command.name}`)
                            return message.reply(`You can only use this command  every ${ms(command.timeout)}\n *every time you use the command before the timer ends it resets*!`)
                        } else {
                            console.log("put in time out")
                            Timeout.add(`${message.author.id}${command.name}`)
                            setTimeout(() => {
                                Timeout.delete(`${message.author.id}${command.name}`)
                            }, command.timeout);
                        }
                    }
                    command.run(bot, message, args)
                }
            } else {
                if (err) console.log(err)
                if (message.author.bot) return;
                if (!message.content.startsWith(data.Prefix)) return;
                if (!message.guild) return;
                if (!message.member) message.member = await message.guild.fetchMember(message);
                const args = message.content.slice(data.Prefix.length).trim().split(/ +/g);
                const cmd = args.shift().toLowerCase();
                if (cmd.length == 0) return;
                const rule = bot.rules.get(cmd)
                //if (command) command.run(bot, message, args)
                if (rule) {
                    if(rule.status == false) {
                        console.log('command is off')
                        return message.channel.send("This command is currently under maintenance!")
                    }
                    if (rule.timeout) {
                        if (Timeout.has(`${message.author.id}${rule.name}`)) {
                            console.log(`User put in time out for ${rule.name}`)
                            return message.reply(`You can only use this command  every ${ms(rule.timeout)}\n *every time you use the command before the timer ends it resets*!`)
                        } else {
                            console.log("put in time out")
                            Timeout.add(`${message.author.id}${rule.name}`)
                            setTimeout(() => {
                                Timeout.delete(`${message.author.id}${rule.name}`)
                                console.log(`${message.author.id} was removed from timeout command name: ${rule.name}`)
                            }, rule.timeout);
                        }
                    }
                    command.run(bot, message, args)
                }
            }
        })
        
    }
}