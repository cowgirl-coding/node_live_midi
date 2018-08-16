# Node Live Midi

## Created for Meetup @ TelePharm in Iowa City, Aug 20, 2018

## How to use

+ Install npm and node on your machine if you don't already have them

+ Run `npm install` from inside the project directory

+ Run `node ./utils/logPorts.js` to see available ports. Make sure the number
  at the end of `setup.js`, line 3 corresponds to the port you want to send
  midi data out to.

+ Run `node` to start the Node REPL

+ Run `.load .setup.js` and try `note(64)`. You should get a middle C!

+ Load functions and note arrays from other files, such as `transpositions.js`
  and `scales.js` as needed.
