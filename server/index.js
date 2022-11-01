// package.json: "type": "module" to allow 'import' instead of 'require'
import bodyParser from 'body-parser'; // POST requests
import cors from 'cors'; // cross-origin requests
import express from 'express'; // routing
import mongoose from 'mongoose'; // models for POSTs

import postRoutes from './routes/posts.js';

const app = express();

app.use(bodyParser.json({
    limit: "30mb", // images
    extended: true
}));
app.use(bodyParser.urlencoded({
    limit: "30mb", // images
    extended: true
}));
app.use(cors());

app.use('/posts', postRoutes);

function db_connection_uri() {
    const DB_DRIVER_PROTOCOL = 'mongodb+srv';
    const DB_USERNAME = 'inons';
    const DB_PASSWD = 'inons456';
    const DB_HOST = 'cluster0.sko3nld.mongodb.net';
    const DB_OPTS = { retryWrites: true, w: 'majority' };
    const DB_OPTS_STR = new URLSearchParams(DB_OPTS).toString();
    const DB_URI = DB_DRIVER_PROTOCOL + '://' + DB_USERNAME + ':' + DB_PASSWD + '@' + DB_HOST + '/?' + DB_OPTS_STR;
    return DB_URI;
}

function app_port() {
    const APP_PORT_DEFAULT = 5000;
    return process.env.PORT || APP_PORT_DEFAULT; // TODO: Pass default by writing to this environment variable (used by Heroku)
    
}

function set_app_to_listen() {
    const _app_port = app_port()
    app.listen(_app_port, console.log(`Server running on port ${_app_port}`))
}

const mongoose_options = {useUnifiedTopology: true} // avoids some warnings. {useNewUrlParse: true} no longer supported...
mongoose.connect(db_connection_uri(), mongoose_options)
    .then(()=> set_app_to_listen())
    .catch((error)=> console.error(error.message))

// mongoose.set('useFindAndModify', false); // avoids some warnings
