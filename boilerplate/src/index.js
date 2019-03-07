// command for babel -> babel input.js -o output.js  --presets env --watch
// the watch part enables babel to ''watch' for changes (every time the js files are saved) while it is running

const name = "Mike";
console.log(name);

class Hangman {
  myMethod() {
    return "Testing";
  }
}

const hangman = new Hangman();
console.log(hangman.myMethod());
