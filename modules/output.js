exports.outputClipboard = outputClipboard;

function outputClipboard(input) {
    var output = cleanup(input);
    cp.copy(output);
    console.log("Result: %s", output);
}
