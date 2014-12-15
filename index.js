#!/usr/bin/env node
'use strict';

var program = require('commander'),
    cp =  require('copy-paste').global(),
    pck = require('./package.json'),
    cleanup = require('./modules/cleanup.js').cleanup;

program
  .version(pck.version)
  .option('-f, --filename [filename]', 'filename to clean up')
  .option('-c, --clipboard', 'take clipboard value')
  .parse(process.argv);

if(program.filename) {
    var input = program.filename;
}

if(program.clipboard) {
    var input = cp.paste();
}


if(input === undefined) {
    program.help();
}

var output = cleanup(input);
copy(output);
console.log("Result: %s", output);

