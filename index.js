#!/usr/bin/env node
'use strict';

var program = require('commander'),
    cleanup = require('./modules/cleanup.js').cleanup;

program
  .version('0.0.1')
  .option('-f, --filename [filename]', 'filename to clean up')
  .parse(process.argv);


var input = program.filename;

var output = cleanup(input);

console.log(output);
