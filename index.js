'use strict';

var fs = require('fs');
fs.readFile('data.sql', 'utf8', function (err,data) {
  if (err) {
    return console.log(err);
  }
  data = data.match(/CREATE TABLE `(.*?)`/g);
  console.log(data);
});
