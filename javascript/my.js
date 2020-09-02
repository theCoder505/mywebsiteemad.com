
(function ($) {
    $(document).ready(function () {


$("#example").typer({
    strings: [
        "MBSTU SCIENCE CLUB",
        "WHERE WE PRACTICE SCIENCE EVERYDAY!",
        
       
    ],
    typeSpeed: 250,
    backspaceSpeed: 20,
    backspaceDelay: 1000,
    repeatDelay: 2000,
    repeat: true,
    autoStart: true,
    startDelay: 100,
    useCursor: true,

});

    
$(".toTop").click(function () {
    $("html, body").animate({ "scrollTop": 0 }, 1000);
    return false;
});
$(window).scroll(function () {

    if ($(window).scrollTop() > 500) {
        $(".toTop").fadeIn(1000);
    }
    else {
        $(".toTop").fadeOut(1000);
    }
});




$(".chronicals").click(function () {

    $("html, body").animate({ scrollTop: 3900 }, 1000);
    return false;
});


$(".locust").click(function () {

    $("html, body").animate({ scrollTop: 2300 }, 1000);
    return false;
});


$(".covid, .papers").click(function () {

    $("html, body").animate({ scrollTop: 2300 }, 1000);
    return false;
});

$(".essay, .freshers, .justice, .scienceDay, .quiz, .reqrtmnt, .anti").click(function () {

    $("html, body").animate({ scrollTop: "2500vh" }, 1000);
    return false;
});


$(".obstacle, .projector, .airplane").click(function () {

    $("html, body").animate({ scrollTop: 3200 }, 1000);
    return false;
});


$(".hs").click(function () {

    $("html, body").animate({ scrollTop: 4550 }, 1000);
    return false;
});







$(function(){
    $("#tabsArticles").tabs({
        collapsible: true,
    });
});

$(function(){
    $("#projects").tabs({
        collapsible: true,
    });
});



        //its of the clearifying part!
    });

})(jQuery)

