import type { Skill, SkillCategory } from './types';
import type { StringWithAutoComplete } from '@riadh-adrani/utils';
import { omit } from '@riadh-adrani/utils';
import Assets from './assets';
import svelteMd from './md/svelte.md?raw';

const defineSkillCategory = <S extends string>(data: SkillCategory<S>): SkillCategory<S> => data;

const categories = [
	defineSkillCategory({ name: 'Programming Languages', slug: 'pro-lang' }),
	defineSkillCategory({ name: 'Frameworks', slug: 'framework' }),
	defineSkillCategory({ name: 'Libraries', slug: 'library' }),
	defineSkillCategory({ name: 'Libraries & Frameworks', slug: 'library-framework' }),
	defineSkillCategory({ name: 'Langauges', slug: 'lang' }),
	defineSkillCategory({ name: 'Databases', slug: 'db' }),
	defineSkillCategory({ name: 'ORMs', slug: 'orm' }),
	defineSkillCategory({ name: 'DevOps', slug: 'devops' }),
	defineSkillCategory({ name: 'Testing', slug: 'test' }),
	defineSkillCategory({ name: 'Dev Tools', slug: 'devtools' }),
	defineSkillCategory({ name: 'Markup & Style', slug: 'markup-style' }),
	defineSkillCategory({ name: 'Design', slug: 'design' }),
	defineSkillCategory({ name: 'Soft Skills', slug: 'soft' }),
	defineSkillCategory({ name: 'Tools and Technologies', slug: 'tech' }),
	defineSkillCategory({ name: 'Misc', slug: 'misc' })
] as const;

const defineSkill = <S extends string>(
	skill: Omit<Skill<S>, 'category'> & {
		category?: StringWithAutoComplete<(typeof categories)[number]['slug']>;
	}
): Skill<S> => {
	const out: Skill<S> = omit(skill, 'category');

	if (skill.category) {
		out.category = categories.find((it) => it.slug === skill.category);
	}

	return out;
};

export const getSkills = (
	...slugs: Array<StringWithAutoComplete<(typeof items)[number]['slug']>>
): Array<Skill> => {
	return items.filter((it) => (slugs.length === 0 ? true : slugs.includes(it.slug)));
};

export const groupByCategory = (
	query: string
): Array<{ category: SkillCategory; items: Array<Skill> }> => {
	const out: ReturnType<typeof groupByCategory> = [];

	const others: Array<Skill> = [];

	items.forEach((item) => {
		if (query.trim() && !item.name.toLowerCase().includes(query.trim().toLowerCase())) return;

		// push to others if item does not have a category
		if (!item.category) {
			others.push(item);
			return;
		}

		// check if category exists
		let category = out.find((it) => it.category.slug === item.category?.slug);

		if (!category) {
			category = { items: [], category: item.category };

			out.push(category);
		}

		category.items.push(item);
	});

	if (others.length !== 0) {
		out.push({ category: { name: 'Others', slug: 'others' }, items: others });
	}

	return out;
};

const title = 'Skills';

