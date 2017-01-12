$(document).ready(function() {
    //ayys but doesn't lmao
    $('.dropdown-menu').find('form').click(function(e) {
        e.stopPropagation();
    });
});


$("form span").hide();


$("#password").focus(function() {
    if($(this).val().length < 5) {

        $(this).next().show();

    } else {

        $(this).next().hide();

    }

});
$("#username").focus(function() {
    if($(this).val().length < 5) {

        $(this).next().show();

    } else {

        $(this).next().hide();

    }


});

