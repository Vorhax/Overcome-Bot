const Discord = require('discord.js');
var bot = new Discord.Client();
bot.on('message', function (message) {
  if (message.content == '!tutoriel') {
    message.reply("Vive les tutos"); 
  }
});






bot.login("NzUwNzI3NzEwMTIwMzQ1NjAw.X0-vqQ.DUKhT4B_dGV9lNWAtpIFUVx6Bcw");



//Message.reply est une réponse direct a la personne qui a lancé le message utiliser message.channel.send("....") pour répondre directement dans le channel concerné