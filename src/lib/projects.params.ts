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
		skills: getSkills('js', 'html', 'css', 'java', 'github'),
		type: 'Website',
		screenshots: [ //TODO
			{
				label: 'screen 1',
				src: 'https://github.com/alessioamo/Portfolio/blob/main/static/screenshots/teachable.png?raw=true'
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
		skills: getSkills('angular', 'ts', 'tailwind'), //TODO
		type: 'Website', //TODO
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