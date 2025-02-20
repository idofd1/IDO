module.exports = {
  name: 'status',
  description: 'Check FiveM server status',
  async execute(message, args) {
    const axios = require('axios');

    const fivemServerIP = 'your_fivem_server_ip'; // Replace with your FiveM server IP
    const fivemServerPort = 'your_fivem_server_port'; // Replace with your FiveM server port
    const apiUrl = `http://${fivemServerIP}:${fivemServerPort}/info.json`;

    try {
      const response = await axios.get(apiUrl);
      const serverInfo = response.data;

      const embed = {
        color: 0x0099ff,
        title: 'FiveM Server Status',
        fields: [
          { name: 'Server Name', value: serverInfo.vars.sv_hostname || 'Unknown', inline: true },
          { name: 'Players Online', value: `${serverInfo.clients}/${serverInfo.sv_maxclients}`, inline: true },
          { name: 'Server Status', value: 'Online', inline: true }
        ],
        footer: {
          text: 'Server status fetched successfully'
        }
      };

      message.channel.send({ embeds: [embed] });
    } catch (error) {
      console.error('Error fetching server status:', error);
      message.channel.send('The server is currently offline or unreachable. Please try again later.');
    }
  }
};
