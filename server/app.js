const express = require('express');
const routes = require('./routes/');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const helmet = require('helmet');
const cloudinary = require('cloudinary');

const app = express();
const router = express.Router();
const url = process.env.MONGO_URI || 'mongodb://localhost:27017/medium';

cloudinary.config({
  cloud_name:'',
  api_key:'',
  api_secret:'',
});

try {
  mongoose.connect(url, {
    // useMongoClient: true
  });
} catch (error) {

}

let port = process.env.PORT || 5000;

routes(router);

// setup middleware
app.use(cors());
app.use(bodyParser.json());
app.use(helmet());

app.use('/api', router);

app.listen(port, () => {
  console.log(`Server started at port: ${port}.`);
})
