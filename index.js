#!/usr/bin/env node
'use strict';

var program = require('commander'),
    pck = require('./package.json'),
    cleanup = require('./modules/cleanup.js').cleanup;

program
  .version(pck.version)
  .option('-f, --filename [filename]', 'filename to clean up')
  .parse(process.argv);


var input = program.filename;

if(input === undefined) {
    program.help();
}

var output = cleanup(input);
console.log("Result: %s", output);

