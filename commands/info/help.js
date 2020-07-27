const { Client , MessageEmbed } = require('discord.js');
const { category } = require('./help.js');
const { stripIndent, stripIndents } = require('common-tags');
const ms = require('ms');
module.exports={
    name: 'help',
    category: 'info',
    description: 'Shows you how to use a command and what it does!',
    usage: 'help [command]',
    perms: 'Send Messages',
    run: async(bot,message,args)=>{
        if(args[0]){
            return getCMD(bot,message,args[0])
        } else {
            return getAll(bot,message)
        }
    }
}
function getAll(bot,message){
    const HELPembed = new MessageEmbed()
    .setColor('RANDOM')
    const commands = (category) =>{
        return bot.commands.filter(cmd=>cmd.category===category).map(cmd=>`- \`${cmd.name}\``).join(" ");
    }
        const info = bot.categories.map(cat=>stripIndents`**${cat[0].toUpperCase()+cat.slice(1)}**\n${commands(cat)}`).reduce((string,category) => string+"\n"+category)
        HELPembed.setFooter(`There are ${bot.commands.size} commands! || e!help [command] for info on command`)
        HELPembed.setDescription(info)
        message.channel.send(HELPembed)
}
function getCMD(bot,message,input){
    const CMDembed = new MessageEmbed()
    const cmd = bot.commands.get(input.toLowerCase() || bot.aliases.get(input.toLowerCase()));
    let info = ` No information found for **${input.toLowerCase()}**  \nIt may not be a command`
    if(!cmd)return message.channel.send(CMDembed.setColor('RANDOM').setDescription(info));
    if(cmd.name) info = `**Command name**: ${cmd.name}`; CMDembed.setTitle(cmd.name)
    if(cmd.description) info += `\n**Description**: ${cmd.description}`; CMDembed.setDescription(`**Description: ${cmd.description}**` + `\n**How to use: ${cmd.usage}**` + `\n**Category: ${cmd.category}**` + `\n**Required permissions: ${cmd.perms}**`)
    if(cmd.category) info += `\n**Category: ${cmd.category}`; CMDembed.setColor('RANDOM') 
    if(cmd.aliases) info += `${CMDembed.addField(`\nAliases`,`${cmd.aliases.map(a=>`\`${a}\``).join(", ")}`)}`;
    if(cmd.usage) info += `\n**Usage**: ${cmd.usage}`; CMDembed.setFooter(`Syntax: <> = required, [] = optional`);
    if(cmd.perms) info += `\n**Required Permissions** : ${cmd.perms}`
    if(cmd.timeout) info += CMDembed.addField(`Timeout`, `\`${ms(cmd.timeout)}\``);
    message.channel.send(CMDembed)
}