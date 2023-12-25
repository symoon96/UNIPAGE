$(document).ready(function(){
    accList();
    tab();
    dropdown();
    $('.service .status .list-wrap.v2 .list-body').mCustomScrollbar();

    var serviceSwiper = new Swiper(".service-swiper .swiper", {
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        loop: true,
    });
})

// 아코디언탭
function accList(){
    $('.acc-wrap [data-click]').click(function(){
        $(this).closest('.acc-list').toggleClass('on');
        $(this).closest('.acc-list').children('.acc-cont').slideToggle(300);
        $(this).closest('.acc-list').siblings().removeClass('on');
        $(this).closest('.acc-list').siblings().children('.acc-cont').slideUp(300);
    });
}

// 탭
function tab(){
    $('.tab-wrap').each(function(){
        let thisUse = $(this).data('use'),
            thisNo = $(this).find('.tab-btn.on').index();

        if(thisUse !== false) {
            $(this).children('.tab-cont-wrap').children('.tab-cont').hide()
            $(this).children('.tab-cont-wrap').children('.tab-cont').eq(thisNo).show();
            
            $(this).find('.tab-btn').click(function(){
                thisNo = $(this).index();

                $(this).siblings('.tab-btn').removeClass('on');
                $(this).addClass('on');

                $(this).closest('.tab-wrap').children('.tab-cont-wrap').children('.tab-cont').hide()
                $(this).closest('.tab-wrap').children('.tab-cont-wrap').children('.tab-cont').eq(thisNo).show();
            })

            if($('[data-tab]').length > 0){
                $('[data-tab]').each(function(){
    
                    $(this).click(function(){
                        thisTabNo = $(this).data('tab') - 1;

                        $(this).closest('.tab-wrap').find('.tab-cont').hide()
                        $(this).closest('.tab-wrap').find('.tab-cont').eq(thisTabNo).show();
        
                        $(this).closest('.tab-wrap').find('.tab-btn').removeClass('on');
                        $(this).closest('.tab-wrap').find('.tab-btn').eq(thisTabNo).addClass('on');
                    })
                })
            }
        }
    });
}

/* 드랍다운 */
function dropdown(){
    $('.dropdown .select').click(function(){

        if(!$(this).closest('.dropdown').hasClass('on')){
            $(this).closest('.dropdown').addClass('on');
            setTimeout(() => {
                $(this).siblings('ul').css('opacity', '1')
            }, 100);
        } else {
            $(this).closest('.dropdown').removeClass('on');
            setTimeout(() => {
                $(this).siblings('ul').css('opacity', '0')
            }, 100);
        }
    })
}