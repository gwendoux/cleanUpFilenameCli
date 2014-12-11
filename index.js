#!/usr/bin/env node

var program = require('commander');
var decode = require('./modules/decode.js').decode;

program
  .version('0.0.1')
  .option('-f, --filename [filename]', 'filename to clean up')
  .parse(process.argv);


var input = program.filename;

var output = decode(input);

console.log(output);