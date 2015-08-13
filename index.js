'use strict';

var fs = require('fs');
fs.readFile('data.sql', 'utf8', function (err,data) {
  if (err) {
    return console.log(err);
  }
  var chunks = data.split('\n\n');
  chunks.forEach(function(chunk){
    console.log(chunk.match('CREATE TABLE `(.*)`')[1]);
    var lines = chunk.split('\n');
    lines.forEach(function(line){
      if (!~line.indexOf(' KEY ')) {
        var match = line.match(' `(.*)`');
        if (match) {
          console.log(match[1]);
        }
      }
    });
  });

  // console.log(data);
});
