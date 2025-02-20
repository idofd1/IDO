const { REST, Routes } = require('discord.js');
const { token } = require('./config.json');

const commands = [
  {
    name: 'top10',
    description: 'Shows top 10 songs'
  },
  {
    name: 'playlist',
    description: 'Shows your playlist'
  }
];

const rest = new REST({ version: '10' }).setToken(token);

(async () => {
  try {
    console.log('Started refreshing application (/) commands.');

    await rest.put(
      Routes.applicationCommands('YOUR_CLIENT_ID_HERE'),
      { body: commands },
    );

    console.log('Successfully reloaded application (/) commands.');
  } catch (error) {
    console.error(error);
  }
})();
