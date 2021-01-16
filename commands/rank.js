/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
/* eslint-disable no-mixed-spaces-and-tabs */
const axios = require('axios');
module.exports = {
	name: 'rank',
	description: 'checks rank of certain summoner',
	execute(message, args) {
		if(!args.length) {
			return message.channel.send('No name provided');
		}
		api_key = '?api_key=RGAPI-c5fb7518-dd09-4fcd-9227-c5fe0cc82706';

		summoner_v4 = 'https://na1.api.riotgames.com/lol/summoner/v4/summoners/by-name/' + args[0] + api_key;
		summoner_id = '';
		async function get_summonerID() {
			const response = await axios.get(summoner_v4);
			// console.log(response);
			return response;
		}

		summoner_id = get_summonerID().then(console.log);
		// get_summonerID().then(summoner_id);
		console.log(`ID: ${summoner_id}`);

		// league_v4 = 'https://na1.api.riotgames.com/lol/league/v4/entries/by-summoner/' + summoner_id + api_key;
		async function get_summonerInfo() {
			const response = await axios.get(league_v4);
			return response;
		}
		// summoner_data = get_summonerInfo();
		// console.log(`${summoner_data}`);

	},
};

// Summoner v4 https://na1.api.riotgames.com/lol/summoner/v4/summoners/by-name/<insertName>
// Fetches summoner id
// League v4 https://na1.api.riotgames.com/lol/league/v4/entries/by-summoner/<summonerID>
// Fetches summoner information with summoner id