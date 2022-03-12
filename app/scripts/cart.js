window.loadCart = function () {
  const cartItem = JSON.parse(localStorage.getItem("cartList"));
  console.log(cartItem);
  const cartContainer = document.querySelectorAll(".cart-list");
  cartContainer.forEach(function (el) {
    el.innerHTML = "";
  });

  const totalContainer = document.querySelectorAll(".total");
  const totalCounter = document.querySelectorAll(".total-counter");
  let total = 0;
  let counter = 0;
  if (!cartContainer || !cartItem) return;
  cartItem.forEach(function (cartElement) {
    counter++;
    total += parseInt(cartElement.price);
    cartContainer.forEach(function (el) {
      el.innerHTML += `<div class="cart-item">
        <h3>${cartElement.name}</h3>
        <h5>${cartElement.description}</h5>
        <h5>size:${cartElement.size}</h5>
        </div>
        `;
    });
  });
  totalContainer.forEach(function (el2) {
    el2.innerHTML = `Total: ${total},-`;
  });
  totalCounter.forEach(function (el3) {
    el3.innerHTML = `<div class="">X${counter}`;
  });
  console.log("total", totalCounter);
};

window.showCart = function () {
  const cartList = document.querySelector(".cart-list");
  const cart = document.querySelector(".cart");
  cart.style.display = "block";
};

loadCart();

window.loadSize = function () {
  console.log(loadSize);
};
