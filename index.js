#!/usr/bin/env node
'use strict';

var program = require('commander'),
    cp =  require('copy-paste').global(),
    pck = require('./package.json'),
    cleanup = require('./modules/cleanup.js').cleanup,
    prompt = require('prompt');

program
  .version(pck.version)
  .option('-f, --filename [filename]', 'filename to clean up')
  .option('-c, --clipboard', 'take clipboard value')
  .parse(process.argv);

if(input === undefined) {
    program.help();
}

if(program.filename) {
    var input = program.filename;
}

if(program.clipboard) {
    var input = cp.paste();
}

else {
    prompt.start();
    prompt.get(['filename'], function (err, result) {

    var input = result.filename;
  });
}

var output = cleanup(input);
copy(output);
console.log("Result: %s", output);
