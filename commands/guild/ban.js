const { CLient, MessageEmbed, BaseManager, Guild } = require('discord.js');
const { category } = require('./ban');
module.exports={
    name: 'ban',
    category: 'guild',
    description: 'Bans any mentioned user',
    run: async(bot,message,args)=>{
        const Mention = message.mentions.members.first();
        if(msg.content.toLowerCase().startsWith('e!ban')) {
            if(!msg.member.hasPermission('ADMINISTRATOR')) {
                msg.channel.send('You need administrator to ban people!!')
            }
            if(!Mention.bannable) {
                msg.channel.send('You cannot ban this user!!!')
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
    }

}