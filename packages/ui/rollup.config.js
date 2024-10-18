const resolve = require('@rollup/plugin-node-resolve');
const commonjs = require('@rollup/plugin-commonjs');
const terser = require('@rollup/plugin-terser');
const typescript = require('@rollup/plugin-typescript');
const postcss = require('rollup-plugin-postcss');
const { cleandir } = require('rollup-plugin-cleandir');
const packageJson = require('./package.json');

const entry = 'src/index.ts';
const external = [
	...Object.keys({
		...packageJson.dependencies,
		...packageJson.peerDependencies,
	}),
];
const outputDir = 'dist';

module.exports = [
	{
		input: entry,
		output: [
			{
				format: 'cjs',
				file: `${outputDir}/bundle.js`,
				sourcemap: true,
			},
			{
				format: 'es',
				file: `${outputDir}/bundle.es.js`,
				sourcemap: true,
			},
		],
		plugins: [
			postcss({
				extract: 'base.css',
				minimize: true,
			}),
			resolve(),
			typescript({
				tsconfig: 'tsconfig.build.json',
			}),
			commonjs(),
			terser(),
			cleandir(outputDir),
		],
		external,
	},
];
