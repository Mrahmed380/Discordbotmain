const MSGembed = new Discord.MessageEmbed()
    .setTitle("Custom Message from " + message.author.tag)
    .addField('Message' , message.content.slice (9));