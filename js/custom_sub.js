$(document).ready(function () {
    $('.title_box2').addClass('on')

});


/* 스크롤에 따른 헤더 속성 */

$(function () {
    var lastScroll = 0;


    $(window).scroll(function (event) {
        var scroll = $(this).scrollTop();
        if (scroll > 200) {
            //이벤트를 적용시킬 스크롤 높이
            $("#sub_wrap .header").addClass("active");
        } else {
            $("#sub_wrap .header").removeClass("active");
        }

        if (scroll >= 300) {
            $('.go_top').addClass('on');
        } else {
            $('.go_top').removeClass('on');
        }


        if (scroll > 1000) {
            //이벤트를 적용시킬 스크롤 높이
            $(".md_top").addClass("active");

        } else {
            $(".md_top").removeClass("active");
        }
        lastScroll = scroll;

    });

});

/* 와우 애니메이션 */

var wow = new WOW({

    boxClass: 'wow', // animated element css class (default is wow)

    animateClass: 'animated', // animation css class (default is animated)

    offset: 0, // distance to the element when triggering the animation (default is 0)

    mobile: true, // trigger animations on mobile devices (default is true)

    live: true, // act on asynchronously loaded content (default is true)

    callback: function (box) {

        // the callback is fired every time an animation is started

        // the argument that is passed in is the DOM node being animated

    },

    scrollContainer: null, // optional scroll container selector, otherwise use window,

    resetAnimation: true, // reset animation on end (default is true)

});

wow.init();


/* 탑버튼 */

$('.go_top').click(function (e) {
    e.preventDefault();
    $('html,body').stop().animate({
        scrollTop: 0
    }, 500)
});

/* 탭메뉴 */

$(document).ready(function () {
    $('ul.tabs li').click(function () {
        var tab_id = $(this).attr('data-tab');

        $('ul.tabs li').removeClass('current');
        $('.tab-content').removeClass('current');

        $(this).addClass('current')
        $('#' + tab_id).addClass('current');
    })
})








