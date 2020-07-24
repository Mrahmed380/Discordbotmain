const xp = require('../../models/xp');
const { model } = require('mongoose');
const { MessageEmbed } = require('discord.js');
module.exports={
    name: 'xp',
    description: 'shows xp',
    status: false,
    dm: true,
    usage: "xp",
    category: 'xp',
    run: async(bot,message,args)=>{
        xp.findOne({ User: message.author.id }, async (err, data) => {
            if(err) console.log(err);
            if(!data) {
                let newLevel = new xp({
                    User: message.author.id,
                    xp: 0,
                    level: 1,
                })
                newLevel.save();
                message.channel.send('You are level 0 and have no xp')
            } else {
                //let newXp = parseInt()
                const xpembed = new MessageEmbed()
                .setTitle(`${message.author.tag}'s Level and XP`)
                .setDescription(`XP - ${data.save.xp}\nLevel - ${data.level} `)
            }
        })
    }
}