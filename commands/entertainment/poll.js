const { Client , MessageEmbed } = require('discord.js');
module.exports={
    name: 'poll',
    description: 'Sends a poll for the guild to react to',
    category: 'entertainment',
    usage: 'e!poll <Your poll>',
    run: async(bot,message,args)=>{
        message.delete();
        let msArgs = args.slice(1).join(" ");
        const Pembed = new MessageEmbed()
        const YPembed = MessageEmbed()
        .setColor(0x119e32)
        .setTitle('Poll')
        .setDescription("📋" + msArgs)
        .setFooter("Poll from: " + message.author.tag)
        .setThumbnail(message.author.displayAvatarURL())
        message.channel.send(YPembed).then(messageReaction => {
            messageReaction.react("✅")
             messageReaction.react("❌")
        })
        if(!args[1]){
            message.channel.send(Pembed);         
        }
    }
}