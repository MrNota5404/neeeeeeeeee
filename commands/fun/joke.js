const {
    SlashCommandBuilder 
} = require("discord.js")
const {
    joke
} = require("../../config.json")
module.exports = {
    data:new SlashCommandBuilder()
    .setName("joke")
    .setDescription("шутка"),
    async execute(interaction) {
        const randomNumber = Math.floor(Math.random() * joke.length)
        const randomJoke = joke[randomNumber]
        console.log(randomNumber, randomJoke, joke)
        await interaction.reply(`${randomJoke}`)
    }
}
