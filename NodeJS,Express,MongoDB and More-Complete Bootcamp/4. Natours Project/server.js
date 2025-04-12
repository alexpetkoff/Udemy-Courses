const mongoose = require('mongoose');
const dotenv = require('dotenv');
const app = require('./app');

dotenv.config({
  path: './config.env',
});

const DB = process.env.DATABASE.replace(
  '<PASSWORD>',
  process.env.DATABASE_PASSWORD
);

mongoose.connect(DB, {}).then(() => {
  console.log('DB connected!');
});

const port = process.env.PORT;

// Schema specification for Tours!
const tourSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'A Tour must have a name!'],
    unique: true,
  },
  rating: {
    type: Number,
    default: 4.5,
  },
  price: {
    type: Number,
    required: [true, 'A Tour must have a price!'],
  },
});

const Tour = mongoose.model('Tour', tourSchema);

const testTour = new Tour({
  name: 'The Grand Canyon Tour',
  rating: 4.5,
  price: 399,
});

testTour
  .save()
  .then((doc) => console.log(doc))
  .catch((err) => console.log('ERROR: ', err));

app.listen(port, () => {
  console.log(`App running on port: ${port} 🚀`);
});
