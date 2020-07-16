const warns = require('../../models/warns')
const { Client , MessageEmbed } = require('discord.js')
const mongoose = require('mongoose')
module.exports={
    name: 'warns',
    category: 'guild',
    description: 'Shows how many warns a user has',
    usage: 'e!warns <@user>',
    run: async(bot,message,args)=>{
        let user = message.mentions.members.first();
        if(!user) return message.channel.send('Specify a user!')
        warns.find({ Guild: message.guild.id, User: user.id },async(err, data) => {
            if(err) console.log(`There was a error fix your game kid`)
            if(!data.length) return message.channel.send(`${user.user.tag} has not got any warns in this server`)
            let embed = new MessageEmbed()
            .setTitle(`${user.user.tag} warns in ${message.guild.name}.`)
            .setDescription(data.Warns[0].Moderator)
            .setColor('RANDOM');
            message.channel.send(embed)
        })
    }
}