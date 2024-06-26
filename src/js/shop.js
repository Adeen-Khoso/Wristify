// important DOM elements
const addCartBtns = document.querySelectorAll(".add-cartBtn");
const header = document.getElementById("header");

let cart = [];
if (localStorage.getItem("cart")) {
  cart = JSON.parse(localStorage.getItem("cart"));
}

// adding evenlistener for add to cart buttons
addCartBtns.forEach((btn) => {

  btn.addEventListener("click", (e) => {

    const clickedBtn = e.target;
    const product = clickedBtn.closest(".product-card");
    const addCartBtn = product.querySelector(".add-cartBtn")
    const clickSound = document.getElementById('clickSound');

    
    playSound(clickSound);
    showPopupFunc(product);
    addToLocalStorage(product);
    removeAddCartBtn(addCartBtn);
    
  });
  
  
  const product = btn.closest(".product-card"); 
  const matchingCartItem = cart.find((item) => {
    return item.itemName === product.querySelector(".product-name").textContent &&
           item.itemPrice === product.querySelector(".product-price").textContent;
  });

  if(matchingCartItem){
    btn.classList.remove("add-cartBtn");
    btn.classList.add("hide");
    btn.nextElementSibling.classList.add("added");
    btn.nextElementSibling.classList.remove("hide");
  }
  
});


// function for playing sound when item is added to cart
const playSound = (audioElement) => {
    audioElement.currentTime = 0; 
    audioElement.play(); 
}

// function for showing the noticification of added to cart
const showPopupFunc = (product) => {
  const productName = product.querySelector(".product-name");
  const nameText = productName.textContent;

  const productPrice = product.querySelector(".product-price");
  const priceText = productPrice.textContent;

  const productId = product.querySelector(".product-btn");
  const linkHref = productId.getAttribute("href");

  const card = document.createElement("div");
  card.classList.add("card");
  card.id = "card";

  card.innerHTML = ` 
       
    <div class="card-wrapper">
      <div class="card-icon">
        <div class="icon-cart-box">
          <svg
            viewBox="0 0 576 512"
            width="20"
            height="20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"
              fill="#312F4D"
            ></path>
          </svg>
        </div>
      </div>

      <div class="card-content">
        <div class="card-title-wrapper">
          <span class="card-title">Added to Cart!</span>
          <span class="card-action" id="card-action">
            <svg
              viewBox="0 0 384 512"
              width="15"
              height="15"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"
              ></path>
            </svg>
          </span>
        </div>
        <a href="${linkHref}" class="product-name">${nameText}</a>
        <div class="product-price">${priceText}</div>
        <a href="cart.html" class="btn-view-cart" type="button">View Cart</a>
      </div>
      <div class="progress-line"></div>
    </div>

    `;

  header.appendChild(card);

  const cardAct = document
    .getElementById("card-action")
    .addEventListener("click", () => {
      header.removeChild(card);
    });

  setTimeout(() => {
    if (header.contains(card)) {
      header.removeChild(card);
    }
  }, 2500);
};

// function for adding item to local storage
const addToLocalStorage = (product) => {

  const productName = product.querySelector(".product-name");
  const nameText = productName.textContent;

  const productPrice = product.querySelector(".product-price");
  const priceText = productPrice.textContent;

  const productImage = product.querySelector(".product-img");
  const img = productImage.querySelector('img');
  const src = img.getAttribute('src');

  let item = {
    itemPrice : priceText,
    itemName: nameText,
    itemImgSrc : src
  };

  cart.push(item);

  updateLocalStorage();
};

const updateLocalStorage = () => {
  localStorage.setItem("cart", JSON.stringify(cart))
};

const removeAddCartBtn = (btn) => {
  btn.classList.remove("add-cartBtn");
  btn.classList.add("hide"); 
  btn.nextElementSibling.classList.add("added"); 
  btn.nextElementSibling.classList.remove("hide");
}

