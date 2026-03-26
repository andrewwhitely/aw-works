import tseslint from 'typescript-eslint';
import eslintConfigPrettier from 'eslint-config-prettier';
import globals from 'globals';

export default tseslint.config(
	{
		ignores: ['dist/**', 'node_modules/**'],
	},
	{
		files: ['**/*.{js,jsx,ts,tsx}'],
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
