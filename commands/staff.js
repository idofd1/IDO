module.exports = {
  name: 'staff',
  description: 'Shows list of online staff members',
  async execute(message, args) {
    const staffRoleName = 'Staff'; // Replace with the exact name of the staff role in your server
    const staffRole = message.guild.roles.cache.find(role => role.name === staffRoleName);

    if (!staffRole) {
      message.channel.send(`The role "${staffRoleName}" does not exist on this server.`);
      return;
    }

    const onlineStaff = staffRole.members.filter(member => member.presence?.status === 'online');

    if (onlineStaff.size === 0) {
      message.channel.send('No staff members are currently online.');
      return;
    }

    const staffList = onlineStaff.map(member => member.user.tag).join('\\n');

    const embed = {
      color: 0x0099ff,
      title: 'Online Staff Members',
      description: staffList,
      footer: {
        text: `Total Online Staff: ${onlineStaff.size}`
      }
    };

    message.channel.send({ embeds: [embed] });
  }
};
