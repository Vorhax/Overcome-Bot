module.exports.run = (bot, msg, args) => {
    if(args.length > 2 || args.length < 1) return msg.channel.send("Il n'y pas assez d'argument \n Vous devez donner au moins un nombre de kilometre par default la vitesse utilisé sera 30.000km/h")
    if(args.length == 1){
      var secondes = args[0] / 30000 * 3600
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
            retour+=secondes+'s';
       }

      var contenu =   `temps passé : ${retour} `
    }



    msg.channel.send(contenu)
  }

module.exports.help =  {
  name:'kmtime'
}
