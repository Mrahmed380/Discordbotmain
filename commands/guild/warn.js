const { Client , MessageEmbed } = require('discord.js');
const warns = require('../../models/warns')
var d = new Date,
dformat = [d.getMonth()+1,
       d.getDate(),
       d.getFullYear()].join('/')+' ';
module.exports={
    name: 'warn',
    description: 'Warns a user',
    category: 'guild',
    usage: 'e!warn <user> <reason>',
    perms: 'Moderator role',
    run: async(bot,message,args)=>{
        const modrole = message.guild.roles.cache.find(r => r.name === "Moderator")
        if(!message.member.roles.cache.has(modrole.id)) return message.channel.send('You need moderator role to warn people')
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
                .setFooter(`${user.username} has 1 warn.`)
                message.channel.send(Wembed)
            }else{
                data.Warns.unshift({
                    Moderator: message.author.id,
                    Reason: args.slice(1).join(" "),
                    Date: dformat
                })
                data.save()
                console.log(data.Warns)
                const WWembed = new MessageEmbed()
                .setTitle('Warning')
                .setDescription(`${user.tag} has been warned for ${args.slice(1).join(" ")}.`)
                .setColor('RANDOM')
                .setFooter(`${user.username} has ${data.Warns.length} warns.`)
                message.channel.send(WWembed)
                if(data.Warns.length >= 3) {
                    const mention = message.mentions.members.first()
                    message.channel.send(`${user} received 3 warnings or more, banned and has been deleted from the database`)
                    mention.ban({ reason: "Recieved 3 warnings"})
                    warns.findOneAndDelete({
                        User: user.id,
                        Guild: message.guild.id
                    }, (err, res) => {
                        if(err) console.log('Please check and make sure the data was deleted i recieved a error!')
                        console.log(`User with ID ${user.id} has been deleted from the Database`)
                    })
                }
            }
        })
    }
}