const menuEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");
const mobileMenu = document.querySelector(".mobile-menu");
const menuHamburguesa = document.querySelector(".menu");
const menuCarritoIcon = document.querySelector(".navbar-shopping-cart");
const productDetailCloseIcon = document.querySelector(".product-detail-close")
const shoppingCartContainer = document.querySelector("#shoppingCartContainer");
const productDetailContainer = document.querySelector("#productDetail");
const cardsContainer = document.querySelector(".cards-container");

menuEmail.addEventListener("click", toggleDesktopMenu);
menuHamburguesa.addEventListener("click", toggleMobileMenu);
menuCarritoIcon.addEventListener("click", toggleShoppingCartContainer);
productDetailCloseIcon.addEventListener("click", closeProductDetailAside);

function toggleDesktopMenu() {
    const isShoppingCartContainerClosed = shoppingCartContainer.classList.contains("inactive");
    const isProductDetailContainerClosed = productDetailContainer.classList.contains("inactive");

    if (!isShoppingCartContainerClosed) {
        shoppingCartContainer.classList.add("inactive");
    }
    if (!isProductDetailContainerClosed) {
        productDetailContainer.classList.add("inactive");
    }
    desktopMenu.classList.toggle("inactive");
}
function toggleMobileMenu() {
    const isShoppingCartContainerClosed = shoppingCartContainer.classList.contains("inactive");
    const isProductDetailContainerClosed = productDetailContainer.classList.contains("inactive");
    if (!isShoppingCartContainerClosed) {
        shoppingCartContainer.classList.add("inactive");
    }
    if (!isProductDetailContainerClosed) {
        productDetailContainer.classList.add("inactive");
    }
    mobileMenu.classList.toggle("inactive");
}
function toggleShoppingCartContainer() {
    const isMobileMenuClosed = mobileMenu.classList.contains("inactive");
    const isDesktopMenuClosed = desktopMenu.classList.contains("inactive");
    const isProductDetailContainerClosed = productDetailContainer.classList.contains("inactive");

    if (!isMobileMenuClosed) {
        mobileMenu.classList.add("inactive");
    }
    if (!isDesktopMenuClosed) {
        desktopMenu.classList.add("inactive");
    }
    if (!isProductDetailContainerClosed) {
        productDetailContainer.classList.add("inactive");
    }
    shoppingCartContainer.classList.toggle("inactive");
    

}
function openProductDetailAside() {
    const isMobileMenuClosed = mobileMenu.classList.contains("inactive");
    const isDesktopMenuClosed = desktopMenu.classList.contains("inactive");
    const isShoppingCartContainerClosed = shoppingCartContainer.classList.contains("inactive");

    if (!isMobileMenuClosed) {
        mobileMenu.classList.add("inactive");
    }
    if (!isDesktopMenuClosed) {
        desktopMenu.classList.add("inactive");
    }
    if (!isShoppingCartContainerClosed) {
        shoppingCartContainer.classList.add("inactive");
    }
    productDetailContainer.classList.remove("inactive")
}

function closeProductDetailAside() {
    productDetailContainer.classList.add("inactive")
}
const productList = [];

productList.push({
    name: "Bike",
    price: 120,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"

})
productList.push({
    name: "Pantalla",
    price: 220,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"

})
productList.push({
    name: "PC",
    price: 620,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"

})
/*
<div class="product-card">
        <img src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="">
        <div class="product-info">
          <div>
            <p>$120,00</p>
            <p>Bike</p>
          </div>
          <figure>
            <img src="./icons/bt_add_to_cart.svg" alt="">
          </figure>
        </div>
</div>
*/

function renderProducts(arr) {
    for (product of arr) {
        const productCard = document.createElement("div");
        productCard.classList.add("product-card");
    
        const img = document.createElement("img");
        img.setAttribute("src", product.image)
        img.addEventListener("click",openProductDetailAside);
    
        const productInfo = document.createElement("div");
        productInfo.classList.add("product-info");
    
        const productInfoDiv = document.createElement("div");
    
        const productPrice = document.createElement("p");
        productPrice.innerText = "$" + product.price;
    
        const productName = document.createElement("p");
        productName.innerText = product.name;
    
        const productInfoFigure = document.createElement("figure");
        const imgCart = document.createElement("img");
        imgCart.setAttribute("src", "./icons/bt_add_to_cart.svg")
    
    
        productInfoDiv.append(productPrice, productName);
        productInfoFigure.append(imgCart);
        productInfo.append(productInfoDiv, productInfoFigure);
        productCard.append(img, productInfo);
        cardsContainer.append(productCard);
    }
}

renderProducts(productList);