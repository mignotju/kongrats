var fs = require('fs')
var parse = require('csv-parse')

module.exports = function(file) {

  var readCSV = function(callback) {
    var parser = parse({delimiter: ','}, function(err, data){
      if (typeof callback === "function") {
        callback(data);
      }
    });

    fs.createReadStream(__dirname+file).pipe(parser);
  }

  return {
    readCSV: readCSV
  }
}
