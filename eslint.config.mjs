import baseConfig from '@innovixx/eslint-config/config/configs/base/index.mjs';
import reactConfig from '@innovixx/eslint-config/config/configs/react/index.mjs';
import typescriptConfig from '@innovixx/eslint-config/config/configs/typescript/index.mjs';

export default [
	baseConfig,
	reactConfig,
	typescriptConfig,
	{
		ignores: [
			'.next',
			'src/graphql/generated/schema.ts',
			'src/components/RichText/nodeFormat.ts',
			'src/components/RichText/serialize.tsx',
			'src/components/RenderBlocks/index.tsx',
		],
	},
	{
		files: ['**/*.{js,jsx,ts,tsx}'],
	},
	{
		rules: {
			camelcase: 0,
			'no-undef': 0,
			'react/require-default-props': 0,
		},
	},
];
