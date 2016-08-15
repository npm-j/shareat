const User = require('../models/userModel.js');
const Event = require('../models/eventModel.js');
const url = require('url');
// var Q = require('q');

module.exports = {
  '/': {
    get(req, res) {
      console.log('Received GET at /api/user/');
      res.end('Received GET at /api/user/');
    },
    post(req, res) {
      console.log('Received POST at /api/user/');
      res.end('Received POST at /api/user/');
    },
    put(req, res) {
      console.log('Received PUT at /api/user/');
      res.end('Received PUT at /api/user/');
    },
    delete(req, res) {
      console.log('Received DELETE at /api/user/');
      res.end('Received DELETE at /api/user/');
    },
  },
  '/events/:eventId': {
    get(req, res) {
      const eventId = url.parse(req.url, true).path.slice(8);
      const userId = req.query.userId;
      User.findUsersByEvent(userId, eventId)
        .then((results) => {
          console.log('Received GET at /api/user/events/:eventId');
          res.send(results);
        });
    },
    post(req, res) {
      console.log('Received POST at /api/user/events/:eventId');
      res.end('Received POST at /api/user/events/:eventId');
    },
    put(req, res) {
      console.log('Received PUT at /api/user/events/:eventId');
      res.end('Received PUT at /api/user/events/:eventId');
    },
    delete(req, res) {
      console.log('Received DELETE at /api/user/events/:userId');
      res.end('Received DELETE at /api/user/events/:userId');
    },
  },
  '/:userId': {
    get(req, res) {
      console.log('Received GET at /api/:userId');
      const userId = url.parse(req.url, true).path.slice(1);
      User.findUserById(userId)
        .then((results) => {
          console.log('results are................... ....... . . . ....', results);
          res.send(results);
        })
        .catch((err) => {
          res.send(err);
        });
    },
    post(req, res) {
      console.log('Received POST at /api/:userId');
      res.end('Received POST at /api/:userId');
    },
    put(req, res) {
      console.log('Received PUT at /api/:userId');
      res.end('Received PUT at /api/:userId');
    },
    delete(req, res) {
      console.log('Received DELETE at /api/:userId');
      res.end('Received DELETE at /api/:userId');
    },
  },
};
