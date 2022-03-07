import { productArray } from "./constants/productList.js";
import { sizeArray } from "./constants/sizeList.js";
console.log("sizeArray", sizeArray);

const productsContainer = document.querySelector(".product__block__info");

const totalContainer = document.querySelector(".total");
const totalcounter = document.querySelector(".total-counter");

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
    console.log("productSize", productSize);
    const itemToAdd = productArray.find((item) => (item.id += event.target.dataset.product));
    itemToAdd.size = productSize.options[productSize.selectedIndex].text;
    console.log("itemToadd", itemToAdd);
    cartArray.push(itemToAdd);

    showCart(cartArray);
    localStorage.setItem("cartList", JSON.stringify(cartArray));
  };
});

function showCart(cartItem) {
  const cartList = document.querySelector(".cart-list");
  const cart = document.querySelector(".cart");
  console.log("cartItem", cartItem);
  cart.style.display = "block";
  cartList.innerHTML = "";
  let total = 0;
  let counter = 0;
  cartItem.forEach(function (cartElement) {
    counter++;
    total += parseInt(cartElement.price);
    cartList.innerHTML += `<div class="cart-item">
      <h3>${cartElement.name}</h3>
      <h5>${cartElement.description}</h5>
      <h5>${cartElement.size}</h5>
      </div>
      `;
  });
  totalContainer.innerHTML = `Total: ${total},-`;
  totalcounter.innerHTML = `<div class="">${counter}
  <a href="/checkout.html" class="total-counter"
  ><i class="material-icons shopping__cart">shopping_cart ></i></a
></div>`;
}
