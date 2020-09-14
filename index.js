const Discord = require('discord.js');
const bot = new Discord.Client({DisableEveryone: true});
const commands = require('./Commands.js');



const fs = require('fs');

const commandFiles = fs.readdirSync('./Commande').filter(file => file.endsWith('.js')); // on  charge le dossier avec toutes les commandes du BOT
for (const file of commandFiles) { // on  charge le dossier avec toutes les commandes du BOT
  const command = require(`./Commande/${file}`); // on  charge le dossier avec toutes les commandes du BOT
  bot.commands.set(command.name, command); // on  charge le dossier avec toutes les commandes du BOT
} // on  charge le dossier avec toutes les commandes du BOT


bot.on('ready',async() => {
    console.log('Bot lancé');
    bot.user.setActivity('Bot De calcul Overcome');

});


bot.on('message',asyn (msg) => {

      if(msg.content.startsWith('!') && !msg.author.bot){
          cmdArray = msg.content.substring(1).split(" ");
          cmd = cmdArray[0];
          args = cmdArray.slice(1);

          let command = commands.getCommand(cmd);
          if(command)  command.run(bot, message, args);
      }



})






bot.login(process.env.Token);


//TEST PERSO
//bot.on('message', async (msg) => {
//  if (msg.content.startsWith('.tempstrajet') && !msg.author.bot){
//              msg.channel.send('test')
//              args = msg.content.substring(1).split(" ")
//              cmd = args[1]
//              //retour = args[1]
//              msg.channel.send(cmd)
//          }
//  });

// On récupere le message tapé dans le chat et on l'envoie au bon fichier de commande


//  bot.on('message', message => {
//  if (!message.content.startsWith('.') || message.author.bot) return;
//
//    const args = message.content.slice(1).split(/ +/);
//    const command = args.shift().toLowerCase();



//    if (!bot.commands.has(command)) return;

    //try {

//      bot.commands.get(command).execute(message, args);
//    } catch (error) {
//      console.error(error);
//      message.reply("Une erreur s'est produite pendant l'exécution de la commande !");
//    }
//})





//Message.reply est une réponse direct a la personne qui a lancé le message utiliser message.channel.send("....") pour répondre directement dans le channel concerné
