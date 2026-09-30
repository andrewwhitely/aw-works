import tseslint from 'typescript-eslint';
import eslintConfigPrettier from 'eslint-config-prettier';
import globals from 'globals';

export default tseslint.config(
	{
		ignores: ['dist/**', 'node_modules/**', 'v2/**', '.claude/**', '.wrangler/**'],
	},
	{
		files: ['**/*.{js,jsx,ts,tsx}'],
		plugins: { '@typescript-eslint': tseslint.plugin },
		languageOptions: {
			parser: tseslint.parser,
			globals: {
				...globals.browser,
				...globals.node,
			},
		},
	},
	eslintConfigPrettier
);
