

const Discord = require('discord.js');
const bot = new Discord.Client({DisableEveryone: true});

bot.on('ready',async() => {
    console.log('Bot lancé');
    bot.user.setActivity('Bot De calcule Overcome');
});

bot.on('message', function (message) {
  if (message.content.startswith('.tempstrajet') && !msg.author.bot){
              args = message.content.split()
              message.channel.send(args[1])

  };
);




bot.login(process.env.Token);



//Message.reply est une réponse direct a la personne qui a lancé le message utiliser message.channel.send("....") pour répondre directement dans le channel concerné
