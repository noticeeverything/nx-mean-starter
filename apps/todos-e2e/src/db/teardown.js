const MongoClient = require('mongodb').MongoClient;

module.exports = async function teardown()
{
	const connection = await MongoClient.connect(process.env.DB_URI || 'mongodb://localhost:27017',
		{ useNewUrlParser: true, useUnifiedTopology: true });
	const db = connection.db('todos-test');
	await db.dropDatabase();
	await connection.close();
	return null;
};
