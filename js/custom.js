/* 헤더,푸터 include */

$(document).ready(function () {
    $('#header').load("header.html")
    $('#footer').load("footer.html")
});


/* 슬릭 */

$('.slickBox').slick({
    infinite: true,
    slidesToShow: 1,
    dots: true,
    arrows: true,
    nextArrow: ('#aro1_next'), //arrow 클래스 지정
    prevArrow: ('#aro1_prev'),
    navigation: true,
    autoplay: false,
    autoplaySpeed: 1000,
});

/* $('.slickBox2').slick({
    infinite: true,
        slidesToShow: 4,
    dots: false,
    arrows: true,
    nextArrow: ('#aro2_next'), //arrow 클래스 지정
    prevArrow: ('#aro2_prev'),
    navigation: true,
    autoplay: false,
    autoplaySpeed: 1000,
}); */

/* 패밀리사이트 토글메뉴 */

$('.family_site').click(function () {
    $('.family_toggle').slideToggle('on')
})





/* 풀페이지 */
new fullpage('#full-page', {

        licenseKey: '',
        scrollingSpeed: 500,
        scrollBar: false,
        controlArrows: true,
        navigation: false,
        easingcss3: 'cubic-bezier(0.69, 0.2, 0.49, 0.88)',
        showActiveTooltip: true,
        anchors: ['page1', 'page2', 'page3', 'page4', 'page5'],
        responsiveWidth: 1280,

        onLeave: function (origin, destination, direction) {
            var leavingSection = this;

            if (destination.index == 1) {
                $('.s2mainBox').addClass('on')
            }

            if (destination.index >= 1) {
                $('#moveTo').addClass('on')
                $('.header').addClass('on')
            } else {
                $('#moveTo').removeClass('on')
                $('.header').removeClass('on')
            }

            if (destination.index == 2) {
                $('.s3mainBox').addClass('on')

            }
            if (destination.index == 3) {
                $('.s4mainBox').addClass('on')
                $('.s5mainBox').addClass('on')

            }
            if (destination.index == 4) {
                $('.s5mainBox').addClass('on')
            }

            if (destination.index == 5) {
                $('.footer').addClass('on')
                $('.left_nav').addClass('off')
                $('#fp-nav').addClass('off')
            } else {
                if (destination.index < 5) {
                    $('.footer').removeClass('on')
                    $('.left_nav').removeClass('off')
                    $('#fp-nav').removeClass('off')
                }
            }
        }
    },
);
$(document).on('click', '#moveTo', function () {
    fullpage_api.moveTo('page1', 1);
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



