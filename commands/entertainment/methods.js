const { Client , MessageEmbed } = require('discord.js');
module.exports={
    name: 'methods',
    description: 'Payment methods for Recovery Service',
    category: 'entertainment',
    usage: 'e!methods',
    run: async(bot,message,args)=>{
        const Membed = new MessageEmbed()
        .setTitle('Payment Methods and Game')
        .setDescription(`PayPal - PayPal.Me/717163 https://PayPal.Me/717163 \nCashapp - $EthanGartica https://cash.app/$EthanGartica `)
        .addField('GTA Copy' , 'ERG only accepts Steam and Epic copies of Grand Theft Auto 5')
        .setColor('RANDOM')
        .setFooter('ERG#1703');
        message.channel.send(Membed)
    }
}