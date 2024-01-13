require('dotenv').config();
require('./config/testDatabase'); // runs the file because it gets compiled as an IIFE

const app = require('./app-test-server');
const PORT = process.env.PORT || 4500;

app.listen(PORT, () => {
	console.log(`Watch out, knightly news out here at ${PORT}!`);
});