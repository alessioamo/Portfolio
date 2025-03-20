import Assets from './data/assets';
import type { Education } from './types';

export const MY_EDUCATIONS: Array<Education> = [
	{
		degree: 'Bachelor\'s Degree of Computer Science',
		description: '',
		location: 'Montréal, Québec',
		logo: Assets.Concordia,
		name: '',
		organization: 'Concordia University',
		period: { from: new Date(2020, 8, 1), to: new Date(2024, 4, 1) },
		shortDescription: '',
		slug: 'education-bachelor',
		subjects: ['Programming', 'Web Development', 'Java', 'JavaScript', 'HTML', 'CSS', 'MySQL', 'Bootstrap', 'Python', 'C', 'C#', 'C++', 'PHP', 'Data Structures and Algorithms']
	},
	{
		degree: 'DEC in Honours Pure and Applied Science',
		description: '',
		location: 'Montréal, Québec',
		logo: Assets.Vanier,
		name: '',
		organization: 'Vanier College',
		period: { from: new Date(2018, 8, 1), to: new Date(2020, 8, 1) },
		shortDescription: '',
		slug: 'education-dec',
		subjects: ['Calculus I + II', 'Mechanics', 'Waves', 'Linear Algebra', 'Chemistry', 'Biology', 'Astrophysics', 'Electricity and Magnetism']
	}
];
