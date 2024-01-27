import Assets from './data/assets';
import type { Skill } from './types';
import svelte from './md/svelte.md?raw';

const s = (skill: Skill) => skill;

export type ArrayElementType<ArrayType extends readonly unknown[]> =
	ArrayType extends readonly (infer ElementType)[] ? ElementType : never;

const MY_SKILLS = [
	s({
		slug: 'js',
		color: 'yellow',
		description:
			'Coming soon!',
		logo: Assets.JavaScript,
		name: 'Javascript'
	}),
	// s({
	// 	slug: 'ts',
	// 	color: 'blue',
	// 	description:
	// 		'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent orci enim, congue sit amet justo eget, consequat sollicitudin libero. Etiam iaculis lectus tempor, hendrerit enim in, luctus arcu. Maecenas id enim et nibh ullamcorper auctor ac eu est. Donec imperdiet, diam quis malesuada faucibus, nibh ex gravida sapien, posuere pharetra nunc libero tristique turpis. Sed egestas laoreet semper. In hac habitasse platea dictumst. Praesent vitae est nec felis maximus facilisis. Duis luctus dui id urna tristique varius. Ut vulputate leo arcu, non bibendum arcu pulvinar eget. Fusce semper elit ut congue lacinia. Suspendisse magna diam, tempus vitae interdum eget, dictum vitae nisl. Praesent quis fringilla tortor. Donec vitae sagittis dui.',
	// 	logo: Assets.TypeScript,
	// 	name: 'Typescript'
	// }),
	s({
		slug: 'css',
		color: 'blue',
		description:
			'Coming soon!',
		logo: Assets.CSS,
		name: 'CSS'
	}),
	s({
		slug: 'html',
		color: 'orange',
		description:
			'Coming soon!',
		logo: Assets.HTML,
		name: 'HTML'
	}),
	s({
		slug: 'java',
		color: 'orange',
		description:
			'Comaing soon!',
		logo: Assets.Java,
		name: 'Java'
	}),
	s({
		slug: 'mysql',
		color: 'blue',
		description:
			'Coming soon!',
		logo: Assets.MySQL,
		name: 'MySQL'
	}),
	s({
		slug: 'sqlite',
		color: 'blue',
		description:
			'Coming soon!',
		logo: Assets.SQLite,
		name: 'SQLite'
	}),
	s({
		slug: 'python',
		color: 'blue',
		description:
			'Coming soon!',
		logo: Assets.Python,
		name: 'Python'
	}),
	s({
		slug: 'php',
		color: 'purple',
		description:
			'Coming soon!',
		logo: Assets.PHP,
		name: 'PHP'
	}),
	s({
		slug: 'c',
		color: 'blue',
		description:
			'Coming soon!',
		logo: Assets.C,
		name: 'C'
	}),
	s({
		slug: 'cpp',
		color: 'blue',
		description:
			'Coming soon!',
		logo: Assets.Cpp,
		name: 'C++'
	}),
	s({
		slug: 'csharp',
		color: 'purple',
		description:
			'Coming soon!',
		logo: Assets.Csharp,
		name: 'C#'
	}),
	s({
		slug: 'kotlin',
		color: 'purple',
		description:
			'Coming soon!',
		logo: Assets.Kotlin,
		name: 'Kotlin'
	}),
	s({
		slug: 'github',
		color: 'purple',
		description:
			'Coming soon!',
		logo: Assets.GitHub,
		name: 'GitHub'
	}),
	s({
		slug: 'unity',
		color: 'grey',
		description:
			'<script>var test = document.createElement(\'p\'); test.textContent = \'This is a dynamically created paragraph element!\';</script>Coming soon!',
		logo: Assets.Unity,
		name: 'Unity'
	}),
	s({
		slug: 'nodejs',
		color: 'green',
		description:
			'Coming soon!',
		logo: Assets.NodeJs,
		name: 'Node.js'
	}),
	s({
		slug: 'bootstrap',
		color: 'purple',
		description:
			'Coming soon!',
		logo: Assets.Bootstrap,
		name: 'Bootstrap'
	}),
	s({
		slug: 'androidstudio',
		color: 'green',
		description:
			'Coming soon!',
		logo: Assets.AndroidStudio,
		name: 'Android Studio'
	}),
	s({
		slug: 'googlecloud',
		color: 'blue',
		description:
			'Coming soon!',
		logo: Assets.GoogleCloud,
		name: 'Google Cloud'
	}),
	s({
		slug: 'figma',
		color: 'purple',
		description:
			'Coming soon!',
		logo: Assets.Figma,
		name: 'Figma'
	}),
	s({
		slug: 'jira',
		color: 'blue',
		description:
			'Coming soon!',
		logo: Assets.Jira,
		name: 'Jira'
	}),
	s({
		slug: 'vscode',
		color: 'blue',
		description:
			'Coming soon!',
		logo: Assets.VSCode,
		name: 'VSCode'
	}),
	s({
		slug: 'eclipse',
		color: 'purple',
		description:
			'Coming soon!',
		logo: Assets.Eclipse,
		name: 'Eclipse'
	}),
	s({
		slug: 'premiere',
		color: 'purple',
		description:
			'Coming soon!',
		logo: Assets.Premiere,
		name: 'Adobe Premiere'
	}),
	s({
		slug: 'photoshop',
		color: 'blue',
		description:
			'Coming soon!',
		logo: Assets.Photoshop,
		name: 'Adobe Photoshop'
	}),
	s({
		slug: 'sonyvegas',
		color: 'blue',
		description:
			'Coming soon!',
		logo: Assets.SonyVegas,
		name: 'Sony Vegas'
	}),
	s({
		slug: 'excel',
		color: 'green',
		description:
			'Coming soon!',
		logo: Assets.Excel,
		name: 'Excel'
	}),
	s({
		slug: 'word',
		color: 'blue',
		description:
			'Coming soon!',
		logo: Assets.Word,
		name: 'Word'
	}),
	s({
		slug: 'powerpoint',
		color: 'red',
		description:
			'Coming soon!',
		logo: Assets.Powerpoint,
		name: 'Powerpoint'
	}),
	// s({
	// 	slug: 'sass',
	// 	color: 'pink',
	// 	description:
	// 		'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent orci enim, congue sit amet justo eget, consequat sollicitudin libero. Etiam iaculis lectus tempor, hendrerit enim in, luctus arcu. Maecenas id enim et nibh ullamcorper auctor ac eu est. Donec imperdiet, diam quis malesuada faucibus, nibh ex gravida sapien, posuere pharetra nunc libero tristique turpis. Sed egestas laoreet semper. In hac habitasse platea dictumst. Praesent vitae est nec felis maximus facilisis. Duis luctus dui id urna tristique varius. Ut vulputate leo arcu, non bibendum arcu pulvinar eget. Fusce semper elit ut congue lacinia. Suspendisse magna diam, tempus vitae interdum eget, dictum vitae nisl. Praesent quis fringilla tortor. Donec vitae sagittis dui.',
	// 	logo: Assets.Sass,
	// 	name: 'Sass'
	// }),
	// s({
	// 	slug: 'reactjs',
	// 	color: 'cyan',
	// 	description:
	// 		'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent orci enim, congue sit amet justo eget, consequat sollicitudin libero. Etiam iaculis lectus tempor, hendrerit enim in, luctus arcu. Maecenas id enim et nibh ullamcorper auctor ac eu est. Donec imperdiet, diam quis malesuada faucibus, nibh ex gravida sapien, posuere pharetra nunc libero tristique turpis. Sed egestas laoreet semper. In hac habitasse platea dictumst. Praesent vitae est nec felis maximus facilisis. Duis luctus dui id urna tristique varius. Ut vulputate leo arcu, non bibendum arcu pulvinar eget. Fusce semper elit ut congue lacinia. Suspendisse magna diam, tempus vitae interdum eget, dictum vitae nisl. Praesent quis fringilla tortor. Donec vitae sagittis dui.',
	// 	logo: Assets.ReactJs,
	// 	name: 'React Js'
	// }),
	// s({
	// 	slug: 'svelte',
	// 	color: 'orange',
	// 	description: svelte,
	// 	logo: Assets.Svelte,
	// 	name: 'Svelte'
	// })
];

export default MY_SKILLS;

export const getSkills = (...slugs: Array<string>): Array<Skill> =>
	MY_SKILLS.filter((it) => slugs.includes(it.slug));
