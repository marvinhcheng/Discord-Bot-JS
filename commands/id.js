module.exports = {
	name: 'id',
	description: 'returns user id or specified users id',
	execute(message, args) {
		if(!args.length) {
			message.channel.send(`Your Discord ID is: ${message.author.id}`);
		}
		else{
			message.channel.send(`${args[0]}'s Discord ID is ${message.mentions.users.first().id}`);
		}
	},
};