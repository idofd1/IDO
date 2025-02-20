const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('help')
    .setDescription('Shows all available commands'),

  async execute(interaction) {
    const helpEmbed = new EmbedBuilder()
      .setColor(0x0099FF)
      .setTitle('Bot Commands')
      .setDescription('Here are all available commands:')
      .addFields(
        { name: '/players', value: 'Shows the list of players on the server' },
        { name: '/status', value: 'Check server status' },
        { name: '/top10', value: 'Shows top 10 players' },
        { name: '/search', value: 'Search for a player' },
        { name: '/staff', value: 'Shows online staff members' },
        { name: '/tickets', value: 'Manage support tickets' },
        { name: '/warn', value: 'Warn a user' },
        { name: '/blacklist', value: 'Manage blacklist' },
        { name: '/logs', value: 'View server logs' }
      )
      .setTimestamp();

    await interaction.reply({ embeds: [helpEmbed] });
  },
};