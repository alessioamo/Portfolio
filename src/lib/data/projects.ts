import Assets from './assets';
import { getSkills } from './skills';
import type { Project } from './types';

const items: Array<Project> = [
	{
		slug: 'game-brackeys-game-jam',
		color: '#0a1dc7',
		description:
			'My entry to the Brackey\'s Game Jam 2025.1. In this game jam, we had 7 days to create a full video game based on the theme <i>Nothing Can Go Wrong</i>.' + 
			'I completed this project with two team members. I was the sole developer and created the entire game from scratch. My team members worked on music design and art.' +
			'I also created some of the smaller pieces of art, as well as some minigame backgrounds found throughout the game. Overall, I placed 174/2194 for my first ever game jam.' + 
			'<br>' +
			'Game synopsis: In this space adventure, you are up against your very own ship\'s AI who has gone rogue and is trying to sabotage you. It\'s a race against time where ' +
			'you have to balance repairing tasks, hacking the AI, and opening up new parts of the ship in hopes to make contact with the outside world...',
		shortDescription:
			'A video game created in 7 days for the Brackey\'s Game Jam 2025.1. Placed 174/2194.',
		links: [{ to: 'https://bananahammer33.itch.io/duct-tape-and-despair', label: 'Itch.io' }],
		logo: Assets.DuctTape,
		name: '7-Day Game Jam',
		period: {
			from: new Date()
		},
		skills: getSkills('csharp', 'unity', 'github', 'vscode', 'aseprite'),
		type: 'Video Game',
		screenshots: [
			{
				label: 'Main Menu',
				src: 'https://raw.githubusercontent.com/alessioamo/Portfolio/main/static/screenshots/duct-tape-home.png'
			},
			{
				label: 'Center of Ship',
				src: 'https://raw.githubusercontent.com/alessioamo/Portfolio/main/static/screenshots/duct-tape-cat.png'
			},
			{
				label: 'Back of Ship',
				src: 'https://raw.githubusercontent.com/alessioamo/Portfolio/main/static/screenshots/duct-tape-reactor.png'
			},
			{
				label: 'Dialogue',
				src: 'https://raw.githubusercontent.com/alessioamo/Portfolio/main/static/screenshots/duct-tape-dialogue.png'
			},
			{
				label: 'Task Example',
				src: 'https://raw.githubusercontent.com/alessioamo/Portfolio/main/static/screenshots/duct-tape-task.png'
			},
			{
				label: 'Minimap',
				src: 'https://raw.githubusercontent.com/alessioamo/Portfolio/main/static/screenshots/duct-tape-minimap.png'
			},
		]
	},
	{
		slug: 'website-dbd',
		color: '#f15400',
		description:
			'A fully functioning website to create unique icons and descriptions for the popular video game, Dead By Daylight. ' + 
			'This website can be used to create perks, addons, powers, lore, as well as create new icons using pre-existing in-game icons ' +
			'and custom drawings. These creations can be saved to the user\'s device and will save as a png image with a transparent background. ' +
			'This website is frequently updated with new features, improvements, and interactions.',
		shortDescription:
			'A website to create icons and descriptions for the popular video game Dead By Daylight.',
		links: [
			{ to: 'https://dbdperkmaker.ca/', label: 'dbdperkmaker.ca' },
			{ to: 'https://github.com/alessioamo/dbdperkmaker', label: 'GitHub Repo' }
		],
		logo: Assets.DBDPerkMaker,
		name: 'DBD Perk Maker',
		period: {
			from: new Date()
		},
		skills: getSkills('js', 'html', 'css', 'java', 'googlecloud', 'github', 'vscode'),
		type: 'Website',
		screenshots: [
			{
				label: 'Main Page',
				src: 'https://raw.githubusercontent.com/alessioamo/Portfolio/main/static/screenshots/dbd-main-page.png'
			},
			{
				label: 'Custom Perks',
				src: 'https://raw.githubusercontent.com/alessioamo/Portfolio/main/static/screenshots/dbd-perk-page.png'
			},
			{
				label: 'Icon Creator',
				src: 'https://raw.githubusercontent.com/alessioamo/Portfolio/main/static/screenshots/dbd-icon-creator.png'
			},
			{
				label: 'Holiday Theme',
				src: 'https://raw.githubusercontent.com/alessioamo/Portfolio/main/static/screenshots/dbd-holiday-theme.png'
			}
		]
	},
	{
		slug: 'game-conuhacks-2025',
		color: '#ff3e00',
		description:
			'In a group with two other students, we participated in Concordia University\'s 2025 hackathon and created a video game from scratch. This video game combined elements ' +
			'from the theme of the hackathon (the wild west), along with a sponsored challenge to create a top down shooter game. This was a 24 hour hackathon.' +
			'<br>' +
			'Game Synopsis: As an outlaw, you spend your days travelling through towns. One day, your trusty stallion breaks down and in desperation you, enter the saloon. ' +
			'You must gather enough money by playing mini games to repair your trusty steed. During your adventure however, you are bound to make some enemies and must fight them off.',
		shortDescription:
			'A submission to Concordia\'s Hackathon event, ConUHacks IV.',
		links: [
			{ to: 'https://devpost.com/software/the-outlaw', label: 'Submission' },
			{ to: 'https://github.com/alessioamo/Conuhacks-2025', label: 'GitHub' }
		],
		logo: Assets.TheOutlaw,
		name: 'Hackathon Submission',
		period: {
			from: new Date()
		},
		skills: getSkills('csharp', 'unity', 'github', 'aseprite', 'vscode'),
		type: 'Video Game',
		screenshots: [
			{
				label: 'Main Menu',
				src: 'https://raw.githubusercontent.com/alessioamo/Portfolio/main/static/screenshots/the-outlaw-background.png'
			},
			{
				label: 'Saloon',
				src: 'https://raw.githubusercontent.com/alessioamo/Portfolio/main/static/screenshots/the-outlaw-saloon.png'
			},
			{
				label: 'Blackjack',
				src: 'https://raw.githubusercontent.com/alessioamo/Portfolio/main/static/screenshots/the-outlaw-blackjack.png'
			},
			{
				label: 'Dartboard',
				src: 'https://raw.githubusercontent.com/alessioamo/Portfolio/main/static/screenshots/the-outlaw-darts.png'
			},
			{
				label: 'Wanted Game',
				src: 'https://raw.githubusercontent.com/alessioamo/Portfolio/main/static/screenshots/the-outlaw-wanted.png'
			},
			{
				label: 'Top Down Shooter',
				src: 'https://raw.githubusercontent.com/alessioamo/Portfolio/main/static/screenshots/the-outlaw-shooter.png'
			},
		]
	},
	{
		slug: 'website-blog',
		color: '#4c4c4c',
		description:
			'This website is a blog that I started since the day I graduated. I aim to upload posts every 4-8 weeks depending on how busy I am and how big my current projects are.' + 
			'The main goal of this blog was to keep myself active and creative and to expand my knowledge and pursue my passion of coding!',
		shortDescription:
			'A blog website that follows a University graduate and what comes next for them.',
		links: [
			{ to: 'https://alessioamo.github.io/What-Comes-Next/', label: 'Webpage' },
			{ to: 'https://github.com/alessioamo/What-Comes-Next', label: 'GitHub' }
		],
		logo: Assets.Blog,
		name: 'Personal Blog',
		period: {
			from: new Date()
		},
		skills: getSkills('js', 'html', 'css', 'googlecloud', 'bootstrap', 'java', 'github', 'vscode'),
		type: 'Website',
		screenshots: [
			{
				label: 'Home Page',
				src: 'https://raw.githubusercontent.com/alessioamo/Portfolio/main/static/screenshots/blog-home.png'
			},
			{
				label: 'Posts Page',
				src: 'https://raw.githubusercontent.com/alessioamo/Portfolio/main/static/screenshots/blog-posts.png'
			},
			{
				label: 'Comments',
				src: 'https://raw.githubusercontent.com/alessioamo/Portfolio/main/static/screenshots/blog-comments.png'
			}
		]
	},
	{
		slug: 'game-chroma',
		color: '#4c4c4c',
		description:
			'A 2D puzzle platformer built in the Unity game engine. In this game, you contorl a character that progresses through levels and gains new abilities with each victory. Using their newfound abilities, the player must navigate increasingly difficult puzzles to beat the game and find out the truth about this colorful world.' +
			'This project was meant to be my first full fledged game and was created as practice to help me learn more about game development.' +
			'<br>Images coming soon!', //TODO
		shortDescription:
			'A puzzle platformer about navigating a colorful world and finding out the truth behind the shades.',
		links: [
			{ to: '', label: 'Itch.io Page' }, //TODO
			{ to: '', label: 'GitHub Repo' } // TODO
		],
		logo: Assets.Unity,
		name: '2D Puzzle Platformer',
		period: {
			from: new Date()
		},
		skills: getSkills('csharp', 'unity', 'github', 'vscode', 'aseprite'),
		type: 'Video Game',
		screenshots: [ //TODO
			// {
			// 	label: 'Main Menu',
			// 	src: ''
			// },
			// {
			// 	label: 'Puzzle 1',
			// 	src: ''
			// },
			// {
			// 	label: 'Puzzle 2',
			// 	src: ''
			// },
			// {
			// 	label: 'Puzzle 3',
			// 	src: ''
			// }
		]
	},
	{
		slug: 'web-game-scramblecoin',
		color: '#d678d2',
		description:
			'A recreation of the minigame called \'Scramblecoin\' from the hit video game Disney Dreamlight Valley. In this minigame, two players (one player and one CPU) go head to head to try and gather as many coins as they can in 5 rounds.' + 
			'They use up to 5 unique pieces that have their own movements and abilities to travel across a chessboard filled with obstacles and different values of coins. Whoever has the most coins at the end wins!' +
			'There is actually a lot of strategy to this game and it can get quite fun to play however you can only play in game against CPU\'s. The goal of recreating it was to allow players to play against each other and to also create a more challenging option against smarter AI\'s.' +
			'It would also allow for more types of gamemodes and the ability to change up the base game which gives freedom to players.' +
			'<br>Images coming soon!', //TOdO
		shortDescription:
			'An web game inspired by the hit video game Disney Dreamlight Valley.',
		links: [{ to: '', label: 'Webpage' }, //TODO
				{ to: '', label: 'GitHub Repo' }], //TODO
		logo: Assets.Scramblecoin,
		name: 'Scramblecoin Web Game',
		period: {
			from: new Date(2018, 8, 1), to: new Date(2020, 8, 1) //TODO
		},
		skills: getSkills('js', 'html', 'css', 'bootstrap', 'github', 'vscode'),
		type: 'Web Game',
		screenshots: [ //TODO
			// {
			// 	label: 'Main Menu',
			// 	src: ''
			// },
			// {
			// 	label: 'Character Select',
			// 	src: ''
			// },
			// {
			// 	label: 'Gameplay 1',
			// 	src: ''
			// },
			// {
			// 	label: 'Gameplay 2',
			// 	src: ''
			// }
		]
	},
	{
		slug: 'web-game-zombie-apocalypse',
		color: '#0c9c00',
		description:
			'This project is currently under development and is set to release in the coming months! Links and screenshots will be updated then!', //TODO
		shortDescription:
			'An strategy web game based on making tough choices and taking risks to survive the apocalypse.',
		links: [{ to: '', label: 'Webpage' },
				{ to: '', label: 'GitHub Repo' }], //TODO
		logo: Assets.ZombieApocalypse,
		name: 'Strategy Web Game',
		period: {
			from: new Date(2018, 8, 1), to: new Date(2020, 8, 1) //TODO
		},
		skills: getSkills('js', 'html', 'css', 'bootstrap', 'github', 'vscode'),
		type: 'Web Game',
		screenshots: [ //TODO
			// {
			// 	label: 'Main Menu',
			// 	src: ''
			// },
			// {
			// 	label: 'Game Screen',
			// 	src: ''
			// },
			// {
			// 	label: 'Journal',
			// 	src: ''
			// },
			// {
			// 	label: 'Encounter',
			// 	src: ''
			// }
		]
	},
	{
		slug: 'web-game-stardew-idle',
		color: '#ffc400',
		description:
			'This project is currently under development and is set to release in the coming months! Links and screenshots will be updated then!', //TODO
		shortDescription:
			'An idle web game based on the popular video game, Stardew Valley.',
		links: [{ to: '', label: 'Webpage' },
				{ to: '', label: 'GitHub Repo' }], //TODO
		logo: Assets.Stardew,
		name: 'Idle Web Game',
		period: {
			from: new Date(2018, 8, 1), to: new Date(2020, 8, 1) //TODO
		},
		skills: getSkills('js', 'html', 'css', 'bootstrap', 'github', 'vscode'),
		type: 'Web Game',
		screenshots: [ //TODO
			// {
			// 	label: 'screen 1',
			// 	src: ''
			// }
		]
	},
	{
		slug: 'website-commerce',
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
		screenshots: [
			{
				label: 'Main Page',
				src: 'https://raw.githubusercontent.com/alessioamo/Portfolio/main/static/screenshots/commerce-main-page.png'
			},
			{
				label: 'Products Page',
				src: 'https://raw.githubusercontent.com/alessioamo/Portfolio/main/static/screenshots/commerce-products-page.png'
			},
			{
				label: 'Cart Page',
				src: 'https://raw.githubusercontent.com/alessioamo/Portfolio/main/static/screenshots/commerce-cart-page.png'
			},
			{
				label: 'Orders Page',
				src: 'https://raw.githubusercontent.com/alessioamo/Portfolio/main/static/screenshots/commerce-orders-page.png'
			}
		]
	},
	{
		slug: 'website-family-feud',
		color: '#f99f21',
		description:
			'Coming soon!', //TODO
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
		screenshots: [
			{
				label: 'Gameshow Page',
				src: 'https://raw.githubusercontent.com/alessioamo/Portfolio/main/static/screenshots/family-feud-gameshow-page.png'
			},
			{
				label: 'Example Game',
				src: 'https://raw.githubusercontent.com/alessioamo/Portfolio/main/static/screenshots/family-feud-example-game.png'
			},
			{
				label: 'Host Page',
				src: 'https://raw.githubusercontent.com/alessioamo/Portfolio/main/static/screenshots/family-feud-host-page.png'
			}
		]
	},
	{
		slug: 'website-jeopardy',
		color: '#45066f',
		description:
			'Webpage that recreates the hit trivia game Jeopardy. Features include:' +
			'<br>• Fully functioning board of clues' +
			'<br>• Ability to create your own clues and categories' +
			'<br>• Fully animated board, cards, and daily double' +
			'<br>• Daily double feature and final jeopardy feature' +
			'<br>• Automated point system that facilitates giving/taking points (if a $400 clue is selected, pressing the \'+\' or \'-\' will automatically increment/decrement by 400)' +
			'<br>• Custom intro video with ability to add your own' +
			'<br>• Full sound effects for intro, daily double, final jeopardy, timer, etc.' +
			'<br>• Buzzer functionality that displays first team that buzzed in yellow and any subsequent buzzes are possible once the original buzzer has failed the clue' +
			'<br>• Customizable time limit feature for response length, time to buzz, and more' +
			'<br>• Ability to add more teams/players as well as customize the team\'s color and name' +
			'<br>• All parameters are customizable to enable/disable various features of the game (such as sound effects, intro video, daily double, and more)',
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
		screenshots: [
			{
				label: 'Jeopardy Board',
				src: 'https://raw.githubusercontent.com/alessioamo/Portfolio/main/static/screenshots/jeopardy-board.png'
			},
			{
				label: 'Example Game',
				src: 'https://raw.githubusercontent.com/alessioamo/Portfolio/main/static/screenshots/jeopardy-example-game.png'
			},
			{
				label: 'Clue Example',
				src: 'https://raw.githubusercontent.com/alessioamo/Portfolio/main/static/screenshots/jeopardy-clue.png'
			}
		]
	},
	{
		slug: 'application-scientific-calculator-python',
		color: '#fa980b',
		description:
			'Coming soon!', //TODO
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
		screenshots: [
			{
				label: 'Calculator',
				src: 'https://raw.githubusercontent.com/alessioamo/Portfolio/main/static/screenshots/calculator-calculator.png'
			},
			{
				label: 'Calculator Example',
				src: 'https://raw.githubusercontent.com/alessioamo/Portfolio/main/static/screenshots/calculator-example.png'
			},
			{
				label: 'Calculator Error',
				src: 'https://raw.githubusercontent.com/alessioamo/Portfolio/main/static/screenshots/calculator-error.png'
			}
		]
	},
	{
		slug: 'mobile-application-concordia',
		color: '#922338',
		description:
			'Coming soon!', //TODO
		shortDescription:
			'A mobile application for students in university to efficiently organize themselves, and stay on top of their studies.', //TODO
		links: [{ to: 'https://github.com/alessioamo/Concordia-For-Students', label: 'GitHub Repo' }],
		logo: Assets.Concordia,
		name: 'Recreated School Application',
		period: {
			from: new Date(2018, 8, 1), to: new Date(2020, 8, 1) //TODO
		},
		skills: getSkills('kotlin', 'java', 'figma', 'androidstudio', 'vscode'),
		type: 'Mobile Application',
		screenshots: [
			{
				label: 'Home Page',
				src: 'https://raw.githubusercontent.com/alessioamo/Portfolio/main/static/screenshots/concordia-home-page.png'
			},
			{
				label: 'Task List Feature',
				src: 'https://raw.githubusercontent.com/alessioamo/Portfolio/main/static/screenshots/concordia-task-list.png'
			},
			{
				label: 'Maps Feature',
				src: 'https://raw.githubusercontent.com/alessioamo/Portfolio/main/static/screenshots/concordia-maps.png'
			},
			{
				label: 'Shuttle Schedule',
				src: 'https://raw.githubusercontent.com/alessioamo/Portfolio/main/static/screenshots/concordia-shuttle-schedule.png'
			},
			{
				label: 'STM Schedule',
				src: 'https://raw.githubusercontent.com/alessioamo/Portfolio/main/static/screenshots/concordia-stm-schedule.png'
			},
			{
				label: 'Library Occupancy',
				src: 'https://raw.githubusercontent.com/alessioamo/Portfolio/main/static/screenshots/concordia-library-occupancy.png'
			}
		]
	},
	{
		slug: 'game-platform-side-scrolling',
		color: '#4c4c4c',
		description:
			'Coming soon!', //TODO
		shortDescription:
			'2D Side-scrolling platforming game using Unity.',
		links: [{ to: '', label: 'GitHub Repo' }], //TODO
		logo: Assets.Unity,
		name: 'Side Scrolling Platformer Game',
		period: {
			from: new Date(2018, 8, 1), to: new Date(2020, 8, 1) //TODO
		},
		skills: getSkills('csharp', 'unity', 'github', 'vscode'),
		type: 'Video Game',
		screenshots: [ //TODO
			// {
			// 	label: 'Player Running In Level',
			// 	src: 'https://raw.githubusercontent.com/alessioamo/Portfolio/main/static/screenshots/platformer-side-scroller-running.png'
			// },
			// {
			// 	label: 'Sprite Sheet',
			// 	src: 'https://raw.githubusercontent.com/alessioamo/Portfolio/main/static/screenshots/platformer-side-scroller-sprite-sheet.png'
			// }
		]
	},
	{
		slug: 'web-game-chess',
		color: '#855639',
		description:
			'Please note that this project is currently under development and has placeholder images and layouts.', //TODO
		shortDescription:
			'Online Chess minigame where you control a King on a chessboard and must outlast other pieces.',
		links: [{ to: '', label: 'GitHub Repo' }], //TODO
		logo: Assets.Chess,
		name: 'Chess Minigame',
		period: {
			from: new Date(2018, 8, 1), to: new Date(2020, 8, 1) //TODO
		},
		skills: getSkills('js', 'html', 'css', 'bootstrap', 'github', 'vscode'),
		type: 'Web Game',
		screenshots: [
			{
				label: 'Chess Board With Pieces',
				src: 'https://raw.githubusercontent.com/alessioamo/Portfolio/main/static/screenshots/chess-board.png'
			}
		]
	},
	{
		slug: 'website-grocery-store',
		color: '#04688E',
		description:
			'Coming soon!', //TODO
		shortDescription:
			'Fully functioning grocery store website built with HTML, JavaScript, PHP, and linked to a database.',
		links: [{ to: '', label: 'GitHub Repo' }], //TODO
		logo: Assets.Grocery,
		name: 'Grocery Store Website',
		period: {
			from: new Date(2018, 8, 1), to: new Date(2020, 8, 1) //TODO
		},
		skills: getSkills('js', 'html', 'css', 'mysql', 'php', 'bootstrap', 'github'),
		type: 'Website',
		screenshots: [
			{
				label: 'Main Page',
				src: 'https://raw.githubusercontent.com/alessioamo/Portfolio/main/static/screenshots/grocery-main-page.png'
			},
			{
				label: 'Sign In Page',
				src: 'https://raw.githubusercontent.com/alessioamo/Portfolio/main/static/screenshots/grocery-sign-in-page.png'
			},
			{
				label: 'Product Page',
				src: 'https://raw.githubusercontent.com/alessioamo/Portfolio/main/static/screenshots/grocery-product-page.png'
			},
			{
				label: 'Cart Page',
				src: 'https://raw.githubusercontent.com/alessioamo/Portfolio/main/static/screenshots/grocery-cart-page.png'
			},
			{
				label: 'Backstore Page',
				src: 'https://raw.githubusercontent.com/alessioamo/Portfolio/main/static/screenshots/grocery-backstore-page.png'
			}
		]
	},
	{
		slug: 'game-cpp-risk',
		color: '#da3835',
		description:
			'Coming soon!', //TODO
		shortDescription:
			'C++ program that simulates the game Risk against other players and/or a computer that can use different strategies.',
		links: [{ to: '', label: 'GitHub Repo' }], //TODO
		logo: Assets.Risk,
		name: 'Risk Game',
		period: {
			from: new Date(2018, 8, 1), to: new Date(2020, 8, 1) //TODO
		},
		skills: getSkills('cpp', 'github', 'vscode'),
		type: 'Game Application',
		screenshots: [ //TODO
			// {
			// 	label: 'Game Log',
			// 	src: 'https://raw.githubusercontent.com/alessioamo/Portfolio/main/static/screenshots/risk-game-log.png'
			// }
		]
	},
	{
		slug: 'game-java-battleship',
		color: '#1f9386',
		description:
			'Coming soon!', //TODO
		shortDescription:
			'Java program that simulates the game Battleship against a computer.',
		links: [{ to: '', label: 'GitHub Repo' }], //TODO
		logo: Assets.Battleship,
		name: 'Battleship Game',
		period: {
			from: new Date(2018, 8, 1), to: new Date(2020, 8, 1) //TODO
		},
		skills: getSkills('java', 'github', 'eclipse'),
		type: 'Game Application',
		screenshots: [ //TODO
			// {
			// 	label: 'Game Board',
			// 	src: 'https://raw.githubusercontent.com/alessioamo/Portfolio/main/static/screenshots/battleship-game-board.png'
			// }
		]
	},
	{
		slug: 'discord-bot',
		color: '#5562ea',
		description:
			'Coming soon!', //TODO
		shortDescription:
			'Discord Bot that responds and reacts to user entered commands.',
		links: [{ to: '', label: 'GitHub Repo' }], //TODO
		logo: Assets.Discord,
		name: 'Discord Bot',
		period: {
			from: new Date(2018, 8, 1), to: new Date(2020, 8, 1) //TODO
		},
		skills: getSkills('js', 'nodejs', 'github', 'vscode'),
		type: 'Bot',
		screenshots: [
			{
				label: 'Help Command',
				src: 'https://raw.githubusercontent.com/alessioamo/Portfolio/main/static/screenshots/discord-help-command.png'
			},
			{
				label: 'Example Command 1',
				src: 'https://raw.githubusercontent.com/alessioamo/Portfolio/main/static/screenshots/discord-example-commands-1.png'
			},
			{
				label: 'Example Command 2',
				src: 'https://raw.githubusercontent.com/alessioamo/Portfolio/main/static/screenshots/discord-example-commands-2.png'
			}
		]
	},
	{
		slug: 'reddit-bot',
		color: '#f74300',
		description:
			'Coming soon!', //TODO
		shortDescription:
			'Reddit Bot that scans through subreddits and automatically replies to posts and comments based on their content.',
		links: [{ to: 'https://www.reddit.com/user/Jack-Sparrow_Bot/', label: 'Bot Reddit Account' },
				{ to: '', label: 'GitHub Repo' }], //TODO
		logo: Assets.Reddit,
		name: 'Reddit Bot',
		period: {
			from: new Date(2018, 8, 1), to: new Date(2020, 8, 1) //TODO
		},
		skills: getSkills('python', 'github', 'vscode'),
		type: 'Bot',
		screenshots: [
			{
				label: 'Bot Reply',
				src: 'https://raw.githubusercontent.com/alessioamo/Portfolio/main/static/screenshots/reddit-bot-reply-1.png'
			},
			{
				label: 'Bot Reply Based On Unique Message 1',
				src: 'https://raw.githubusercontent.com/alessioamo/Portfolio/main/static/screenshots/reddit-bot-reply-2.png'
			},
			{
				label: 'Bot Reply Based On Unique Message 2',
				src: 'https://raw.githubusercontent.com/alessioamo/Portfolio/main/static/screenshots/reddit-bot-reply-3.png'
			}
		]
	},
	{
		slug: 'stardew-penguin-mod',
		color: '#ffc400',
		description:
			'Coming soon!', //TODO
		shortDescription:
			'A mod for the popular farming game Stardew Valley that adds a new animal, the penguin, with many variations to it and new custom items.',
		links: [{ to: '', label: 'GitHub Repo' }], //TODO
		logo: Assets.Stardew,
		name: 'Stardew Valley Animal Mod',
		period: {
			from: new Date(2018, 8, 1), to: new Date(2020, 8, 1) //TODO
		},
		skills: getSkills('csharp', 'github', 'vscode'),
		type: 'Video Game Mod',
		screenshots: [ //TODO
			// {
			// 	label: 'Penguins In Game',
			// 	src: 'https://raw.githubusercontent.com/alessioamo/Portfolio/main/static/screenshots/stardew-penguins-in-game.png'
			// },
			// {
			// 	label: 'Penguin Drops',
			// 	src: 'https://raw.githubusercontent.com/alessioamo/Portfolio/main/static/screenshots/stardew-penguin-drops.png'
			// },
			// {
			// 	label: 'Penguin In Store',
			// 	src: 'https://raw.githubusercontent.com/alessioamo/Portfolio/main/static/screenshots/stardew-penguin-store.png'
			// },
			{
				label: 'Penguin Sprite Sheet',
				src: 'https://raw.githubusercontent.com/alessioamo/Portfolio/main/static/screenshots/stardew-penguin-sprite-sheet.png'
			}
		]
	}

	// {
	// 	slug: 'slick-portfolio-svelte',
	// 	color: '#ff3e00',
	// 	description:
	// 		'',
	// 	shortDescription:
	// 		'',
	// 	links: [{ to: 'https://github.com/RiadhAdrani/slick-portfolio-svelte', label: 'GitHub' }],
	// 	logo: Assets.Svelte,
	// 	name: 'Slick Portfolio',
	// 	period: {
	// 		from: new Date()
	// 	},
	// 	skills: getSkills('svelte', 'ts', 'tailwind', 'sass'),
	// 	type: 'Website Template',
	// 	screenshots: [
	// 		{
	// 			label: 'screen 1',
	// 			src: 'https://images.unsplash.com/photo-1587620962725-abab7fe55159?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZ3JhbW1pbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60'
	// 		}
	// 	]
	// }
];

const title = 'Projects';

const ProjectsData = { title, items };

export default ProjectsData;
