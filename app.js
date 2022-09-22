const toggleBtn = document.getElementById("hamburger");
const sideBar = document.getElementById("navbar");
const closeBtn = document.getElementById("close-btn");

toggleBtn.addEventListener("click", () => {
  sideBar.classList.toggle("active");
});
closeBtn.addEventListener("click", () => {
  sideBar.classList.remove("active");
});

// Cart Section
window.addEventListener("DOMContentLoaded", () => {
  displayItems();
});

const productsContainer = document.querySelector("#proConts");
const cartInner = document.querySelector(".cartInner");

function displayItems() {
  itemsArr.map((item) => {
    productsContainer.innerHTML += `
       <div class="products">
                <img src="${item.image}" alt="">
                <div class="description">
                    <span>${item.brand}</span>
                    <h5>${item.name}</h5>
                    <div class="star">
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                    </div>
                    <div class="price-tag">
                        <h4>$${item.price}</h4>
                        <a onclick="addToCart(${item.id})"><i class="fa-solid fa-cart-shopping"></i></a>
                    </div>
                </div>
            </div>
    `;
  });
}
displayItems();

let cart = [];

function addToCart(id) {
  if (cart.some((item) => item.id === id)) {
    alert("Item In Cart");
    //CHECK TO SEE IF ITEM HAS ALREADY BEEN PUSHED TO CART
    //SOME IS USED TO CHECK IF AT LEAST THE ARRAY CONTAINS ONE ID
  } else {
    //FIND IF THE ARR.ID === ID
    const cartItems = itemsArr.find((item) => item.id === id);

    cart.push(cartItems);

    console.log(cart);

    showCartItems();
  }
}

function showCartItems() {
  sendToCartDisplay();
}

function sendToCartDisplay() {
  cartInner.innerHTML = "";

  cart.map((item) => {
    cartInner.innerHTML = `
        <tr>
                    <td>
                        <img src="images/products/f2.jpg" alt="">
                    </td>
                    <td>Cartoon Astronaut T-shirts</td>
                    <td>$118.19</td>
                    <td>
                        <div class="quantFlex">
                            <i class="fa-solid fa-minus"></i>
                            <div>1</div>
                            <i class="fa-solid fa-plus"></i>
                        </div>
                    </td>
                    <td class="subTotal">$118.9</td>
                    <td><i class="fa-solid fa-trash"></i></td>
                </tr>
    `;
  });

  console.log(cart);
}
