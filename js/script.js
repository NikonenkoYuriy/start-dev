$(document).ready(function () {

    $('.slick-slider').slick({
        dots: true,
        prevArrow: "<img class='prev slick-prev' src='img/prev.svg'>",
        nextArrow: "<img class='next slick-next' src='img/next.svg'>"
    });

    var elem, n;
    $(".title-block").on("click", function () {
        elem = $(this).parents(".accordion-item"),
            n = elem.find(".info"),
            elem.hasClass("active-block") ? (elem.removeClass("active-block"),
                n.slideUp()) : (elem.addClass("active-block"), n.stop(!0, !0).slideDown(),
                elem.siblings(".active-block").removeClass("active-block").children(
                    ".info").stop(!0, !0).slideUp())
    });

    var close = $('.close');

    close.on('click', function () {
        $(this).parent().parent().fadeOut(400);
    });

    var flag = true;
    
    $(document).mouseleave(function (e) {
        if(e.clientY < 3 && flag) {
           $(".prevent-leaving").fadeIn(200);  
            flag = false;
        }
       
    });

});