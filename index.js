$(document).ready(function() {
    $('.fadeonload').each( function(i){
            $(this).animate({'opacity':'1'},1200);
    });
});

$(document).ready(function() {
    var cards = document.querySelectorAll('.card');
    cards.forEach((card)=>{
        card.classList.add('fadein-scroll');
    })
});

$(document).ready(function() {
    $(window).scroll(function () {
        $('.fadein-scroll').each(function (i) {
            var bottom_of_element = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            if ((bottom_of_window + 450) > bottom_of_element) {
                $(this).animate({'opacity': '1','bottom': '0'}, 1000);
            }
        });
    });
});

