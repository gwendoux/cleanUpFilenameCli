#!/usr/bin/env node
'use strict';

var program = require('commander'),
    cp =  require('copy-paste').global(),
    pck = require('./package.json'),
    cleanup = require('./modules/cleanup.js').cleanup,
    prompt = require('prompt');

program
  .version(pck.version)
  .option('-f, --filename <filename>', 'filename to clean up')
  .option('-c, --clipboard', 'take clipboard value')
  .parse(process.argv);


if(program.filename) {
    var input = program.filename;
    outputResult(input);
    return;
}

if(program.clipboard) {
    var input = cp.paste();
    outputResult(input);
    return;
}

prompt.start();
prompt.get(['filename'], function (err, result) {
    var input = result.filename;
    outputResult(input);
});

function outputResult(input) {
    var output = cleanup(input);
    cp.copy(output);
    console.log("Result: %s", output);
}
