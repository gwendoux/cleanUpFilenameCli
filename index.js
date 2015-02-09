#!/usr/bin/env node
'use strict';

var program = require('commander'),
    pck     = require('./package'),
    output  = require('./modules/output'),
    cp      = require('copy-paste').global(),
    prompt  = require('prompt');

program
  .version(pck.version)
  .option('-f, --filename <filename>', 'filename to clean up')
  .option('-c, --clipboard', 'take clipboard value')
  .parse(process.argv);

if(program.filename) {
    var input = program.filename;
    output.outputFileSystem(input);
    return;
}

if(program.clipboard) {
    var input = cp.paste();
    if(!input) {
        process.stdout.write("cannot process an empty input");
    }
    output.outputClipboard(input);
    return;
}

prompt.start();
prompt.get(['filename'], function (err, result) {
    var input = result.filename;
    if(!input) {
        process.stdout.write("cannot process an empty input");
    }
    output.outputClipboard(input);
});
