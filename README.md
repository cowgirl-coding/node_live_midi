# Node Live Midi

## Created for Meetup @ TelePharm in Iowa City, Aug 20, 2018

## How to use

+ Install npm and node on your machine if you don't already have them

+ Run `npm install` from inside the project directory

+ Run `node ./utils/logPorts.js` to see available ports. Make sure the number
  at the end of `setup.js`, line 3, corresponds to the output port you want to
send midi data out to.

+ Run `node` to start the Node REPL

+ Run `.load ./setup.js` and then try running `note(64)`. This will send a
  middle C note to your midi device!

+ Use the `play()` and `stop()` functions to start and stop the loop. Set the
  `tempo` variable to change the iteration speed.

+ Load functions and note arrays from other files, such as `transpositions.js`
  and `scales.js` as needed.

