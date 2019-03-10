// command for babel -> babel input.js -o output.js  --presets env --watch
// the watch part enables babel to ''watch' for changes (every time the js files are saved) while it is running

// Each file has it's own separate scope - no longer are variables shared between files
// so have to be explicit about what we're exporting from one file and what we're importing from another
//i.e. have to use exports

// not just running 'utilities.js it's actually grabbing something from it
import { add, name } from "./utilities";
import { scream } from "./scream";

console.log("index.js");

console.log(add(3, 4));

console.log(name);

console.log(scream(name));
