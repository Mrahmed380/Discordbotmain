const { Client , MessageEmbed } = require('discord.js');
module.exports={
    name: 'methods',
    description: 'Payment methods for Recovery Service',
    category: 'info',
    usage: 'e!methods',
    perms: 'Send Messages',
    run: async(bot,message,args)=>{
        let PayApp = [
            "#18f051",
            "#006eff"
        ]
        let ColerWheel = PayApp[Math.floor(Math.random()*(PayApp.length))]
        const Membed = new MessageEmbed()
        .setTitle('Payment Methods and Game')
        .setDescription(`PayPal - PayPal.Me/717163 https://PayPal.Me/717163 \nCashapp - $EthanGartica https://cash.app/$EthanGartica `)
        .addField('GTA Copy' , 'ERG only accepts Steam and Epic copies of Grand Theft Auto 5')
        .setColor(ColerWheel)
        .setFooter('ERG#1703');
        message.channel.send(Membed)
    }
}