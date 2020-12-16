const express = require('express');
const routes = require('./routes');
const bodyParser = require('body-parser');
const passport = require('passport');
var http = require('http');
require('./config/passport');
const PORT = process.env.PORT || 3000;
const app = express();
app.use(bodyParser.json())
app.use('/api', routes);
app.use(passport.initialize())
let server= app.listen(PORT, () => console.log(`Listening on port: ${PORT}`));
const io = require('socket.io')(http)
io.listen(server);
require('./_middleware/socketio')(io);
global.io = io;
