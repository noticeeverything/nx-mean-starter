module.exports = {
	name: 'api',
	preset: '../../jest.config.js',
	coverageDirectory: '../../coverage/apps/api',
	testEnvironment: 'node',
	globals: { 'ts-jest': { tsConfig: '<rootDir>/tsconfig.spec.json' } }
};
