module.exports.run = (bot, msg, args) => {

    if(!args.length==2) return msg.channel.send("Les variable données ne sont pas correctes \nVous devez donner au moins une distance en SU et le poids en Tonne du vaisseau")
//    if(args.length==1 || isNaN(args[0]) || args[0] == 0) return msg.channel.send("L'argument est incorrect merci de renseigner un chiffre supérieur à 0.")
    if( isNaN(args[0])||isNaN(args[1]) || args[0]==0 || args[1] == 0) return msg.channel.send("Les arguments sont incorrects merci de renseigner des __chiffres__ supérieur à __0__.")

    var distance = args[0];
    var poids = args[1];
    var retour = distance * poids * 0.00025

      var contenu =   `>>> **Consomation de  : ${retour.toFixed(2)} Warp Cells**\n__Distance__ : ${distance} SU \n__Poids__ :${poids} Tonnes`




    msg.channel.send(contenu)
  }

module.exports.help =  {
  name:'warp'
}
