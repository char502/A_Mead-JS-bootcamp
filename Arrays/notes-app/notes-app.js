// DOM - Document object model

// querySelector - only matches the first match it finds

// Query and remove
// const p = document.querySelector("p");
// p.remove();

// Query all and remove
const ps = document.querySelectorAll("p");
// console.log(p);
ps.forEach(function(item) {
  item.textContent = "********";
  //   console.log(item.textContent);
  //   item.remove();
});

// Add a new element
const newParagraph = document.createElement("p");
newParagraph.textContent = "This is a new element from JS";
document.querySelector("body").appendChild(newParagraph);
