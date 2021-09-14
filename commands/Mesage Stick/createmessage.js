const { Message, Client, Permissions } = require("discord.js");

module.exports = {
    name: "createmessage",
    aliases: ['cm'],
    /**
     *
     * @param {Client} client
     * @param {Message} message
     * @param {String[]} args
     */
    run: async (client, message, args) => {
        if (message.author.permissions.has(Permissions.FLAGS.ADMINISTRATOR)) {
            message.channel.send(`Message Created! This will be edited when you restart the bot!`);
        } else {
            message.channel.send('You must have Admin permission on the server to run this command!')
        }
        
    },
};
