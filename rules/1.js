const { run } = require("../commands/guild/rules.1-11");

module.exports={
    name: '1',
    run: async(bot,message,args)=>{
        message.channel.send(`1. No backstage recruiting, this = permanent ban`)
    }
}
