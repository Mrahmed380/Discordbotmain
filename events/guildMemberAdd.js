module.exports = async (member) => {
    const channel = member.guild.channels.cache.find(channel => channel.name === "『🤘🏻』new-clients");
    if (!channel) return;
    const Wembed = new MessageEmbed()
        .setTitle('Welcome')
        .addField('ERGs Recoverys', `Welcome to ERGs Recoverys, ${member}`)
        .addField('Verification', 'Please Verify your self to get accest to the rest of the channel.')
        .setFooter('Make your self at home!')
        .setThumbnail(`${member.user.displayAvatarURL()}`)
        .setColor(0xba0de0);
    channel.send(Wembed);
}