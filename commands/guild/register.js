const { Client , MessageEmbed } = require('discord.js');
const gtas = require('../../models/gta');

module.exports={
    name: 'register',
    description: 'Sets gta username in a data base so admins can access info',
    category: 'guild',
    usage: 'e!register <SocialClubUsername>',
    perms: 'Send Messages',
    run: async(bot,message,args)=>{
        let SC = message.content.slice(11)
        if(!SC) return message.channel.send('Please give us your Social Club username!')
        gtas.findOne({ UserID: message.author.id, GuildID: message.guild.id },async(err, data) => {
            if(err) console.log(err)
            if(!data){
                let newGta = new gtas({
                    GTA:[
                        {
                            SocialClub: SC
                        }
                    ],
                    UserID: message.author.id,
                    GuildID: message.guild.id,
                })
                newGta.save()
                const Wembed = new MessageEmbed()
                .setTitle('Social Club Registration')
                .setDescription(`${message.author.tag} has logged there username **${SC}**\nIf this is not your Social Club username/Gamertag run e!dregistry to delete the name out of the database`)
                .setColor('RANDOM')
                .setFooter(message.author.id)
                message.channel.send(Wembed)
            }else{
                const WWembed = new MessageEmbed()
                .setTitle('You already have been logged in the database!')
                .setDescription(data.map(d=>{
                    return d.GTA.map(w=>`\nSocial Club: ${w.SocialClub}\ne!dregistry if that is not your Social Club username`)
                }))
                .setColor('RANDOM')
                .setFooter(`Author ID: ${message.author.id}`)
                message.channel.send(WWembed)
            }
        })
    }
}