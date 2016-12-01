var fs = require('fs')
var parse = require('csv-parse')

module.exports = function() {

  var readCSV = function(callback) {
    var parser = parse({delimiter: ','}, function(err, data){
      if (typeof callback === "function") {
        callback(data);
      }
    });

    fs.createReadStream(__dirname+'/../enseignements.csv').pipe(parser);
  }

  return {
    readCSV: readCSV
  }
}