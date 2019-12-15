module.exports = {
	name: 'nx-mean-starter',
	preset: '../../jest.config.js',
	coverageDirectory: '../../coverage/apps/nx-mean-starter',
	snapshotSerializers: [
		'jest-preset-angular/AngularSnapshotSerializer.js',
		'jest-preset-angular/HTMLCommentSerializer.js'
	]
};
