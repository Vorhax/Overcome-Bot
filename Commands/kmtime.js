module.exports.run = async (bot, msg, args) => {
    if (args.length < 1 ) return msg.channel.send("erreur")
    msg.channel.send('on va faire le calcul ici.')
  }

module.exports.help =  {
  name:'kmtime'
}
