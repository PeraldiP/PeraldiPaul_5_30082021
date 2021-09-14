let orderId = localStorage.getItem("orderId");
let price = localStorage.getItem("total");

console.log(orderId);

console.log(price);
document.querySelector(".display-price").innerHTML = price;
document.querySelector(".display-orderId").innerHTML = orderId;

localStorage.clear();