module.exports.run = (bot, msg, args) => {


  if(args.length > 1 || isNaN(args[0])) return msg.channel.send("Merci de de ne rentrer qu'un chiffre ")
  var km =args[0]

  var retour='';
  var su =Math.floor(km/200);
  retour+=su.toFixed(0)+'SU';


  var contenu = `>>> **Distance :** ${retour}`
  msg.channel.send(contenu)
}

module.exports.help =  {
name:'kmsu'
}
