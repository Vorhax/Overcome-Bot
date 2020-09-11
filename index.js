

const Discord = require('discord.js');
const bot = new Discord.Client({DisableEveryone: true});
const calcul

bot.on('message', function (message) {
  if (message.content == '!tutoriel') {
    calcul=1+2
    message.reply($("Vive les tutos"+calcul);
  }
});




bot.login(process.env.Token);



//Message.reply est une réponse direct a la personne qui a lancé le message utiliser message.channel.send("....") pour répondre directement dans le channel concerné
