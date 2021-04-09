// var url = "http://localhost:3000/";

// const fetchAPI = async (url, options) => {
//     const res = await fetch(url, options)
//     return res.json()
// }

// const processData = function (data) {
//     // console.log(data);
// }
// const processError = function (err) {
//     console.log(err);
// }

// const getAllProduct = async () => {
//     const productUrl = url + "products";
//     const options = {
//         method: "GET",
//         header: {
//             "Content-Type": "application/json",
//         },
//     };
//     const res = await fetchAPI(productUrl, options)
//     processData(res)
//     const arr = res
//     arr.forEach((index, item) => {
//         document.querySelector("#listProduct").innerHTML += `
//             <div class="col-md-4">
//                 <div class="card border-0 w-100" style="width: 18rem;">
//                     <div class="img-cart">
//                             <img src="../public/images/${index.img}" class="card-img-top" alt="...">
//                         <button class="btn-add" id="btnAddCart">ADD TO CART</button>
//                     </div>
//                     <div class="sale">
//                         <p>SALE</p>
//                     </div>
//                     <div class="card-body pl-0 pr-0">
//                         <h5 class="card-title">${index.name}</h5>
//                         <p class="price-cart"><span>£${index.price_sale}</span> - £${index.price}</p>
//                     </div>
//                 </div>
//             </div> 
//             `;
//         });
        
//         var carts = document.querySelectorAll(".btn-add");
    
    
//         for (let i = 0; i < carts.length; i++) {
//             carts[i].addEventListener("click", () => {
//                 cartNumbers(arr[i]);
//                 tolalCost(arr[i])
//             });
//         }
    
//         function onLoadCartNumbers() {
//             var productNumbers = localStorage.getItem("cartNumbers");
//             if (productNumbers) {
//                 document.querySelector("#itemCartSpan").textContent = productNumbers;
//             }
//         }
    
//         function cartNumbers(product) {
//             // console.log('product click', product);
//             var productNumbers = localStorage.getItem("cartNumbers");
    
//             productNumbers = parseInt(productNumbers);
//             if (productNumbers) {
//                 localStorage.setItem("cartNumbers", productNumbers + 1);
//                 document.querySelector("#itemCartSpan").textContent = productNumbers + 1;
//             } else {
//                 localStorage.setItem("cartNumbers", 1);
//                 document.querySelector("#itemCartSpan").textContent = 1;
//             }
//             setItem(product);
//         }
    
//         function setItem(product) {
//             var cartItem = localStorage.getItem("product");
//             cartItem = JSON.parse(cartItem)

//             if (cartItem != null) {
//                 if (cartItem[product.name] == undefined) {
//                     cartItem = {
//                         ...cartItem,
//                         [product.name]: product
//                     }
//                 }
//                 cartItem[product.name].quantity +=1;
//             } else {
//                 product.quantity = 1
//                 cartItem = {
//                     [product.name]: product
//                 }
//             }
//             localStorage.setItem("product", JSON.stringify(cartItem));
//         }

//         function tolalCost(product){
//             let cartCost = localStorage.getItem('totalCost');
//             console.log('My cartCost is', cartCost);
//             console.log(typeof cartCost);
//             if (cartCost != null) {
//                 cartCost = parseInt(cartCost)
//                 localStorage.setItem('totalCost', cartCost + product.price)
//             } else {
//                 localStorage.setItem('totalCost', product.price)
//             }
//         }
//         function displayCart(){
//             let cartItems = localStorage.getItem('productsInCart')
//             cartItems = JSON.parse(cartItems)
//             let productContainer = document.querySelector('.productsCart')
            
//             console.log(cartItems);

//             if (cartItems && productContainer) {
//                 console.log('running');
//                 productContainer.innerHTML = ``;
//                 Object.values(cartItems).map(item => {
//                     productContainer.innerHTML +=  `
//                     <tr>
//                         <td><a href=""><i class="far fa-times-circle text-danger"></i></a></td>
//                         <td>
//                             <div class="img-sp-cart">
//                                 <img src="public/images/${item.img}" alt="">
//                             </div>
//                         </td>
//                         <td>${item.name}</td>
//                         <td>£${item.name}</td>
//                         <td>
//                             <div class="quatily-cart">
//                                 <input type="number" name="" id="" placeholder="1">
//                             </div>
//                         </td>
//                         <td>£12.00</td>
//                     </tr>
//                     `
//                 })
//             }
            
//         }
    
//         onLoadCartNumbers();
//         displayCart();
// };

// window.onload = () => {
//     getAllProduct()
    
// }


const url = "http://localhost:3000/products";

async function getAPI(){
    const response= await fetch(url)
    const arr = await response.json();
    arr.forEach((index, item) => {
        document.querySelector("#listProduct").innerHTML += `
            <div class="col-md-4">
                <div class="card border-0 w-100" style="width: 18rem;">
                    <div class="img-cart">
                            <img src="../public/images/${index.img}" class="card-img-top" alt="...">
                        <button class="btn-add" id="btnAddCart">ADD TO CART</button>
                    </div>
                    <div class="sale">
                        <p>SALE</p>
                    </div>
                    <div class="card-body pl-0 pr-0">
                        <h5 class="card-title">${index.name}</h5>
                        <p class="price-cart"><span>£${index.price_sale}</span> - £${index.price}</p>
                    </div>
                </div>
            </div> 
            `;
        });
        
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
            // console.log('product click', product);
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
                cartItem[product.name].quantity +=1;
            } else {
                product.quantity = 1
                cartItem = {
                    [product.name]: product
                }
            }
            localStorage.setItem("product", JSON.stringify(cartItem));
        }

        function tolalCost(product){
            let cartCost = localStorage.getItem('totalCost');
            console.log('My cartCost is', cartCost);
            console.log(typeof cartCost);
            if (cartCost != null) {
                cartCost = parseInt(cartCost)
                localStorage.setItem('totalCost', cartCost + product.price)
            } else {
                localStorage.setItem('totalCost', product.price)
            }
        }
        
        
    
        onLoadCartNumbers();
        
}

getAPI()