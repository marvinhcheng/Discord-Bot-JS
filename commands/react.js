/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
module.exports = {
	name: 'react',
	description: 'bot reacts to specific users message until turned off',
	execute(message, args) {
		target = args[0];
		const reactionEmoji = message.guild.emojis.cache.find(emoji => emoji.name === args[1]);
		const x = true;
		// message.channel.send(`target is: ${target}\nemoji is: ${reactionEmoji}`);
	},
};