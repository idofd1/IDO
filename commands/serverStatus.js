const { SlashCommandBuilder } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('status')
    .setDescription('Check FiveM server status'),

  async execute(interaction) {
    try {
      await interaction.reply('Checking server status...');
      
      // Simulated server status data
      const serverStatus = {
        online: true,
        players: 10,
        maxPlayers: 32,
        uptime: '2 hours'
      };

      // Create an embed with the server status details
      const statusEmbed = {
        color: serverStatus.online ? 0x00ff00 : 0xff0000,
        title: 'Server Status',
        fields: [
          { name: 'Status', value: serverStatus.online ? '🟢 Online' : '🔴 Offline' },
          { name: 'Players', value: `${serverStatus.players}/${serverStatus.maxPlayers}` },
          { name: 'Uptime', value: serverStatus.uptime }
        ],
        timestamp: new Date()
      };

      // Edit the initial reply with the embed
      await interaction.editReply({ embeds: [statusEmbed] });
    } catch (error) {
      console.error('Error in status command:', error);
      await interaction.reply({ 
        content: 'Failed to fetch server status', 
        ephemeral: true 
      });
    }
  },
};
