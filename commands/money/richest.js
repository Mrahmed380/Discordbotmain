const money = require('../../models/money');
module.exports = {
    //name: 'rich',
    description: '`Try` to rob a user',
    usage: 'rob <@user>',
    category: 'money',
    dm: false,
    timeout: 12000,
    perms: 'Send Messages',
    run: async (bot, message, args) => {
        const memIDs = message.guild.members.fetch(mem => mem.id);
        //fetch all the members id
        money.findOne({ User: memIDs }, async (err, data) =>{
            if(err) console.log(err)
            if(!data) return console.log("no data this is not how you fetch");
            var formattedMsgs = data.Money.map(m => `${m},then`)
            console.log(formattedMsgs);
        })
    }
}