const fs = require('fs');
const commands = [];

const commandFactory = (command) => {
  const {run} = command;
  const {name} = command.help;

  return{
    name,
    run
  };
};

const getCommand = (name) => {
    return commands.find((command) => command.name === name);
};

const getCommandList = () => {
  return commands.map((command) => command.name).join(', ');
};

fs.readdir('./Commands/',(err, files)=>{
  if(err) console.error(err);
  const commandFiles = files.filter(f => f.indexOf('.js') !== -1);

  commandFiles.forEach((commandFiles) => {
    const command = require(`./Commands/${commandFiles}`);

    commands.push(commandFactory(command));
  });

});

module.exports.getCommand = getCommand;
module.exports.getCommandList = getCommandList;
