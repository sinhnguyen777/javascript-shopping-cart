var url = "http://localhost:3000/";

const fetchAPI = async (url, options) => {
    const res = await fetch(url, options)
    return res.json()
}

const processData = function (data) {
    // console.log(data);
}
const processError = function (err) {
    console.log(err);
}

const getAllProduct = async () => {
    const productUrl = url + "products";
    const options = {
        method: "GET",
        header: {
            "Content-Type": "application/json",
        },
    };
    const res = await fetchAPI(productUrl, options)
    processData(res)
    const arr = res
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
                        <p class="price-cart"><span>£${index.price}</span> - £${index.price_sale}</p>
                    </div>
                </div>
            </div> 
            `;
        });
        
        var carts = document.querySelectorAll(".btn-add");
    
    
        for (let i = 0; i < carts.length; i++) {
            carts[i].addEventListener("click", () => {
                cartNumbers(arr[i]);
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
            // console.log('Mycart' , cartItem);
            // cartItem = {
            //     [product.name] : product
            // }
            
            // console.log("my cart", cartItem);
            localStorage.setItem("product", JSON.stringify(cartItem));
        }
    
        onLoadCartNumbers();
};

window.onload = () => {
    getAllProduct()
    // document.querySelector('#formData').addEventListener('submit', addSinhVien)
}

// products.forEach((index, item) => {
//     document.querySelector("#listProduct").innerHTML += `
//         <div class="col-md-4">
//             <div class="card border-0 w-100" style="width: 18rem;">
//                 <div class="img-cart">
//                         <img src="../public/images/${index.image}" class="card-img-top" alt="...">
//                     <button class="btn-add" id="btnAddCart">ADD TO CART</button>
//                 </div>
//                 <div class="sale">
//                     <p>SALE</p>
//                 </div>
//                 <div class="card-body pl-0 pr-0">
//                     <h5 class="card-title">${index.name}</h5>
//                     <p class="price-cart"><span>£${index.price}</span> - £${index.price_sale}</p>
//                 </div>
//             </div>
//         </div>
//     `;
// });



// var url = 'http://localhost:3000/product'

// fetch(url, {
//     method: "GET"
// }).then((response) => {
//     return response.json()
// }).then((data) => {
//     data.forEach((index, item) => {
//         document.querySelector('#listProduct').innerHTML += `
//         <div class="col-md-4">
//             <div class="card border-0 w-100" style="width: 18rem;">
//                 <div class="img-cart">
//                         <img src="../public/images/${index.img}" class="card-img-top" alt="...">

//                     <button class="btn-add" id="btnAddCart">ADD TO CART</button>
//                 </div>
//                 <div class="sale">
//                     <p>SALE</p>
//                 </div>
//                 <div class="card-body pl-0 pr-0">
//                     <h5 class="card-title">${index.name}</h5>
//                     <p class="price-cart"><span>£${index.price}</span> - £${index.price_sale}</p>
//                 </div>
//             </div>
//         </div>
//         `
//     });
//     var addCart = document.querySelector('#btnAddCart')

//     for (let i = 0; i < addCart.length; i++) {
//         addCart[i].addEventListener('click', () => {
//             cartNumbers(data[i])
//         })
//     }
//     function cartNumbers(product){
//         console.log(product);
//     }
// })
