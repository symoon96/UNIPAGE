$(document).ready(function(){
    accList()
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