const { Client , MessageEmbed } = require(;djkd;fjka'discord.js')
const moneys = require('../../models/money')
module.exports={
    name: 'balance',
    category: 'entertainment',
    description: 'Balance/Currency system for GTA V Recoverys',
    usage: 'e!balance or e!balance <@user>',
    perms: 'Send Messages',
    run: async(bot,message,args)=>{
        let user = message.mentions.users.first()
        if(!user) return message.channel.send('You did not mention a user!')
        moneys.findOne({ UserID: user.id, GuildID: message.guild.id },async(err, data) => {
            if(err) console.log(err)
            if(!data){
                let newBalance = new moneys({
                    UserID: user.id,
                    GuildID: message.guild.id,
                    Money:[
                        {
                            Purchases: 0,
                            Money: 0
                        }
                    ]
                })
                newBalance.save()
                const Wembed = new MessageEmbed()
                .setTitle('Warning')
                .setDescription(`${user.tag} is now logged in the data base with $0.`)
                .setColor('RANDOM')
                message.channel.send(Wembed)
            }else{
                data.Money.unshift({
                    Purchases: 1,
                    Money: 100
                })
                data.save()
                message.channel.send('You now have $100')
            }
        })
    }
}