/**
 * Implement these functions following the node style callback pattern
 */
var http = require('http');
var fs = require('fs');
var request = require('request');

// This function should retrieve the first line of the file at `filePath`
var pluckFirstLineFromFile = function (filePath, cb) {
  // TODO
  var body = [];
  fs.readFile(filePath, function (err, content) {
    if (err) {
      cb(err);
    }
    body.push(content);
    body = Buffer.concat(body).toString().split('\n');
    cb(null, body[0]);
  });
};

// This function should retrieve the status code of a GET request to `url`
var getStatusCode = function (url, callback) {
  // TODO
  request(url, function (err, res, body) {
    if (err) {
      callback(err);
    } else {
      callback(null, res.statusCode);
    }
  });
  // http.request({ hostname: url, method: 'GET'}, 
  //   function(res, callback) {
  //     res.on('error', function(err) {
  //       callback(err);
  //     }).on('end', function() {
  //       callback(null, res.statusCode);
  //     });
  //   });
};

// Export these functions so we can test them and reuse them in later exercises
module.exports = {
  getStatusCode: getStatusCode,
  pluckFirstLineFromFile: pluckFirstLineFromFile
};
