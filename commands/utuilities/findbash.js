const bashes = require('../../models/bash')
const bash = require('../../models/bash')
const { MessageEmbed } = require('discord.js')
module.exports={
    name: 'findbash',
    description: 'find custom db file',
    category: 'utilities',
    usage: 'findbash <title>',
    timeout: 5000,
    perms: 'Send Messages',
    run: async(bot,message,args)=>{
        let title = args[0]
        if(!title) return message.channel.send("You need to specify the title")
        bashes.findOne({ User: message.author.id, Title: title },async(err, data) => {
            if(err) console.log(err)
            if(!data){
                message.channel.send(`I could not find **${title}**!`)
            }else{
                const embed = new MessageEmbed()
                .setTitle("Bash Doc")
                .setDescription(`${data.Title}\nContent: ${data.Content}\nFrom: <@${data.User}>`)
                .setColor('RANDOM')
                message.channel.send(embed)
                }
            }
        
        )

    }
}