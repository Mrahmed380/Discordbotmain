module.exports={
    name: 'say',
    usage: 'say <channel> <message>',
    description: 'Announce a specific mesage',
    aliases: ['announce', 'yell'],
    perms: 'Admin',
    run: async(bot,message,args)=>{
        const admin = message.guild.roles.cache.find(r => r.name === 'Admin');
        if(!message.member.roles.cache.has(admin.id)) return message.channel.send('You need admin role for this command!');
        let chan = message.mentions.channels.first();
        if(!chan) return message.channel.send('You need to specify the channel!');
        let msg = args.slice(1).join(" ");
        if(!msg) return message.chan.send('You need to give a message!');
        chan.send(`Announcement from ${message.author.tag}\n${msg} @everyone`);
    }
}