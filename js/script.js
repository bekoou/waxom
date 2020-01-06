$(".mobile-btn") .on("click", function () {
    $(".mobile-btn") .toggleClass("show")
    $(".menu") .toggleClass("show-menu")
})
$(".menu-list-item a") .on("click", function () {
    $(".menu") .removeClass("show-menu")
    $(".mobile-btn") .removeClass("show")
})

$(document).ready(function() {
    $(".slider").owlCarousel({
        items: 1,
        nav: true,
        dots: true,
        loop: true,
        navText: ["<img src='./img/left.png'>", "<img src='./img/right.png'>"],
        animateOut: "fadeOut",
        animateIn: "fadeIn",
        // autoplay: true,
        // autoplayTimeout: 2000,
        // autoplayHoverPause: true
    });
});

$(document).ready(function(){
    $(".posts-slider").owlCarousel({
        items: 3,

        loop:true,
        nav:true,
        navText: ["<img src='./img/left2.png'>", "<img src='./img/right2.png'>"],
        mouseDrag: true,
        responsiveClass: true,
        responsive: {
            0:{
                items: 1
            },
            768:{
                items: 2
            },
            992:{
                items: 3
            }
        },
    });
});

