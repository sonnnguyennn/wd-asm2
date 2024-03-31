


// HEADER
window.onscroll = function() {myFunction()};

const header = document.querySelector(".header")
// var sticky = header.offsetTop;

const sticky = 170;

function myFunction() {
  if (window.scrollY > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}


// SLIDE UP ANIMATIONS
function scrollReveal() {
  const elements = document.querySelectorAll(".img-animated, .img-animated2, .visit, .best-seller, .new-arrivals, .blogs, .instagram");

  const windowHeight = window.innerHeight;
  const elementVisible = 320;

  elements.forEach(element => {
    const elementTop = element.getBoundingClientRect().top;
    const isVisible = elementTop < windowHeight - elementVisible;

    if (isVisible) {
      element.classList.add("active");
    } else {
      element.classList.remove("active");
    }
  });
}

window.addEventListener("scroll", scrollReveal);


// CLICK TO REVEAL CART
let iconCart = document.querySelector('.icon-cart');
let cart = document.querySelector('.cart');
let close = document.querySelector('.close');

iconCart.addEventListener('click', function(){
    if(cart.style.right == '0'){
        cart.style.right = '100%';
    }else{
        cart.style.right = '0';
    }
})
close.addEventListener('click', function (){
    cart.style.right = '-100%';
})




// PRINT ITEMS
const iceCreams = [
  {
      "id": 1,
      "name": "Peach Flavored Ice Cream",
      "price": 30.00,
      "image": "./images/1.png"
  },
  {
      "id": 2,
      "name": "Ice Cream Cone",
      "price": 17.00,
      "image": "./images/2.png"
  },
  {
      "id": 3,
      "name": "Blueberry Ice Cream",
      "price": 18.00,
      "image": "./images/3.png"
  }
  ,
  {
      "id": 4,
      "name": "Banana Ice Cream",
      "price": 15.00,
      "image": "./images/4.png"
  },
  {
      "id": 5,
      "name": "Mango Ice Cream",
      "price": 20.00,
      "image": "./images/5.png"
  },
  {
      "id": 6,
      "name": "Strawberry Ice Cream",
      "price": 20.00,
      "image": "./images/6.png"
  },
  {
      "id": 7,
      "name": "Vanilla Ice Cream",
      "price": 23.00,
      "image": "./images/7.png"
  },
  {
      "id": 8,
      "name": "Chocolate Milk Ice Cream",
      "price": 25.00,
      "image": "./images/8.png"
  },
  {
      "id": 9,
      "name": "Mint Ice Cream",
      "price": 20.00,
      "image": "./images/9.png"
  },
  {
      "id": 10,
      "name": "Fruit Ice Cream",
      "price": 23.00,
      "image": "./images/10.png"
  },
  {
      "id": 11,
      "name": "Chocolate Milk Ice Cream",
      "price": 25.00,
      "image": "./images/11.png"
  },
  {
      "id": 12,
      "name": "New Ice Cream Cone",
      "price": 25.00,
      "image": "./images/12.png"
  }
]


let products = iceCreams;

function addDataToHTML() {
    let listProductHTML = document.querySelector('.seller-content');
    listProductHTML.innerHTML = '';

    if (products !== null) {
        products.forEach(product => {
            let newProduct = document.createElement('div');
            newProduct.classList.add('content-item');
            newProduct.innerHTML =

            `<img src="${product.image}" alt="ice-cream-img">
            <p class="item-name">${product.name}</p>
            <div class="item-price">$${product.price}.00</div>
            <div class="item-icons">
                <div class="icon-slide" onclick="addCart(${product.id})">
                    <svg width="27" height="27" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M5.41442 6H3.75V4.5H6.58558L7.33558 7.5H18.935L17.2321 15.1627L16.5 15.75H8.25L7.51786 15.1627L6.02 8.42233L5.41442 6ZM7.68496 9L8.85163 14.25H15.8984L17.065 9H7.68496ZM10.5 18C10.5 18.8284 9.82843 19.5 9 19.5C8.17157 19.5 7.5 18.8284 7.5 18C7.5 17.1716 8.17157 16.5 9 16.5C9.82843 16.5 10.5 17.1716 10.5 18ZM15 19.5C15.8284 19.5 16.5 18.8284 16.5 18C16.5 17.1716 15.8284 16.5 15 16.5C14.1716 16.5 13.5 17.1716 13.5 18C13.5 18.8284 14.1716 19.5 15 19.5Z" fill="#080341"/>
                    </svg>
                </div>
                <div class="icon-slide">
                    <svg width="27" height="27" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M11.993 5.09691C11.0387 4.25883 9.78328 3.75 8.40796 3.75C5.42122 3.75 3 6.1497 3 9.10988C3 10.473 3.50639 11.7242 4.35199 12.67L12 20.25L19.4216 12.8944L19.641 12.6631C20.4866 11.7172 21 10.473 21 9.10988C21 6.1497 18.5788 3.75 15.592 3.75C14.2167 3.75 12.9613 4.25883 12.007 5.09692L12 5.08998L11.993 5.09691ZM12 7.09938L12.0549 7.14755L12.9079 6.30208L12.9968 6.22399C13.6868 5.61806 14.5932 5.25 15.592 5.25C17.763 5.25 19.5 6.99073 19.5 9.10988C19.5 10.0813 19.1385 10.9674 18.5363 11.6481L18.3492 11.8453L12 18.1381L5.44274 11.6391C4.85393 10.9658 4.5 10.0809 4.5 9.10988C4.5 6.99073 6.23699 5.25 8.40796 5.25C9.40675 5.25 10.3132 5.61806 11.0032 6.22398L11.0921 6.30203L11.9452 7.14752L12 7.09938Z" fill="#080341"/>
                    </svg>
                </div>
                <div class="icon-slide">
                    <svg width="27" height="27" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M15 10.5C15 12.9853 12.9853 15 10.5 15C8.01472 15 6 12.9853 6 10.5C6 8.01472 8.01472 6 10.5 6C12.9853 6 15 8.01472 15 10.5ZM14.1793 15.2399C13.1632 16.0297 11.8865 16.5 10.5 16.5C7.18629 16.5 4.5 13.8137 4.5 10.5C4.5 7.18629 7.18629 4.5 10.5 4.5C13.8137 4.5 16.5 7.18629 16.5 10.5C16.5 11.8865 16.0297 13.1632 15.2399 14.1792L20.0304 18.9697L18.9697 20.0303L14.1793 15.2399Z" fill="#080341"/>
                    </svg>
                </div>
            </div>`;

            listProductHTML.appendChild(newProduct);
        });
    }
}
addDataToHTML()







let listCart = [];

function checkCart() {
    let cartData = localStorage.getItem('list-cart');
    listCart = cartData ? JSON.parse(cartData) : [];
}

checkCart();

function addCart($idProduct) {
    let productsCopy = JSON.parse(JSON.stringify(products));

    let existingProduct = listCart.find(product => product && product.id === $idProduct);

    if (!existingProduct) {
        let newProduct = productsCopy.find(product => product.id === $idProduct);
        newProduct.quantity = 1;
        listCart.push(newProduct);
    } else {
        existingProduct.quantity++;
    }

    localStorage.setItem('list-cart', JSON.stringify(listCart));

    addCartToHTML();
}

addCartToHTML();
function addCartToHTML(){
    // clear data default
    let listCartHTML = document.querySelector('.list-cart');
    listCartHTML.innerHTML = '';

    let totalHTML = document.querySelector('.total-quantity');
    let totalQuantity = 0;
    let totalPriceHTML = document.querySelector('.total-price');
    let totalPrice = 0;
    // if has product in Cart
    if(listCart){
        listCart.forEach(product => {
            if(product){
                let newCart = document.createElement('div');
                newCart.classList.add('cart-item');
                newCart.innerHTML =     

                      ` <img src="${product.image}" alt="cart-item">
                       <div class="item-content">
                           <div class="cart-item-name">${product.name}</div>
                           <div class="cart-item-quantity">
                               QTY:
                               <span class="value">${product.quantity}</span>
                           </div>
                           <div class="cart-item-price">$${product.price}</div>
                       </div>
                       <div class="quantity">
                           <button onclick="changeQuantity(${product.id}, '-')">-</button>
                           <button onclick="changeQuantity(${product.id}, '+')">+</button>
                       </div>
                      `
                    ;
                listCartHTML.appendChild(newCart);
                totalQuantity = totalQuantity + product.quantity;
                totalPrice = totalPrice + product.price * product.quantity;
            }
        })
    }
    totalHTML.innerText = totalQuantity;
    totalPriceHTML.innerText = '$' + totalPrice;
}


function changeQuantity($idProduct, $type) {
  switch ($type) {
      case '+':
          listCart.forEach(product => {
              if (product && product.id === $idProduct) {
                  product.quantity++;
              }
          });
          break;
      case '-':
          listCart.forEach(product => {
              if (product && product.id === $idProduct) {
                  product.quantity--;

                  if (product.quantity <= 0) {
                      listCart = listCart.filter(p => p && p.id !== $idProduct);
                  }
              }
          });
          break;
      default:
          break;
  }

  localStorage.setItem('list-cart', JSON.stringify(listCart));
  addCartToHTML();
}











// ORDER JS

function validate() {
	var contact = document.getElementById("contact").value;
	var email = document.getElementById("email").value;
	var creditnumber = document.getElementById("creditnumber").value;
	var deli = document.getElementById("deli").checked;
	var pickup = document.getElementById("pickup").checked;
	var paypickup = document.getElementById("paypickup").checked;
	var payonline = document.getElementById("payonline").checked;
	var errMsg = "";
	var result = true;

	if ((deli == "") && (pickup == "")) {
		errMsg += "An order type must be selected.\n";
	}
	if (contact == "") {
		errMsg += "Contact number cannot be empty.\n";
	}
	if (email == "") {
		errMsg += "Email cannot be empty.\n";
	}
	if ((paypickup == "") && (payonline == "")) {
		errMsg += "A payment method must be selected.\n";
	}
	if ((document.getElementById("visa").checked) && (creditnumber.length != 16)) {
		errMsg += "Visa card number has to be 16-digit.\n";
	}
	if ((document.getElementById("master").checked) && (creditnumber.length != 16)) {
		errMsg += "Mastercard number has to be 16-digit.\n";
	}
	if ((document.getElementById("american").checked) && (creditnumber.length != 15)) {
		errMsg += "American Express card number has to be 15-digit.\n";
	}
	if (errMsg != "") {
		alert(errMsg);
		result = false;
	}
	return result;
}

function init() {
	var regForm = document.getElementById("regform");
	regForm.onsubmit = validate;
}
window.onload = init;

function addressFunction() {
	if (document.getElementById("same").checked) {
		document.getElementById("billadd").value = document.getElementById("deliadd").value;
	}
	else {
		document.getElementById("billadd").value = "";
	}
}
window.onchange = addressFunction;

function yesnoCheck() {
	if (document.getElementById('deli').checked) {
		document.getElementById('ifYes').style.visibility = 'visible';
	}
	else document.getElementById('ifYes').style.visibility = 'hidden';
}

function yesCheck() {
	if (document.getElementById('payonline').checked) {
		document.getElementById('ifyeah').style.visibility = 'visible';
	}
	else document.getElementById('ifyeah').style.visibility = 'hidden';
}

function copy(event) {
	var deliadd = document.getElementById("deliadd");
	var billadd = document.getElementById("billadd");
	var checked = document.getElementById("same").checked;
	if (checked) {
		if (deliadd.value) {
			billadd.value = deliadd.value;
		}
		else {
			alert('Please enter your delivery address first.');
			event.preventDefault();
		}

	}
}

window.onchange = yesnoCheck();
window.onchange = yesCheck();
window.onchange = copy();