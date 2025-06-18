import BaseData from './base';
import { getSkills } from './skills';
import type { Skill } from './types';

const title = 'Home';

const hero: {
	title: string;
	description: string;
	links: Array<{ label: string; href: string; icon: `i-carbon-${string}` }>;
} = {
	title: `${BaseData.fullName},`,
	description:
		'Welcome to my Portfolio! It is currently under development and is being updated so come back soon to see the final version! In the meantime, ' + 
		'feel free to explore the sections that are complete!',
	links: [
		{ label: 'GitHub', href: 'https://github.com/alessioamo', icon: 'i-carbon-logo-github' },
		{ label: 'LinkedIn', href: 'https://www.linkedin.com/in/alessio-amorelli', icon: 'i-carbon-logo-linkedin' }
	]
};

const carousel: Array<Skill> = getSkills();

const HomeData = {
	title,
	hero,
	carousel
};

export default HomeData;
