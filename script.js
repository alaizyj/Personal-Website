$(document).ready(function() {
    $(window).scroll(function() {
        if (this.scrollY > 60) {
            $('.navbar').addClass('active');
        } else {
            $('.navbar').removeClass('active');
        }

        if (this.scrollY > 500) {
            $('.scroll-up-btn').addClass('show');
        } else {
            $('.scroll-up-btn').removeClass('show');
        }
    });

    $('.scroll-up-btn').click(function() {
        $('html').animate({ scrollTop: 0 });
        $('html').css('scrollBehavior', 'auto');
    });

    $('.hamburger-menu-btn').click(function() {
        $('.navbar .mobile-menu').toggleClass('active');
        $('.menu-btn i').toggleClass('active');
    });

    $('.m-menu-link').click(function() {
        $('.navbar .mobile-menu').toggleClass('active');
        $('.menu-btn i').toggleClass('active');
    });
});