module.exports={
    name: 'recovery',
    description:"Link to recovery prices/shop",
    category: "info",
    perms: "Send Messages",
    usage: "recovery",
    aliases: ["prices"],
    dm: true,
    status: true,
    run:async(bot,message,args)=>{
        const { guild} = message;
        let chan = guild.channels.cache.find(c => c.name === "『💸』𝗣𝗿𝗶𝗰𝗲𝘀");
        if(!chan) return console.log("no channel")
        message.channel.send(`All recoverys are $3-$20\nFull page and more info ~ https://gtarecov.herokuapp.com/backgroundSites/shop.html ***or*** go to ${chan}`);
        console.log("link given");
    }

}