module.exports.run = (bot, msg, args) => {

    if(args.length > 2 || args.length < 1) return msg.channel.send("Il n'y pas assez d'argument \nVous devez donner au moins un nombre de kilométre par default la vitesse utilisé sera 30.000km/h")
    if(args.length==1 && (isNaN(args[0])) && args[0] > 0) return msg.channel.send("L'argument est incorrect merci de renseigner un chiffre supérieur à 0.")
    if(args.length==2 && (isNaN(args[0])||isNaN(args[1])) && args[0]+args[1] > 0) return msg.channel.send("Les arguments sont incorrects merci de renseigner des chiffres supérieur à 0.")

    if(args.length == 2){
      var vitesse =args[1]}
      else {
      var vitesse =30000
      }


      var secondes = args[0] / vitesse * 3600
      var retour='';
       if(secondes<0)
       {
            retour='-';
            secondes*=-1;
       }
       if(secondes>=3600*24)
       {
            var jours=Math.floor(secondes/3600/24);
            retour+=jours+'j ';
            secondes-=jours*3600*24;
       }
       if(secondes>=3600)
       {
            var heures=Math.floor(secondes/3600);
            retour+=heures+'h ';
            secondes-=heures*3600;
       }
       if(secondes>=60)
       {
            var minutes=Math.floor(secondes/60);
            retour+=minutes+'m ';
            secondes-=minutes*60;
       }
       if(secondes>0)
       {
            retour+=secondes.toFixed(0)+'s';
       }

      var contenu =     `>>> **temps de trajet :** ${retour} \nDistance : ${args[0]}Km \nVitesse : ${vitesse}km/h`




    msg.channel.send(contenu)
  }

module.exports.help =  {
  name:'kmtime'
}
