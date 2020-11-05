const service = require('./service');

const config = {
    logger: null,
		basicAuth: null
};

// Create an express app instance
var express_app = service.init(config);

const server = express_app.listen(process.env.PORT || 3000)

module.exports = server;
