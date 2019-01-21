// let restaurantSeating = function(totalSeats, availableSeats, requiredSeats) {
//   let seatsAvailable = totalSeats - availableSeats;
//   if (requiredSeats <= seatsAvailable) {
//     return "There are enough seats available";
//   } else {
//     return "There are not enough seats available";
//   }
// };

// let result = restaurantSeating(100, 30, 15);
// console.log(result);

let restaurant = {
  name: "Miller and Carter",
  guestCapacity: 75,
  guestCount: 0,
  checkAvailability: function(numberRqSeats) {
    let canFit = this.guestCapacity - this.guestCount;

    // console.log(numberRqSeats);
    // console.log(canFit);

    if (canFit >= numberRqSeats) {
      return (
        canFit >= numberRqSeats
        // `There is room available for ${numberRqSeats} people`
      );
    } else {
      return (
        canFit >= numberRqSeats
        // `There is not enough room for ${numberRqSeats} people`
      );
    }
  },
  seatNewParty: function(toBeSeated) {
    this.guestCount = this.guestCount + toBeSeated;

    // console.log(this.guestCount);

    if (this.guestCount <= this.guestCapacity) {
      return "There is room available for the new party";
    } else {
      return "There is not enough room for the new party";
    }
  },
  removeParty: function(numLeavingRestaurant) {
    this.guestCount = this.guestCount - numLeavingRestaurant;

    // console.log(this.guestCount);

    let remainingSpaces = this.guestCapacity - this.guestCount;

    // console.log(remainingSpaces);

    if (remainingSpaces <= 0) {
      return "The restaurant is full!";
    } else {
      return `There are currently ${remainingSpaces} spaces available in the restaurant`;
    }

    // rName.guestCapacity = 0;
    // rName.guestCount = 0;
  },
  currentRestaurantStatus: function() {
    // return `${this.name}, ${this.guestCapacity}, ${this.guestCount}`;

    let remainingSpaces = this.guestCapacity - this.guestCount;

    return `The restaurant ${this.name} can seat ${this.guestCapacity} people. 
    The current number of diners is ${this.guestCount}
    The restaurant can currently seat ${remainingSpaces} people`;
  }
};

// console.log(restaurant.checkAvailability(50));
restaurant.seatNewParty(72);

console.log(restaurant.checkAvailability(4));

console.log(restaurant.removeParty(5));

console.log(restaurant.checkAvailability(4));

console.log(restaurant.currentRestaurantStatus());

// console.log(restaurant.seatNewParty(50));

// console.log(restaurant.checkAvailability());

// console.log(restaurant.removeParty(20));
// console.log(restaurant.currentRestaurantStatus());

// console.log(restaurant.seatNewParty(5));

// console.log(restaurant.canSeatParty(89));

// seatParty (seat new party) => Add to guest count
// removeParty => take party size leaving the restaurant and remove it from guest count

// let canSeatParty = function(rToCheck, numberRqSeats) {
//   let canFit = rToCheck.guestCapacity - rToCheck.guestCount;

//   if (canFit >= numberRqSeats) {
//     return "There is room available";
//   } else {
//     return "There is not enough room";
//   }
// };

// console.log(canSeatParty(restaurant, 50));
// console.log(canSeatParty(restaurant, 70));
