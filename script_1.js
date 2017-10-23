//Scroll to feature for navigation
$("#abouttab").click(function() {

    $('html, body').animate({
        scrollTop: $(".about_me").offset().top
    }, 800);
});

$("#portfotab").click(function() {

    $('html, body').animate({
        scrollTop: $(".portfolio").offset().top
    }, 800);
});

$("#reltab").click(function() {

    $('html, body').animate({
        scrollTop: $(".relCourse").offset().top
    }, 800);
});


$("#home").click(function() {

    $('html, body').animate({
        scrollTop: $(".pagetop").offset().top
    }, 800);
});