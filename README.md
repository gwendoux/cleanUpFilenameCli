# CleanFileName

This is a node.js command line utility that cleanup filenames with url encode characters.
## Installation

    $ npm install -g clean-filename

## Usage

use option `--clipboard` or `-c` to use clipboard content

    $ clean-filename -c

use option `--filename` to enter input manually

    $ clean-filename -f <filename>

The output will be display in the console and also add to the clipboard

## Development
First clone repository and access the new folder

    $ git clone <repository> && cd $_

then install necessary modules

    $ npm install

and just run with the name to clean in argument

    $ ./index.js <filename>

Run the test with

    $ gulp test
