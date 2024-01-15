import Assets from './data/assets';
import { getSkills } from './skills.params';
import { ContractType, type Experience } from './types';

const MY_EXPERIENCES: Array<Experience> = [
	{
		slug: 'fullstack-web-dev',
		company: 'Croogloo',
		description: 'Creating awesome tools for developers.', // TODO
		contract: ContractType.Internship,
		type: 'Web Development',
		location: 'Home',
		period: { from: new Date(2023, 0, 1), to: new Date(2023, 0, 5) },
		skills: getSkills('js', 'java', 'html', 'css', 'googlecloud', 'github', 'bootstrap', 'vscode'),
		name: 'Fullstack Web Developer',
		color: '#ff0000', // TODO
		links: [], // TODO
		logo: Assets.Unknown, // TODO
		shortDescription: 'test' // TODO
	},
	{
		slug: 'software-freelance', // TODO
		company: 'Self-employed', // TODO
		description: 'Creating awesome applications for customers.', // TODO
		contract: ContractType.Freelance, // TODO
		type: 'Software Development', // TODO
		location: 'Home', // TODO
		period: { from: new Date() }, // TODO
		skills: getSkills('python', 'svelte', 'ts', 'sass', 'css', 'html', 'js'), // TODO
		name: 'Freelancer', // TODO
		color: '#ffffff', // TODO
		links: [], // TODO
		logo: Assets.Unknown, // TODO
		shortDescription: '' // TODO
	},
	{
		slug: 'software-freelance', // TODO
		company: 'Self-employed', // TODO
		description: 'Creating awesome applications for customers.', // TODO
		contract: ContractType.Freelance, // TODO
		type: 'Software Development', // TODO
		location: 'Home', // TODO
		period: { from: new Date() }, // TODO
		skills: getSkills('python', 'svelte', 'ts', 'sass', 'css', 'html', 'js'), // TODO
		name: 'Freelancer', // TODO
		color: '#ffffff', // TODO
		links: [], // TODO
		logo: Assets.Unknown, // TODO
		shortDescription: '' // TODO
	},
	{
		slug: 'software-freelance', // TODO
		company: 'Self-employed', // TODO
		description: 'Creating awesome applications for customers.', // TODO
		contract: ContractType.Freelance, // TODO
		type: 'Software Development', // TODO
		location: 'Home', // TODO
		period: { from: new Date() }, // TODO
		skills: getSkills('python', 'svelte', 'ts', 'sass', 'css', 'html', 'js'), // TODO
		name: 'Freelancer', // TODO
		color: '#ffffff', // TODO
		links: [], // TODO
		logo: Assets.Unknown, // TODO
		shortDescription: '' // TODO
	},
	{
		slug: 'software-freelance', // TODO
		company: 'Self-employed', // TODO
		description: 'Creating awesome applications for customers.', // TODO
		contract: ContractType.Freelance, // TODO
		type: 'Software Development', // TODO
		location: 'Home', // TODO
		period: { from: new Date() }, // TODO
		skills: getSkills('python', 'svelte', 'ts', 'sass', 'css', 'html', 'js'), // TODO
		name: 'Freelancer', // TODO
		color: '#ffffff', // TODO
		links: [], // TODO
		logo: Assets.Unknown, // TODO
		shortDescription: '' // TODO
	},
	{
		slug: 'software-freelance', // TODO
		company: 'Self-employed', // TODO
		description: 'Creating awesome applications for customers.', // TODO
		contract: ContractType.Freelance, // TODO
		type: 'Software Development', // TODO
		location: 'Home', // TODO
		period: { from: new Date() }, // TODO
		skills: getSkills('python', 'svelte', 'ts', 'sass', 'css', 'html', 'js'), // TODO
		name: 'Freelancer', // TODO
		color: '#ffffff', // TODO
		links: [], // TODO
		logo: Assets.Unknown, // TODO
		shortDescription: '' // TODO
	}
];

export default MY_EXPERIENCES;
