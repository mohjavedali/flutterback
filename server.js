const express = require('express');
const bodyParser = require('body-parser');
// initialize our express app
const app = express();
const router = express.Router();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
const mongoose = require('mongoose');
mongoose
  .connect('mongodb+srv://admin-javed:admin12345@cluster0.kgsa5.mongodb.net/demoProject?retryWrites=true&w=majority')
  .then(() => {
    console.log('Connection Successful');
  })
  .catch((err) => {
    console.log(err.message);
  });
const product = require('./routes/product.route');
app.get('/', (req,res)=>{
    res.send({"message":"first hi value. deploy new code."});
});
app.get('/notes', (req, res)=>{
    res.send("hi");
});
let port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log('Server is up and running on port numner ' + port);
});