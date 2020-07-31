module.exports = {
    name: 'approve',
    dm: false,
    description: "Approve a users suggestion!",
    usage: "approve <user> <suggestionID>",
    category: 'guild',
    perms: "Moderator role",
    run: async (bot, message, args) => {
        const mod = message.guild.roles.cache.find(r => r.name === "Moderator");
        const admin = message.guild.roles.cache.find(r => r.name === "Admin");
        if (!message.member.roles.cache.has(mod.id) || !message.member.roles.cache.has(admin.id)) return message.channel.send("you cannot use this command!")
        const id = args.slice(1).join(" ");
        const mention = message.mentions.members.first();
        if (!mention) return message.channel.send("You need to mention the user you want to approve of");
        if (!id) return message.channel.send('You need to include the id of the suggestion!');
        let idgrab = bot.idMap.get(`${mention.id}${id}`);
        if (idgrab) {
            message.channel.send("sending dm...");
            mention.send("dm").catch(err => {
                console.log(err);
                message.channel.send("I could not send a message to " + mention);
            });
            console.log(`approved users suggest with the id ${id}`)
        } else { message.channel.send('That is not a valid id!'); console.log(id); console.log(bot.idMap) }
    }
}