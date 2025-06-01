const express = require('express');
const morgan = require('morgan');

const AppError = require('./utils/appError');
const tourRouter = require('./routes/tourRoutes');
const userRouter = require('./routes/userRoutes');
const errorController = require('./controllers/errorController');

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
  next(
    new AppError(
      `Can't find (${req.originalUrl}) endpoint on this server!`,
      404
    )
  ); // passing into next function means that other middlewares will not be executed;
});

//ERROR HANDLING MIDDLEWARE

app.use(errorController);

module.exports = app;
