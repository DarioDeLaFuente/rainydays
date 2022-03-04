window.loadCart = function () {
  const cartItem = JSON.parse(localStorage.getItem("cartList"));
  console.log(cartItem);
  const cartContainer = document.querySelectorAll(".cart-list");
  const totalContainer = document.querySelectorAll(".total");
  const totalCounter = document.querySelectorAll(".total-counter");
  //console.log(totalContainer);
  let total = 0;
  let counter = 0;
  if (!cartContainer) return;
  cartItem.forEach(function (cartElement) {
    counter++;
    total += parseInt(cartElement.price);
    cartContainer.forEach(function (el) {
      el.innerHTML = `<div class="cart-item">
        <h3>${cartElement.name}</h3>
        <h5>${cartElement.description}</h5>
        </div>
        `;
    });
  });
  totalContainer.forEach(function (el2) {
    el2.innerHTML = `Total: ${total},-`;
  });
  totalCounter.forEach(function (el3) {
    el3.innerHTML = `<div class="">${counter}`;
  });
  console.log("total", totalCounter);
};
loadCart();
