const mongoose = require('mongoose');
mongoose.connect(process.env.MONGODB_URI, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
});
mongoose.connection.once('open', function () {
    console.log('connected to mongodb')
}).on('error', function () {
    console.log("couldnt connect to mongodb")
});
const config = require('./config.json')
const Discord = require('discord.js');
const bot = new Discord.Client();
const { Client, MessageEmbed } = require('discord.js');
const fs = require('fs');
const ms = require('ms');
bot.commands = new Discord.Collection();
bot.snipes = new Discord.Collection();
bot.aliases = new Discord.Collection();
bot.categories = fs.readdirSync("./commands/");
["command"].forEach(handler => {
    require(`./handler/${handler}`)(bot);
})
const moment = require('moment');
const hb = require('hastebin-generator');
var twitch = 'Hey, heres a link to ERG//s twitch channel! https://www.twitch.tv/supremeerg'
var CACC = ' Cracked accounts:https://bit.ly/2XeIOKW'
var server = 'Hey heres a invite to my recovery server! https://discord.gg/rVFJ3Vg For more details DM ERG#1703'
var binv = 'https://discord.com/api/oauth2/authorize?client_id=710420335509504012&permissions=8&scope=bot'

bot.on('ready', () => {
    console.log(`${bot.user.username} is online!`);
    bot.user.setActivity('e!botinfo ', { type: "STREAMING", url: "https://twitch.tv/supremeerg" });
})

bot.on('guildMemberAdd', (member) => {
    require('./events/guildMemberAdd')(member);
});
bot.on('guildMemberRemove', (member) => {
    require('./events/guildMemberRemove')(member);
})


bot.on('message', (message) => {
    const Aembed = new Discord.MessageEmbed()
        .setTitle('Suggestion')
        .addField('status', 'Your suggestion has been approved!✅ Thanks for sharing!')
        .setColor(0x119e32)
        .setFooter(message.content.slice(32));

    const Rembed = new Discord.MessageEmbed()
        .setTitle('Suggestion')
        .addField('status', 'Your suggestion has been rejected😢:(')
        .setFooter(message.content.slice(31))
        .setColor(0xfc0303);

    const msg = message.content.toLowerCase();

    if (message.author.bot) return;

    const mention = message.mentions.users.first();

    if (msg.startsWith(config.prefix + "approve")) {
        if (mention == null) { return; }
        message.delete();
        const mentionMessage = message.content.slice(9);
        mention.send(Aembed);
        message.channel.send('Message sent!')
        console.log('message approved');
    };
    if (msg.startsWith(config.prefix + "reject")) {
        if (mention == null) { return; }
        message.delete();
        const mentionMessage = message.content.slice(8);
        mention.send(Rembed)
        message.channel.send('Message Sent!')
        console.log('Message rejected');
    };

});

