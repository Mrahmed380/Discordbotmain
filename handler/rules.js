const {readdirSync} = require('fs');
const ascii = require('ascii-table');
const { dirname } = require('path');
const { Message } = require('discord.js');
let table = new ascii("rules");
table.setHeading('rule','Load status');
module.exports= bot=>{
    readdirSync('./rules/').forEach(dir=>{
        const rules = readdirSync(`./rules/`).filter(file=>file.endsWith('.js'));
        for(let file of rules){
            let pull = require(`../rules/${file}`);
            if(pull.name){
                bot.rules.set(pull.name, pull);
                table.addRow(file, 'succeded')
                console.log(file)
            } else {
                table.addRow(file,`failed missing a help.name or help.name is not a string`)
                continue;
            } if(pull.aliases && Array.isArray(pull.aliases)) pull.aliases.forEach(alias => bot.aliases.set(alias, pull.name))
        }
    });
    console.log(table.toString());
}

