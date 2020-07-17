const bashes = require('../../models/bash')
const bash = require('../../models/bash')
module.exports={
    name: 'bash',
    description: 'Store miscellaneous data in bot database',
    category: 'utilities',
    usage: 'bash <title> <string>',
    timeout: 60000,
    perms: 'Send Messages',
    run: async(bot,message,args)=>{
        let title = args[0]
        let content = args.slice(1).join(" ")
        if(!title) return message.channel.send("You need to specify the title")
        if(!content) return message.channel.send("You need to include content in the document!")
        bashes.findOne({ User: message.author.id, Title: title },async(err, data) => {
            if(err) console.log(err)
            if(!data){
                let newBash = new bashes({
                    User: message.author.id,
                    Title: title,
                    content: content
                })
                console.log(data)
                newBash.save()
                message.channel.send(`Data was saved! \`findbash <title>\` to find your document `)
            }else{
                message.channel.send(`I found **${data.Title}** in the database please name the document something else.`)
                }
            }
        
        )

    }
}