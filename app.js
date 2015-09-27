#!/usr/bin/env node

var program = require('commander');
var pck     = require('./package');
var output  = require('./modules/output');
var cp      = require('copy-paste').global();
var prompt  = require('prompt');

program
  .version(pck.version)
  .option('-f, --filename <filename>', 'filename to clean up')
  .option('-c, --clipboard', 'take clipboard value')
  .parse(process.argv);

if(program.filename) {
    var input = program.filename;
    output.outputFileSystem(input);
    process.exit();
}

if(program.clipboard) {
    var input = cp.paste();
    if(!input) {
        process.stdout.write("cannot process an empty input");
    }
    output.outputClipboard(input);
    process.exit();
}

prompt.start();
prompt.get(['filename'], function (err, result) {
    var input = result.filename;
    if(!input) {
        process.stdout.write("cannot process an empty input");
    }
    output.outputClipboard(input);
});
