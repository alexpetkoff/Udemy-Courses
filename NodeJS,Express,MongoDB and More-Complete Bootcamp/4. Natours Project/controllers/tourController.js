const Tour = require('../models/tourModel');

exports.aliasTopTours = (req, res, next) => {
  req.query.limit = '5';
  req.query.sort = '-ratingsAverage,price';
  req.query.fields = 'name,price,ratingsAverage,summary,difficulty';
  next();
};

exports.getAllTours = async (req, res) => {
  try {
    //Build a query
    const queryObject = { ...req.query };
    const excludedFields = ['page', 'sort', 'limit', 'fields'];

    // 1st feature - Filtering

    excludedFields.forEach((el) => delete queryObject[el]);

    let queryString = JSON.stringify(queryObject);
    queryString = queryString.replace(
      /\b(gte|gt|lte|lt)\b/g,
      (match) => `$${match}`
    ); // Finds gte/gt/lte/lt in the query and puts $ sign infront of it

    let query = Tour.find(JSON.parse(queryString));

    // 2nd feature - Sorting

    if (req.query.sort) {
      const sortBy = req.query.sort.split(',').join(' ');
      query = query.sort(sortBy);
    } else {
      query = query.sort('-createdAt'); //if not sort is provided, sort them by creation day desc - so it shows the new one first!
    }

    // 3rd feature - Field limiting - this way we can send less data to user(usefull when we just show the products cards without details)
    if (req.query.fields) {
      let fields = req.query.fields.split(',').join(' ');
      query = query.select(fields);
    } else {
      query = query.select('-__v'); // the minus before the field prop means we are excluding it
    }

    // 4th feature - Pagination
    const page = req.query.page * 1;
    const limit = req.query.limit * 1 || 100;
    const skip = (page - 1) * limit;

    query = query.skip(skip).limit(limit);

    if (req.query.page) {
      const numberOfTours = await Tour.countDocuments();
      if (skip >= numberOfTours) throw new Error('This page does not exist!');
    }

    //Execute a query
    const tours = await query;

    //Send response
    res.status(200).json({
      status: 'success',
      results: tours.length,
      data: {
        tours,
      },
    });
  } catch (error) {
    res.status(400).json({
      status: 'fail',
      message: 'Cannot get any tours!',
    });
  }
};

exports.getTour = async (req, res) => {
  try {
    const tour = await Tour.findById(req.params.id);

    res.status(200).json({
      status: 'success',
      data: {
        tour,
      },
    });
  } catch (error) {
    res.status(400).json({
      status: 'fail',
      message: 'Cannot find this particular tour!',
    });
  }
};

exports.createTour = async (req, res) => {
  try {
    const newTour = await Tour.create(req.body);

    res.status(200).json({
      status: 'success',
      data: {
        tour: newTour,
      },
    });
  } catch (error) {
    res.status(400).json({
      status: 'fail',
      message: 'Invalid data sent!',
    });
  }
};

exports.updateTour = async (req, res) => {
  try {
    const updatedTour = await Tour.findByIdAndUpdate(req.params.id, req.body, {
      new: true, // if true returns the new data that was updated
      runValidators: true, //runs validation against the schema
    });

    res.status(200).json({
      status: 'success',
      data: {
        tour: updatedTour,
      },
    });
  } catch (error) {
    res.status(404).json({
      status: 'failed',
      message: 'There is no tour with that id!',
    });
  }
};

exports.deleteTour = async (req, res) => {
  try {
    await Tour.findByIdAndDelete(req.params.id);

    res.status(204).json({
      status: 'success',
      message: 'Tour successfully deleted',
    });
  } catch (error) {
    res.status(404).json({
      status: 'failed',
      message: 'There is no tour with that id!',
    });
  }
};
