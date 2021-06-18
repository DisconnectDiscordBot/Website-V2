module.exports.commands = {
	fun: [],
	info: [
		{
			name: 'emoji',
			desc: 'Shows information on an emoji.',
			longDesc:
				'Want a list of all emoji in your server or information about one?',
			aliases: null,
			usage: 'emoji <emoji || list>',
		},
		{
			name: 'channel-info',
			desc: 'Shows information about a channel.',
			longDesc:
				"Shows the type of channel, when it was created, and it's id.",
			aliases: null,
			usage: 'channel-info [channel]',
		},
		{
			name: 'server-info',
			desc: 'Shows information about the server.',
			longDesc:
				'Shows the owner, region, when the server was created, number of channels and types, members, roles, and emojis.',
			aliases: null,
			usage: 'server-info',
		},
		{
			name: 'role-info',
			desc: 'Shows information about a role.',
			longDesc:
				"Shows the color, when it was created, it's name, and how many users have it along with it's id.",
			aliases: null,
			usage: 'server-info',
		},
		{
			name: 'user-info',
			desc: 'Shows information about a user.',
			longDesc:
				'Shows the accounts creation date and when they joined, their roles, last message, and their id along side with their profile picture and discord tag.',
			aliases: null,
			usage: 'server-info',
		},
	],
	utils: [
		{
			name: 'help',
			desc: 'Get help using Disconnect.',
			longDesc: 'Get help using Disconnect.',
			aliases: null,
			usage: 'help [category | command]',
		},
	],
};

module.exports.categoryTranslation = {
	info: 'Information',
	utils: 'Utility',
};
