let cart = JSON.parse(localStorage.getItem("cart")) || [];

function addToCart(name, price){
  cart.push({
    name: name,
    price: Number(price)
  });

  localStorage.setItem("cart", JSON.stringify(cart));

  if(typeof renderCart === "function"){
    renderCart();
  }

  alert("Added to cart ✔");
}
