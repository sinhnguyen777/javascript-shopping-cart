var carts = document.querySelectorAll(".btn-add");
for (let i = 0; i < carts.length; i++) {
    carts[i].addEventListener("click", () => {
        cartNumbers(arr[i]);
        tolalCost(arr[i])
    });
}

function onLoadCartNumbers() {
    var productNumbers = localStorage.getItem("cartNumbers");
    if (productNumbers) {
        document.querySelector("#itemCartSpan").textContent = productNumbers;
    }
}

function cartNumbers(product) {
    var productNumbers = localStorage.getItem("cartNumbers");

    productNumbers = parseInt(productNumbers);
    if (productNumbers) {
        localStorage.setItem("cartNumbers", productNumbers + 1);
        document.querySelector("#itemCartSpan").textContent = productNumbers + 1;
    } else {
        localStorage.setItem("cartNumbers", 1);
        document.querySelector("#itemCartSpan").textContent = 1;
    }
    setItem(product);
}

function setItem(product) {
    var cartItem = localStorage.getItem("product");
    cartItem = JSON.parse(cartItem)

    if (cartItem != null) {
        if (cartItem[product.name] == undefined) {
            cartItem = {
                ...cartItem,
                [product.name]: product
            }
        }
        cartItem[product.name].quantity += 1;
    } else {
        product.quantity = 1
        cartItem = {
            [product.name]: product
        }
    }
    localStorage.setItem("product", JSON.stringify(cartItem));
}

function tolalCost(product) {
    let cartCost = localStorage.getItem('totalCost');
    if (cartCost != null) {
        cartCost = parseInt(cartCost)
        localStorage.setItem('totalCost', cartCost + product.price)
    } else {
        localStorage.setItem('totalCost', product.price)
    }
}

onLoadCartNumbers();

function displayCart() {
    let cartItems = localStorage.getItem('product')
    cartItems = JSON.parse(cartItems)
    let productContainer = document.querySelector('#productsCart')
    let productToltals = document.querySelector('#cartToltals')
    let cartCost = localStorage.getItem('totalCost');

    if (cartItems && productContainer) {
        productContainer.innerHTML = ``;
        Object.values(cartItems).map(item => {
            if (item.quantity > 0) {
                var totalCart = item.price * item.quantity
            }
            productContainer.innerHTML += `
                <tr>
                    <td><button class="btn btnDeleteCart" onclick="deleteCart(${item.id})"><i class="far fa-times-circle text-danger"></i></button></td>
                    <td>
                        <div class="img-sp-cart">
                            <img src="public/images/${item.img}" alt="">
                        </div>
                    </td>
                    <td>${item.name}</td>
                    <td>£${item.price}.00</td>
                    <td class="">
                        <div class="quatily-cart pt-4">
                            <button class="btn btn-light border btn-outline-secondary" type="button">-</button>
                            <input type="text" readonly class="form-control bg-light" placeholder="${item.quantity}">
                            <button class="btn btn-light border btn-outline-secondary" type="button">+</button>
                        </div>
                    </td>
                    <td>£${totalCart}.00</td>
                </tr>
            `;

        })
    } else {
        productContainer.innerHTML = `
        <tr>
            <td colspan="6" class="text-center">
                <img src="public/images/empty-cart.png" alt="">
            </td>
        </tr>
        `
    }
    if (cartItems && productToltals) {
        
        var quantityCart = 0
        var tong = cartItems.reduce(function(accumulator, currentValue){
            var sl = accumulator + currentValue.quantity
            return sl
        }, quantityCart)
        productToltals.innerHTML = `
        <tbody>
            <tr class="p-3">
                <td>SHIPPING</td>
                <td>
                    <span class="float-right">CALCULATE SHIPPING</span>
                </td>
            </tr>
            <tr>
                <td>THE NUMBER OF PRODUCTS</td>
                <td>
                    <span class="float-right">${tong}</span>
                </td>
            </tr>
            <tr>
                <td>TOTAL</td>
                <td>
                    <span class="float-right">£${cartCost}.00</span>
                </td>
            </tr>
        </tbody>
        `
    } else {
        productToltals.innerHTML = `
        <tbody>
            <tr class="p-3">
                
                <td>SHIPPING</td>
                <td>
                    <span class="float-right">CALCULATE SHIPPING</span>
                </td>
            </tr>
            <tr>
                <td>THE NUMBER OF PRODUCTS</td>
                <td>
                    <span class="float-right">0</span>
                </td>
            </tr>
            <tr>
                <td>TOTAL</td>
                <td>
                    <span class="float-right">£0</span>
                </td>
            </tr>
        </tbody>
        `
    }

}

displayCart();

function deleteCart(id){
    let getCartStorage = JSON.parse(localStorage.getItem('product'))
    let getCartNumbers = JSON.parse(localStorage.getItem('cartNumbers'))
    let number = getCartNumbers - 1

    getCartStorage = getCartStorage.filter((value, index) => value.id != id)
    localStorage.setItem('product', JSON.stringify(getCartStorage))
    localStorage.setItem('cartNumbers', JSON.stringify(number))
    document.querySelector("#itemCartSpan").textContent = localStorage.getItem('cartNumbers')
    displayCart()
    // showCartLocal()
}


