module.exports = {
	name: 'nx-mean-starter',
	preset: '../../jest.config.js',
	coverageDirectory: '../../coverage/apps/todos',
	snapshotSerializers: [
		'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
		'jest-preset-angular/build/AngularSnapshotSerializer.js',
		'jest-preset-angular/build/HTMLCommentSerializer.js',
	],
	setupFilesAfterEnv: ['<rootDir>/src/test-setup.ts'],
	globals: {
		'ts-jest': {
			tsconfig: '<rootDir>/tsconfig.spec.json',
			stringifyContentPathRegex: '\\.(html|svg)$',
			astTransformers: {
				before: [
					'jest-preset-angular/build/InlineFilesTransformer',
					'jest-preset-angular/build/StripStylesTransformer',
				],
			},
		},
	},
};
