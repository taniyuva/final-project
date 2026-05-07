const products = {
  1: { name: "HOME", price: 564 },
  2: { name: "FOOD", price: 5 },
  3: { name: "HOBBY", price: 89 }
};

// IMAGE ARRAYS

const homeImages = [
  "./assets/img/home/bed.png",
  "./assets/img/home/screwdriver.png",
  "./assets/img/home/sofa.png",
  "./assets/img/home/fan.png",
  "./assets/img/home/plant.png"
];

const foodImages = [
  "./assets/img/food/croissant.png",
  "./assets/img/food/pasta.png",
  "./assets/img/food/steak.png",
  "./assets/img/food/banana.png",
  "./assets/img/food/icecream.png",
  "./assets/img/food/ketchup.png",
  "./assets/img/food/pancake.png"
];

const hobbyImages = [
  "./assets/img/hobby/reading.png",
  "./assets/img/hobby/guitar.png",
  "./assets/img/hobby/paint.png",
  "./assets/img/hobby/switch.png"
];

// RANDOM IMAGE FUNCTIONS

function showRandomHomeImage() {
  const img = document.getElementById("homeImg");

  img.src =
    homeImages[Math.floor(Math.random() * homeImages.length)];
}

function showRandomFoodImage() {
  const img = document.getElementById("foodImg");

  img.src =
    foodImages[Math.floor(Math.random() * foodImages.length)];
}

function showRandomHobbyImage() {
  const img = document.getElementById("hobbyImg");

  img.src =
    hobbyImages[Math.floor(Math.random() * hobbyImages.length)];
}

// ADD TO CART

function addToCart(id) {

  let cart =
    JSON.parse(localStorage.getItem("cart")) || [];

  cart.push(products[id]);

  localStorage.setItem("cart", JSON.stringify(cart));
}



function addToCart(id) {

  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  const product = products[id];

  // only add if not already there
  const exists = cart.some(item => item.name === product.name);

  if (!exists) {
    cart.push(product);
    localStorage.setItem("cart", JSON.stringify(cart));
  }
}
