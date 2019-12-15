export const environment = {
	production: false,
	name: 'Test',
	database: {
		uri: 'mongodb://localhost:27017/nx-mean-starter-test',
		options: {
			useNewUrlParser: true,
			useUnifiedTopology: true
		}
	},
	http: {
		host: 'localhost',
		port: 3333,
		ip: '127.0.0.1',
		cors: {
			origin: [
				/localhost/
			],
			credentials: true
		}
	}
};
