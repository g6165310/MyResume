'use strict';

$(document).ready(function (e) {
    $('.section-slider').slick({
        dots: true,
        infinite: true,
        arrows: false
    });

    $('.showmenu').on('click', function (e) {
        e.preventDefault();
        $('.menu').toggleClass('menu-show');
    });
    $('.scroll-top').click(function () {
        $('html, body').animate({
            scrollTop: 0
        }, 1000);
    });
    $('.nav li a').click(function () {
        $('.nav a').removeClass('nav-active');
        var target = $(this).attr('href');
        $(this).addClass('nav-active');
        if ($(target).hasClass('fadeIn')) {
            var targetPos = $(target).offset().top + 100;
        } else {
            var targetPos = $(target).offset().top;
        }
        console.log(targetPos);
        $('html, body').animate({
            scrollTop: targetPos - 150
        }, 800);
        $('.menu').removeClass('menu-show');
    });
    $('.event-img').hover(function () {
        $(this).siblings().animate({
            opacity: 0.8,
            bottom: 0
        }, 500);
    }, function () {
        $(this).siblings().animate({
            opacity: 0
        }, 500);
    });

    $(window).scroll(function () {
        var scrollPos = $(window).scrollTop();
        var windowHeight = $(window).height();
        if (scrollPos >= 300) {
            $('.scroll-top').show(500);
        } else {
            $('.scroll-top').hide(500);
        }
        $('.animated').each(function () {
            var thisPos = $(this).position().top;
            if (windowHeight + scrollPos >= thisPos) {
                $(this).addClass('fadeIn');
            }
        });
        console.log(scrollPos);
        if (scrollPos < 488) {
            $('.nav a').removeClass('nav-active');
            $('.menu .about a').addClass('nav-active');
        }
        if (scrollPos >= 488) {
            $('.nav a').removeClass('nav-active');
            $('.menu .skill a').addClass('nav-active');
        }
        if (scrollPos >= 1064) {
            $('.nav a').removeClass('nav-active');
            $('.menu .experience a').addClass('nav-active');
        }
        if (scrollPos >= 2011) {
            $('.nav a').removeClass('nav-active');
            $('.menu .event a').addClass('nav-active');
        }
        if (scrollPos >= 2552) {
            $('.nav a').removeClass('nav-active');
            $('.menu .portfolio a').addClass('nav-active');
        }
    });
});
//# sourceMappingURL=all.js.map
