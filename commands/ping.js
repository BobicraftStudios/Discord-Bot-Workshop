const { SlashCommandBuilder } = require('discord.js')
const { convert } = require('../util/id2timestamp')

module.exports = {
    data: new SlashCommandBuilder()
        .setName('ping')
        .setDescription('Responde con un pong'),
    async execute(interaction){
        const result = await interaction.reply('Pong!');
        const timeInteraction = interaction.createdTimestamp
        const timeResponse = convert(result.id)
        const resultValue = Math.abs(timeInteraction-timeResponse);

        console.log(timeInteraction, timeResponse)

        interaction.editReply(`Pong! Ping was ${resultValue}`);
    },
}