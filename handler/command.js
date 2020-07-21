const {readdirSync} = require('fs');
const ascii = require('ascii-table');
const { dirname } = require('path');
const { Message } = require('discord.js');
let table = new ascii("commands");
table.setHeading('command','Load status');
module.exports= bot=>{
    readdirSync('./commands/').forEach(dir=>{
        const commands = readdirSync(`./commands/${dir}/`).filter(file=>file.endsWith('.js'));
        for(let file of commands){
            let pull = require(`../commands/${dir}/${file}`);
            if(pull.name){
                bot.commands.set(pull.name, pull);
                table.addRow(file, 'succeded')
            } else {
                table.addRow(file,`failed missing a help.name or help.name is not a string`)
                continue;
            } if(pull.aliases) {
                bot.aliases.set(pull.aliases, pull)
                table.addRow(file, pull.name)
                //pull.aliases.forEach(alias => bot.aliases.set(alias, pull.name))
            }
            }
    });
    console.log(table.toString());
}

