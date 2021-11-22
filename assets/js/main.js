
$(document).ready(function () {
    $('#toggle').click(function () {
        $('menu').slideToggle();
    });
    
    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        responsive:{
            0:{
                items:2
            },
            768:{
                items:3
            },
            992:{
                items:4
            }
        }
    })
})