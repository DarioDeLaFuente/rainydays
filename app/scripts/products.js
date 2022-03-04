import { productArray } from "./constants/productList.js";

const productsContainer = document.querySelector(".product__block__info");
const cart = document.querySelector(".cart");
const cartList = document.querySelector(".cart-list");
const totalContainer = document.querySelector(".total");
const totalcounter = document.querySelector(".total-counter");
let cartArray = [];

productArray.forEach(function (product) {
  productsContainer.innerHTML += `
    <div class="product__info__grid__container">
            <div class="block__product_2">
              <a class="product__label_2" href="#">
                <p>Only on online</p>
              </a>
            </div>
            <div class="labelTale_2"></div>
            <div class="product_info">
              <h3>${product.name}</h3>
              <h4>${product.description}</h4>
            </div>
            <div class="product_price">
              <p>${product.price}</p>
            </div>
            <div class="product_img">
              <img
                src="../media/Jacket_1.png"
                alt="products img of a jacket, color: orange at the top and blue at the bottom. with a horizontal zipper in the middle"
              />
            </div>
            <div class="product_size_selector">
              <label for="cart_options"></label>
              <select id="cart_options">
                <option disabled selected>Choose size</option>
                <option>S</option>
                <option>M</option>
                <option>L</option>
                <option>XL</option>
              </select>
              <div class="product_button_selector">
                <span class="cart__button" data-product="${product.id}">Add to cart</span>
                <span class="express__button" onclick="checkoutPage()">Express Checkout</span>
              </div>
            </div>
            <div class="product_delivery_selector">
              <div class="shipping__options__grid-container">
                <div class="shipping__options_1">
                  <span class="material-icons">local_shipping</span>
                  <label for="shipping__options">Shipping options</label>
                </div>
                <div class="shipping__options_2">
                  <form class="shipping__options">
                    <input
                      type="text"
                      id="shipping__options"
                      name="shipping__options"
                      placeholder=" Zip code"
                    />
                    <span class="shipping__search__button">Search</span>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
    `;
});

const button = document.querySelectorAll(".cart__button");
button.forEach(function (button) {
  button.onclick = function (event) {
    const itemToAdd = productArray.find((item) => (item.id += event.target.dataset.product));

    cartArray.push(itemToAdd);

    showCart(cartArray);
    localStorage.setItem("cartList", JSON.stringify(cartArray));
  };
});

function showCart(cartItem) {
  cart.style.display = "block";
  cartList.innerHTML = "";
  let total = 0;
  let counter = 0;
  cartItem.forEach(function (cartElement) {
    counter++;
    total += parseInt(cartElement.price);
    cartList.innerHTML = `<div class="cart-item">
      <h3>${cartElement.name}</h3>
      <h5>${cartElement.description}</h5>
      </div>
      `;
  });
  totalContainer.innerHTML = `Total: ${total},-`;
  totalcounter.innerHTML = `<div class="">${counter}
  <a href="/checkout.html" class="total-counter"
  ><i class="material-icons shopping__cart">shopping_cart ></i></a
></div>`;
}
