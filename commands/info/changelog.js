module.exports = {
    name: "changelog",
    aliases: ['changes', 'log', 'updates', 'update', 'github', 'updatelog'],
    description: 'Get a log of last 5 bot updates',
    usage: 'changelog',
    category: 'info',
    dm: true,
    perms: 'Send Messages',
    run: async (bot, message, args) => {
        const Discord = require('discord.js');
        const GitHub = require('octonode');

        const Client = GitHub.client(process.env.GITHUB_API_TOKEN);

        let repo = Client.repo('SupremeERG/discordbotmain');

        repo.commits((err, res) => {
            if (err) console.error(err);

            let info = res;

            const embed = new Discord.MessageEmbed()
                .setTitle(`My last few updates`);
            for (let i = 0; i < 5; i++) {
                embed.addField(`\u200b`, `${info[i].commit.message}`);
                embed.setColor('RANDOM');
            }

            message.channel.send({ embed });

        });
    }
}