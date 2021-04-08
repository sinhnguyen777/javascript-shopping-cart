products = [
    {
      id: 1,
      name: "Ellie Cosmetics Brush",
      image: "sp1.png",
      price: 19,
      price_sale: 3,
      id_catalog: 1
    },
    {
      id: 2,
      name: "Cosmetic Branding Cream",
      image: "sp2.png",
      price: 30,
      price_sale: 35,
      id_catalog: 1
    },
    {
      id: 3,
      name: "Liquid Container Green",
      image: "sp3.png",
      price: 12,
      price_sale: 18,
      id_catalog: 2
    },
    {
      id: 4,
      name: "Ellie Bath Salt",
      image: "sp4.png",
      price: 12,
      price_sale: 15,
      id_catalog: 2
    },
    {
      id: 5,
      name: "Ellie Deodorant Spray",
      image: "sp5.png",
      price: 3,
      price_sale: 5,
      id_catalog: 2
    },
    {
      id: 6,
      name: "Ellie Cream Soap",
      image: "sp6.png",
      price: 9,
      price_sale: 13,
      id_catalog: 2
    },
    {
      id: 7,
      name: "She Shampoo & Conditionier",
      image: "sp7.png",
      price: 35,
      price_sale: 39,
      id_catalog: 3
    },
    {
      id: 8,
      name: "Mockup Cosmetics Set",
      image: "sp8.png",
      price: 18,
      price_sale: 20,
      id_catalog: 3
      
    },
    {
      id: 9,
      name: "Ellie AZ Skin Care",
      image: "sp10.png",
      price: 15,
      price_sale: 0,
      id_catalog: 4
    },
    {
      id: 10,
      name: "Ellie Day & Night Cream",
      image: "sp13.png",
      price: 35,
      price_sale: 0,
      id_catalog: 4
    },
    {
      id: 11,
      name: "Ellie Hair Elixir",
      image: "sp9.png",
      price: 35,
      price_sale: 36,
      id_catalog: 4
    },
    {
      id: 12,
      name: "Ellie Lotion & Cream",
      image: "sp11.png",
      price: 9,
      price_sale: 0,
      id_catalog: 5
    },
    {
      id: 13,
      name: "Ellie Spa Gif9999",
      image: "sp12.png",
      price: 20,
      price_sale: 22,
      id_catalog: 5
    }
]
products.forEach((index, item) => {
    document.querySelector('#listProduct').innerHTML += `
        <div class="col-md-4">
            <div class="card border-0 w-100" style="width: 18rem;">
                <div class="img-cart">
                        <img src="../public/images/${index.image}" class="card-img-top" alt="...">
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
    `
});

var carts = document.querySelectorAll('.btn-add')



for (let i = 0; i < carts.length; i++) {
    carts[i].addEventListener('click', () => {
        cartNumbers(products[i])
    })
}

function onLoadCartNumbers() {
    var productNumbers = localStorage.getItem('cartNumbers')
    if (productNumbers) {
        document.querySelector('#itemCartSpan').textContent = productNumbers
    }
}

function cartNumbers(product){
    // console.log('product click', product);
    var productNumbers = localStorage.getItem('cartNumbers')

    productNumbers = parseInt(productNumbers)
    if (productNumbers) {
        localStorage.setItem('cartNumbers',productNumbers + 1)
        document.querySelector('#itemCartSpan').textContent = productNumbers + 1
    } else {
        localStorage.setItem('cartNumbers', 1)
        document.querySelector('#itemCartSpan').textContent = 1
    }
    setItem(product)
}

function setItem(product) {
    var cartItem = localStorage.getItem('product')


    console.log('my cart', cartItem);
    product.inCart = 1
    cartItem = {
        [product.name]: product
    }
    localStorage.setItem("product", JSON.stringify(cartItem));
}

onLoadCartNumbers()




























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

