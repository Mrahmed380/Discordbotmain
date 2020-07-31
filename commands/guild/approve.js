module.exports={
    name: 'approve',
    dm: false,
    description: "Approve a users suggestion!",
    usage: "approve <user> <suggestionID>",
    category: 'guild',
    perms: "Moderator role or Admin role",
    run: async(bot,message,args)=>{
        const id = args.slice(1);
        const idMap = bot.idMap.get(`${mention.id}${id}`)
        const mention = message.mentions.members.first();
        if(!mention) return message.channel.send("You need to mention the user you want to approve of");
        if(!id) return message.channel.send('You need to include the id of the suggestion!');
        if(!idMap) return message.channel.send("That is not a valid suggestion ID")
        message.channel.send("sending dm...");
        mention.send("dm").catch(err => {
            console.log(err);
            message.channel.send("I could not send a message to " + mention);
        });
        console.log(`approved users suggest with the id ${id}`)
    }
}