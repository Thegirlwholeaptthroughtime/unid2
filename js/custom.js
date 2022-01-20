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

$('.slickBox2').slick({
    infinite: true,
    slidesToShow: 4,
    dots: false,
    arrows: true,
    nextArrow: ('#aro1_next'), //arrow 클래스 지정
    prevArrow: ('#aro1_prev'),
    navigation: true,
    autoplay: false,
    autoplaySpeed: 1000,
});


/* 패밀리사이트 토글메뉴 */

$('.family_site').click(function () {
    $('.family_toggle').slideToggle('on')
})

