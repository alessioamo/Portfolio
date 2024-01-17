import Assets from './data/assets';
import { getSkills } from './skills.params';
import type { Project } from './types';

const MY_PROJECTS: Array<Project> = [
	{
		slug: 'dbd-website',
		color: '#f15400',
		description:
			'A fully functioning website to create unique icons and descriptions for the popular video game, Dead By Daylight. ' + 
			'This website can be used to create perks, addons, powers, lore, as well as create new icons using pre-existing in-game icons ' +
			'and custom drawings. These creations can be saved to the user\'s device and will save as a png image with a transparent background.',
		shortDescription:
			'A website to create icons and descriptions for the popular video game Dead By Daylight.',
		links: [{ to: 'https://dbdperkmaker.ca/', label: 'dbdperkmaker.ca' }, { to: 'https://github.com/alessioamo/dbdperkmaker', label: 'GitHub Repo' }],
		logo: Assets.DBDPerkMaker,
		name: 'DBD Perk Maker',
		period: {
			from: new Date(2018, 8, 1), to: new Date(2020, 8, 1) //TODO
		},
		skills: getSkills('js', 'html', 'css', 'java', 'github', 'vscode'),
		type: 'Website',
		screenshots: [ //TODO
			{
				label: 'Main Page',
				src: ''
			},
			{
				label: 'Custom Perks',
				src: ''
			},
			{
				label: 'Icon Creator',
				src: ''
			},
			{
				label: 'Holiday Theme',
				src: ''
			}
		]
	},
	{
		slug: 'commerce-website',
		color: '#359000',
		description:
			'Fully functioning website built with JSP and servlets, and linked to a database. Product, order, and user information is stored in the database.' +
			'<br>• Home page with a custom JS animation' +
			'<br>• Products page with a list of products that can be filtered, opened in a new tab for more information, or added to cart' +
			'<br>• Cart page where you can view all the currently added products, change the quantity, remove from cart, view full price, or place your order to a specific shipping address (a new order will be created with the current cart items)' +
			'<br>• Login page where you can login to a pre-existing account, or create a new account' +
			'<br>• When logged in, users have the same functionalities as before as well as new ones such as an orders page, and a user information page' +
			'<br>• On the orders page, users can view all of their placed orders, the order information, and if they have been shipped or not (with a tracking number)' +
			'<br>• On the user page, users can view their information, change their password, or claim an order that they placed while not logged in' +
			'<br>• If the logged in user is an admin, they gain extra functionalities' +
			'<br>• These include adding, deleting, or editing products, viewing a list of all products and their quantities, viewing orders of all users, shipping the orders with their tracking number, or changing permissions of other users',
		shortDescription:
			'Fully functioning website built with JSP and servlets, and linked to a database.',
		links: [{ to: 'https://github.com/alessioamo/SOEN387-A1', label: 'GitHub Repo' }],
		logo: Assets.Commerce,
		name: 'Commerce Website',
		period: {
			from: new Date(2018, 8, 1), to: new Date(2020, 8, 1) //TODO
		},
		skills: getSkills('js', 'html', 'css', 'java', 'mysql', 'bootstrap', 'github'),
		type: 'Website',
		screenshots: [ //TODO
			{
				label: 'Main Page',
				src: ''
			},
			{
				label: 'Cart Page',
				src: ''
			},
			{
				label: 'Orders Page',
				src: ''
			}
		]
	},
	{
		slug: 'family-feud-website',
		color: '#f99f21',
		description:
			'Lorem ipsum', //TODO
		shortDescription:
			'Webpage built with JavaScript, CSS, and HTML to create your own Family Feud game.',
		links: [{ to: 'https://github.com/alessioamo/Family-Feud', label: 'GitHub Repo' }],
		logo: Assets.FamilyFeud,
		name: 'Family Feud Game',
		period: {
			from: new Date(2018, 8, 1), to: new Date(2020, 8, 1) //TODO
		},
		skills: getSkills('js', 'html', 'css', 'bootstrap', 'github', 'vscode'),
		type: 'Website',
		screenshots: [ //TODO
			{
				label: 'Gameshow Page',
				src: ''
			},
			{
				label: 'Host Page',
				src: ''
			}
		]
	},
	{
		slug: 'jeopardy-website',
		color: '#45066f',
		description:
			'Lorem ipsum', //TODO
		shortDescription:
			'Webpage built with JavaScript, CSS, and HTML to create your own Jeopardy game.',
		links: [{ to: 'https://github.com/alessioamo/Jeopardy', label: 'GitHub Repo' }],
		logo: Assets.Jeopardy,
		name: 'Jeopardy Game',
		period: {
			from: new Date(2018, 8, 1), to: new Date(2020, 8, 1) //TODO
		},
		skills: getSkills('js', 'html', 'css', 'bootstrap', 'github', 'vscode'),
		type: 'Website',
		screenshots: [ //TODO
			{
				label: 'Jeopardy Board',
				src: ''
			},
			{
				label: 'Question Example',
				src: ''
			}
		]
	},
	{
		slug: 'scientific-calculator-python',
		color: '#fa980b',
		description:
			'Lorem ipsum', //TODO
		shortDescription:
			'Calculator with scientific functions built from scratch in Python without the use of libraries.',
		links: [{ to: 'https://github.com/alessioamo/ETERNITY-Calculator', label: 'GitHub Repo' }],
		logo: Assets.Calculator,
		name: 'Python Scientific Calculator',
		period: {
			from: new Date(2018, 8, 1), to: new Date(2020, 8, 1) //TODO
		},
		skills: getSkills('python', 'github', 'vscode'),
		type: 'Application',
		screenshots: [ //TODO
			{
				label: 'screen 1',
				src: ''
			}
		]
	},
	{
		slug: 'concordia-app',
		color: '#922338',
		description:
			'Lorem ipsum', //TODO
		shortDescription:
			'Lorem', //TODO
		links: [{ to: 'https://github.com/alessioamo/Concordia-For-Students', label: 'GitHub Repo' }],
		logo: Assets.Concordia,
		name: 'Recreated School Application',
		period: {
			from: new Date(2018, 8, 1), to: new Date(2020, 8, 1) //TODO
		},
		skills: getSkills('kotlin', 'java', 'vscode'),
		type: 'Mobile Application',
		screenshots: [ //TODO
			{
				label: 'Home Page',
				src: ''
			},
			{
				label: 'Task List Feature',
				src: ''
			},
			{
				label: 'Maps Feature',
				src: ''
			},
			{
				label: 'Shuttle Schedule',
				src: ''
			},
			{
				label: 'STM Schedule',
				src: ''
			},
			{
				label: 'Library Occupancy',
				src: ''
			}
		]
	},
	{
		slug: 'platform-side-scrolling-game',
		color: '#4c4c4c',
		description:
			'Lorem ipsum', //TODO
		shortDescription:
			'2D Side-scrolling platforming game using Unity.',
		links: [{ to: 'https://github.com/RiadhAdrani/slick-portfolio-svelte', label: 'GitHub' }], //TODO
		logo: Assets.Unity,
		name: 'Side Scrolling Platformer Game',
		period: {
			from: new Date(2018, 8, 1), to: new Date(2020, 8, 1) //TODO
		},
		skills: getSkills('csharp', 'unity', 'github', 'vscode'),
		type: 'Video Game',
		screenshots: [ //TODO
			{
				label: 'screen 1',
				src: ''
			}
		]
	},
	{
		slug: 'chess-minigame-website',
		color: '#855639',
		description:
			'Lorem ipsum', //TODO
		shortDescription:
			'Online Chess minigame where you control a King on a chessboard and must outlast other pieces.',
		links: [{ to: 'https://github.com/RiadhAdrani/slick-portfolio-svelte', label: 'GitHub' }], //TODO
		logo: Assets.Chess,
		name: 'Chess Minigame',
		period: {
			from: new Date(2018, 8, 1), to: new Date(2020, 8, 1) //TODO
		},
		skills: getSkills('js', 'html', 'css', 'bootstrap', 'github', 'vscode'),
		type: 'Website Game',
		screenshots: [ //TODO
			{
				label: 'screen 1',
				src: ''
			}
		]
	},
	{
		slug: 'grocery-store-website',
		color: '#04688E',
		description:
			'Lorem ipsum', //TODO
		shortDescription:
			'Lorem', //TODO
		links: [{ to: 'https://github.com/RiadhAdrani/slick-portfolio-svelte', label: 'GitHub' }], //TODO
		logo: Assets.Grocery,
		name: 'Grocery Store Website',
		period: {
			from: new Date(2018, 8, 1), to: new Date(2020, 8, 1) //TODO
		},
		skills: getSkills('js', 'html', 'css', 'java', 'mysql', 'php', 'bootstrap', 'github', 'vscode'),
		type: 'Website',
		screenshots: [ //TODO
			{
				label: 'screen 1',
				src: ''
			}
		]
	},
	{
		slug: 'cpp-risk-game',
		color: '#da3835',
		description:
			'Lorem ipsum', //TODO
		shortDescription:
			'C++ program that simulates the game Risk against other players and/or a computer that can use different strategies.',
		links: [{ to: 'https://github.com/RiadhAdrani/slick-portfolio-svelte', label: 'GitHub' }], //TODO
		logo: Assets.Risk,
		name: 'Risk Game',
		period: {
			from: new Date(2018, 8, 1), to: new Date(2020, 8, 1) //TODO
		},
		skills: getSkills('cpp', 'github', 'vscode'),
		type: 'Game Application',
		screenshots: [ //TODO
			{
				label: 'screen 1',
				src: ''
			}
		]
	},
	{
		slug: 'java-battleship-game',
		color: '#1f9386',
		description:
			'Lorem ipsum', //TODO
		shortDescription:
			'Java program that simulates the game Battleship against a computer.',
		links: [{ to: 'https://github.com/RiadhAdrani/slick-portfolio-svelte', label: 'GitHub' }], //TODO
		logo: Assets.Battleship,
		name: 'Battleship Game',
		period: {
			from: new Date(2018, 8, 1), to: new Date(2020, 8, 1) //TODO
		},
		skills: getSkills('java', 'github', 'eclipse'),
		type: 'Game Application',
		screenshots: [ //TODO
			{
				label: 'screen 1',
				src: ''
			}
		]
	},
	{
		slug: 'discord-bot',
		color: '#5562ea',
		description:
			'Lorem ipsum', //TODO
		shortDescription:
			'Discord Bot that responds and reacts to user entered commands.',
		links: [{ to: 'https://github.com/RiadhAdrani/slick-portfolio-svelte', label: 'GitHub' }], //TODO
		logo: Assets.Discord,
		name: 'Discord Bot',
		period: {
			from: new Date(2018, 8, 1), to: new Date(2020, 8, 1) //TODO
		},
		skills: getSkills('js', 'nodejs', 'github', 'vscode'),
		type: 'Bot',
		screenshots: [ //TODO
			{
				label: 'screen 1',
				src: ''
			}
		]
	},
	{
		slug: 'reddit-bot',
		color: '#f74300',
		description:
			'Lorem ipsum', //TODO
		shortDescription:
			'Reddit Bot that scans through subreddits and automatically replies to posts and comments based on their content.',
		links: [{ to: 'https://github.com/RiadhAdrani/slick-portfolio-svelte', label: 'GitHub' }], //TODO
		logo: Assets.Reddit,
		name: 'Reddit Bot',
		period: {
			from: new Date(2018, 8, 1), to: new Date(2020, 8, 1) //TODO
		},
		skills: getSkills('python', 'github', 'vscode'),
		type: 'Bot',
		screenshots: [ //TODO
			{
				label: 'screen 1',
				src: ''
			}
		]
	},
	{
		slug: 'stardew-penguin-mod',
		color: '#ffc400',
		description:
			'Lorem ipsum', //TODO
		shortDescription:
			'A mod for the popular farming game Stardew Valley that adds a new animal, the penguin, with many variations to it and new custom items.',
		links: [{ to: 'https://github.com/RiadhAdrani/slick-portfolio-svelte', label: 'GitHub' }], //TODO
		logo: Assets.Stardew,
		name: 'Stardew Valley Animal Mod',
		period: {
			from: new Date(2018, 8, 1), to: new Date(2020, 8, 1) //TODO
		},
		skills: getSkills('csharp', 'github', 'vscode'),
		type: 'Video Game Mod',
		screenshots: [ //TODO
			{
				label: 'Penguins In Game',
				src: ''
			},
			{
				label: 'Penguin Drops',
				src: ''
			},
			{
				label: 'Penguin Sprite Sheet',
				src: ''
			}
		]
	}
	// {
	// 	slug: 'slick-portfolio-angular', //TODO
	// 	color: '#a300de', //TODO
	// 	description:
	// 		'Lorem ipsum', //TODO
	// 	shortDescription:
	// 		'Lorem', //TODO
	// 	links: [{ to: 'https://github.com/RiadhAdrani/slick-portfolio-svelte', label: 'GitHub' }], //TODO
	// 	logo: Assets.Unknown, //TODO
	// 	name: 'Slick Portfolio', //TODO
	// 	period: {
	// 		from: new Date(2018, 8, 1), to: new Date(2020, 8, 1) //TODO
	// 	},
	// 	skills: getSkills('angular', 'ts', 'tailwind'), //TODO
	// 	type: 'Website Template', //TODO
	// 	screenshots: [ //TODO
	// 		{
	// 			label: 'screen 1',
	// 			src: ''
	// 		}
	// 	]
	// }
	
];

export default MY_PROJECTS;
