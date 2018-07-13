'use strict';

$(document).ready(function (e) {
    $('.scroll-top').click(function () {
        $('html, body').animate({
            scrollTop: 0
        }, 1000);
    });
    $('.nav a').click(function () {
        var target = $(this).attr('href');
        var targetPos = $(target).offset().top;
        $('html, body').animate({
            scrollTop: targetPos - 50
        }, 800);
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
    var flag = 1;
    //btn-nex
    $('.nex').click(function () {
        if (flag == 0) {
            $('#slide1').css("z-index", 999);
            $('#slide2').css("z-index", 9);
            $('#slide3').css("z-index", 9);
            $('#slide4').css("z-index", 9);
            $('#slide1').css("transform", 'translateX(0px) scale(1.5)');
            $('#slide2').css("transform", 'translateX(-300px) scale(1)');
            $('#slide3').css("transform", 'translateX(300px)');
            $('#slide4').css("transform", 'translateX(0px)');
            flag = 1;
        } else if (flag == 1) {
            $('#slide3').css("z-index", 999);
            $('#slide4').css("z-index", 9);
            $('#slide2').css("z-index", 9);
            $('#slide1').css("z-index", 9);
            $('#slide3').css("transform", 'translateX(0px) scale(1.5)');
            $('#slide4').css("transform", 'translateX(300px)');
            $('#slide1').css("transform", 'translateX(-300px) scale(1)');
            $('#slide2').css("transform", 'translateX(0px)');
            flag = 3;
        } else if (flag == 3) {
            $('#slide4').css("z-index", 999);
            $('#slide3').css("z-index", 9);
            $('#slide2').css("z-index", 9);
            $('#slide1').css("z-index", 9);
            $('#slide4').css("transform", 'translateX(0px) scale(1.5)');
            $('#slide3').css("transform", 'translateX(-300px) scale(1)');
            $('#slide2').css("transform", 'translateX(300px)');
            $('#slide1').css("transform", 'translateX(0px)');
            flag = 2;
        } else if (flag == 2) {
            $('#slide2').css("z-index", 999);
            $('#slide4').css("z-index", 9);
            $('#slide3').css("z-index", 9);
            $('#slide1').css("z-index", 9);
            $('#slide2').css("transform", 'translateX(0px) scale(1.5)');
            $('#slide4').css("transform", 'translateX(-300px) scale(1)');
            $('#slide3').css("transform", 'translateX(0px)');
            $('#slide1').css("transform", 'translateX(300px)');
            flag = 0;
        }
    });
    //pre-btn
    $('.pre').click(function () {
        if (flag == 3) {
            $('#slide1').css("z-index", 999);
            $('#slide2').css("z-index", 9);
            $('#slide3').css("z-index", 9);
            $('#slide4').css("z-index", 9);
            $('#slide1').css("transform", 'translateX(0px) scale(1.5)');
            $('#slide2').css("transform", 'translateX(-300px)');
            $('#slide3').css("transform", 'translateX(300px) scale(1)');
            $('#slide4').css("transform", 'translateX(0px)');
            flag = 1;
        } else if (flag == 1) {
            $('#slide2').css("z-index", 999);
            $('#slide4').css("z-index", 9);
            $('#slide3').css("z-index", 9);
            $('#slide1').css("z-index", 9);
            $('#slide2').css("transform", 'translateX(0px) scale(1.5)');
            $('#slide4').css("transform", 'translateX(-300px)');
            $('#slide3').css("transform", 'translateX(0px)');
            $('#slide1').css("transform", 'translateX(300px) scale(1)');
            flag = 0;
        } else if (flag == 0) {
            $('#slide4').css("z-index", 999);
            $('#slide3').css("z-index", 9);
            $('#slide1').css("z-index", 9);
            $('#slide2').css("z-index", 9);
            $('#slide4').css("transform", 'translateX(0px) scale(1.5)');
            $('#slide3').css("transform", 'translateX(-300px)');
            $('#slide1').css("transform", 'translateX(0px)');
            $('#slide2').css("transform", 'translateX(300px) scale(1)');
            flag = 2;
        } else if (flag == 2) {
            $('#slide3').css("z-index", 999);
            $('#slide1').css("z-index", 9);
            $('#slide2').css("z-index", 9);
            $('#slide4').css("z-index", 9);
            $('#slide3').css("transform", 'translateX(0px) scale(1.5)');
            $('#slide1').css("transform", 'translateX(-300px)');
            $('#slide2').css("transform", 'translateX(0px)');
            $('#slide4').css("transform", 'translateX(300px) scale(1)');
            flag = 3;
        }
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
    });

    var ctx = document.getElementById('myChart').getContext('2d');
    var chart = new Chart(ctx, {
        type: 'radar',
        data: {
            labels: ["HTML", "CSS/SCSS", "JavaScript", "Python", "Java", "PHP"],
            datasets: [{
                label: "skill",
                backgroundColor: 'rgb(4, 135, 204,0.1)',
                borderColor: 'rgb(4, 135, 204)',
                data: [75, 70, 65, 45, 60, 45]
            }]
        },
        options: {
            scale: {
                ticks: {
                    beginAtZero: true,
                    max: 100
                },
                pointLabels: {
                    fontSize: 20
                }
            }
        }
    });
});
//# sourceMappingURL=all.js.map
