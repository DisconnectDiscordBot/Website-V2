module.exports.commands = {
	fun: [],
	social: [
		{
			name: 'youtube',
			desc: 'Shows a YouTube channels information.',
			longDesc:
				'Displays a YouTube channels name, description, id, and channel creation date.',
			aliases: ['youtube-channel'],
			usage: 'youtube <channel name || channel id>',
		},
		{
			name: 'twitter',
			desc: "Shows a Twitter account's information",
			longDesc:
				'Displays, username, @, description, location, stats, their profile picture, and account creation date and id.',
			aliases: ['twitter-account'],
			usage: 'twitter <username>',
		},
		{
			name: '⚙ youtube-notifier',
			desc: 'YouTube notification setup.',
			longDesc:
				'Get notifications for uploads as soon as they are uploaded.',
			aliases: ['yt-notify'],
			usage: 'youtube-notifier <option> [value]',
		},
		{
			name: '⚙ twitter-notifier',
			desc: 'Tweet notification setup.',
			longDesc: 'Get notifications as soon as a tweet is published.',
			aliases: ['twitter-notify'],
			usage: 'twitter-notifier <option> [value]',
		},
	],
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
			usage: 'role-info',
		},
		{
			name: 'user-info',
			desc: 'Shows information about a user.',
			longDesc:
				'Shows the accounts creation date and when they joined, their roles, last message, and their id along side with their profile picture and discord tag.',
			aliases: null,
			usage: 'user-info',
		},
	],
	utils: [
		{
			name: 'help',
			desc: 'Get help using Disconnect.',
			longDesc: "Get help using and some of it's commands.",
			aliases: null,
			usage: 'help [category || command]',
		},
		{
			name: 'bot-info',
			desc: 'Shows information about Disconnect.',
			longDesc: 'Give some basic bot stats and provides some links.',
			aliases: null,
			usage: 'bot-info',
		},
		{
			name: 'command-list',
			desc: "Shows all of Disconnect's commands.",
			longDesc: "View all of Disconnect's commands.",
			aliases: ['commands'],
			usage: 'command-list [category]',
		},
		{
			name: 'command-info',
			desc: "Shows information about one of Disconnect's commands.",
			longDesc:
				"View information about on of Disconnect's commands, like aliases, usage, and examples.",
			aliases: null,
			usage: 'command-info [category || command]',
		},
		{
			name: 'avatar',
			desc: "Grab and display another member's profile picture.",
			longDesc: "View another member's profile picture.",
			aliases: ['profile-picture', 'pfp'],
			usage: 'avatar [member]',
		},
		{
			name: 'invite',
			desc: 'Shows an invite link for Disconnect.',
			longDesc: 'Provides a invite link for Disconnect',
			aliases: null,
			usage: 'invite',
		},
	],
	mod: [
		{
			name: 'kick',
			desc: 'Kick a member from the server.',
			longDesc: "Give a member the boot, but don't lock them out.",
			aliases: null,
			usage: 'kick <member>',
		},
		{
			name: 'ban',
			desc: 'Ban a member from the server.',
			longDesc: 'Give them the boot, but seal that door shut.',
			aliases: null,
			usage: 'ban <member>',
		},
		{
			name: 'purge',
			desc: 'Delete a group of messages.',
			longDesc:
				"Delete a group of messages. (Max of 100 messages, can't delete farther than under 2 weeks old)",
			aliases: ['clear', 'bulk-delete'],
			usage: 'purge <amount>',
		},
		{
			name: '⚙ set-prefix',
			desc: "Change the server's prefix.",
			longDesc:
				"Set the server's prefix to something a little more preferred, something a little more used to.",
			aliases: ['change-prefix'],
			usage: 'set-prefix [new prefix]',
		},
		{
			name: '⚙ welcomer',
			desc: 'Setup welcoming notifications.',
			longDesc: 'Welcome new users to your server with Disconnect.',
			aliases: ['set-welcomer'],
			usage: 'welcomer <options> <value>',
		},
		{
			name: '⚙ farewell',
			desc: 'Setup farewell notifications.',
			longDesc: 'Send off old users from your server with Disconnect.',
			aliases: ['set-farewell'],
			usage: 'farewell <options> <value>',
		},
	],
	nsfw: [
		{
			name: 'porn',
			desc: '👀',
			longDesc: 'Shows an NSFW image.',
			aliases: null,
			usage: 'invite',
		},
		{
			name: 'hentai',
			desc: '👀',
			longDesc: 'Shows an NSFW image.',
			aliases: null,
			usage: 'invite',
		},
		{
			name: 'rule-34',
			desc: '👀',
			longDesc: 'Shows an NSFW image.',
			aliases: null,
			usage: 'invite',
		},
	],
	temp: [
		{
			name: '',
			desc: '',
			longDesc: '',
			aliases: null,
			usage: '',
		},
	],
};
// 👀
module.exports.categoryTranslation = {
	info: 'Information',
	utils: 'Utility',
	nsfw: 'NSFW',
	mod: 'Moderation',
};
