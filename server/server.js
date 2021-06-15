const express = require('express');
const mongoose = require('mongoose');
const config = require('config');
const app = express();
const port = 5000;
const dbURI = config.get('dbURI');

const connectDB = async () => {
  try {
    await mongoose.connect(dbURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
      useCreateIndex: true,
    });
    console.log('Database connected...');
  } catch (err) {
    console.log(err.message);
    process.exit(1);
  }
};

connectDB();

app.use(express.json({ extended: false }));

app.get('/', (req, res) => {
  res.send('Hello world!');
});

app.listen(port, () => {
  console.log(`Server listening on ${port}`);
});

app.use('/api/shoppingItem', require('./routes/shoppingItem'));
