// PRODUCTS

const homeProducts = [
  {
    name: "BED",
    price: 564,
    image: "./assets/img/home/bed.png"
  },
  {
    name: "SOFA",
    price: 900,
    image: "./assets/img/home/sofa.png"
  },
  {
    name: "PLANT",
    price: 22,
    image: "./assets/img/home/plant.png"
  },
  {
    name: "FAN",
    price: 120,
    image: "./assets/img/home/fan.png"
  },
  {
    name: "SCREWDRIVER",
    price: 15,
    image: "./assets/img/home/screwdriver.png"
  },
  {
    name: "LAMP",
    price: 68,
    image: "./assets/img/home/lamps.png"
  },
  {
    name: "CLOCK",
    price: 90,
    image: "./assets/img/home/clock.png"
  },
  {
    name: "FRIDGE",
    price: 30,
    image: "./assets/img/home/fridge.png"
  },
  {
    name: "STAPLER",
    price: 9,
    image: "./assets/img/home/stapler.png"
  }
];

const foodProducts = [
  {
    name: "CROISSANT",
    price: 5,
    image: "./assets/img/food/croissant.png"
  },
  {
    name: "STEAK",
    price: 50,
    image: "./assets/img/food/steak.png"
  },
  {
    name: "BANANA",
    price: 2,
    image: "./assets/img/food/banana.png"
  },
  {
    name: "ICE CREAM",
    price: 9,
    image: "./assets/img/food/icecream.png"
  },
  {
    name: "APPLE",
    price: 80,
    image: "./assets/img/food/apple.png"
  },
  {
    name: "CAKE",
    price: 1,
    image: "./assets/img/food/cake.png"
  },
  {
    name: "PANCAKE",
    price: 4,
    image: "./assets/img/food/pancakes.png"
  },
  {
    name: "PASTA",
    price: 18,
    image: "./assets/img/food/pasta.png"
  },
  {
    name: "RICE",
    price: 52,
    image: "./assets/img/food/rice.png"
  },
  {
    name: "KETCHUP",
    price: 1,
    image: "./assets/img/food/ketchup.png"
  }

];

const hobbyProducts = [
  {
    name: "READING",
    price: 89,
    image: "./assets/img/hobby/reading.png"
  },
  {
    name: "GUITAR",
    price: 600,
    image: "./assets/img/hobby/guitar.png"
  },
  {
    name: "PAINTING",
    price: 30,
    image: "./assets/img/hobby/paint.png"
  },
  {
    name: "SWITCH",
    price: 399,
    image: "./assets/img/hobby/switch.png"
  },
  {
    name: "BASKETBALL",
    price: 37,
    image: "./assets/img/hobby/basketball.png"
  },
  {
    name: "KNITTING",
    price: 17,
    image: "./assets/img/hobby/crochet.png"
  },
  {
    name: "PHOTOGRAPHY",
    price: 567,
    image: "./assets/img/hobby/camera.png"
  },
  {
    name: "MUSIC",
    price: 40,
    image: "./assets/img/hobby/music.png"
  }
];

// CURRENT PRODUCTS

let currentHome = homeProducts[0];
let currentFood = foodProducts[0];
let currentHobby = hobbyProducts[0];

// CLICK LIMITS

let homeClicks = 3;
let foodClicks = 3;
let hobbyClicks = 3;

// RANDOM FUNCTION

function getRandomItem(arr, current) {

  let random;

  do {
    random =
      arr[Math.floor(Math.random() * arr.length)];
  }
  while (random === current);

  return random;
}

// HOME

function showRandomHomeImage() {

  if (homeClicks <= 0) return;

  homeClicks--;

  document.getElementById("homeCounter").innerText =
    `${homeClicks} CLICKS LEFT`;

  currentHome =
    getRandomItem(homeProducts, currentHome);

  document.getElementById("homeImg").src =
    currentHome.image;

  document.getElementById("homePrice").innerText =
    "$" + currentHome.price;

  if (homeClicks === 0) {
    document.getElementById("homeCounter").innerText =
      "LOCKED";
  }
}

// FOOD

function showRandomFoodImage() {

  if (foodClicks <= 0) return;

  foodClicks--;

  document.getElementById("foodCounter").innerText =
    `${foodClicks} CLICKS LEFT`;

  currentFood =
    getRandomItem(foodProducts, currentFood);

  document.getElementById("foodImg").src =
    currentFood.image;

  document.getElementById("foodPrice").innerText =
    "$" + currentFood.price;

  if (foodClicks === 0) {
    document.getElementById("foodCounter").innerText =
      "LOCKED";
  }
}

// HOBBY

function showRandomHobbyImage() {

  if (hobbyClicks <= 0) return;

  hobbyClicks--;

  document.getElementById("hobbyCounter").innerText =
    `${hobbyClicks} CLICKS LEFT`;

  currentHobby =
    getRandomItem(hobbyProducts, currentHobby);

  document.getElementById("hobbyImg").src =
    currentHobby.image;

  document.getElementById("hobbyPrice").innerText =
    "$" + currentHobby.price;

  if (hobbyClicks === 0) {
    document.getElementById("hobbyCounter").innerText =
      "LOCKED";
  }
}

// ADD TO CART

function addToCart(product) {

  let cart =
    JSON.parse(localStorage.getItem("cart")) || [];

  cart.push(product);

  localStorage.setItem("cart", JSON.stringify(cart));
}


