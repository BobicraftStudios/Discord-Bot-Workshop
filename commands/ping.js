const { SlashCommandBuilder } = require('discord.js')
const { convert } = require('../util/id2timestamp')

module.exports = {
    data: new SlashCommandBuilder()
        .setName('ping')
        .setDescription('Responde con un pong'),
    async execute(interaction){
        return interaction.reply('Pong!');
    },
}