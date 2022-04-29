const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");

const baseUrl = "https://rainydayscrm.adaptmedia.net/wp-json/wc/store/products/" + id;

//import { productArray } from "./constants/productList.js";
import { sizeArray } from "./constants/sizeList.js";
const productsContainer = document.querySelector(".product__block__info");
let cartArray = [];
let sizeHtml = "";
let product = null;

sizeArray.forEach(function (size) {
  sizeHtml += `<option>${size.size}</option>`;
});

async function getProduct(url) {
  const response = await fetch(url);
  product = await response.json();

  if (!product.images.length) {
    product.images.push({
      thumbnail: "https://rainydayscrm.adaptmedia.net/app/uploads/2022/04/dummy.png",
      src: "https://rainydayscrm.adaptmedia.net/app/uploads/2022/04/dummy.png",
    });
  }

  document.querySelector(".block__product__horizontal__scroll").innerHTML = generateGalleryHtml(
    product.images
  );

  document.querySelector(".product_description").innerHTML = product.description;

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
              <h4>${product.short_description}</h4>
            </div>
            <div class="product_price">
              <p>${product.prices.price} ,-</p>
            </div>
            <div class="product_img">
              <img
                src="${product.images[0].thumbnail}"
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

  const button = document.querySelectorAll(".cart__button");

  button.forEach(function (button) {
    button.onclick = function (event) {
      const productSize = document.querySelector("#cart_options");
      product.size = productSize.options[productSize.selectedIndex].text;
      cartArray.push(product);
      localStorage.setItem("cartList", JSON.stringify(cartArray));
      loadCart();
      showCart();
    };
  });
}

getProduct(baseUrl);

function showCart() {
  const cart = document.querySelector(".cart");
  cart.style.display = "block";
}

function generateGalleryHtml(images) {
  if (images.length) {
    let galleryHtml = "";
    images.forEach(function (image) {
      galleryHtml += `
      <img src="${image.src}" />
      `;
    });

    return galleryHtml;
  }
}
