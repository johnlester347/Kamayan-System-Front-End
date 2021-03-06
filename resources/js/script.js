$(document).ready(function () {

    /* Sticky nav yung pag iniscroll mo pababa is may lalabas na white na nav*/
    $('.js--section-features').waypoint(function (direction) {
        if (direction == "down") {
            $('nav').addClass('sticky');
        } else {
            $('nav').removeClass('sticky');
        }
    }, {
        offset: '60px'
    });


    /* Scroll on buttons Im hungery and Show more */
    $('.js--scroll-to-plans').click(function () {
        $('html, body').animate({ scrollTop: $('.js--section-plans').offset().top }, 1000);
    });
    $('.js--scroll-to-start').click(function () {
        $('html, body').animate({ scrollTop: $('.js--section-features').offset().top }, 1000);
    });


    /* Navigation Scrolls kapag kinlick mo yung nav links mag auto scroll sya sa links na yun */
    $('a[href*="#"]')
        // Remove links that don't actually link to anything
        .not('[href="#"]')
        .not('[href="#0"]')
        .click(function (event) {
            // On-page links
            if (
                location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') &&
                location.hostname == this.hostname
            ) {
                // Figure out element to scroll to
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                // Does a scroll target exist?
                if (target.length) {
                    // Only prevent default if animation is actually gonna happen
                    event.preventDefault();
                    $('html, body').animate({
                        scrollTop: target.offset().top
                    }, 1000, function () {
                        // Callback after animation
                        // Must change focus!
                        var $target = $(target);
                        $target.focus();
                        if ($target.is(":focus")) { // Checking if the target was focused
                            return false;
                        } else {
                            $target.attr('tabindex', '-1'); // Adding tabindex for elements not focusable
                            $target.focus(); // Set focus again
                        };
                    });
                }
            }
        });

    /* Waypoint and animate.css eto yung animation ng mga pictures and text */
    $('.js--wp-1').waypoint(function (direction) {
        $('.js--wp-1').addClass('animate__animated animate__fadeIn');
    }, {
        offset: '50%', // mag aanimate sya pag scroll mo sa kalahati ng page 
    });

    $('.js--wp-2').waypoint(function (direction) {
        $('.js--wp-2').addClass('animate__animated animate__fadeInUp');
        // mag aanimate sya pag scroll mo sa kalahati ng page 
    }, {
        offset: '50%', // mag aanimate sya pag scroll mo sa kalahati ng page 
    });

    $('.js--wp-3').waypoint(function (direction) {
        $('.js--wp-3').addClass('animate__animated animate__fadeIn');
    }, {
        offset: '50%', // mag aanimate sya pag scroll mo sa kalahati ng page 
    });

    $('.js--wp-4').waypoint(function (direction) {
        $('.js--wp-4').addClass('animate__animated animate__pulse');
    }, {
        offset: '50%', // mag aanimate sya pag scroll mo sa kalahati ng page 
    });

    $('.js--wp-5').waypoint(function (direction) {
        $('.js--wp-5').addClass('animate__animated animate__fadeInLeft');
    }, {
        offset: '90%', // mag aanimate sya pag scroll mo sa kalahati ng page 
    });

    /* Eto yung humburger button */
    $('.js--nav-icon').click(function () {

        var nav = $('.js--main-nav');


        nav.slideToggle(200);


    });

});