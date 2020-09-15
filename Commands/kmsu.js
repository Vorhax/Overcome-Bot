const Discord = require ('discord.js');


module.exports.run = (bot, msg, args) => {


  if(args.length > 1 || isNaN(args[0])) return msg.channel.send("Merci de de ne rentrer qu'un chiffre ")
  var km =args[0]

  var retour='';
  var su =km/200;
  retour+=su.toFixed(2)+' SU';


  var contenu = `** ${args[0]} km donne Distance : ${retour}**`


  let hEmbed = new Discord.MessageEmbed()
  .setColor('26a1d1')
  .setTitle(contenu)
  .setFooter("Overcome vous souhaite une bonne journée")
  .setTimestamp();
  msg.channel.send(hEmbed)
}

module.exports.help =  {
name:'kmsu'
}
