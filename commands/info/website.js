module.exports={
    name: 'website',
    description: 'Sends a link to the recovery website',
    category: 'info',
    usage: 'e!website',
    perms: 'Send Messages',
    run: async (bot,message,args)=>{
        message.reply('heres a link to the website! https://gtarecov.herokuapp.com')
    }
}