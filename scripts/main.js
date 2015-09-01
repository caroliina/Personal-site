$('#social').mouseover(function () {
    $('#social-icons').css('left', '0px');
    $('#social-label').css('left', '45px');
});

$('#social').mouseout(function () {
    $('#social-icons').css('left', '-70px');
    $('#social-label').css('left', '-24px');
});

$('.mail').mouseover(function () {
    $('#gmail').slideDown();
});

$('.mail').mouseout(function () {
    $('#gmail').slideUp();
});