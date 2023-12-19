let windowWidth = $(window).innerWidth();

$(document).ready(function(){
    gnb();
})

function gnb(){
    windowWidth = $(window).innerWidth();

    if(windowWidth > 1440) {
        $('.gnb .depth01 > ul > li').hover(function(){
            $(this).addClass('hover')
        }, function(){
            $(this).removeClass('hover')
        })
    }
}