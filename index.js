require('dotenv').config();
var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var Share = require('./models/shareit');


var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/carrotshareit');  // change db name here

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// app.use(express.static(path.join(__dirname, 'client', 'build')));
app.use(express.static(path.resolve(__dirname, 'client', 'build')));


app.post('/search', (req,res,next)=>{
  console.log(req.body);
  req.body.zip = parseInt(req.body.zip)
  console.log(req.body);
  Share.create(req.body, function(err, share) {
    if (err) {
      console.log("GOT AN ERROR CREATING THE Share", err)
      res.send(err)
    } else {
      res.json({share})
    }
  })
})

app.post('/list', (req,res,next)=>{
  req.body.zip = parseInt(req.body.zip)
  console.log(req.body);
  Share.find(req.body).lean().exec(function(err,shares){
    console.log(shares)
    res.json(shares)
  })
})


app.get('*', function(req, res, next) {
	res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
});

const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}!`);
});

module.exports = app;
