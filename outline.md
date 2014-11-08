# How To Build A #BADA55 NodeJS Dev Environment

outline and ideas before i build the thing

## Your Favorite IDE

* provides value in the right circumstances
* integrated tools
* pre-defined workflow
* up and running faster
* don't have to build it yourself
* https://twitter.com/curtismchale/status/529382167131205634
* https://twitter.com/sapiensworks/status/529382708980744194
* https://twitter.com/spugamola/status/529382627258953728
* https://twitter.com/ricardohbin/status/529383453515472896
* https://twitter.com/KaiKoch/status/529385016942682112

## Why Not IDE?

* but is big, bloated, clunky
* not necessary all the time

* light weight command line
* flexibility
* portability
* replace tools as needed
* change workflow and process as needed
* https://twitter.com/mkoby/status/529384100579135488
* https://twitter.com/aJimHolmes/status/529382174265335808
* https://twitter.com/dburton/status/529382047467327488
* https://twitter.com/kevindente/status/529391919789375489

## Integrated Tools

* app restart
* task running
* linting
* preprocessing
* concat and minify
* browser reloading
* unit test running
* debugging

## The No-Brainers

* Syntax Highlighting
* Project / File System Explorer
* Finding files in project

## App Restart w/ Nodemon

* show manual reload after expressjs route changes
* show nodemon as replacement for node exe
* restart server when certain files change

## Running Tasks w/ Grunt

* basics of grunt setup
* myriad of plugins
* grunt-contrib-watch for file system watching

## Linting w/ JSHint

* grunt-contrib-jshint
* run jshint on file changes for server code
* run jshint on file changes for client code

## Preprocessing w/ Browserify

* grunt-browserify
* build front-end package on file change
* grunt-contrib-concat for css

## Livereload

* grunt-contrib-watch
* reload page when jade template changes
* Reload page when browserify package changes
* Reload page when css changes

## Unit Testing Node w/ Jasmine

* grunt-jasmine-node
* run specs when spec file or code file is saved
* show output in console

## Debugging w/ Node Debug

* Debugging NodeJS code directly
* Debugging Grunt tasks
* Debugging Unit Tests run from Grunt

## You Don't Need An IDE

* Doesn't mean you don't prefer one
* Command line tools have continued to be important
* Flexibility and control are tradeoffs, though
* Not everything in IDE can be reproduced either

## We Still Have Work To Do

* Refactoring? That's language dependent, not IDE dependent
* In-editor error messages (doable w/ plugins)
* Visual debuggers in IDE - but those are plentiful out of IDE
* https://twitter.com/jezell/status/529390125470326784
* https://twitter.com/jezenthomas/status/529382013359640576
* https://twitter.com/benwmaddox/status/529385117974659072 
* https://twitter.com/KaiKoch/status/529386441689022464
* https://twitter.com/KaiKoch/status/529389259695083520
* https://twitter.com/hertling/status/529391383518670848
