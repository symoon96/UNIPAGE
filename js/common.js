let windowWidth = $(window).innerWidth();

$(document).ready(function(){
    gnb();
})

$(window).resize(function(){
    gnb();
})

function gnb(){
    windowWidth = $(window).innerWidth();

    if(windowWidth > 1480) {
        $('.gnb .depth01 > ul > li').hover(function(){
            if(!$('.gnb').hasClass('active')){
                $(this).addClass('hover')
            }
        }, function(){
            $(this).removeClass('hover')
        })
        

        $('.btn-menu').click(function(){
            if(!$(this).hasClass('active')){
                $(this).addClass('active');
    
                $('.gnb').addClass('active');

                setTimeout(() => {
                    $('.gnb.active .depth01 > ul > li > .depth02').css('opacity', '1')
                    $('.gnb .bg-area').css('opacity', '1')
                }, 100);
            } else {
                $('.gnb.active .depth01 > ul > li > .depth02').css('opacity', '0');
                $('.gnb .bg-area').css('opacity', '0');

                $(this).removeClass('active');
                $('.gnb').removeClass('active');
            }
        })
    } else {
        $('.btn-menu').click(function(){
            if(!$(this).hasClass('active')){
                $(this).addClass('active');
    
                $('.gnb').addClass('active');
            } else {
                $(this).removeClass('active');
                $('.gnb').removeClass('active');
            }
        })
    }
}