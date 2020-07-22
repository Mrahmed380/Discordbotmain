const married = require('../../models/marry')
module.exports={
    divorce: 'divorce',
    description: 'divorce some random bum',
    usage: 'divorce',
    dm: false,
    timeout: 5000,
    perms: 'Send Messages',
    run: async(bot,message,args)=>{
        moneys.findOne({ User: message.author.id }, async (err, data) => {
            if (err) console.log(err)
            if (!data) {
                message.channel.send('You arent even married ¯\\_(ツ)_/¯')
            } else {
                console.log(data)
                data.deleteOne()
                message.channel.send('divorced!')
                console.log(data)
            }
        }
        )
    }

}