

const Discord = require('discord.js');
const bot = new Discord.Client({DisableEveryone: true});

bot.on('message', function (message) {
  if (message.content == '!tutoriel') {
        message.channel.send('Vive les tutos');
  }
});

bot.on('message', function (message) {
  if (message.content.startswith('.tempstrajet') {
      const args = message.content.slice(message.lenght).split(/ +/);
        message.channel.send( $args[1] );
  }
});


bot.login(process.env.Token);



//Message.reply est une réponse direct a la personne qui a lancé le message utiliser message.channel.send("....") pour répondre directement dans le channel concerné
