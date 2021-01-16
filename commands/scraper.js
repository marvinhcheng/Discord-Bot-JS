/* eslint-disable no-mixed-spaces-and-tabs */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
const Discord = require('discord.js');
const axios = require('axios');
module.exports = {
	name: 'scrape',
	description: 'scrapes variants from a shopify page',
	execute(message, args) {

		if(!args.length) {
			return message.channel.send('No URL provided');
		}

		async function get_variants(url) {
			return await axios.get(url)
      			.then(response => {
        			this.response = response;
        			return this.response;
				});
		}
		/* const response = await axios.get(url);
			console.log(response);
			return response;*/


		const product_url = args[0] + '.json';
		get_variants(product_url)
			.then(data => {
				console.log(data.product);
			});
		// console.log(variant_info);
		// console.log(variants);

		const embed = new Discord.MessageEmbed()
			.setColor('#A652BB')
		    .setTitle('Requested URL')
    	    .setURL(product_url)
    	    .addField('Variants', 'to be continued', true)
	        .setTimestamp()
			.setFooter('dick', 'https://i.imgur.com/ahLxr8d.jpg');

		message.channel.send(embed);
	},
};