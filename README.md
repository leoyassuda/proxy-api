# Express API Proxy Example

A simple proxy api to help hide api-keys and secure a massive request in few steps.

For this purpose, we will use a NASA api to get weather data from surface of Mars.

## Cloning the repo

```bash
git clone https://github.com/leoyassuda/proxy-api.git
```

## Setup

```bash
npm install
```

## Lint

```bash
npm run lint
```

## Test

```bash
npm run test
```

## Development

```bash
npm run dev
```

### API

> / = return only a hello world with emojis.
>
> /api/v1 = (GET) return some emojis in a json message.
>
> /api/v1/emojis = (GET) return a list of face emojis.
>
> /api/v1/mars-weather = (GET) return a json data from nada with the weather of mars.

### Includes API Server utilities

- [morgan](https://www.npmjs.com/package/morgan)
  - HTTP request logger middleware for node.js
- [helmet](https://www.npmjs.com/package/helmet)
  - Helmet helps you secure your Express apps by setting various HTTP headers. It's not a silver bullet, but it can help!
- [dotenv](https://www.npmjs.com/package/dotenv)
  - Dotenv is a zero-dependency module that loads environment variables from a `.env` file into `process.env`
- [axios](https://www.npmjs.com/package/axios)
  - Axios is a Javascript library used to make HTTP requests from node.js
- [rate-limit](https://www.npmjs.com/package/express-rate-limit)
  - Use to limit repeated requests to public APIs and/or endpoints such as password reset.
- [slow-down](https://www.npmjs.com/package/express-slow-down)
  - Slows down responses rather than blocking them outright

### Development utilities

- [nodemon](https://www.npmjs.com/package/nodemon)
  - nodemon is a tool that helps develop node.js based applications by automatically restarting the node application when file changes in the directory are detected.
- [eslint](https://www.npmjs.com/package/eslint)
  - ESLint is a tool for identifying and reporting on patterns found in ECMAScript/JavaScript code.
- [mocha](https://www.npmjs.com/package/mocha)
  - ☕️ Simple, flexible, fun JavaScript test framework for Node.js & The Browser ☕️
- [supertest](https://www.npmjs.com/package/supertest)
  - HTTP assertions made easy via superagent.

---

## To get a NASA Api Key

First access [NASA-API](https://api.nasa.gov/#signUp), fill form to register and receive the api-key.

You will receive in your e-mail too.

---

## Authors

- **Leo Yassuda** - _Initial work_ - [Proxy-Api](https://github.com/leoyassuda/proxy-api)
