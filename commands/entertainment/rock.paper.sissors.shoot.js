module.exports = {
    name: "rps",
    category: "entertainment",
    description: "Play rock paper shoot against a user!",
    usage: "rps <user>",
    dm: true,
    status: false,
    perms: "Send Messages",
    run: async (bot, message, args) => {
            const results = ["rock", "paper", "scissors"]
            const results2 = ["rock", "paper", "scissors"]
            let winner = ``
            let person = message.author;
            let person2 = message.mentions.members.first();
            if (!person2) return message.channel.send("You need to mention the person you want to play with");
            if(results[0] && results2[1]) winner = `${person2.user.username}`;
            if(results[1] && results2[0]) winner = `${person.username}`;
            if(results[2] && results2[1]) winner = `${person.username}`;
            //if(results[])
            if(results2 == results) winner = `You tied with ${person2.user.username}!`;
            message.channel.send(`${person.tag} vs ${person2.user.tag}\n${winner} won!`)
  }
}