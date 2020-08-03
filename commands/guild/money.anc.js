module.exports={
    name: "Notify",
    description: "Send a DM to every member in the server with a announcement",
    category: "guild",
    dm: false,
    perms: "Admin role",
    aliases: ["announce"],
    status: false,
    run:async(bot,message,args)=>{
        let users = message.guild.roles.find(r => r.name === "Client");
        if(!users) return message.channel.send("The \"Client\" role does not exist!");
        if(users) {
            users.members.map(m => `${m.user.tag} was notified\n`);
        }
    }
}