
function displayCart(){
    let cartItems = localStorage.getItem('product')
    cartItems = JSON.parse(cartItems)
    let productContainer = document.querySelector('.productsCart')
    let productToltals = document.querySelector('#cartToltals')
    let cartCost = localStorage.getItem('totalCost');

    if (cartItems && productContainer) {
        productContainer.innerHTML = ``;
        Object.values(cartItems).map(item => {
            productContainer.innerHTML +=  `
            <tr>
                <td><a href=""><i class="far fa-times-circle text-danger"></i></a></td>
                <td>
                    <div class="img-sp-cart">
                        <img src="public/images/${item.img}" alt="">
                    </div>
                </td>
                <td>${item.name}</td>
                <td>£${item.price}</td>
                <td>
                    <div class="quatily-cart">
                        <input type="number" name="" id="" placeholder="${item.quantity}">
                    </div>
                </td>
                <td>£12.00</td>
            </tr>
            `;
        })
    }
    if (cartItems && productToltals){
        productToltals.innerHTML = `
        <tbody>
            <tr class="p-3">
                
                <td>SHIPPING</td>
                <td>
                    <span class="float-right">CALCULATE SHIPPING</span>
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
    }
    
}

displayCart();