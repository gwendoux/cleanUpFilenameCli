# CleanFileName

This is a node.js command line utility that cleanup filenames with url encode characters.
## Installation

    $ npm install -g clean-filename-cli

## Usage

without option:

    $ clean-filename
    prompt: filename:

use option `--clipboard` or `-c` to use clipboard content

    $ clean-filename -c

The output will be display in the console and also add to the clipboard

use option `--filename` to rename with filesystem

    $ clean-filename -f <filename>

The output will be display in the console and also rename in the filesystem

### Use with automator (MacOSX)

1. Install clean-filename with npm (see above)
2. Create new automator service
3. Select "Services receives selected files and folders" in "Finder"
4. Add a new action "Get Selected Finder Items"
5. Add a new action "Run Shell Script"
6. In the "pass input" selector choose "as arguments"
7. In the textarea, just write the command line
    $ clean-filename -f "$@"
8. Now you can clean up your filename in the finder with right select -> services


## Development
First clone repository and access the new folder

    $ git clone <repository>
    $ cd <folder>

then install necessary modules

    $ npm install

and just run with the name to clean in argument

    $ ./app.js <filename>

Run the test with

    $ npm test
