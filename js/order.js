

window.onscroll = function() {myFunction()};

const header = document.querySelector(".header")
// var sticky = header.offsetTop;

const sticky = 30;

function myFunction() {
  if (window.scrollY > sticky) {
    header.style.boxShadow = "0 0 10px 1px lightgrey";
  } else {
    header.style.boxShadow = "none";
  }
}



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

   
    let totalQuantity = 0;
    let totalPriceHTML = document.querySelector('.total-price');
    let subTotal = document.getElementById('sub-total');
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
    // totalHTML.innerText = totalQuantity;
    totalPriceHTML.innerText = '$' + totalPrice;
    subTotal.innerText = '$' + totalPrice 

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
    var email = document.getElementById("email").value;
    var creditNumber = document.getElementById("creditNumber").value;
    var delivery = document.getElementById("delivery").checked;
    var pickup = document.getElementById("pickup").checked;
    var payPickup = document.getElementById("payPickup").checked;
    var payOnline = document.getElementById("payOnline").checked;
    var errMsg = "";
    var result = true;

    if (!delivery && !pickup) {
        errMsg += "An order type must be selected.\n";
    }
    if (email == "") {
        errMsg += "Email cannot be empty.\n";
    }
    if (!payPickup && !payOnline) {
        errMsg += "A payment method must be selected.\n";
    }
    if ((document.getElementById("visa").checked || document.getElementById("master").checked) && creditNumber.length != 16) {
        errMsg += "Card number has to be 16 digits for Visa or Mastercard.\n";
    }
    if (document.getElementById("american").checked && creditNumber.length != 15) {
        errMsg += "Card number has to be 15 digits for American Express.\n";
    }
    if (errMsg != "") {
        alert(errMsg);
        result = false;
    }
    return result;
}

function init() {
    var regForm = document.getElementById("form");
    regForm.onsubmit = validate;
}

window.onload = init;

function addressFunction() {
    if (document.getElementById("same-checkbox").checked) {
        document.getElementById("billingAdd").value = document.getElementById("deliveryAdd").value;
        document.getElementById("shipping-address-box").value = document.getElementById("deliveryAdd").value
    } else {
        document.getElementById("billingAdd").value = "";
        document.getElementById("shipping-address-box").value = ""
    }
}

function radioCheck1() {
    var delivery = document.getElementById('delivery');
    if (delivery.checked) {
        document.getElementById('radio-active-1').style.display = 'flex';
    } else {
        document.getElementById('radio-active-1').style.display = 'none';
    }
}

function radioCheck2() {
    var payOnline = document.getElementById('payOnline');
    if (payOnline.checked) {
        document.getElementById('radio-active-2').style.display= 'flex';
    } else {
        document.getElementById('radio-active-2').style.display= 'none';
    }
}

function copy(event) {
    var deliveryAdd = document.getElementById("deliveryAdd");
    var billingAdd = document.getElementById("billingAdd");
    var shipAdd = document.getElementById("shipping-address-box");
    var checked = document.getElementById("same-checkbox").checked;
    if (checked) {
        if (deliveryAdd.value) {
            billingAdd.value = deliveryAdd.value;
            shipAdd.value = deliveryAdd.value;
        } else {
            alert('Please enter your delivery address first.');
            event.preventDefault();
        }
    }
}

window.onload = function () {
    init();
    addressFunction();
    radioCheck1();
    radioCheck2();
    copy();
};

document.getElementById('delivery').addEventListener('change', radioCheck1);
document.getElementById('payOnline').addEventListener('change', radioCheck2);
document.getElementById('same-checkbox').addEventListener('change', addressFunction);
document.getElementById('form').addEventListener('submit', copy);
