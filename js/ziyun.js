/*!
 * Ziyun Javascript (http://www.ziyuntech.com)
 * Copyright 2016 Ziyun Technology, Inc.
 * Licensed under the MIT license
 */
// jQuery to collapse the navbar on scroll
$(window).scroll(function() {
    if ($(".navbar").offset().top > 50) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");
        $(".scroll-top").fadeIn('1000', "easeInOutExpo");
    } else {
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
        $(".scroll-top").fadeOut('1000', "easeInOutExpo");
    }
});

// Image Carousel
$(function() {
    $('.carousel').carousel({
        interval: 5000 //changes the speed
    });
});

// Panel Carousel
$(function() {

    var owl = $(".panel-carousel");

    owl.owlCarousel({
        items: 3, //5 items above 1000px browser width
        itemsDesktop: [1024, 3], //4 items between 1000px and 901px
        itemsDesktopSmall: [900, 2], // betweem 900px and 601px
        itemsTablet: [600, 2], //2 items between 600 and 480
        itemsMobile: [479, 1], //1 item between 480 and 0
        pagination: true, // Show pagination
        navigation: false // Show navigation
    });


    // Custom Navigation Events
    $(".btn-next").on('click', function() {
        owl.trigger('owl.next');
    })
    $(".btn-prev").on('click', function() {
        owl.trigger('owl.prev');
    })

});

// jQuery mobile
$(function() {
    //Enable swiping...
    $("#myCarousel").swiperight(function() {
        $(this).carousel('prev');
    });

    $("#myCarousel").swipeleft(function() {
        $(this).carousel('next');
    });
});

