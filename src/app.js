const express = require('express');
const pino = require('pino');
const logger = require('pino-http')({
  // Reuse an existing logger instance
  logger: pino({
    transport: {
      target: 'pino-pretty',
      options: {
        colorize: true
      }
    }
  }),
});
const helmet = require('helmet');
const cors = require('cors');

require('dotenv').config();

const middlewares = require('./middlewares');
const api = require('./api');

const app = express();

app.set('trust proxy', 1);

app.use(logger);
app.use(helmet());
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  logger(req);
  res.json({
    message: '👋🌎🌍🌏',
  });
});

app.use('/api/v1', api);

app.use(middlewares.notFound);
app.use(middlewares.errorHandler);

module.exports = app;
