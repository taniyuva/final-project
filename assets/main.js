const products = {
  1: { name: "HEADPHONES", price: 99 },
  2: { name: "SHOES", price: 120 },
  3: { name: "WATCH", price: 75 }
};

function addToCart(id) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  cart.push(id);
  localStorage.setItem("cart", JSON.stringify(cart));
  alert("Added.");
}
