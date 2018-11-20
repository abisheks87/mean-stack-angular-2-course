const express = require('express');
const app = express();
const mongoose = require('mongoose');
const config = require('./config/db');
const path = require('path');

mongoose.connect(config.uri, (err) => {
    if(err){
        console.log("Could not connect to the Mongo DB: ", err);
    } else{
        console.log("Connected to the database " + config.db);
    }
});

app.use(express.static(__dirname + '/client/dist/'));

app.get('*', function(req, res){
    res.sendFile(path.join(__dirname + '/client/dist/index.html'));
  });
  
  //http://localhost:8080
  app.listen(3000, () => {
      console.log('Listening on port 3000');
  });