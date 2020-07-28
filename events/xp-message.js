module.exports=async(message)=>{
    const xp = require('../models/xp');
    xp.findOne({ User: message.author.id }, async (err, data) => {
        let xpNeeded = data.level * 50 + 500
        if(err) console.log(err);
        if(!data) {
            let newLevel = new xp({
                User: message.author.id,
                xp: 100,
                level: 1,
            })
            newLevel.save();
            message.channel.send('You are level 0 and have no xp')
        } else {
            let oldxp = data.xp;
            let newxp = parseInt(oldxp) + parseInt(100);
            data.xp = newxp;
            data.save();
            console.log('new xp on message')
            if(data.xp = xpNeeded) {
                let oldlvl = data.level;
                data.level = parseInt(oldlvl) + parseInt(1);
            }
        }
    })
}