const items = [
	// Programming Languages
	defineSkill({
		slug: 'js',
		color: 'yellow',
		description:
			'Coming soon!',
		logo: Assets.JavaScript,
		name: 'Javascript',
		category: 'pro-lang'
	}),
	defineSkill({
		slug: 'ts',
		color: 'blue',
		description:
			'Coming soon!',
		logo: Assets.TypeScript,
		name: 'Typescript',
		category: 'pro-lang'
	}),
	defineSkill({
		slug: 'java',
		color: 'orange',
		description:
			'Coming soon!',
		logo: Assets.Java,
		name: 'Java',
		category: 'pro-lang'
	}),
	defineSkill({
		slug: 'python',
		color: 'blue',
		description:
			'Coming soon!',
		logo: Assets.Python,
		name: 'Python',
		category: 'pro-lang'
	}),
	defineSkill({
		slug: 'php',
		color: 'purple',
		description:
			'Coming soon!',
		logo: Assets.PHP,
		name: 'PHP',
		category: 'pro-lang'
	}),
	defineSkill({
		slug: 'csharp',
		color: 'purple',
		description:
			'Coming soon!',
		logo: Assets.Csharp,
		name: 'C#',
		category: 'pro-lang'
	}),
	defineSkill({
		slug: 'c',
		color: 'blue',
		description:
			'Coming soon!',
		logo: Assets.C,
		name: 'C',
		category: 'pro-lang'
	}),
	defineSkill({
		slug: 'cpp',
		color: 'blue',
		description:
			'Coming soon!',
		logo: Assets.Cpp,
		name: 'C++',
		category: 'pro-lang'
	}),
	defineSkill({
		slug: 'nodejs',
		color: 'green',
		description:
			'Coming soon!',
		logo: Assets.NodeJs,
		name: 'Node.js',
		category: 'pro-lang'
	}),
	defineSkill({
		slug: 'kotlin',
		color: 'purple',
		description:
			'Coming soon!',
		logo: Assets.Kotlin,
		name: 'Kotlin',
		category: 'pro-lang'
	}),

	// Libraries & Frameworks
	defineSkill({
		slug: 'reactjs',
		color: 'cyan',
		description:
			'Coming soon!',
		logo: Assets.ReactJs,
		name: 'React Js',
		category: 'library-framework'
	}),
	defineSkill({
		slug: 'bootstrap',
		color: 'purple',
		description:
			'Coming soon!',
		logo: Assets.Bootstrap,
		name: 'Bootstrap',
		category: 'library-framework'
	}),

	// Markup & Style
	defineSkill({
		slug: 'html',
		color: 'orange',
		description:
			'Coming soon!',
		logo: Assets.HTML,
		name: 'HTML',
		category: 'markup-style'
	}),
	defineSkill({
		slug: 'css',
		color: 'blue',
		description:
			'Coming soon!',
		logo: Assets.CSS,
		name: 'CSS',
		category: 'markup-style'
	}),

	// Databases
	defineSkill({
		slug: 'mysql',
		color: 'blue',
		description:
			'Coming soon!',
		logo: Assets.MySQL,
		name: 'MySQL',
		category: 'db'
	}),
	defineSkill({
		slug: 'SQLite',
		color: 'blue',
		description:
			'Coming soon!',
		logo: Assets.SQLite,
		name: 'SQLite',
		category: 'db'
	}),

	// Tools & Technologies
	defineSkill({
		slug: 'github',
		color: 'purple',
		description:
			'Coming soon!',
		logo: Assets.Github,
		name: 'GitHub',
		category: 'tech'
	}),
	defineSkill({
		slug: 'unity',
		color: 'black',
		description:
			'Coming soon!',
		logo: Assets.Unity,
		name: 'Unity',
		category: 'tech'
	}),
	defineSkill({
		slug: 'google-cloud',
		color: 'blue',
		description:
			'Coming soon!',
		logo: Assets.GoogleCloud,
		name: 'Google Cloud',
		category: 'tech'
	}),
	
	defineSkill({
		slug: 'vscode',
		color: 'cyan',
		description:
			'Coming soon!',
		logo: Assets.VSCode,
		name: 'VSCode',
		category: 'tech'
	}),
	defineSkill({
		slug: 'eclipse',
		color: 'purple',
		description:
			'Coming soon!',
		logo: Assets.Eclipse,
		name: 'Eclipse',
		category: 'tech'
	}),
	defineSkill({
		slug: 'android-studio',
		color: 'green',
		description:
			'Coming soon!',
		logo: Assets.AndroidStudio,
		name: 'Android Studio',
		category: 'tech'
	}),

	defineSkill({
		slug: 'figma',
		color: 'purple',
		description:
			'Coming soon!',
		logo: Assets.Figma,
		name: 'Figma',
		category: 'tech'
	}),
	defineSkill({
		slug: 'jira',
		color: 'blue',
		description:
			'Coming soon!',
		logo: Assets.Jira,
		name: 'Jira',
		category: 'tech'
	}),

	defineSkill({
		slug: 'photoshop',
		color: 'blue',
		description:
			'Coming soon!',
		logo: Assets.Photoshop,
		name: 'Adobe Photoshop',
		category: 'tech'
	}),
	defineSkill({
		slug: 'premiere',
		color: 'purple',
		description:
			'Coming soon!',
		logo: Assets.Premiere,
		name: 'Adobe Premiere',
		category: 'tech'
	}),
	defineSkill({
		slug: 'sony-vegas',
		color: 'cyan',
		description:
			'Coming soon!',
		logo: Assets.SonyVegas,
		name: 'Sony Vegas',
		category: 'tech'
	}),
	defineSkill({
		slug: 'aseprite',
		color: 'grey',
		description:
			'Coming soon!',
		logo: Assets.Aseprite,
		name: 'Aseprite',
		category: 'tech'
	}),
	defineSkill({
		slug: 'powerpoint',
		color: 'orange',
		description:
			'Coming soon!',
		logo: Assets.PowerPoint,
		name: 'PowerPoint',
		category: 'tech'
	}),
	defineSkill({
		slug: 'excel',
		color: 'green',
		description:
			'Coming soon!',
		logo: Assets.Excel,
		name: 'Excel',
		category: 'tech'
	}),
	defineSkill({
		slug: 'word',
		color: 'blue',
		description:
			'Coming soon!',
		logo: Assets.Word,
		name: 'Word',
		category: 'tech'
	}),

	// defineSkill({
	// 	slug: 'svelte',
	// 	color: 'orange',
	// 	description: svelteMd,
	// 	logo: Assets.Svelte,
	// 	name: 'Svelte',
	// 	category: 'library'
	// }),
] as const;

const SkillsData = {
	title,
	items
};

export default SkillsData;
