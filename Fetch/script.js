fetch("https://fakestoreapi.com/products")
  .then((value) => value.json())
  .then((data) => {
    for (let i = 0; i < 5; i++) {
      const container = document.createElement("div");
      container.classList.add("container");
      document.body.appendChild(container);
      const content = [data[i].title, data[i].price, data[i].description];
      container.innerHTML = ` <div class= "content-wrapper">
      <h3 class= "card-title">${data[i].title}</h3>
       <p class= "card-price"> $${data[i].price} </p> 
       <p class= "card-description"> ${data[i].description} </p>
       </div>
       <div class= "image-wrapper">
       <img src= ${data[i].image}> 
       </div>
     <div class="cart-button" onclick = 'addToCart(this)' > Add to Cart </div>
`;
    }
  })
  .then(() => {
    document.body.appendChild(cart);
  });

const cartItems = [];

const cart = document.createElement("div");
cart.className = "cart";
function addToCart(element) {
  element.innerHTML = "Added!";
  const title =
    element.parentElement.getElementsByClassName("card-title")[0].textContent;
  const price = element.parentElement
    .getElementsByClassName("card-price")[0]
    .textContent.slice(2);
  cartItems.push(title, price);
  const cartText = cartItems.join("\n\n");
  cart.innerText = cartText;
  getTotal(price);
}
let total = 0;
const priceDisplay = document.createElement("p");
priceDisplay.className = "totalCost"


function getTotal(price) {
  total += parseFloat(price);
  console.log(total);
  const cart = document.querySelector(".cart")
  cart.appendChild(priceDisplay);
  priceDisplay.innerText = "Total: " + total;
}
