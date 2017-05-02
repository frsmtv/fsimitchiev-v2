$(document).ready(function () {

  // BG_COLOR CHANGE ON SCROLL START
  var scroll_start = 0;
    var startchange = $('body');
    var offset = startchange.offset();
    $(document).scroll(function() {
        scroll_start = $(this).scrollTop();
        if(scroll_start > offset.top) {
            // $('#intro').css('background', '#fff');
            // $('#main-nav').css('color', '#333').addClass('animated fadeInUp');
            $('h2').addClass('animated fadeInDown');
            $('#projects').addClass('animated fadeIn');
            $('#intro').addClass('animated fadeOut');
            // $('#intro').css('background', '#fff');

        } else {
            // $('#intro').css('background', '#000');
            // $('#main-nav').css('color', '#fff').removeClass('animated fadeInUp');
            $('h2').removeClass('animated fadeInDown');
            $('#projects').removeClass('animated fadeIn');
            $('#intro').removeClass('animated fadeOut');
            $('#intro').addClass('animated fadeIn');
            // $('#intro').css('background', '');
        }
    });

    // SCROLLA
    $('.animate').scrolla();

});
