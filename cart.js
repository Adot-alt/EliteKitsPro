let cart = JSON.parse(localStorage.getItem("cart")) || [];

function addToCart(name, price){
  cart.push({
    name: name,
    price: Number(price)
  });

  localStorage.setItem("cart", JSON.stringify(cart));

  alert("Added to cart ✔");

  if(typeof renderCart === "function"){
    renderCart();
  }
}
