import Assets from './data/assets';
import { getSkills } from './skills.params';
import { ContractType, type Experience } from './types';

const MY_EXPERIENCES: Array<Experience> = [
	{
		slug: 'fullstack-web-dev',
		company: 'Croogloo',
		description: 'Maintained and updated web application through backend with Google Cloud Console and through frontend with unique features.', // TODO
		contract: ContractType.Internship,
		type: 'Web Development',
		location: 'Montréal, Québec',
		period: { from: new Date(2023, 5, 1), to: new Date(2023, 9, 1) },
		skills: getSkills('js', 'java', 'html', 'css', 'googlecloud', 'github', 'bootstrap', 'vscode'),
		name: 'Fullstack Web Developer',
		color: '#ffffff', // TODO
		links: [],
		logo: Assets.Croogloo,
		shortDescription: '' // TODO
	},
	{
		slug: 'technical-publications-developer',
		company: 'Airbus Canada',
		description: 'Maintained, updated, and added new functionalities to frontend and backend of technical publications webpages.',
		contract: ContractType.Internship,
		type: 'Web Development',
		location: 'Mirabel, Québec',
		period: { from: new Date(2022, 5, 1), to: new Date(2022, 9, 1) },
		skills: getSkills('js', 'java', 'html', 'css', 'bootstrap', 'github', 'eclipse'),
		name: 'Developer in Technical Publications',
		color: '#ffffff', // TODO
		links: [],
		logo: Assets.Airbus,
		shortDescription: '' // TODO
	},
	{
		slug: 'multimedia-produciton-assistant',
		company: 'Genetec',
		description: 'Planned, set up, recorded, and edited videos that demonstrated features and functionalities of software products.',
		contract: ContractType.Internship,
		type: 'Software',
		location: 'Montréal, Québec',
		period: { from: new Date(2022, 1, 1), to: new Date(2022, 5, 1) },
		skills: getSkills('premiere', 'photoshop'),
		name: 'Multimedia Production Assistant',
		color: '#ffffff', // TODO
		links: [],
		logo: Assets.Genetec,
		shortDescription: '' // TODO
	},
	{
		slug: 'tutor',
		company: 'Self-employed',
		description: 'Tutored and aided multiple secondary 3 to 5 students in various subjects such as programming, sciences, and maths. Reached objectives in teaching others using different techniques',
		contract: ContractType.Freelance,
		type: 'Tutoring',
		location: 'Montréal, Québec',
		period: { from: new Date(2017, 9, 1), to: new Date(2022, 9, 1) },
		skills: getSkills(),
		name: 'Tutor',
		color: '#ffffff', // TODO
		links: [],
		logo: Assets.Unknown, // TODO
		shortDescription: '' // TODO
	},
	{
		slug: 'camp-counsellor',
		company: 'Laurus Lifestyles',
		description: 'Cared for young children with different needs such as autism and ADHD. Encouraged team building through team activities and communication',
		contract: ContractType.FullTime,
		type: 'Camp Counsellor',
		location: 'Montréal, Québec',
		period: { from: new Date(2019, 5, 1), to: new Date(2019, 9, 1) },
		skills: getSkills(),
		name: 'Camp Counsellor',
		color: '#ffffff', // TODO
		links: [],
		logo: Assets.Laurus, // TODO
		shortDescription: '' // TODO
	},
	{
		slug: 'student-works',
		company: 'Student Works Painting',
		description: 'Marketed and provided painting services with a dedicated team.',
		contract: ContractType.FullTime,
		type: 'Painter and Customer Service',
		location: 'Montréal, Québec',
		period: { from: new Date(2018, 1, 1), to: new Date(2018, 9, 1) },
		skills: getSkills(),
		name: 'Painter and Customer Service',
		color: '#ffffff', // TODO
		links: [],
		logo: Assets.StudentWorks,
		shortDescription: '' // TODO
	}
];

export default MY_EXPERIENCES;
