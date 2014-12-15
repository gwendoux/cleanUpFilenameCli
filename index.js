#!/usr/bin/env node
'use strict';

var program = require('commander'),
    pck = require('./package.json'),
    cleanup = require('./modules/cleanup.js').cleanup,
    prompt = require('prompt');

program
  .version(pck.version)
  .option('-f, --filename [filename]', 'filename to clean up')
  .parse(process.argv);

if(program.filename) {
    var input = program.filename;
    var output = cleanup(input);

    console.log("Result: %s", output);

}

else {
    prompt.start();
    prompt.get(['filename'], function (err, result) {

    var input = result.filename;
    var output = cleanup(input);

    console.log("Result: %s", output);
  });
}

