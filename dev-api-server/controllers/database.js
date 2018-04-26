const data = require('./data.json');

const TIMEOUT_DURATION = 500;

exports.ping = ((req, res) => {
  setTimeout(() => {
    res.send(data.ping);
  }, TIMEOUT_DURATION);
});

exports.getNotifications = ((req, res) => {
  res.send(data);
});
