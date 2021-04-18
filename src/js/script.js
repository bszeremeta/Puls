$(document).ready(function() {
    $('.carrousel__inner').slick({
        infinite: true,
        speed: 1000,
        autoplay: true,
        autoplaySpeed: 2500,
        prevArrow: '<button type="button" class="slick-prev"><img src="icons/left.svg"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="icons/right.svg"></button>',
        responsive: [{
            breakpoint: 992,
            settings: {
                infinite: true,
                dots: true,
                arrows: false
            }
        }]


    });
});