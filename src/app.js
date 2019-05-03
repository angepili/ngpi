var addClassOnScroll = function (h, el) {
    var stickyOffset = el.offset().top;
    jQuery(window).on('scroll', function () {
        var sticky = el,
            scroll = jQuery(window).scrollTop();
            console.log('scroll :'+scroll);
            console.log('stickyOffset :'+stickyOffset);
        if (scroll > stickyOffset) {
            el.addClass('fixed');
            jQuery('body').addClass('hasfixed');
        } else {
            el.removeClass('fixed');
            jQuery('body').removeClass('hasfixed');
        }
    });
}

var header = jQuery('header');
addClassOnScroll(header.height(),header)