module.exports=async(member)=>{
    const channel = member.guild.channels.cache.find(channel => channel.name === "『😭』good-bye");
    if (!channel) return
    let Gootby = [
        "Another day another lost soldier...",
        "And this server was just starting to get fun",
        "I guess hes not a fan of a lot of money in GTA",
    ]
    let colors = [
        "#e05819",
        "#f51b1b",
        "#f5601b",
        "#b33900"
    ]
    let ColerWheel = colors[Math.floor(Math.random() * (colors.length))]
    let WordWheel = Gootby[Math.floor(Math.random() * (Gootby.length))]
    const Lembed = new MessageEmbed()
        .setTitle(`Good bye ${member.user.tag}`)
        .addField('ERG Recoverys', WordWheel)
        .setThumbnail(`${member.user.displayAvatarURL()}`)
        .setColor(ColerWheel)
        .setFooter(`Member Count:${member.guild.memberCount}`)
    channel.send(Lembed)
}