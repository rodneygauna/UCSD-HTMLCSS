/* This is for WOWjs and AnimationCSS to work properly */
new WOW().init();

/* ----- Sticky Navbar ------ */
$(document).ready(function () {

    $(window).scroll(function () {
        //if you hard code, then use console
        //.log to determine when you want the 
        //nav bar to stick.  
        console.log($(window).scrollTop())
        if ($(window).scrollTop() > 152) {
            $('#nav_bar').addClass('navbar-fixed');
        }
        if ($(window).scrollTop() < 153) {
            $('#nav_bar').removeClass('navbar-fixed');
        }
    });
});
