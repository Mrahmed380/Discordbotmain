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
            const results = pick[Math.floor(Math.floor() * (pick.length))]
            const results2 = pick2[Math.floor(Math.random() * (pick2.length))]
            let winner = ``
            const person = message.author;
            const person2 = message.mentions.members.first();
            console.log(`results = ${results} and ${results2}`)
            if (!person2) return message.channel.send("You need to mention the person you want to play with");
            if(results == "rock" && results2 == "paper") winner = `${person2.user.username}`;
            if(results == "paper" && results2 == "rock") winner = `${person.username}`;
            //if(results[2] && results2[1]) winner = `${person.username}`;
            //if(results[1] && results2[2]) winner = `${person2.user.username}`;
            if(results2 == results) winner = `You tied with ${person2.user.username}!`;
            message.channel.send(`${person.tag} vs ${person2.user.tag}\n${person.tag} chose ${results} and ${person2} chose ${results2}\n${winner} won!`)
  }
}