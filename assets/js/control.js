$(document).ready(function() {
    var margin = parseInt($("#section1").css("margin-left"));
    $("#left").click(function () {
        if (margin < 0) {
            margin += 960;
            $("#section1").animate({"margin-left": margin + "px"}, 500);
        }
    });
    $("#right").click(function () {
        if (margin > min_left) {
            margin -= 960;
            $("#section1").animate({"margin-left": margin + "px"}, 500);
        }
    });
    function screenWidth() {
        var windowsize = $(window).width();
        var sectionposition = parseInt($(section_name).css('left'));
        var sectionend = sectionposition + 960;
        var realrightleft = windowsize - parseInt($("#right").css("right")) - 20;
        var distancesectionendtoright = realrightleft - sectionend;
        var leftposition = parseInt($("#left").css("left"));
        var realleft = sectionposition + leftposition + 20;
        if (realleft > distancesectionendtoright) {
            console.log(realleft);
            console.log(distancesectionendtoright)
            $(section_name).css('left', sectionposition + (realleft-distancesectionendtoright)/2.0)
        } else {
            console.log(realleft);
            console.log(distancesectionendtoright)
            $(section_name).css('left', sectionposition + (distancesectionendtoright-realleft))
        }
    }
    screenWidth();
    $(window).resize(screenWidth);
});