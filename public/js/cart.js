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
                            <button onclick="giam(${item.id})" class="btn btn-light border btn-outline-secondary" type="button">-</button>
                            <input type="text" readonly class="form-control bg-light" placeholder="${item.quantity}">
                            <button onclick="tang(${item.id})" class="btn btn-light border btn-outline-secondary" type="button">+</button>
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
        var tong = cartItems.reduce(function (accumulator, currentValue) {
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

function deleteCart(id) {
    let getCartStorage = JSON.parse(localStorage.getItem('product'))
    getCartStorage = getCartStorage.filter((value, index) => value.id != id)
    localStorage.setItem('product', JSON.stringify(getCartStorage))
    let tt = 0
    getCartStorage.forEach((item) => {
        if (item.quantity > 0) {
            var totalCart = item.price * item.quantity
            tt += totalCart
        }
    });
    localStorage.setItem('totalCost', JSON.stringify(tt))

    //so luong trong gio hang
    let getCartNumbers = JSON.parse(localStorage.getItem('cartNumbers'))
    let number = getCartNumbers - 1
    localStorage.setItem('cartNumbers', JSON.stringify(number))
    document.querySelector("#itemCartSpan").textContent = localStorage.getItem('cartNumbers')
    displayCart()
    
}

function giam(id) {
    let productStorage = JSON.parse(localStorage.getItem('product'))
    let arrCart = []
    let sl = 0
    for (let i = 0; i < productStorage.length; i++) {

        if (productStorage[i].id === id) {
             sl = productStorage[i].quantity - 1
        }else{
            sl = productStorage[i].quantity
        }
        let slgiam = {
            id: productStorage[i].id,
            name: productStorage[i].name,
            img: productStorage[i].img,
            price: productStorage[i].price,
            price_sale: productStorage[i].price_sale,
            quantity: sl
        }
        arrCart.push(slgiam)
        
        localStorage.setItem('product', JSON.stringify(arrCart))
    }
    let getCartStorage = JSON.parse(localStorage.getItem('product'))
    let tt = 0
    getCartStorage.forEach((item) => {
        if (item.quantity > 0) {
            var totalCart = item.price * item.quantity
            tt += totalCart
        }
    });
    localStorage.setItem('totalCost', JSON.stringify(tt))
    displayCart()
}

function tang(id) {
    let productStorage = JSON.parse(localStorage.getItem('product'))
    let arrCart = []
    let sl = 0
    for (let i = 0; i < productStorage.length; i++) {
        if (productStorage[i].id === id) {
             sl = productStorage[i].quantity + 1
        }else{
            sl = productStorage[i].quantity
        }
        let slgiam = {
            id: productStorage[i].id,
            name: productStorage[i].name,
            img: productStorage[i].img,
            price: productStorage[i].price,
            price_sale: productStorage[i].price_sale,
            quantity: sl
        }
        arrCart.push(slgiam)
        
        localStorage.setItem('product', JSON.stringify(arrCart))
    }
    let getCartStorage = JSON.parse(localStorage.getItem('product'))
    let tt = 0
    getCartStorage.forEach((item) => {
        if (item.quantity > 0) {
            var totalCart = item.price * item.quantity
            tt += totalCart
        }
    });
    localStorage.setItem('totalCost', JSON.stringify(tt))
    displayCart()
}

