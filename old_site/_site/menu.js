$(document).ready(function() {

    var radiusToBlur = 2;

    $("#menu-button").hover(
        function(){
            $('#menu-label').css({"opacity" : "1"})
        },
        function(){
            $('#menu-label').css({"opacity" : "0"})
        }
    );


/* menu button click opens menu */
    $("#menu-button").click(function() {
        // $("#main-menu").transition({ opacity: 1 });
        $('#main-menu').fadeToggle();
        $('#page').transition({ "filter" : "blur(" + radiusToBlur + "px)"}, 400);
        radiusToBlur = (radiusToBlur == 2 ? 0 : 2);
    })



})
