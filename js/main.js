$(document).ready(function(){
    let mainVisual = new Swiper(".visual-swiper", {
        loop: true,
    });

    $('.btn-visual-prev').click(function(){
        mainVisual.slidePrev();
    })

    $('.btn-visual-next').click(function(){
        mainVisual.slideNext();
    })

    let recommendSwiper = new Swiper(".recommend-swiper", {
        slidesPerView: 4,
        spaceBetween: 45,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
    });

    $('.main .visual .swiper-wrapper .swiper-slide').each(function(){
        let category = $(this).data('category')
        let color = $(this).data('color')
        let btn = $(this).data('btn')
        let bg = $(this).data('bg')

        $(this).find('.category').css({
            'background-color': category
        });
        $(this).find('.title').css({
            'color': color
        });
        $(this).find('.btn').css({
            'border-color': btn,
            'background-color': 'transparent',
            'color': btn
        });
        $(this).find('.btn').hover(function(){
            $(this).css({
                'background-color': btn,
                'color': '#ffffff'
            });
        }, function(){
            $(this).css({
                'border-color': btn,
                'background-color': 'transparent',
                'color': btn
            });
        })
        $(this).css({
            'background-color': bg
        });
    })
})