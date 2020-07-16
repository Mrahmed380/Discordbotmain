const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://SupremeERG:Ethang0508@supremeerg-tcd25.mongodb.net/Data?retryWrites=true&w=majority',{
    useUnifiedTopology: true,
    useNewUrlParser: true,
});
const config = require('./config.json')
const Discord = require('discord.js');
const bot = new Discord.Client();
const { Client, MessageEmbed } = require('discord.js');
const suggestionID = Math.floor(Math.random() * 10000000 + 21);
const fs = require('fs');
const { measureMemory } = require('vm');
const { contains } = require('cheerio');
const { id } = require('common-tags');
const ms = require('ms');
bot.commands = new Discord.Collection();
bot.aliases = new Discord.Collection();
bot.categories = fs.readdirSync("./commands/");
["command"].forEach(handler=>{
    require(`./handler/${handler}`)(bot);
})
const moment = require('moment');
const hb = require('hastebin-generator');

var twitch = 'Hey, heres a link to ERG//s twitch channel! https://www.twitch.tv/supremeerg'
var money = 'Hey, I would appreciate if you gave me all your money.😁 PayPal.Me/717163'
var CACC = ' Cracked accounts:https://bit.ly/2XeIOKW'
var server = 'Hey heres a invite to my recovery server! https://discord.gg/rVFJ3Vg For more details DM ERG#1703'
var binv = 'https://discord.com/api/oauth2/authorize?client_id=710420335509504012&permissions=8&scope=bot'
var usertickets = new Map();


bot.on('ready', () =>{
    console.log('This bot is online!');
    bot.user.setActivity('e!botinfo');
})

bot.on('guildMemberAdd' , member =>{
    const channel = member.guild.channels.cache.find(channel => channel.name === "『🤘🏻』new-clients");
    if(!channel) return;
    const Wembed = new Discord.MessageEmbed()
    .setTitle('Welcome')
    .addField('ERGs Recoverys' , `Welcome to ERGs Recoverys, ${member}`)
    .addField('Verification' , 'Please Verify your self to get accest to the rest of the channel.')
    .setFooter('Make your self at home!')
    .setThumbnail(`${member.user.displayAvatarURL()}`)
    .setColor(0xba0de0);
    channel.send(Wembed);
    
});
bot.on('guildMemberRemove' , member =>{
    const channel = member.guild.channels.cache.find(channel => channel.name === "『😭』good-bye");
    if(!channel) return
    let Gootby= [
        "Another day another lost soldier...",
        "And this server was just starting to get fun",
        "I guess hes not a fan of a lot of money in GTA",
    ]
    let colors = [
        "#e05819",
        "#f51b1b",
        "#f5601b",
        "#b33900"
    ]
    let ColerWheel = colors[Math.floor(Math.random()*(colors.length))]
    let WordWheel = Gootby[Math.floor(Math.random()*(Gootby.length))]
    const Lembed = new Discord.MessageEmbed()
    .setTitle(`Good bye ${member.user.tag}`)
    .addField('ERG Recoverys' , WordWheel)
    .setThumbnail(`${member.user.displayAvatarURL()}`)
    .setColor(ColerWheel)
    .setFooter(`Member Count:${member.guild.memberCount}`)
    channel.send(Lembed)
})


bot.on('message', (message) => {
    const Aembed = new Discord.MessageEmbed()
    .setTitle('Suggestion')
    .addField('status' , 'Your suggestion has been approved!✅ Thanks for sharing!')
    .setColor(0x119e32)
    .setFooter(message.content.slice (32));

    const Rembed = new Discord.MessageEmbed()
    .setTitle('Suggestion')
    .addField('status' , 'Your suggestion has been rejected😢:(')
    .setFooter(message.content.slice (31))
    .setColor(0xfc0303);

const msg = message.content.toLowerCase();

    if (message.author.bot) return;

const mention = message.mentions.users.first();

    if (msg.startsWith (config.prefix + "approve")) {
        if (mention == null) { return; }
        message.delete();
        const mentionMessage = message.content.slice (9);
        mention.send (Aembed);
        message.channel.send('Message sent!')
        console.log('message approved');
    };
    if (msg.startsWith (config.prefix + "reject")) {
        if (mention == null) { return; }
        message.delete();
        const mentionMessage = message.content.slice (8);
        mention.send (Rembed)
        message.channel.send('Message Sent!')
        console.log('Message rejected');
    };

});


bot.on('message' , async message=>{
    if(message.author.bot) return;
    if(!message.content.startsWith(config.prefix)) return;
    if(!message.guild) return;
    if(!message.member) message.member = await message.guild.fetchMember(message);
    const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
    const cmd = args.shift().toLowerCase();
    if(cmd.length == 0 ) return;
    const command = bot.commands.get(cmd)
    if(command) command.run(bot,message,args)
})




