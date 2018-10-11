$(document).ready(function(e){
    $('.section-slider').slick({
        dots: true,
        infinite: true,
        arrows:false,
      });

    $('.showmenu').on('click',function(e){
        e.preventDefault();
        $('.menu').toggleClass('menu-show');
    })
    $('.scroll-top').click(function(){
        $('html, body').animate({
            scrollTop: 0
        },1000)
    })
    $('.nav li a').click(function(){
        $('.nav a').removeClass('nav-active');
        var target=$(this).attr('href');   
        $(this).addClass('nav-active');
        if($(target).hasClass('fadeIn')){
            var targetPos = $(target).offset().top+100;
        }else{
            var targetPos = $(target).offset().top;
        }
        $('html, body').animate({
            scrollTop: targetPos-150
        },800)
        $('.menu').removeClass('menu-show');
    })
    $('.event-img').hover(function(){
        $(this).siblings().animate({
            opacity:0.8,
            bottom: 0
        },500)
    },function(){
    $(this).siblings().animate({
        opacity:0
        },500)
    })

    $(window).scroll(function(){
        var scrollPos = $(window).scrollTop();
        var windowHeight = $(window).height();
        if(scrollPos>=300){
            $('.scroll-top').show(500);
        }else{
            $('.scroll-top').hide(500);
        }
        $('.animated').each(function(){
            var thisPos = $(this).position().top;
            if((windowHeight + scrollPos)>=thisPos){
                $(this).addClass('fadeIn')
            }
        })
        if(scrollPos<489){
            $('.nav a').removeClass('nav-active');
            $('.menu .about a').addClass('nav-active');
        }
        if(scrollPos>=489){
            $('.nav a').removeClass('nav-active');
            $('.menu .skill a').addClass('nav-active');
        } 
        if(scrollPos>=1065){
            $('.nav a').removeClass('nav-active');
            $('.menu .experience a').addClass('nav-active');
        }
        if(scrollPos>=2012){
            $('.nav a').removeClass('nav-active');
            $('.menu .event a').addClass('nav-active');
        }
        if(scrollPos>=2553){
            $('.nav a').removeClass('nav-active');
            $('.menu .portfolio a').addClass('nav-active');
        }
    })
    
    var ctx = document.getElementById('myChart').getContext('2d');
    var chart = new Chart(ctx, {
        type: 'radar',
        data: {
            labels: ["HTML", "CSS/SCSS", "JavaScript",'Vue',"Python","Java","PHP"],
            datasets: [{
                label: "skill",
                backgroundColor: 'rgb(4, 135, 204,0.1)',
                borderColor: 'rgb(4, 135, 204)',
                data: [75, 70,65,50,45,60,45],
            }]
        },
        options: {
            maintainAspectRatio: false,
            scale: {
                ticks: {
                    beginAtZero: true,
                    max: 100
                },
                pointLabels: {
                    fontSize: 15,
                }
            }
        }
    });
})