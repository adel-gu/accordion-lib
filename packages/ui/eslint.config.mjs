import path from 'path';
import { fileURLToPath } from 'url';
import { FlatCompat } from '@eslint/eslintrc';
import eslintConfigPrettier from 'eslint-config-prettier';
import pluginReact from 'eslint-plugin-react';
import tailwind from 'eslint-plugin-tailwindcss';
import globals from 'globals';

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

const compat = new FlatCompat({
	baseDirectory: dirname,
});

const eslintrcConfig = compat.config({
	extends: [
		'airbnb',
		'airbnb-typescript',
		'airbnb/hooks',
		'plugin:@typescript-eslint/recommended-type-checked',
		'plugin:@typescript-eslint/stylistic-type-checked',
	],
	overrides: [
		{
			files: ['*.stories.@(ts|tsx)'],
			extends: ['plugin:storybook/recommended'],
		},
	],
	rules: {
		'react/require-default-props': 'off',
		'react/react-in-jsx-scope': 'off',
		'react/jsx-props-no-spreading': 'off',
		'react/button-has-type': 'off',
		'import/extensions': 'off',
		'import/no-extraneous-dependencies': 'off',
		'import/no-relative-packages': 'off',
		'import/prefer-default-export': 'off',
		'@typescript-eslint/no-var-requires': 'off',
		'global-require': 'off',
	},
});

export default [
	{ ignores: ['node_modules/', 'dist/', 'eslint.config.mjs'] },
	{
		languageOptions: {
			globals: globals.browser,
			parserOptions: {
				ecmaFeatures: {
					jsx: true,
				},
				ecmaVersion: 'latest',
				sourceType: 'module',
				project: './tsconfig.eslint.json',
			},
		},
	},
	...compat.config({
		parser: '@typescript-eslint/parser',
		plugins: ['@typescript-eslint'],
		root: true,
	}),
	pluginReact.configs.flat.recommended,
	...eslintrcConfig,
	...tailwind.configs['flat/recommended'],
	{
		rules: {
			'tailwindcss/no-custom-classname': 'off',
		},
	},
	eslintConfigPrettier,
];
