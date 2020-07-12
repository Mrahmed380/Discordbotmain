const { Client , MessageEmbed } = require('discord.js')
module.exports={
    name: 'ticket',
    description: 'Creates a support ticket',
    category: 'guild',
    usage: 'e!ticket',
    perms: 'Send Messages',
    run: async(bot,message,args)=>{
        message.delete();
            const yname = message.author.username;
            const tname = message.author.id;
            const ctname = "t-" + tname;
            if(message.guild.channels.cache.find(ch => ch.name == ctname)) {
                message.author.send('You alredy have a ticket open, go to your ticket channel and type e!cticket to close your current ticket!')
            }
            else{
                message.guild.owner.send('Someone just made a ticket. Go respond!')
                message.guild.channels.create(ctname , {
                    type: 'text' ,
                    permissionOverwrites: [
                        {
                            allow: 'VIEW_CHANNEL',
                            id: message.author.id
                        },
                        {
                            deny: 'VIEW_CHANNEL',
                            id: message.guild.id
                        },
                        {
                            allow: 'VIEW_CHANNEL',
                            id: message.guild.roles.cache.get('713914961285349397')
                        },
                        {
                            allow: 'READ_MESSAGE_HISTORY',
                            id: message.guild.roles.cache.get('713914961285349397')
                        },
                        {
                            allow: 'VIEW_CHANNEL',
                            id: message.guild.roles.cache.get('713914961285349397')
                        },
                        {
                            allow: 'SEND_MESSAGES',
                            id: message.guild.roles.cache.get('697343291825455127')
                        }
    
                        
                    ]
                })
                console.log('ticket created.')
                const Tembed = new MessageEmbed()
                .setTitle('Support ticket')
                .setDescription('You have created a support ticket!')
                .setColor('RANDOM')
                .setFooter('Scroll up if you dont see the ticket channel')
                message.channel.send(Tembed)
            }
    }
}