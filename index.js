/* eslint-disable no-mixed-spaces-and-tabs */
/* eslint-disable no-unused-vars */
/* eslint-disable no-inline-comments */

const fs = require('fs');

// require the discord.js module
const Discord = require('discord.js');

// pulls data from config.json
// const config = require('./config.json');
const { prefix, token } = require('./config.json'); // takes variables prefix and token from config.json
const { keywords, token2 } = require('./keywords.json');

// create a new Discord client
const client = new Discord.Client();

client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
	const command = require(`./commands/${file}`);
	// set a new item in the Collection
	// with the key as the command name and the value as the exported module
	client.commands.set(command.name, command);
}

client.once('ready', () => {
	console.log('Ready!');// lets me know that the bot is up and runnning
});

const marvin_id = '267495779038527490';
const minjae_id = '143057253983846401';
const minjae_emoji = '787168486371754004';
const heart_emoji = '799710542100955158';


client.on('message', message => {

	if (message.author.bot) return;

	if(message.content.includes('minjae' && 'gay')) {
		message.channel.send('minjae iscool')
	}

	if(message.content.includes('thank' && 'cletus')) {
		message.channel.send('you are welcome my');
	}

	if(message.author.id === minjae_id) {
		// message.react(minjae_emoji);
		message.react(heart_emoji);
	}


	if (!message.content.startsWith(prefix)) return; // if message doesn't start with prefix or was sent by a bot

	const args = message.content.slice(prefix.length).trim().split(/ +/); // content of the text after the prefix command. divides into an array, ignoring spaces [find, link, url]
	const commandName = args.shift().toLowerCase(); // the desired command

	if (!client.commands.has(commandName)) return; // if command is not recognized

	const command = client.commands.get(commandName);

	try {
	    command.execute(message, args); // try to execute user's command
	}
	catch (error) { // errors out if given parameters are faulty
	    console.error(error); // prints error out to console for debugging purposes
	    message.channel.send('Error, please try again');
	}
});

// login to Discord with your app's token
// client.login(config.token);
client.login(token);
