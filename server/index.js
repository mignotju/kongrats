var fs = require('fs')
var parse = require('csv-parse')

module.exports = function(string) {

  var readCSV = function(file) {
    var parser = parse({delimiter: ','}, function(err, data){
      console.log(data);
    });

    fs.createReadStream(__dirname+'/../enseignements.csv').pipe(parser);
  }

  return {
    readCSV: readCSV
  }
}
