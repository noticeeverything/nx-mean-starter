const MongoClient = require('mongodb').MongoClient;

module.exports = async function teardown()
{
	const connection = await MongoClient.connect('mongodb://localhost:27017',
		{ useNewUrlParser: true, useUnifiedTopology: true });
	const db = connection.db('nx-mean-starter-test');
	await db.dropDatabase();
	await connection.close();
	return null;
};
