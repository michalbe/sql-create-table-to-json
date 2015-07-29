'use strict';

var removeComments = function(data) {
  data = data.replace(/\/\*(.*)/g, '');
  console.log(data);
  return data;
};

var sct2j = function(file, cb){
  var output = {};

  var fs = require('fs');
  fs.readFile(file, 'utf8', function (err,data) {
    if (err) {
      return cb(err);
    }

    data = removeComments(data);
    return;
    var chunks = data.split('\n\n');
    chunks.forEach(function(chunk){
      var tableName = chunk.match('CREATE TABLE `(.*)`')[1];
      output[tableName] = [];
      var lines = chunk.split('\n');
      lines.forEach(function(line, index){
        if (~line.indexOf(' KEY ') || index === 0) {
          return;
        }

        var match = line.match(' `(.*)`');
        if (match) {
          output[tableName].push(match[1]);
        }
      });
    });

    cb(null, output);
  });
};

module.exports = sct2j;

sct2j('data.sql', function(err, data){
  console.log(JSON.stringify(data, 2, 2));
});
