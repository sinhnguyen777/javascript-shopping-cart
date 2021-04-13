$(document).ready(function(){
    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        autoplay:true,
        autoplayTimeout:6000,
        autoplayHoverPause:true,
        nav:false,
        dots:false,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:3
            },
            1000:{
                items:1
            }
        }
    });
});



// var last_scroll = 0;

// $(document).scroll(function () { 
//     var present_scroll = $(this).scrollTop(),
//     top_menu = $("#menu_top"),


//     if (present_scroll > 100) {
//         top_menu.css({"position": "fixed"});
//     }
//     else{
//         top_menu.removeAttr("style");
//     }

//     last_scroll = present_scroll;
// });

                
// get.forEach((index, item) => {
//     if (product.id == index.id) {
//         product.quantity = index.quantity + 1

//     }
// })
// listCart = JSON.parse(localStorage.getItem('product'))



// =================
// var cartItem = localStorage.getItem("product");
// cartItem = JSON.parse(cartItem)

// if (cartItem != null) {
//     if (cartItem[product.name] == undefined) {
//         cartItem = {
//             ...cartItem,
//             [product.name]: product
//         }
//     }
//     cartItem[product.name].quantity +=1;
// } else {
//     product.quantity = 1
//     cartItem = {
//         [product.name]: product
//     }
// }
// localStorage.setItem("product", JSON.stringify(cartItem));