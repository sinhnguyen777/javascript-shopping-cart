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


