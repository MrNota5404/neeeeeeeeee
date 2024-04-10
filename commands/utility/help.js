const { SlashCommandBuilder } = require('discord.js');
const { сommands } = require('../../config.json')

module.exports =
{
    data: new SlashCommandBuilder()
        .setName('help')
        .setDescription('Все доступные команды !'),
    async execute(interaction)
    {
        interaction.reply({content:`${сommands.join('\n')}`});
    },
};