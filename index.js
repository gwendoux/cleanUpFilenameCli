#!/usr/bin/env node
'use strict';

var program = require('commander'),
    pck = require('./package.json'),
    cleanup = require('./modules/cleanup.js').cleanup;

program
  .version(pck.version)
  .option('-f, --filename [filename]', 'filename to clean up')
  .option('-c, --clipboard', 'take clipboard value')
  .parse(process.argv);


var input = program.filename;

var output = cleanup(input);

console.log("Result: %s", output);
