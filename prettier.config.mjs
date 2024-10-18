/** @type {import('prettier').Config} */

export default {
	trailingComma: "es5",
	singleQuote: true,
	jsxSingleQuote: true,
	semi: true,
	bracketSpacing: true,
	bracketSameLine: true,
	arrowParens: "always",
	// sort-imports
	importOrder: [
		"^[react]",
		"^@(?!/)", "^@/", "^[./]",
	],
	importOrderSeparation: true,
	importOrderSortSpecifiers: true,
	plugins: [
		"prettier-plugin-packagejson",
		"@trivago/prettier-plugin-sort-imports",
		"prettier-plugin-curly"
	],
};
