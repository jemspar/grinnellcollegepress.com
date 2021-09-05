$(document).ready(function() {

    var radiusToBlur = 2;

    $("#menu-button").hover(
        function(){
            $('#menu-label').show();
        },
        function(){
            $('#menu-label').hide();
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
