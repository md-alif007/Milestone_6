const handleAddToCart = () => {

    const productName = document.getElementById("product-name");
    const productQuantity = document.getElementById("product-quantity");

    const name = productName.value;
    const quantity = productQuantity.value;

    saveProductToLocalStorage(name, quantity);
    displayProduct(name, quantity);

    productName.value = "";
    productQuantity.value = "";
}

const displayProduct = (name, quantity) => {

    const productContainer = document.getElementById("product-container");

    const li = document.createElement("li");
    li.innerText =
        `
    ${name} : ${quantity};
    `
    productContainer.appendChild(li);
}

const getProductFromLocalStorage = () => {
    let cart = {};

    const getProduct = localStorage.getItem("cart");

    if (getProduct) {
        cart = JSON.parse(getProduct);
    }
    return cart;
}

const saveProductToLocalStorage = (name, quantity) => {
    const cart = getProductFromLocalStorage();
    
    cart [name] = quantity;
    const cartSrting = JSON.stringify(cart);

    localStorage.setItem("cart",cartSrting);
}
