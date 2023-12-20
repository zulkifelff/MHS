jQuery(document).ready(function () {
    debugger;
    var navbar = jQuery(".navbar");

    jQuery(window).scroll(function () {
        if (jQuery(window).scrollTop() > 50) {
            navbar.addClass("sticky");
        } else {
            navbar.removeClass("sticky");
        }
    });
});
