const { SlashCommandBuilder } = require('discord.js')

module.exports = {
    data: new SlashCommandBuilder()
        .setName('ping')
        .setDescription('Responde con un pong'),
    async execute(interaction){
        const result = await interaction.reply('Pong!');
        console.log(result);
    },
}