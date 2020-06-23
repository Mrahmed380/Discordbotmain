const { Client , MessageEmbed } = require('discord.js');
const { category } = require('./help.js');
const { stripIndent, stripIndents } = require('common-tags');
module.exports={
    name: 'help',
    category: 'info',
    description: 'Shows you how to use a command and what it does!',
    usage: 'e!help <command>',
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
    .setDescription('ayy yuh')
    const commands = (category) =>{
        return bot.commands.filter(cmd=>cmd.category===category).map(cmd=>`- \`${cmd.name}\``).join(" ");
        const info = bot.categories.map(cat=>stripIndents`**${cat[0].toUppercase()+cat.slice(1)}\n${commands(cat)}`).reduce((string,category) => string+"\n"+category)
        
        return HELPembed.setFooter(`There are ${bot.commands.size} commands!`)
        HELPembed.setDescription(info)
        message.channel.send(HELPembed)

    }
}
function getCMD(bot,message,input){
    const CMDembed = new MessageEmbed()
    const cmd = bot.commands.get(input.toLowerCase() || bot.commands.get(bot.aliases.get(input.toLowerCase())));
    let info = ` No information found for**${input.toLowerCase()}**`
    if(!cmd)return message.channel.send(CMDembed.setColor('RANDOM').setDescription(info));
    if(cmd.name) info = `**Command name**: ${cmd.name}`; CMDembed.setTitle(cmd.name)
    if(cmd.description) info += `\n**Descripstion**: ${cmd.description}`; CMDembed.setDescription(cmd.description + `\n${cmd.usage}`)
    if(cmd.aliases) info += `\n**Aliases**: ${cmd.aliases.map(a=>`\`${a}\``).join(", ")}`;
    if(cmd.usage) info += `\n**Usage**: ${cmd.usage}`; CMDembed.setFooter(`Syntax: <> = required, [] = optional`);
    message.channel.send(CMDembed)
}