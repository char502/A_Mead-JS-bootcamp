// getters and setters - customises the behaviour of an object
// great for validation/sanitisation etc

// getters - access properties
// setters - change (mutate) them

const data = {
  locations: [],
  get location() {
    return this._location;
  },
  set location(value) {
    this._location = value.trim();
    this.locations.push(this._location);
  }
};

// code that uses the data object
data.location = "   Reading   ";
data.location = "   New York   ";
console.log(data);
