const baseUrl = "https://rainydayscrm.adaptmedia.net/wp-json/wc/store/products/";
const productContainer = document.querySelector(".content");

async function getProduct(url) {
  const response = await fetch(url);
  const products = await response.json();
  let productListHtml = '<div class="grid">';
  products.forEach(function (product) {
    if (!product.images.length) {
      product.images.push({
        thumbnail: "https://rainydayscrm.adaptmedia.net/app/uploads/2022/04/dummy.png",
      });
    }
    productListHtml += `
          <div class="grid-cell--md-6 grid-cell--lg-4">
            <div class="box box--left">
              <a href="/products/product_jacket.html?id=${product.id}">
              <img
                src="${product.images[0].thumbnail}"
                class="prod-img"
                alt="products img of a jacket, color: orange at the top and blue at the bottom. with a horizontal zipper in the middle"
              />
              <div class="block__product">
                <a class="product__label" href="#">
                  <p>Only on online</p>
                </a>
              </div>
              <div class="labelTale"></div>
              <a class="product__card__label" href="/products/product_jacket.html?id=${product.id}">
                <div class="block__product__label">
                <h3>${product.name}</h3>
                <h6>${product.short_description}</h6>
                <p>${product.prices.price} </p>
                </div>
              </a>
            </div>
          </a>
          </div>`;
  });
  productListHtml += "</div>";

  productContainer.innerHTML = productListHtml;
}

getProduct(baseUrl);
