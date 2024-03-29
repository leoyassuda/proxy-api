const express = require('express');
const axios = require('axios');
const rateLimit = require('express-rate-limit');
const slowDown = require('express-slow-down');
const pino = require('pino');

const logger = pino({
  transport: {
    target: 'pino-pretty',
    options: {
      colorize: true,
    },
  },
});

const limiter = rateLimit({
  windowMs: 30 * 1000,
  max: 10,
});

const speedLimiter = slowDown({
  windowMs: 30 * 1000,
  delayAfter: 1,
  delayMs: 500,
});

const router = express.Router();

const BASE_URL = 'https://api.nasa.gov/insight_weather/?';

let cachedData;
let cacheTime;

// api keys header it just for example.
// DO NOT DO IT IN REAL PROJECT.
const apiKeys = new Map();
apiKeys.set(process.env.API_KEY, true);

router.get(
  '/',
  limiter,
  speedLimiter,
  (req, res, next) => {
    const apiKey = req.get('apiKey');
    logger.info(`>>> apiKey: ${apiKey}`);
    if (apiKeys.has(apiKey)) {
      next();
    } else {
      const error = new Error('Invalid API KEY');
      next(error);
    }
  },
  async (req, res, next) => {
    if (cacheTime && cachedData > Date.now() - 30 * 1000) {
      return res.json(cachedData);
    }

    try {
      const params = new URLSearchParams({
        api_key: process.env.NASA_API_KEY,
        feedtype: 'json',
        ver: '1.0',
      });

      // 1. make a request to nasa api
      const { data } = await axios.get(`${BASE_URL}${params}`);

      // 2. respond to this request with data from nasa api
      cachedData = data;
      cacheTime = Date.now();
      data.cacheTime = cacheTime;
      return res.json(data);
    } catch (error) {
      return next(error);
    }
  },
);

module.exports = router;
