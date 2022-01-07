

/* 헤더,푸터 불러오기 */

$(document).ready(function () {
    $('#header').load("header.html")
    $('#footer').load("footer.html")
});





/* 탑버튼 */

$('html,body').scrollTop(0);

$(window).scroll(function () {

    var scroll = $(this).scrollTop();

    if (scroll >= 300) {

        $('.go_top').fadeIn();

    } else {

        $('.go_top').fadeOut();

    }

});



$('.go_top').click(function (e) {

    e.preventDefault();

    $('html,body').stop().animate({

        scrollTop: 0

    }, 500)

});



/* 스크롤에 따른 헤더 속성 */

$(function () {
    var lastScroll = 0;
    $(window).scroll(function (event) {
        var scroll = $(this).scrollTop();
        if (scroll > 200) {
            //이벤트를 적용시킬 스크롤 높이
            $(".header").addClass("active");
        } else {
            $(".header").removeClass("active");
        }
        lastScroll = scroll;
    });

});