$(window).scroll(function () {
    // jQuery to collapse the navbar on scroll
    if ($(".navbar").offset().top > 50) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");
    } else {
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
    }
    // jQuery to animate atom SVG
    var s = ($(window).scrollTop() / (($("#intro").height() + $("#about").height()) - $(window).height()));
    var r1 = 40+106*s, r2=160-100*s;
    $("#a1").attr("transform","rotate("+r1+")");
    $("#a2").attr("transform","rotate("+r2+")");
});

// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function () {
    $('.page-scroll a').bind('click', function (event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1000, 'easeInOutExpo');
        event.preventDefault();
    });
});

$(document).ready(function() {
$('a.download-window').click(function() {
    var a = document.createElement("a");
    a.target='_blank';
    a.href = "http://www.google.com/";
    var evt = document.createEvent("MouseEvents");
    //the tenth parameter of initMouseEvent sets ctrl key
    evt.initMouseEvent("click", true, true, window, 0, 0, 0, 0, 0,
                                true, false, false, true, 0, null);
    a.dispatchEvent(evt);
    $("body").css("overflow", "hidden");
            //Getting the variable's value from a link 
    var loginBox = $(this).attr('href');

    //Fade in the Popup
    $(loginBox).fadeIn(500);
    
    // Add the mask to body
    $('body').append('<div id="mask"></div>');
    $('#mask').fadeIn(300);
    
    return false;
});

// When clicking on the button close or the mask layer the popup closed
$('a.close, #mask').on('click', function() { 
  $('#mask , .download-popup').fadeOut(300 , function() {
    $('#mask').remove();  
    $("body").css("overflow", "auto");
}); 
return false;
});
});