require('dotenv').config();
require('./config/database'); // runs the file because it gets compiled as an IIFE

const app = require('./app-server');
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
	console.log(`Watch out, knightly news out here at ${PORT}!`);
});