bot.on('message' , async msg=>{
    if(msg.channel.id === '714428169691725915') {
        await msg.delete();
    }
    if(msg.author.bot) return;
    if(msg.content.toLowerCase() === 'e!verify' && msg.channel.id === '714428169691725915')
    {
        const role = msg.guild.roles.cache.get('730608207067742310');
        if (role) {
            msg.delete();
            msg.member.roles.add(role);
            console.log('Role added, message deleted!')
            const Vembed = new Discord.MessageEmbed()
            .setTitle('Verification')
            .addField('Status' , 'You were succesfully verified in ERGs Recoverys')
            .setFooter(msg.author.tag)
            .setThumbnail(msg.author.displayAvatarURL())
            .setColor(0x119e32);
            msg.author.send(Vembed);
            const VCHember = new Discord.MessageEmbed()
            .setTitle('Verification')
            .addField('Succesful Verification', `${msg.author}` + ' has succesfully verified!')
            .setColor(0x824673);
            bot.channels.cache.get('723153779297615953').send(VCHember);           
        } else {
            msg.author.send('There was a error verifying you in ERGs Recoverys')
        }
    };
    const Tembed = new Discord.MessageEmbed()
    .setTitle('Create a support/report ticket')
    .setDescription('You have opened support ticket! Please wait for a server admin or moderator to open your ticket.')
    .setColor(0xfc0303)
    .setFooter('Note: if you dont see the channel scroll up...')
    .setAuthor(msg.author.tag , msg.author.displayAvatarURL);
    const channame = "ticket-" + `${msg.author.username}`;


    const tname = msg.author.id;
    const ctname = "t-" + tname;
    if(msg.author.bot) return;
    let regex = new RegExp(/(t-[0-9]+)/);
    let channelName = msg.channel.name;

    if(msg.content.toLowerCase().startsWith("e!cticket") && regex.test(channelName) && msg.member.roles.cache.has('730608207067742310')) {
        console.log("Delete Channel");
        msg.channel.delete().then(console.log('Ticket closed and channel deleted'))
        msg.guild.owner.send('Your clients ticket was closed hopefully this helped them!😊')
        const fetchedmessages = await msg.channel.messages.fetch({ limit: 100 })
        var formattedMsgs = fetchedmessages.map(m => `[${moment(m.createdAt).format()}] ${m.author.tag}: ${m.content}\n`)
        hb(formattedMsgs.join(""), 'js').then(r => {
            msg.author.send(`Succesfully closed ticket and archived messages: ${r} - chat transcript`) 
        }).catch(e => {
            if(e) return msg.channel.send('There was a error archiving the messages!')
        })
    };
    
    









    
    
    
    





    if(msg.author.bot) return;
    if(msg.content.toLowerCase().startsWith('e!stats')) {
        const args = msg.content.split(' ');
        console.log(args);
        if(args.length > 2) {
            msg.channel.send('Incorrect Usage: e!stats | e!stats @User | e!stats self');
        } else if(args.length === 2) {
            const memberM = msg.mentions.members.first();
            const STembed = new MessageEmbed()
            .setAuthor(`${memberM.user.tag} (${memberM.id})`, memberM.user.displayAvatarURL())
            .setThumbnail(memberM.user.displayAvatarURL())
            .addField('Created on' , memberM.user.createdAt.toLocaleString(), true)
            .addField('Joined Server on' , memberM.joinedAt, true)
            .addField('Player is Kickable' , memberM.kickable , false)
            .addField('Player is Banable' , memberM.bannable, false)
            .addField('Prescence' , memberM.presence.status, false)
            .setDescription(`${memberM.roles.cache.map(role => role.toString()).join(' ')}`)
            msg.channel.send(STembed);
            } else {
                const { guild } = msg;
                const GSembed = new MessageEmbed()
            .setAuthor(`${guild.name} (${guild.id})`, guild.iconURL())
            .setThumbnail(guild.iconURL())
            .addField('Created on' , guild.createdAt.toLocaleString(), true)
            .addField('Guild Owner' , guild.owner.user.tag)
            .addField('Total Members' , guild.members.cache.filter(member => !member.user.bot).size)
            .addField('Total Bots' , guild.members.cache.filter(member => member.user.bot).size)
            .addField('Total Channels' , guild.channels.cache.size)
            .setDescription(`${guild.roles.cache.map(role => role.toString()).join(' ')}`);
            msg.channel.send(GSembed);
            

            }

        }



    const swearwords = ['nigga' , 'nigger', 'Nigga', 'n i g g a', 'NIGGA', 'n i g g e r']
    const warns = require('./models/warns')
    if(swearwords.some(word => msg.content.includes(word)) ) {
        msg.delete();
        warns.findOne({ Guild: msg.guild.id, User: msg.author.id },async(err, data) => {
            if(err) console.log(err)
            if(!data){
                let newWarns = new warns({
                    User: msg.author.id,
                    Guild: msg.guild.id,
                    Warns:[
                        {
                            Moderator: bot.user.id,
                            Reason: "Using racial slurs"
                        }
                    ]
                })
                newWarns.save()
                const SWembed = new Discord.MessageEmbed()
                .setTitle('Racial slurs are not allowed!')
                .setDescription('Im sorry to say but you have recieved a warning, three warnings and your out.')
                .setColor(0xb8b8db)
                .setThumbnail(msg.author.displayAvatarURL())
                .setFooter("Warning " + Math.floor(Math.random() * 0 + 1) + "/3");
                msg.channel.send(SWembed)
            }else{
                const SWembed = new Discord.MessageEmbed()
                .setTitle('Racial slurs are not allowed!')
                .setDescription('Im sorry to say but you have recieved a warning, three warnings and your out.')
                .setColor(0xb8b8db)
                .setThumbnail(msg.author.displayAvatarURL())
                .setFooter("Warning " + Math.floor(data.Warns.length + 1) + "/3");
                msg.channel.send(SWembed)
                data.Warns.unshift({
                    Moderator: bot.user.id,
                    Reason: "Using racial slurs"
                })
                data.save()
                console.log(data.Warns)
                if(data.Warns.length >= 3) {
                    const mention = msg.mentions.members.first()
                    msg.channel.send(`${msg.author} received 3 warnings or more, banned and has been deleted from the database`)
                    msg.member.ban({ reason: "Recieved 3 warnings"})
                    warns.findOneAndDelete({
                        User: msg.author.id,
                        Guild: msg.guild.id
                    }, (err, res) => {
                        if(err) console.log('Please check and make sure the data was deleted i recieved a error!')
                        console.log(`User with ID ${msg.author.id} has been deleted from the Database`)
                    })
                }
            }
        })
        
        
    }
    
    
    
    
    
    let args = msg.content.substring(config.prefix.length).split(" ");



    switch(args[0]){
        case 'menu':
            msg.channel.send('ERG currently uses, impulse VIP!')
            break;
        case 'prices':
            msg.channel.send('All recoverys are $3-$35, for more info go to #『💸』𝗣𝗿𝗶𝗰𝗲𝘀')
            break;
        case 'sells':
            msg.channel.send('ERG has made 5 sells so far, P.S 𝔗𝔥𝔢 𝔰𝔱𝔬𝔯𝔢 𝔦𝔰 𝔰𝔱𝔦𝔩𝔩 𝔬𝔭𝔢𝔫...🌎 🌞🌙')
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
        case 'inv':
            if(msg.channel.id === '697343291825455131') {
                await msg.delete();
            }
            msg.channel.send('@everyone Make sure you invite your friends. We give *FREE*  recoverys every milestone!')
            break;
        case 'serverjoin':
            msg.reply(server)
            break;
        case 'botinv':
            msg.channel.send(binv)
            break;
        case 'suggest':
            let mssArgs = args.slice(1).join(" ");
            const DMembed = new Discord.MessageEmbed()
            .setTitle('Suggestion')
            .addField('Suggestion Info' , 'Your suggestion has been submitted! In order for your suggestion to be accepted it must have more ✅ votes and then checked by a mod or admin.')
            .setFooter(msg.author.tag)
            .setColor(0xead611)
            msg.author.send(DMembed)
            const sembed = new Discord.MessageEmbed()
            .setTitle('Suggestion')
            .addField('New Suggestion from:', msg.author.tag)
            .setColor(0x119e32)
            .addField('Suggestion' , mssArgs)
            .addField('suggestion ID' , Math.floor(Math.random() * 10000000 + 5))
            .setFooter('Please wait while a moderator or admin rejects or accepts your suggestion. (note check your DMs.)')
            msg.channel.send(sembed).then(messageReaction => {
                messageReaction.react("✅")
                messageReaction.react("❌")
            })
            break;
        case 'hgames':
            const Hembed = new Discord.MessageEmbed()
            .setTitle('Hunger Games')
            .setThumbnail(msg.guild.iconURL)
            .addField('Recovery' , 'Hunger games tourneys happen every 30 members so invite your friends!')
            .addField('Prize' , 'Free Basic Recovery')
            .addField('Total members' , msg.guild.members.cache.filter(member => !member.user.bot).size)
            .setColor(0x119e32);
            msg.channel.send(Hembed)
            break;
        case 'smsg':
            msg.delete()
            const Smention = msg.mentions.users.first();
            const SDembed = new Discord.MessageEmbed()
            .setTitle("Message from " + msg.author.tag)
            .addField("Message" , "```" + msg.content.slice (29) + "```");
            Smention.send(SDembed)
            //if(!args.slice(1).join(" ")) return msg.channel.send("You did not include a message for the user");
            break;



        
    }
});
bot.on('message', async message=>{
    if(message.channel.id === '702601747843252295') {
        if(message.author.bot) return console.log('not deleted (author is bot)');
        message.delete({ timeout: 2000}), console.log('Message deleted')
    }
})
//PUT A CURLY BRACKET BETWEEN THE NORMAL BRACKET AND PERENTHISIS ABOVE ME WHEN U FIX PURGE COMMAND 
bot.login(process.env.token);
