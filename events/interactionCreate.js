const
    {
        Events,
        Client,
        GatewayIntentBits,
        Collection,
    } = require('discord.js'),
    bot = new Client({intents: [GatewayIntentBits.Guilds]})

bot.cooldowns = new Collection();

module.exports =
{
    name: Events.InteractionCreate,
    async execute(interaction)
    {
        if (!interaction.isChatInputCommand()) return;
    const command = interaction.client.commands.get(interaction.commandName);
        if (!command) {
            console.error(`No command matching ${interaction.commandName} was found.`);
            return;
        };

        try {
            await command.execute(interaction);
        } catch (error) {
            console.error(`Error executing ${interaction.commandName}`);
            console.error(error);
        }
        }
}