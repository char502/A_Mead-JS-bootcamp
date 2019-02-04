const products = [];
const product = products[0];

// Truthy - values that resolve to true in a boolean context
// === (Truthy includes arrays and objects even if have nothing in them) ===
// =========================
// Falsy - values that resolve to false in a boolean context
// =========================
// Falsy values:
// === false, 0, empty string, null, undefined, NaN ===
// =========================

if (products) {
  console.log("product found");
} else {
  console.log("product not found");
}
