const { Client , MessageEmbed } = require('discord.js');
const warns = require('../../models/warns')

module.exports={
    name: 'warn',
    description: 'Warns a user',
    category: 'guild',
    usage: 'dont use under development',
    run: async(bot,message,args)=>{
        let user = message.mentions.users.first()
        if(!user) return message.channel.send('You did not mention a user!')
        if(!args.slice(1).join(" ")) return message.channel.send('You did not give a reason')
        warns.findOne({ Guild: message.guild.id, User: user.id },async(err, data) => {
            if(err) console.log(err)
            if(!data){
                let newWarns = new warns({
                    User: user.id,
                    Guild: message.guild.id,
                    Warns:[
                        {
                            Moderator: message.author.id,
                            Reason: args.slice(1).join(" ")
                        }
                    ]
                })
                newWarns.save()
                const Wembed = new MessageEmbed()
                .setTitle('Warning')
                .setDescription(`${user.tag} has been warned for ${args.slice(1).join(" ")}.`)
                .setColor('RANDOM')
                .setFooter(`${user} has 1 warn.`)
                message.channel.send(Wembed)
            }else{
                data.Warns.unshift({
                    Moderator: message.author.id,
                    Reason: args.slice(1).join(" ")
                })
                data.save
                const WWembed = new MessageEmbed()
                .setTitle('Warning')
                .setDescription(`${user.tag} has been warned for ${args.slice(1).join(" ")}.`)
                .setColor('RANDOM')
                .setFooter(`${user} has ${data.Warns.length} warns.`)
                message.channel.send(WWembed)
            }
        })
    }
}