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
                    <td><a href=""><i class="far fa-times-circle text-danger"></i></a></td>
                    <td>
                        <div class="img-sp-cart">
                            <img src="public/images/${item.img}" alt="">
                        </div>
                    </td>
                    <td>${item.name}</td>
                    <td>£${item.price}.00</td>
                    <td>
                        <div class="quatily-cart">
                            <button class="btn-productdetail border m-0 bg-light">-</button>
                            <input type="number" name="" id="" placeholder="${item.quantity}">
                            <button class="btn-productdetail border m-0 bg-light">+</button>
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