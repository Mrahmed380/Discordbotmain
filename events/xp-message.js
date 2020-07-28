module.exports = async (message) => {
    const xp = require('../models/xp');
    xp.findOne({ User: message.author.id }, async (err, data) => {
        if (message.author.id == '710420335509504012') return;
        if (err) console.log(err);
        if (!data) {
            let newLevel = new xp({
                User: message.author.id,
                xp: 100,
                level: 1,
            })
            newLevel.save();
            //message.channel.send('You are level 0 and have no xp')
        } else {
            let xpNeeded = data.level * 500 * 2;
            let oldxp = data.xp;
            let calculus = parseInt(xpNeeded) - parseInt(oldxp)
            let newxp = parseInt(500) + parseInt(calculus);
            console.log(`(xpneeded)${xpNeeded} - (oldxp)${oldxp} = (calculus)${calculus}`);
            console.log(`(calcus)${oldxp} + (calculus)${calculus} = (newex)${newxp}`)
            data.xp = newxp;
            if (data.xp >= xpNeeded) {
                const lvl = data.level;
                data.level = parseInt(lvl) + parseInt(1);
                console.log('new level for ' + message.author.username)
            }
            data.save();
        }
    })
}