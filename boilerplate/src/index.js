// command for babel -> babel input.js -o output.js  --presets env --watch
// the watch part enables babel to ''watch' for changes (every time the js files are saved) while it is running

// ==============================================================================
// JavaScript modules
// ==============================================================================
// Each file has it's own separate scope - no longer are variables shared between files
// so have to be explicit about what we're exporting from one file and what we're importing from another
//i.e. have to use exports

// i.e. below - not just running 'utilities.js it's actually grabbing something from it
// ==============================================================================
// Types of export
// ==============================================================================

// Named export
// Default export - all files can have one if needed

// ==============================================================================
// import { add, name } from "./utilities"; // named export
// ==============================================================================

import otherSquare, { add, name } from "./utilities"; // default export (square - but can be called anything - as not grabbing it by it's name, are grabbing it as it is the default) with the named exports after it

import screamExample from "./scream";

console.log("index.js");

console.log(add(20, 5));

console.log(name);

console.log(screamExample(name));

console.log(screamExample("Hullooooo"));

console.log(otherSquare(5));
