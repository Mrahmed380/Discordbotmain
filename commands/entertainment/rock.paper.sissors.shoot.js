const { MessageEmbed, BroadcastDispatcher } = require("discord.js")
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
        let person = message.author;
        let person2 = message.mentions.members.first();
        if (!person2) return message.channel.send("You need to mention the person you want to play with. You can mention your self if you want to play with me!");
        embed.setFooter(`${person.username} vs ${person2.user.username}`)
        if (person2.id == message.author.id) {
            if (results == "rock" && results2 == "paper") winner = `${bot.user.username}`;
            if (results == "paper" && results2 == "rock") winner = `${person.username}`;
            if (results == "scissors" && results2 == "paper") winner = `${person.user.username}`;
            if (results == "paper" && results2 == "scissors") winner = `${bot.user.username}`;
            if (results == "scissors" && results2 == "rock") winner = `${bot.user.username}`
            if (results == "rock" && results2 == "scissors") winner = `${person.username}`;
            embed.setFooter(`${person.username} vs ${bot.user.username}`)
            embed.setDescription(`${person} chose ${results} and ${bot.user} chose ${results2}\n${winner} won!`)
            if (results2 == results) embed.setDescription(`${person} tied with ${bot}`);
            return message.channel.send(embed)
        }
        if (results == "rock" && results2 == "paper") winner = `${person2.user.username}`;
        if (results == "paper" && results2 == "rock") winner = `${person.username}`;
        if (results == "scissors" && results2 == "paper") winner = `${person.username}`;
        if (results == "paper" && results2 == "scissors") winner = `${person2.user.username}`;
        if (results == "scissors" && results2 == "rock") winner = `${person2.user.username}`
        if (results == "rock" && results2 == "scissors") winner = `${person.username}`
        embed.setDescription(`${person} chose ${results} and ${person2} chose ${results2}\n${winner} won!`)
        if (results2 == results) embed.setDescription(`${person} tied with ${person2}`);
        message.channel.send(embed)
    }
}