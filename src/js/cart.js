const itemContainer = document.getElementById('cart-items');
const summary = document.getElementById('summary');
const emptyCart = document.getElementById('empty-cart');
const yourCart = document.getElementById('your-cart');

let counter = 0;
const counterUpdate = () => {
  yourCart.innerHTML = `Your Cart ( ${counter} )`;
}

let cart = [];
if (localStorage.getItem("cart")) {
  cart = JSON.parse(localStorage.getItem("cart"));
}

if(cart == ''){
    summary.classList.add('hide');
    emptyCart.classList.remove('hide');
    emptyCart.classList.add('cart-item','empty-cart');
}else{

  cart.forEach(element => {

    counter ++;
    counterUpdate();

    const item = document.createElement('div');
    item.classList.add('cart-item');
    item.innerHTML = `
        <div class="item-img">
          <img src="${element.itemImgSrc}" alt="">
        </div>
        <div class="item-text">
          <div class="item-name"> ${element.itemName} </div>
          <div class="item-details">
            <div class="detail" id="item-price">Color:<span class="default-text">Default</span></div>
            <div class="detail">Category <span class="default-text">Smart-watch</span></div>
            <div class="quantity" >
              <label for="myInput" class="label">Quantity:</label>
              <input type="number" min="1" class="input" id="quantity" value="1">
            </div>
          </div>
          <div class="remove-btn" id="remove-btn">
            Remove
          </div>
        </div>
        <div class="total-price" id="total-price">
          ${element.itemPrice}
        </div>
    `;
    itemContainer.appendChild(item);
  
  });  
    
    
    const removeBtns = document.querySelectorAll('.remove-btn');
    removeBtns.forEach((btn) => {
      btn.addEventListener('click', (e) => {
        const clickedBtn = e.target;
        const item = clickedBtn.closest('.cart-item');
        
        itemContainer.removeChild(item);

        counter--;
        counterUpdate();
      })
      
    });

}

// remove button bug solved, only need to remove the item from cart permanently and from local storage on click of remove button