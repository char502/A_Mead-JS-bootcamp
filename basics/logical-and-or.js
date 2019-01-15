let isGuestOneVegan = false;
let isGuestTwoVegan = false;

if (isGuestOneVegan && isGuestTwoVegan) {
  console.log("only offer vegan dishes");
} else if (isGuestOneVegan || isGuestTwoVegan) {
  console.log("offer some vegan options");
} else {
  console.log("can offer anything on the menu");
}