const used = new Map();
const Duration = require('humanize-duration');
bot.on('message', async message => {
    const prefix = require('./models/config')
    if (message.channel.type == 'dm') {
        if (message.author.bot) return;
        if (!message.content.startsWith(config.prefix)) return;
        //if (!message.member) message.member = await message.guild.fetchMember(message);
        const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
        const cmd = args.shift().toLowerCase();
        if (cmd.length == 0) return;
        let command = bot.commands.get(cmd)
        if (!command) command = bot.commands.get(bot.aliases.get(cmd));
        if (command) {
            if (command.status == false) {
                console.log('command is off')
                return message.channel.send("This command is currently under maintenance!")
            }
            if (command.dm == false && message.channel.type == 'dm') {
                console.log('command is guild only')
                return message.channel.send('This command is only available in a server!!')
            }
            if (command.timeout) {
                let cooldown = used.get(`${message.author.id}${command.name}`)
                let remaining = Duration(cooldown - Date.now(), { units: ['h', 'm', 's', 'ms'], round: true })
                if (cooldown) {
                    console.log(`User is in timeout ${command.name}`)
                    console.log(command.name)
                    return message.reply(`you need to wait ***\`${remaining}!\`***`)
                } else {
                    console.log("put in time out")
                    used.set(`${message.author.id}${command.name}`, Date.now() + command.timeout)
                    setTimeout(() => {
                        used.delete(`${message.author.id}${command.name}`)
                        console.log(`deleted out of timeout for ${command.name} after ${ms(command.timeout)}`)
                    }, command.timeout);
                }
            }
            command.run(bot, message, args)
        }
    }
    prefix.findOne({ Guild: message.guild.id }, async (err, data) => {
        if (!data) {
            if (err) console.log(err)
            if (message.author.bot) return;
            if (!message.content.startsWith(config.prefix)) return;
            if (!message.member) message.member = await message.guild.fetchMember(message);
            const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
            const cmd = args.shift().toLowerCase();
            if (cmd.length == 0) return;
            let command = bot.commands.get(cmd)
            if (!command) command = bot.commands.get(bot.aliases.get(cmd));
            if (command) {
                if (command.status == false) {
                    console.log('command is off')
                    return message.channel.send("This command is currently under maintenance!")
                }
                if (command.dm == false && message.channel.type == 'dm') {
                    console.log('command is guild only')
                    return message.channel.send('This command is only available in a server!!')
                }
                if (command.timeout) {
                    let cooldown = used.get(`${message.author.id}${command.name}`)
                    let remaining = Duration(cooldown - Date.now(), { units: ['h', 'm', 's', 'ms'], round: true })
                    if (cooldown) {
                        console.log(`User is in timeout ${command.name}`)
                        console.log(command.name)
                        return message.reply(`you need to wait ***\`${remaining}!\`***`)
                    } else {
                        console.log("put in time out")
                        used.set(`${message.author.id}${command.name}`, Date.now() + command.timeout)
                        setTimeout(() => {
                            used.delete(`${message.author.id}${command.name}`)
                            console.log(`deleted out of timeout for ${command.name} after ${ms(command.timeout)}`)
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
            let command = bot.commands.get(cmd)
            if (!command) command = bot.commands.get(bot.aliases.get(cmd));
            if (command) {
                if (command.status == false) {
                    console.log('command is off')
                    return message.channel.send("This command is currently under maintenance!")
                }
                if (command.dm == false && message.channel.type == 'dm') {
                    console.log('command is guild only')
                    return message.channel.send('This command is only available in a server!!')
                }
                if (command.timeout) {
                    let cooldown = used.get(`${message.author.id}${command.name}`)
                    let remaining = Duration(cooldown - Date.now(), { units: ['h', 'm', 's', 'ms'], round: true })
                    if (cooldown) {
                        console.log(`User is in timeout ${command.name}`)
                        console.log(command.name)
                        return message.reply(`you need to wait ***\`${remaining}!\`***`)
                    } else {
                        console.log("put in time out")
                        used.set(`${message.author.id}${command.name}`, Date.now() + command.timeout)
                        setTimeout(() => {
                            used.delete(`${message.author.id}${command.name}`)
                            console.log(`deleted out of timeout for ${command.name} after ${ms(command.timeout)}`)
                        }, command.timeout);
                    }
                }
                command.run(bot, message, args)
            }
        }
    })
});


bot.on('message', async msg => {
    if (msg.channel.id === '714428169691725915') {
        await msg.delete();
    }
    if (msg.author.bot) return;
    if (msg.content.toLowerCase() === 'e!verify' && msg.channel.id === '714428169691725915') {
        const role = msg.guild.roles.cache.get('730608207067742310');
        if (role) {
            msg.delete();
            msg.member.roles.add(role);
            console.log('Role added, message deleted!')
            const Vembed = new Discord.MessageEmbed()
                .setTitle('Verification')
                .addField('Status', 'You were succesfully verified in ERGs Recoverys')
                .setFooter(msg.author.tag)
                .setThumbnail(msg.author.displayAvatarURL())
                .setColor(0x119e32);
            msg.author.send(Vembed);
            const VCHember = new Discord.MessageEmbed()
                .setTitle('Verification')
                .addField('Succesful Verification', `${msg.author}` + ' has succesfully verified!')
                .setColor(0x824673);
            bot.channels.cache.find(c => c.name === 'verifylog').send(VCHember);
        } else {
            msg.author.send('There was a error verifying you in ERGs Recoverys')
        }
    };

    const tname = msg.author.id;
    const ctname = "t-" + tname;
    if (msg.author.bot) return;
    let regex = new RegExp(/(t-[0-9]+)/);
    let channelName = msg.channel.name;

    if (msg.content.toLowerCase().startsWith("e!cticket") && regex.test(channelName) && msg.member.roles.cache.has('730608207067742310')) {
        console.log("Delete Channel");
        msg.channel.delete().then(console.log('Ticket closed and channel deleted'))
        msg.guild.owner.send('Your clients ticket was closed hopefully this helped them!😊')
        const fetchedmessages = await msg.channel.messages.fetch({ limit: 100 })
        var formattedMsgs = fetchedmessages.map(m => `[${moment(m.createdAt).format()}] ${m.author.tag}: ${m.content}\n`)
        hb(formattedMsgs.join(""), 'js').then(r => {
            msg.author.send(`Succesfully closed ticket and archived messages: ${r} - chat transcript`)
        }).catch(e => {
            if (e) return msg.channel.send('There was a error archiving the messages!')
        })
    };





    
    if (swearwords.some(word => msg.content.includes(word))) {
        require('./events/random/nword')(msg);
    }
    let args = msg.content.substring(config.prefix.length).split(" ");



    switch (args[0]) {
        case 'menu':
            msg.channel.send('ERG currently uses, impulse VIP!')
            break;
        case 'prices':
            msg.channel.send('All recoverys are $3-$35, for more info go to #『💸』𝗣𝗿𝗶𝗰𝗲𝘀')
            break;
        case 'sells':
            msg.channel.send('ERG has made 6 sells so far, P.S 𝔗𝔥𝔢 𝔰𝔱𝔬𝔯𝔢 𝔦𝔰 𝔰𝔱𝔦𝔩𝔩 𝔬𝔭𝔢𝔫...🌎 🌞🌙')
            break;
        case 'moneydrop':
            msg.channel.send('All money drop sessions are at 8:00 PM, UCT Central time!')
            break;
        case 'stream':
            msg.reply(twitch)
            break;
        case 'cracked':
            msg.reply('Always up to no good... dont tell anyone I gave you these. ' + CACC + '  Now dont expect them all to work.')
            msg.channel.send('More accounts will be linked soon...')
            break;
        case 'serverjoin':
            msg.reply(server)
            break;
        case 'botinv':
            msg.channel.send(binv)
            break;
        case 'hgames':
            const Hembed = new Discord.MessageEmbed()
                .setTitle('Hunger Games')
                .setThumbnail(msg.guild.iconURL)
                .addField('Recovery', 'Hunger games tourneys happen every 30 members so invite your friends!')
                .addField('Prize', 'Free Basic Recovery')
                .addField('Total members', msg.guild.members.cache.filter(member => !member.user.bot).size)
                .setColor(0x119e32);
            msg.channel.send(Hembed)
            break;
        case 'smsg':
            msg.delete()
            const Smention = msg.mentions.users.first();
            const SDembed = new Discord.MessageEmbed()
                .setTitle("Message from " + msg.author.tag)
                .addField("Message", "```" + msg.content.slice(29) + "```");
            Smention.send(SDembed)
            //if(!args.slice(1).join(" ")) return msg.channel.send("You did not include a message for the user");
            break;
    }
})
bot.on('message', async (message) => {
    let findme = ["Server_Prefix", "serverprefix", "ServerPrefix", "Server Prefix", "server prefix"]
    const prefix = require('./models/config')
    if (findme.some(word => message.content.includes(word))) {
        prefix.findOne({ Guild: message.guild.id }, async (err, data) => {
            if (err) console.log(err)
            if (!data) {
                message.channel.send(`Server prefix: \`e!\``)
            } else {
                message.channel.send(`Server prefix: \`${data.Prefix}\``)
            }
        })
    }

})
bot.on('message', async message => {
    if (message.channel.id === '702601747843252295') {
        if (message.author.bot) return console.log('not deleted (author is bot)');
        message.delete({ timeout: 2000 }), console.log('Message deleted')
    }
});
bot.on('messageDelete', async (message) => {
    require('./events/deleteMessage')(message);
})



bot.login(process.env.token);