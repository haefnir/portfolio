function scrollBars(){
    var body= $('body')[0]
    return body.scrollHeight>window.innerHeight
}

$(document).ready(function() {
    $('.fadeonload').each(function(i){
            $(this).animate({'opacity':'1'},1200);
    });
});

if (!scrollBars()) {
    $('.fadein-scroll').each(function(i) {
        $(this).animate({'opacity': '1','bottom': '0'}, 1000);
    })
}

$(document).ready(function() {
    $(window).scroll(function() {
        $('.fadein-scroll').each(function(i) {
            var bottom_of_element = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            if ((bottom_of_window + 450) > bottom_of_element) {
                $(this).animate({'opacity': '1','bottom': '0'}, 1000);
            }
        });
    });
});

