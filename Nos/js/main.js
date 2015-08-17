$(document).ready(function() {

    var menuToggle = $('#js-mobile-menu').unbind();
    $('#js-navigation-menu').removeClass("show");

    var nav = new TweenLite.to('nav', 0.3, {opacity: '1', left: '0', ease: Linear.easeInOut});
    nav.pause();

    menuToggle.on('click', function(e) {
        e.preventDefault();
        $(this).toggleClass('open');
        if($(this).hasClass('open')) {
            nav.restart();
        }
        else {
            nav.reverse();
        }

    });

    var header = $('header');

    var headerTween = new TweenLite.to('header', 0.3, {top: '0', ease: Linear.easeInOut});
    headerTween.pause();

    var waypoint = new Waypoint({
        element: $('.image-box-full.image-box-tall h1'),
        handler: function(direction) {
            if((direction == 'up') && ($('nav').height() == 164)) {
                header.removeClass('stuck');
                headerTween.reverse();
                if($('.search-box.secondary').hasClass('open')) {
                    $('.search-box.secondary').removeClass('open');
                    $('.search-box.main').addClass('open');
                }
            }
            else if((direction == 'down') && ($('nav').height() == 164)) {
                header.addClass('stuck');
                headerTween.restart();
                if($('.search-box.main').hasClass('open')) {
                    $('.search-box.main').removeClass('open');
                    $('.search-box.secondary').addClass('open');
                }
            }
        }
    })

});

$('.search a').on('click', function(e) {
    $(this).toggleClass('open');
    if($('header').hasClass('stuck')) {
        e.preventDefault();
        $('.search-box.secondary').toggleClass('open');
    }
    else {
        $('.search-box.main').toggleClass('open');
    }
});