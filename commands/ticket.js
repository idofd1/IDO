module.exports = {
  name: 'ticket',
  description: 'Create a support ticket',
  async execute(message, args) {
    try {
      // Create a new text channel for the ticket
      const ticket = await message.guild.channels.create({
        name: `ticket-${message.author.username}`,
        type: 0, // Text channel
        permissionOverwrites: [
          {
            id: message.guild.id,
            deny: ['ViewChannel'] // Deny access to everyone
          },
          {
            id: message.author.id,
            allow: ['ViewChannel', 'SendMessages'] // Allow access to the ticket creator
          }
        ]
      });

      // Notify the user about the ticket creation
      message.reply(`Ticket created: <#${ticket.id}>`);
    } catch (error) {
      console.error('Error creating ticket:', error);
      message.reply('There was an error creating the ticket. Please try again later.');
    }
  }
};
