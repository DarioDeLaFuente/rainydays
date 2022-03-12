import { productArray } from "./constants/productList.js";
import { sizeArray } from "./constants/sizeList.js";
const productsContainer = document.querySelector(".product__block__info");
let cartArray = [];
let sizeHtml = "";

sizeArray.forEach(function (size) {
  sizeHtml += `<option>${size.size}</option>`;
});

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
              <p>${product.price} ,-</p>
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
                ${sizeHtml}
              </select>
              <div class="product_button_selector">
                <span class="cart__button" data-product="${product.id}">Add to cart</span>
                <span class="express__button" onclick="checkoutPage()">Express Checkout</span>
              </div>
            </div>
            <div class="product_delivery_selector">
                <span class="material-icons material-icons-style">inventory_2</span>
                <p> FREE SHIPPING & RETURNS</p> 
            </div>
            <div class="product_delivery_selector_2">
                <span class="material-icons material-icons-style">local_shipping</span>
                <p> 2-5 BUSINESS DAYS</p> 
            </div>
        </div>
    `;
});

const button = document.querySelectorAll(".cart__button");
button.forEach(function (button) {
  button.onclick = function (event) {
    const productSize = document.querySelector("#cart_options");
    const itemToAdd = Object.assign(
      {},
      productArray.find((item) => (item.id += event.target.dataset.product))
    );
    itemToAdd.size = productSize.options[productSize.selectedIndex].text;
    cartArray.push(itemToAdd);
    localStorage.setItem("cartList", JSON.stringify(cartArray));
    loadCart();
    showCart();
  };
});

function showCart() {
  const cart = document.querySelector(".cart");
  cart.style.display = "block";
}
