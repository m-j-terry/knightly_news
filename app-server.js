const express = require('express');
const app = express();
const path = require('path'); // enables us to serve unix/windows w/o having to write multiple paths
const logger = require('morgan');
const favicon = require('serve-favicon')
const fileUpload = require('express-fileupload')



app.use(express.json());
express.urlencoded({ extended: true })

app.use(fileUpload({ 
	limits: { fileSize: 40 * 1024 * 1024 }
}))

app.use((req, res, next) => {
	res.locals.data = {};
	next();
});
app.use(express.static('public'));
app.use(favicon(path.join(__dirname, 'public', 'favicon', 'favicon.ico')))
app.use(express.static(path.join(__dirname, 'public')))
app.use(require('./config/checkToken'));
app.use(logger('dev'));

// Put API routes here, before the "catch all" route
// Protect the API routes below from anonymous users
// const ensureLoggedIn = require('./config/ensureLoggedIn');
app.use('/api/contributors', require('./routes/api/contributors'));
app.use('/api/articles', require('./routes/api/articles'));
app.use('/api/categories', require('./routes/api/categories'));
app.use('/api/archives', require('./routes/api/archives'));
app.use('/api/admin', require('./routes/api/admin'));

// catch all -> if url doesn't match with any routes; for react router
app.get('*', (req, res) => {
	res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

module.exports = app;