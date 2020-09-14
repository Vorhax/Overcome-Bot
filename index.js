

const Discord = require('discord.js');
const bot = new Discord.Client({DisableEveryone: true});

bot.on('ready',async() => {
    console.log('Bot lancé');
    bot.user.setActivity('Bot De calcule Overcome');
});
//
bot.on('message', async (msg) => {
  if (msg.content.startswith('.tempstrajet') && !msg.author.bot){
              msg.channel.send('test')
              args = msg.content.substring(1).split(" ")
              cmd = args[0]
              //retour = args[1]
              msg.channel.send(cmd)
          }
  });

bot.login(process.env.Token);



//Message.reply est une réponse direct a la personne qui a lancé le message utiliser message.channel.send("....") pour répondre directement dans le channel concerné
