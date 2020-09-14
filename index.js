const Discord = require('discord.js');
const bot = new Discord.Client({DisableEveryone: true});
bot.commands = new Discord.Collection();
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


  bot.on('message', message => {
  if (!message.content.startsWith('.') || message.author.bot) return;

    const args = message.content.slice(1).split(/ +/);
    const command = args.shift().toLowerCase();
    message.reply(command);
    if (!bot.commands.has(command)) return;

    try {
      bot.commands.get(command).execute(message, args);
    } catch (error) {
      console.error(error);
      message.reply("Une erreur s'est produite pendant l'exécution de la commande !");
    }
})

bot.login(process.env.Token);



//Message.reply est une réponse direct a la personne qui a lancé le message utiliser message.channel.send("....") pour répondre directement dans le channel concerné
