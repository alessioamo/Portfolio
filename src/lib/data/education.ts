import Assets from './assets';
import type { Education } from './types';

const title = 'Education';

const items: Array<Education> = [
	{
		degree: 'Bachelor\'s Degree of Computer Science',
		description: '', // TODO
		location: 'Montreal, Quebec',
		logo: Assets.Concordia,
		name: '',
		organization: 'Concordia University',
		period: { from: new Date(2020, 8), to: new Date(2024, 4) },
		shortDescription: '',
		slug: 'education-concordia',
		subjects: ['Programming', 'Web Development', 'Data Structures and Algorithms', 'Game Development', 'Java', 'JavaScript', 'HTML', 'CSS', 'Bootstrap', 'MySQL', 'PHP', 'Python', 'C#', 'C', 'C++']
	},
	{
		degree: 'DEC in Honours Pure and Applied Science',
		description: '', // TODO
		location: 'Montreal, Quebec',
		logo: Assets.Vanier,
		name: '',
		organization: 'Vanier College',
		period: { from: new Date(2018, 8), to: new Date(2020, 4) },
		shortDescription: '',
		slug: 'education-vanier',
		subjects: ['Calculus I + II', 'Linear Algebra', 'Mechanics', 'Waves', 'Physics', 'Astrophysics', 'Electricity and Magnetism', 'Chemistry', 'Biology']
	}
];

const EducationData = { title, items };

export default EducationData;
