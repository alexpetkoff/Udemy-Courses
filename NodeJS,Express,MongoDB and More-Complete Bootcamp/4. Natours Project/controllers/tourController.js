const Tour = require('../models/tourModule');

exports.checkBody = (req, res, next) => {
  const { name, price } = req.body;

  if (!name || !price) {
    res.send(400, {
      status: 'failed',
      message: 'Name and price cannot be empty!',
    });
  }

  next();
};

exports.getAllTours = (req, res) => {
  res.status(200).json({
    status: 'success',
    // results: tours.length,
    // date: req.requestTime,
    // data: {
    //   tours,
    // },
  });
};

exports.getTour = (req, res) => {
  const id = Number(req.params.id);
  // const tour = tours.find((tour) => tour.id === id);

  // res.status(200).json({
  //   status: 'success',
  //   data: {
  //     tour,
  //   },
  // });
};

exports.createTour = (req, res) => {
  // res.status(201).json({
  //   status: 'success',
  //   data: {
  //     tour: newTour,
  //   },
  // });
};

exports.updateTour = (req, res) => {
  if (req.params.id * 1 > tours.length) {
    res.status(404).json({
      status: 'failed',
      message: 'There is no tour with that id!',
    });
  }

  res.status(200).json({
    status: 'success',
    data: {
      tour: '<Update tour here...>',
    },
  });
};

exports.deleteTour = (req, res) => {
  if (req.params.id * 1 > tours.length) {
    res.status(404).json({
      status: 'failed',
      message: 'There is no tour with that id!',
    });
  }

  res.status(204).json({
    status: 'success',
    data: null,
  });
};
