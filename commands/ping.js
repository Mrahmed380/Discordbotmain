module.exports = {
    name: 'ping' , 
    description: "shows your api ping!",
    exucute(message, args){
        message.channel.send('pong bitch!');
    }
}