var cleanup =  require('./cleanup').cleanup,
    cp = require('copy-paste').global();

exports.outputClipboard = outputClipboard;

function outputClipboard(input) {
    var output = cleanup(input);
    cp.copy(output);
    console.log("Result: %s", output);
}
