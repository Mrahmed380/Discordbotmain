const { MessageEmbed } = require("discord.js")

module.exports = {
    name: "rps",
    category: "entertainment",
    description: "Play rock paper shoot against a user!",
    usage: "rps <user>",
    dm: true,
    status: true,
    perms: "Send Messages",
    run: async (bot, message, args) => {
        const pick = ["rock", "paper", "scissors"]
        const pick2 = ["rock", "paper", "scissors"]
        const embed = new MessageEmbed()
            .setColor("RANDOM")
            .setTitle("Rock Paper Scissors")
        const results = pick[Math.floor(Math.random() * (pick.length))]
        const results2 = pick2[Math.floor(Math.random() * (pick2.length))]
        let winner = ``
        const person = message.author;
        const person2 = message.mentions.members.first();
        embed.setFooter(`${person} vs ${person2}`)
        console.log(`results = ${results} and ${results2}`)
        if (!person2) return message.channel.send("You need to mention the person you want to play with");
        if (results == "rock" && results2 == "paper") winner = `${person2.user.username}`;
        if (results == "paper" && results2 == "rock") winner = `${person.username}`;
        if (results == "scissors" && results2 == "paper") winner = `${person.username}`;
        if (results == "paper" && results2 == "scissors") winner = `${person2.user.username}`;
        if(results == "scissors" && results2 == "rock") winner = `${person2.user.username}`
        if(results == "rock" && results2 == "scissors") winner = `${person.username}`
        embed.setDescription(`${person} chose ${results} and ${person2} chose ${results2}\n${winner} won!`)
        if (results2 == results) embed.setDescription(`${person.tag} tied with ${person2.user.tag}`);
        message.channel.send(embed)
    }
}