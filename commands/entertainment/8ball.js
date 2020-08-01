const { MessageEmbed } = require("discord.js");
module.exports = {
    name: '8ball',
    description: 'Ask the bot a question about your future',
    aliases: ['fortune', 'eightball'],
    usage: '8ball <question>',
    category: 'entertainment',
    timeout: 2000,
    perms: 'Send Messages',
    dm: true,
    run: async (bot, message, args) => {
        const answers = [
            "Never",
            "No",
            "Hell the fuck no",
            "Fa sho",
            "No❤️",
            "Maybe",
            "I hope not",
            "Definitely",
            "Did you hear something?"
        ]
        let question = args.slice(0).join(" ");
        if (!question) return message.channel.send("You need to include a question!");
        let ranan = answers[Math.floor(Math.random() * (answers.length))];
        const embed = new MessageEmbed()
            .setTitle("8ball")
            .setDescription(`Question: ${question}\nAnswer **${ranan}**`)
            .setColor("YELLOW")
            .setFooter("100% accurate fortunes")
    }
}