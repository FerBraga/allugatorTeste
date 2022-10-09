const app = require('./app');
const dotenv = require('dotenv');

dotenv.config();

const PORT = process.env.APP_PORT || 3001;

const server = app.listen(PORT, () => console.log(
  `Server is running on PORT: ${PORT}`,
));

module.exports = server;
