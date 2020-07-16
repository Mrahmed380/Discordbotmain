const { Client , MessageEmbed } = require('discord.js');
const gtas = require('../../models/gta');
const mongoose = require('mongoose');
module.exports={
    name: 'dregister',
    description: 'Deletes gta information out of database',
    category: 'guild',
    usage: 'e!dregister',
    perms: 'Send Messages',
    run: async(bot,message,args)=>{
        gtas.findOne({ UserID: message.author.id, GuildID: message.guild.id },async(err, data) => {
            if(err) console.log(err)
            if(!data){
                message.channel.send('You arent even in the database, e!register <SCName> to get logged')
            }else{
                console.log(data)
                console.log('Deleted data')
                data.deleteOne()
                message.channel.send('TEST worked')
            }
        })
    }
}