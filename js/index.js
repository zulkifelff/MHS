jQuery('.owl-carousel-services').owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 2
        },
        1000: {
            items: 3
        }
    }
});

jQuery('.owl-carousel-entities').owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 2
        },
        1000: {
            items: 3
        }
    }
});

// Navigation icons
jQuery(".owl-prev").click(function () {
    jQuery(".owl-carousel").trigger("prev.owl.carousel");
});
jQuery(".owl-next").click(function () {
    jQuery(".owl-carousel").trigger("next.owl.carousel");
});
