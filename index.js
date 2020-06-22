const Discord = require('discord.js');
const bot = new Discord.Client();
const token = 'NzEwNDIwMzM1NTA5NTA0MDEy.XtyXpw.9JzvSnL0gUjbKHaZApoXb9xRzIM';
const colors = require("./colors.json");
const PREFIX = 'e!';
const { Client, MessageEmbed } = require('discord.js');
const suggestionID = Math.floor(Math.random() * 10000000 + 21);


var botinfo = 'Version 1.4.6, Created by ERG#1703 (bot is updated once a week)'
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

    if (msg.startsWith (PREFIX + "approve")) {
        if (mention == null) { return; }
        message.delete();
        const mentionMessage = message.content.slice (9);
        mention.send (Aembed);
        message.channel.send('Message sent!')
        console.log('message approved');
    };
    if (msg.startsWith (PREFIX + "reject")) {
        if (mention == null) { return; }
        message.delete();
        const mentionMessage = message.content.slice (8);
        mention.send (Rembed)
        message.channel.send('Message Sent!')
        console.log('Message rejected');
    };

});







bot.on('message' , async msg=>{
    if(msg.channel.id === '714428169691725915') {
        await msg.delete();
    }
    if(msg.author.bot) return;
    if(msg.content.toLowerCase() === 'e!verify' && msg.channel.id === '714428169691725915')
    {
        const role = msg.guild.roles.cache.get('697343291825455124');
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

    if(msg.content.toLowerCase().startsWith("e!cticket") && regex.test(channelName) && msg.member.hasPermission('VIEW_CHANNEL')) {
        console.log("Delete Channel");
        msg.channel.delete().then(console.log('Ticket closed and channel deleted'))
        msg.author.send('Your ticket was succesfully deleted. Thanks for contacting staff!')
        msg.guild.owner.send('Your clients ticket was closed hopefully this helped them!😊')
    };
    const args2 = msg.content.split(' ');
    const Mention = msg.mentions.members.first();
    const ID = msg.content.slice(7);












    if(msg.content.toLowerCase().startsWith('e!ban')) {
        if(!msg.member.hasPermission('ADMINISTRATOR')) {
            msg.channel.send('You dont have permission to use this command');
        }
        if(!Mention.bannable) {
            msg.channel.send('You can not ban this user!') 
        } else {
            const Bembed = new Discord.MessageEmbed()
            .setTitle('Ban Hammer')
            .setDescription(`${msg.author} just banned yo ass!`)
            .addField('Reason' , msg.content.slice(26))
            .setThumbnail(msg.guild.iconURL())
            .setColor(0xd5eb34)
            .setFooter(msg.guild.name);
            Mention.send(Bembed);
            Mention.ban();
            msg.channel.send(`${Mention} was banned!`)
            
        }
    }
    if(msg.content.toLowerCase().startsWith('e!unban')) {
        if(!msg.member.hasPermission('ADMINISTRATOR')) {
            msg.channel.send('You dont have permission to unban people!')
        } else {
            msg.guild.members.unban(ID)
            msg.channel.send(`The user was unbanned!`)
        }
    }
    if(msg.content.toLowerCase().startsWith('e!kick')) {
        if(!msg.member.hasPermission('ADMINISTRATOR')) {
            msg.reply('You need administrator to use this command!')
        } else {
            Mention.send('You have been kicked from ' + (msg.guild.name))
            Mention.kick();
            msg.channel.send(`${Mention} was kicked from the server!`)
        }
    }










    
    
    
    





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
        if(msg.content.toLowerCase().startsWith('e!statme')) {
            const args = msg.content.split(' ');
        console.log(args);
        if(args.length > 2) {
            msg.channel.send('Incorrect Usage: e!stats | e!stats @User | e!stats self');
        } else if(args.length === 2) {
            const STSembed = new MessageEmbed()
            .setAuthor(`${msg.author.tag} (${msg.author.tag.id})`, msg.author.displayAvatarURL())
            .setThumbnail(msg.author.user.displayAvatarURL())
            .addField('Created on' , msg.author.createdAt.toLocaleString(), true)
            .addField('Joined Server on' , msg.author.joinedAt, true)
            .addField('Player is Kickable' , msg.author.kickable , false)
            .addField('Player is Banable' , msg.author.bannable, false)
            .addField('Prescence' , msg.author.presence.status, false)
            .setDescription(`${msg.author.roles.cache.map(role => role.toString()).join(' ')}`)
            msg.channel.send(STSembed);
        }}



    const swearwords = ['nigga' , 'nigger']
    if(swearwords.some(word => msg.content.includes(word)) ) {
        msg.delete();
        const SWembed = new Discord.MessageEmbed()
        .setTitle('Racial slurs are not allowed!')
        .setDescription('Im sorry to say but you have recieved a warning, three warnings and your out.')
        .setColor(0xb8b8db)
        .setThumbnail(msg.author.displayAvatarURL())
        .setFooter("Warning " + Math.floor(Math.random() * 0 + 1) + "/3");
        msg.channel.send(SWembed)
    }
    
    
    
    
    
    let args = msg.content.substring(PREFIX.length).split(" ");



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
        case 'methods':
            msg.channel.send('We currently accept PayPal and Cashapp. We only take Epic and Steam copies of the game!')
            break;
        case 'stream':
            msg.reply(twitch)
            break;
        case 'ping':
            msg.reply('pong! This command is still under development!')
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
        case 'botinfo':
            const embed = new Discord.MessageEmbed()
            .setTitle('ALL COMMANDS + Bot info')
            .addField('commands' , 'menu, botinfo, prices, sells, moneydrop, stream, ping, cracked, serverjoin, botinv, methods, hgames, message @theUserYouWantToSendTo [The message you want to send to user], suggest, ticket, cticket [poll (Your message)], stats and [stats (@user)]. (prefix = e!)')
            .addField('Mod commands' , '[e!reject @user (Suggestion ID: 1234)], [e!approve @user (Suggestion ID: 1234)]')
            .setThumbnail(msg.author.displayAvatarURL())
            .addField('Information' , botinfo)
            .addField('Command Help', 'Use e!help to get help on any command!')
            .addField('Dedicated Server' , 'ERGs Recoverys')
            .setColor(0x119e32)            
            msg.channel.send(embed);
            break;
        case 'suggest':
            msg.delete()
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
        case 'poll':
            msg.delete();
            let msArgs = args.slice(1).join(" ");
            const Pembed = new Discord.MessageEmbed()
            .setColor()
            .setTitle("Poll")
            .setDescription("e!poll <Your poll> to make a simple yes or no poll")
            .setFooter(msg.author.tag);
            const YPembed = new Discord.MessageEmbed()
            .setColor(0x119e32)
            .setTitle('Poll')
            .setDescription("📋" + msArgs)
            .setFooter("Poll from: " + msg.author.tag)
            .setThumbnail(msg.author.displayAvatarURL())
            msg.channel.send(YPembed).then(messageReaction => {
                messageReaction.react("✅")
                messageReaction.react("❌")
            })
            if(!args[1]){
                msg.channel.send(Pembed);
                
            }
            break;
        case 'ticket':
            msg.delete();
            const yname = msg.author.username;
            const tname = msg.author.id;
            const ctname = "t-" + tname;
            if(msg.guild.channels.cache.find(ch => ch.name == ctname)) {
                msg.author.send('You alredy have a ticket open, go to your ticket channel and type e!cticket to close your current ticket!')
            }
            else{
                msg.guild.owner.send('Someone just made a ticket. Go respond!')
                msg.guild.channels.create(ctname , {
                    type: 'text' ,
                    permissionOverwrites: [
                        {
                            allow: 'VIEW_CHANNEL',
                            id: msg.author.id
                        },
                        {
                            deny: 'VIEW_CHANNEL',
                            id: msg.guild.id
                        },
                        {
                            allow: 'VIEW_CHANNEL',
                            id: msg.guild.roles.cache.get('713914961285349397')
                        },
                        {
                            allow: 'READ_MESSAGE_HISTORY',
                            id: msg.guild.roles.cache.get('713914961285349397')
                        },
                        {
                            allow: 'SEND_MESSAGES',
                            id: msg.guild.roles.cache.get('713914961285349397')
                        },
                        {
                            allow: 'SEND_MESSAGES',
                            id: msg.guild.roles.cache.get('697343291825455124')
                        }
    
                        
                    ]
                })
                console.log('ticket created.')
                msg.channel.send(Tembed)
            }
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
        case 'help':
            const HPembed = new Discord.MessageEmbed()
            .setTitle('Command Help')
            .addField('How to use' , 'Type e!help [command] to get help on specific command!')
            .setColor(0x34cceb);
            msg.channel.send(HPembed)
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
//PUT A CURLY BRACKET BETWEEN THE NORMAL BRACKET AND PERENTHISIS ABOVE ME WHEN U FIX PURGE COMMAND 
bot.login(process.env.token);
