const Discord = require ('discord.js');

module.exports.run = async (bot,msg,args) => {
    let hEmbed = new Discord.MessageEmbed()
    .setcolor('26a1d1')
    .setTitle('Aide du bot')
    .setDescription('mettre ici le descriptif du bot')
    .addField('Commande : ', "- **.kmsu** => Converti des kilomètre en SU")
    .setFooter("Overcome vous souhaite une bonne journée")
    .setTimestamp();

    msg.channel.send(hEmbed);

}

module.exports.help = {
  name : 'help'

}
