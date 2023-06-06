// Defaults & Options:
// https://eslint.org/docs/latest/rules/

// Other Docs:
// https://eslint.org/docs/user-guide/configuring

module.exports = {
	root: true,
	env: {
		browser: true,
		es2021: true,
		node: true,
	},
	extends: 'eslint:recommended',
	parserOptions: {
		ecmaVersion: 12,
		sourceType: 'module',
	},
	ignorePatterns: [ 'public/build/*', '**/*.html' ],
	rules: {
		'no-warning-comments': 'warn',
		'no-var': 'warn',
		'prefer-const': [
			'warn',
			{
				destructuring: 'any',
			},
		],
	},
};
