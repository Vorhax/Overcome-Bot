module.exports.run = (bot, msg, args) => {

    if(args.length>2 || args.length<2) return msg.channel.send(">>> Les variables données ne sont pas correctes \nVous devez donner au moins __une distance__ en SU et __la durée __ en minutes du trajet attendu")
//    if(args.length==1 || isNaN(args[0]) || args[0] == 0) return msg.channel.send("L'argument est incorrect merci de renseigner un chiffre supérieur à 0.")
    if( isNaN(args[0]) || isNaN(args[1]) || args[0]==0 || args[1]==0) return msg.channel.send(">>> Les arguments sont incorrects merci de renseigner des __chiffres__ supérieur à __0__.")

    var distance = args[0];
    var duree = args[1];
    var retour = (distance *200)/(duree/60)

      var contenu =   `>>> **Vitesse à viser  : ${retour} km/h**`

    msg.channel.send(contenu)
  }

module.exports.help =  {
  name:'timesu'
}
