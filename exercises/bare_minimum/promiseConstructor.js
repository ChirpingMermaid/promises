/**
 * Implement these promise-returning functions.
 * Any successful value should be made available in the next `then` block chained
 * to the function invocation, while errors should be available in the `catch` block
 */

var fs = require('fs');
var request = require('request');
var Promise = require('bluebird');

// This function should retrieve the first line of the file at `filePath`
var pluckFirstLineFromFileAsync = function(filePath) {
  // TODO
  return new Promise ( function (resolve, reject) {

    var body = [];
    fs.readFile(filePath, function (err, content) {
      if (err) {
        reject(err);
      } else {
        body.push(content);
        body = Buffer.concat(body).toString().split('\n');
        resolve(body[0]);
      }
    });
  
  //     var body = [];
  // fs.readFile(filePath, function (err, content) {
  //   if (err) {
  //     cb(err);
  //   }
  //   body.push(content);
  //   body = Buffer.concat(body).toString().split('\n');
  //   cb(null, body[0]);
  // });
  });
};

// This function should retrieve the status code of a GET request to `url`
var getStatusCodeAsync = function(url) {
  // TODO
  return new Promise (function (resolve, reject) {
    request(url, function(err, res, body) {
      if (err) {
        reject(err);
      } else {
        resolve(res.statusCode);
      }
    });
  });

  //   request(url, function (err, res, body) {
  //   if (err) {
  //     callback(err);
  //   } else {
  //     callback(null, res.statusCode);
  //   }
  // });
};

// Export these functions so we can test them and reuse them in later exercises
module.exports = {
  getStatusCodeAsync: getStatusCodeAsync,
  pluckFirstLineFromFileAsync: pluckFirstLineFromFileAsync
};
