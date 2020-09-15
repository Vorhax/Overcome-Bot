const Discord = require ('discord.js');

module.exports.run = async (bot,msg,args) => {
    let hEmbed = new Discord.MessageEmbed()
    .setColor('26a1d1')
    .setTitle('Aide du bot')
    .setDescription('Je suis a votre service vous trouverez ci-dessous la liste des commandes possible')
    .addField('Commande : ', "- **.kmsu** => Converti des kilomètre en SU\n")
    .addField('Commande : ', "- **.kmsu** => Converti des kilomètre en SU")
    .setFooter("Overcome vous souhaite une bonne journée")
    .setTimestamp();

    msg.channel.send(hEmbed);

}

module.exports.help = {
  name : 'help'

}
