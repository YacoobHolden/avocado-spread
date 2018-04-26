// Route methods
const express = require('express');
const database = require('./controllers/database');

const route = express.Router();

route.get('/ping', database.ping);
route.get('/notifications', database.getNotifications);
module.exports = route;
