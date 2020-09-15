const Discord = require ('discord.js');

module.exports.run = async (bot,msg,args) => {
    let hEmbed = new Discord.MessageEmbed()
    .setColor('26a1d1')
    .setImage('attachment://images/skyrim.png')
    .setTitle( 'Aide du bot')
    .setDescription('Je suis à votre service vous trouverez ci-dessous la liste des commandes possibles')
    .addField('=> .kmsu ', "Converti des kilomètre en SU \n Parametre d'entrée : **<distance en kilomètre>**\n")
    .addField('=> .kmtime ', "Donne le temps de trajet pour une distance donnée à une vitesse donnée \n Parametre d'entrée : **<Distance en kilomètre>** - **(<Vitesse en Km/h>)** (si pas de valeur 30.000km/h)\n")
    .addField('=> .sukm ', "Converti des SU en Kilomètre \n Parametre d'entrée : **<distance en SU>**\n")
    .addField('=> .sutime ', "Donne le temps de trajet pour une distance donnée à vitesse donnée \n Parametre d'entrée : **<Distance en SU >** - **(<Vitesse en Km/h>)** (si pas de valeur 30.000km/h)\n")
    .addField('=> .timesu ', "Donne la vitesse à avoir pour faire le trajet en un temps donné \n Parametre d'entrée : **<Distance en SU>** - **<Temps en minutes>** \n")
    .addField('=> .warp ', "Donne une estimation des cellules warp consommé pour un trajet en warp drive \n Parametre d'entrée : **<distance en SU>** - **<Poids en tonne>**\n")
    .setFooter("Overcome vous souhaite une bonne journée")
    .setTimestamp();

    msg.channel.send(hEmbed);

}

module.exports.help = {
  name : 'help'

}
