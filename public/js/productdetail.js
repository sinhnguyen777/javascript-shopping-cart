const url = "http://localhost:3000/products";

async function getAPI() {
    const response = await fetch(url)
    const res = await response.json();

    for (let i = 0; i < res.length; i++) {
      var full_url = document.URL
      var params = full_url.slice(-1)
      if (params == res[i].id) {
     let detailProducts = document.getElementById('detailProducts')
     detailProducts.innerHTML += `
       <div class="container">
           <div class="row pl-5 pr-5">
               <div class="col-md-6 pr-3">
                   <ul>
                       <li><img src="public/images/sp1.png" alt=""></li>
                       <li><img src="public/images/sp2.png" alt=""></li>
                       <li><img src="public/images/sp3.png" alt=""></li>
                       <li><img src="public/images/sp4.png" alt=""></li>
                   </ul>
                   <div class="img-card-detail">
                       <img src="public/images/${res[i].img}" alt="">
                   </div>
               </div>
               <div class="col-md-6 pl-3">
                   <h1>${res[i].name}</h1>
                   <p class="price-cart"><span style="text-decoration-line: line-through;">£${res[i].price}.00</span> - £${res[i].price_sale}.00</p>
                   <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.</p>
                   <form action="" class="pb-4">
                       <div class="quatily">
                           <input type="number" name="" id="" placeholder="1">
                           <a href="cart.html" class="btn btn-primary border-0">ADD TO CART</a>
                       </div>
                   </form>
                   <p class="m-0"><i class="far fa-bookmark"></i> CATEGORIES: BODY, MAKEUP, PERSONAL CARE, WELLNESS</p>
                   <p class="m-0"><i class="fas fa-tags"></i> TAGS: FREEDOM, LOVE, STORM</p>
               </div>
           </div>
       </div>
       `
      }
      
    }
    

    // res.forEach(item => {
    //   // console.log(item.id);
    //   var full_url = document.URL
    //   var params = full_url.slice(-1)
    //   if (params == item.id) {
    //     console.log();
    //   }
    // });
}

getAPI()




// const showProductsDetail = async (id) => {
//     const product = await getProductById(id)
//     console.log(product);
//     console.log(detailProducts);
//     // detailProducts.innerHTML = ''
//     // for (let index = 0; index < data.length; index++) {
//     //     const product = data[index];
//     //     console.log(product);
//     //     
        
//     // }
// }

