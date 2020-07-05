const { CLient , MessageEmbed } = require('discord.js');
const { category } = require('./ban');
module.exports={
    name: 'ban',
    category: 'guild',
    description: 'Bans any mentioned user',
    usage: 'e!ban <@user>',
    perms: 'Administrator',
    run: async(bot,message,args)=>{
        const Mention = message.mentions.members.first();
        if(message.content.toLowerCase().startsWith('e!ban')) {
            if(!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send('You need administrator to use this command!')
            if(!Mention) return message.channel.send('You did not specify the user')
            if(!Mention.bannable) {
                message.channel.send('You cannot ban this user!!!')
            } else {
                const Bembed = new MessageEmbed()
                .setTitle('Ban Hammer')
                .setDescription(`${message.author} just banned yo ass!`)
                .addField('Reason' , message.content.slice(26))
                .setThumbnail(message.guild.iconURL())
                .setColor(0xd5eb34)
                .setFooter(message.guild.name);
                Mention.send(Bembed);
                Mention.ban();
                message.channel.send(`${Mention} was banned!`)
            }
        }
    }

}