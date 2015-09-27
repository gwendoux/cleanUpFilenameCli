var cleanup = require('./cleanup').cleanup;
var fs      = require('fs');
var path    = require('path');
var cp      = require('copy-paste').global();

exports.outputClipboard = outputClipboard;
exports.outputFileSystem = outputFileSystem;

function outputClipboard(input) {
    var output = cleanup(input);
    cp.copy(output);
    console.log("Result: %s", output);
}

function outputFileSystem(input) {
    var filePath = path.dirname(input); // get path file
    var inputName = path.basename(input); // get filename
    var output = cleanup(inputName);

    fs.rename(input, filePath+'/'+output, function(err) {
        if(err) {
            throw err;
        } else {
            console.log("Rewrite filename with %s", output);
        }
    });
}
