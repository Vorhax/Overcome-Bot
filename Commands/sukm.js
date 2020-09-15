module.exports.run = (bot, msg, args) => {


  if(args.length > 1 || isNaN(args[0])) return msg.channel.send("Merci de de ne rentrer qu'un chiffre ")
  var su =args[0]

  var retour='';
  var su =su*200;
  retour+=su.toFixed(0)+' Km';


  var contenu = `>>> **Distance :** ${retour}`
  msg.channel.send(contenu)
}

module.exports.help =  {
name:'sukm'
}
