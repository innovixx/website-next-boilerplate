import type { CodegenConfig } from '@graphql-codegen/cli';
import dotenv from 'dotenv';

dotenv.config();

const config: CodegenConfig = {
	generates: {
		'src/graphql/generated/': {
			documents: './src/graphql/**/*.graphql',
			preset: 'client',
			presetConfig: {
				gqlTagName: 'gql',
				fragmentMasking: false,
			},
			schema: `${process.env.NEXT_PUBLIC_SERVER_URL}/api/graphql`,
		},
		'src/graphql/generated/schema.ts': {
			plugins: ['typescript'],
			schema: `${process.env.NEXT_PUBLIC_SERVER_URL}/api/graphql`,
			config: {
				scalars: {
					Date: 'string',
					DateTime: 'string',
					EmailAddress: 'string',
					JSON: 'import("lexical").SerializedEditorState<import("lexical").SerializedLexicalNode>',
					JSONObject: 'Record<string, unknown>',
				},
			},
		},
		'src/graphql/generated/schema.graphql': {
			plugins: ['schema-ast'],
			schema: `${process.env.NEXT_PUBLIC_SERVER_URL}/api/graphql`,
		},
	},
	overwrite: true,
};

export default config;