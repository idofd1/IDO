const { Client, GatewayIntentBits, Collection } = require('discord.js');
const { token } = require('./config.json');

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent
  ]
});

client.commands = new Collection();

client.once('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('interactionCreate', async interaction => {
  if (!interaction.isCommand()) return;

  const command = interaction.commandName;

  if (command === 'top10') {
    await interaction.reply('Here are the top 10 songs: [Your implementation here]');
  }
  else if (command === 'playlist') {
    await interaction.reply('Here is your playlist: [Your implementation here]');
  }
});

client.login(token);
