# CleanFileName

This is a node.js command line utility that cleanup filenames with url encode characters.
## Installation

    $ npm install -g clean-filename

## Usage
First clone repository and access the new folder

    $ git clone <repository> && cd $_

then install necessary modules

    $ npm install

and just run with the name to clean in argument

    $ ./index.js <filename>

Run the test with

    $ gulp test

## ToDo

- [ ] Add a command line name
- [X] ~~Add test~~
- [X] ~~Add new function to normalize filename for the web~~
- [X] ~~Transform in Uppercase characters to decode~~
- [ ] Add parameter to get clipboard content and add to after
- [ ] Improve help command
- [X] ~~Use Encode/decode URI component~~
- [ ] Add test to detect malformed URI
- [ ] Remove path from copy/paste
- [ ] Add ask for input
