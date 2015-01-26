#!/usr/bin/env node
'use strict';

var program = require('commander'),
    cp =  require('copy-paste').global(),
    pck = require('./package.json'),
    cleanup = require('./modules/cleanup.js').cleanup,
    output = require('./modules/output.js'),
    prompt = require('prompt');

program
  .version(pck.version)
  .option('-f, --filename <filename>', 'filename to clean up')
  .option('-c, --clipboard', 'take clipboard value')
  .parse(process.argv);


if(program.filename) {
    var input = program.filename;
    outputClipboard(input);
    return;
}

if(program.clipboard) {
    var input = cp.paste();
    outputClipboard(input);
    return;
}

prompt.start();
prompt.get(['filename'], function (err, result) {
    var input = result.filename;
    outputClipboard(input);
});
