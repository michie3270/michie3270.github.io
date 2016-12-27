//Scroll to feature for navigation
$("#abouttab").click(function() {

    $('html, body').animate({
        scrollTop: $(".about_me").offset().top
    }, 2000);
});

$("#portfotab").click(function() {

    $('html, body').animate({
        scrollTop: $(".portfolio").offset().top
    }, 2000);
});

$("#reltab").click(function() {

    $('html, body').animate({
        scrollTop: $(".relCourse").offset().top
    }, 2000);
});


$("#home").click(function() {

    $('html, body').animate({
        scrollTop: $(".pagetop").offset().top
    }, 2000);
});