// recuperation of product id

var parsedUrl = new URL(window.location.href);

// declare id
let orderId = parsedUrl.searchParams.get("order_id");

if (!orderId) {
    window.location.href = 'index.html';
}

let orderIdContainer = document.querySelector ('#orderId');
orderIdContainer.innerHTML = orderId;

localStorage.clear();