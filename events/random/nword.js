module.exports=async(msg)=>{
    const swearwords = ['nigga', 'nigger', 'Nigga', 'n i g g a', 'NIGGA', 'n i g g e r']
    const warns = require('../../models/warns')
    msg.delete();
        warns.findOne({ Guild: msg.guild.id, User: msg.author.id }, async (err, data) => {
            if (err) console.log(err)
            if (!data) {
                let newWarns = new warns({
                    User: msg.author.id,
                    Guild: msg.guild.id,
                    Warns: [
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
                console.log(msg.content)
            } else {
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
                console.log(msg.content)
                if (data.Warns.length >= 3) {
                    const mention = msg.mentions.members.first()
                    msg.channel.send(`${msg.author} received 3 warnings or more, banned and has been deleted from the database`)
                    msg.member.ban({ reason: "Recieved 3 warnings" })
                    const Bembed = new MessageEmbed()
                        .setTitle('Ban Hammer')
                        .setDescription(`You were banned!`)
                        .addField('Reason', "Banned for getting 3 warnings")
                        .setThumbnail(msg.guild.iconURL())
                        .setColor(0xd5eb34)
                        .setFooter(msg.guild.name);
                    msg.author.send(Bembed);
                    warns.findOneAndDelete({
                        User: msg.author.id,
                        Guild: msg.guild.id
                    }, (err, res) => {
                        if (err) console.log('Please check and make sure the data was deleted i recieved a error!')
                        console.log(`User with ID ${msg.author.id} has been deleted from the Database`)
                    })
                }
            }
        })
}