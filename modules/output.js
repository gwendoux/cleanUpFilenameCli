var cleanup =  require('./cleanup').cleanup,
    fs = require('fs'),
    cp = require('copy-paste').global();

exports.outputClipboard = outputClipboard;
exports.outputFileSystem = outputFileSystem;

function outputClipboard(input) {
    var output = cleanup(input);
    cp.copy(output);
    console.log("Result: %s", output);
}

function outputFileSystem (input) {
    var output = cleanup(input);
    fs.rename(input, output, function(err) {
        if(err) {
            throw err;
        } else {
            console.log("Rewrite filename with %s", output);
        }
    });
}
