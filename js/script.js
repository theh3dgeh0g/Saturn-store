$(document).ready(function() {
    $('#responsive').lightSlider({
        item:6,
        loop:false,
        slideMove:2,
        easing: 'cubic-bezier(0.25, 0, 0.25, 1)',
        speed:600,
        responsive : [
            {
                breakpoint:1450,
                settings: {
                    item:5,
                    slideMove:1,
                  }
            },
            {
                breakpoint:1200,
                settings: {
                    item:4,
                    slideMove:1,
                  }
            },
            {
                breakpoint:1000,
                settings: {
                    item:3,
                    slideMove:1,
                  }
            },
            {
                breakpoint:800,
                settings: {
                    item:2,
                    slideMove:1
                  }
            }
        ]
    });  
  });

  $('.owl-carousel').owlCarousel({
    items: 1,
    itemsDesktop: [1000, 4],
    itemsDesktopSmall: [900, 2],
    itemsTablet: [600, 1],
    itemsMobile: false,
    pagination: false,
    margin: 25,
    loop: true,
    autoplay:true,
    autoplayTimeout:4000,
    autoplayHoverPause:true
})
/*$('.cards').owlCarousel({
    loop:true,
    margin:35,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            nav:true
        },
        600:{
            items:3,
            nav:false
        },
        1000:{
            items:5,
            nav:true,
            loop:false
        }
    }
})*/