module.exports = {
  name: 'help',
  description: 'Shows all available commands',
  async execute(message, args) {
    const commands = message.client.commands;
    let helpEmbed = {
      color: 0x0099ff,
      title: 'Available Commands',
      fields: []
    };

    commands.forEach(cmd => {
      helpEmbed.fields.push({
        name: `!${cmd.name}`,
        value: cmd.description
      });
    });

    message.channel.send({ embeds: [helpEmbed] });
  }
};
