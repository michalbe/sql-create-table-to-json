'use strict';

var fs = require('fs');
fs.readFile('data.sql', 'utf8', function (err,data) {
  if (err) {
    return console.log(err);
  }
  var chunks = data.split('\n\n');
  chunks.forEach(function(chunk){
    console.log(chunk.match('CREATE TABLE `(.*)`')[1]);
  });

  // console.log(data);
});
