const express = require('express');
const morgan = require('morgan');

const tourRouter = require('./routes/tourRoutes');
const userRouter = require('./routes/userRoutes');

const app = express();

// MIDDLEWARES

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

app.use(express.json());
app.use(express.static(`${__dirname}/public`));

// ROUTES

app.use('/api/v1/tours', tourRouter);
app.use('/api/v1/users', userRouter);

// HANDLING UNHANDLED ROUTES

app.all('*', (req, res, next) => {
  const error = new Error(
    `Can't find (${req.originalUrl}) endpoint on this server!`
  );

  error.status = 'fail';
  error.statusCode = 404;

  next(error); // passing error means that other middlewares will not be executet;
});

//ERROR HANDLING MIDDLEWARE

app.use((error, req, res, next) => {
  error.statusCode = error.statusCode || 500;
  error.status = error.status || 'error';

  res.status(error.statusCode).json({
    status: error.status,
    message: error.message,
  });

  next();
});

module.exports = app;
