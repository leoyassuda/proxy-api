const express = require('express');

const emojis = require('./emojis');
const marsWeather = require('./mars-weather');

const router = express.Router();

router.get('/', (req, res) => {
  res.json({
    message: 'API - 👋🌎🌍🌏'
  });
});

router.use('/emojis', emojis);
router.use('/mars-weather', marsWeather);

module.exports = router;
