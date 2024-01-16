import Assets from './data/assets';
import { getSkills } from './skills.params';
import type { Project } from './types';

const MY_PROJECTS: Array<Project> = [
	{
		slug: 'dbd-website',
		color: '#f15400',
		description:
			'Lorem ipsum', //TODO
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
		color: '#a300de', //TODO
		description:
			'Fully functioning website built with JSP and servlets, and linked to a database. ' +
			'Products, orders, and users connected to a database, cart feature that transfers into orders', //TODO
		shortDescription:
			'Fully functioning website built with JSP and servlets, and linked to a database.',
		links: [{ to: 'https://github.com/alessioamo/SOEN387-A1', label: 'GitHub Repo' }],
		logo: Assets.Unknown, //TODO
		name: 'Commerce Website',
		period: {
			from: new Date(2018, 8, 1), to: new Date(2020, 8, 1) //TODO
		},
		skills: getSkills('js', 'html', 'css', 'java', 'mysql', 'bootstrap', 'github', 'eclipse'),
		type: 'Website',
		screenshots: [ //TODO
			{
				label: 'screen 1',
				src: ''
			}
		]
	},
	{
		slug: 'family-feud-website',
		color: '#a300de', //TODO
		description:
			'Lorem ipsum', //TODO
		shortDescription:
			'Lorem', //TODO
		links: [{ to: 'https://github.com/alessioamo/Family-Feud', label: 'GitHub Repo' }],
		logo: Assets.Unknown, //TODO
		name: 'Family Feud Game',
		period: {
			from: new Date(2018, 8, 1), to: new Date(2020, 8, 1) //TODO
		},
		skills: getSkills('js', 'html', 'css', 'bootstrap', 'github', 'vscode'),
		type: 'Website',
		screenshots: [ //TODO
			{
				label: 'screen 1',
				src: ''
			}
		]
	},
	{
		slug: 'jeopardy-website',
		color: '#a300de', //TODO
		description:
			'Lorem ipsum', //TODO
		shortDescription:
			'Lorem', //TODO
		links: [{ to: 'https://github.com/alessioamo/Jeopardy', label: 'GitHub Repo' }],
		logo: Assets.Unknown, //TODO
		name: 'Jeopardy Game',
		period: {
			from: new Date(2018, 8, 1), to: new Date(2020, 8, 1) //TODO
		},
		skills: getSkills('js', 'html', 'css', 'bootstrap', 'github', 'vscode'),
		type: 'Website',
		screenshots: [ //TODO
			{
				label: 'screen 1',
				src: ''
			}
		]
	},
	{
		slug: 'scientific-calculator-python',
		color: '#a300de', //TODO
		description:
			'Lorem ipsum', //TODO
		shortDescription:
			'Calculator with scientific functions built from scratch in Python without the use of libraries.',
		links: [{ to: 'https://github.com/alessioamo/ETERNITY-Calculator', label: 'GitHub Repo' }],
		logo: Assets.Unknown, //TODO
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
		color: '#a300de', //TODO
		description:
			'Lorem ipsum', //TODO
		shortDescription:
			'Lorem', //TODO
		links: [{ to: 'https://github.com/alessioamo/Concordia-For-Students', label: 'GitHub Repo' }],
		logo: Assets.Concordia, //TODO
		name: 'Slick Portfolio', //TODO
		period: {
			from: new Date(2018, 8, 1), to: new Date(2020, 8, 1) //TODO
		},
		skills: getSkills('kotlin', 'java', 'vscode'),
		type: 'Mobile Application',
		screenshots: [ //TODO
			{
				label: 'screen 1',
				src: ''
			}
		]
	},
	{
		slug: 'slick-portfolio-angular', //TODO
		color: '#a300de', //TODO
		description:
			'Lorem ipsum', //TODO
		shortDescription:
			'Lorem', //TODO
		links: [{ to: 'https://github.com/RiadhAdrani/slick-portfolio-svelte', label: 'GitHub' }], //TODO
		logo: Assets.Unknown, //TODO
		name: 'Slick Portfolio', //TODO
		period: {
			from: new Date(2018, 8, 1), to: new Date(2020, 8, 1) //TODO
		},
		skills: getSkills('angular', 'ts', 'tailwind'), //TODO
		type: 'Website Template', //TODO
		screenshots: [ //TODO
			{
				label: 'screen 1',
				src: ''
			}
		]
	},
	{
		slug: 'slick-portfolio-angular', //TODO
		color: '#a300de', //TODO
		description:
			'Lorem ipsum', //TODO
		shortDescription:
			'Lorem', //TODO
		links: [{ to: 'https://github.com/RiadhAdrani/slick-portfolio-svelte', label: 'GitHub' }], //TODO
		logo: Assets.Unknown, //TODO
		name: 'Slick Portfolio', //TODO
		period: {
			from: new Date(2018, 8, 1), to: new Date(2020, 8, 1) //TODO
		},
		skills: getSkills('angular', 'ts', 'tailwind'), //TODO
		type: 'Website Template', //TODO
		screenshots: [ //TODO
			{
				label: 'screen 1',
				src: ''
			}
		]
	},
	{
		slug: 'slick-portfolio-angular', //TODO
		color: '#a300de', //TODO
		description:
			'Lorem ipsum', //TODO
		shortDescription:
			'Lorem', //TODO
		links: [{ to: 'https://github.com/RiadhAdrani/slick-portfolio-svelte', label: 'GitHub' }], //TODO
		logo: Assets.Unknown, //TODO
		name: 'Slick Portfolio', //TODO
		period: {
			from: new Date(2018, 8, 1), to: new Date(2020, 8, 1) //TODO
		},
		skills: getSkills('angular', 'ts', 'tailwind'), //TODO
		type: 'Website Template', //TODO
		screenshots: [ //TODO
			{
				label: 'screen 1',
				src: ''
			}
		]
	},
	{
		slug: 'slick-portfolio-angular', //TODO
		color: '#a300de', //TODO
		description:
			'Lorem ipsum', //TODO
		shortDescription:
			'Lorem', //TODO
		links: [{ to: 'https://github.com/RiadhAdrani/slick-portfolio-svelte', label: 'GitHub' }], //TODO
		logo: Assets.Unknown, //TODO
		name: 'Slick Portfolio', //TODO
		period: {
			from: new Date(2018, 8, 1), to: new Date(2020, 8, 1) //TODO
		},
		skills: getSkills('angular', 'ts', 'tailwind'), //TODO
		type: 'Website Template', //TODO
		screenshots: [ //TODO
			{
				label: 'screen 1',
				src: ''
			}
		]
	},
	{
		slug: 'slick-portfolio-angular', //TODO
		color: '#a300de', //TODO
		description:
			'Lorem ipsum', //TODO
		shortDescription:
			'Lorem', //TODO
		links: [{ to: 'https://github.com/RiadhAdrani/slick-portfolio-svelte', label: 'GitHub' }], //TODO
		logo: Assets.Unknown, //TODO
		name: 'Slick Portfolio', //TODO
		period: {
			from: new Date(2018, 8, 1), to: new Date(2020, 8, 1) //TODO
		},
		skills: getSkills('angular', 'ts', 'tailwind'), //TODO
		type: 'Website Template', //TODO
		screenshots: [ //TODO
			{
				label: 'screen 1',
				src: ''
			}
		]
	}
	
];

export default MY_PROJECTS;
