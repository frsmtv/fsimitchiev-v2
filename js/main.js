$(document).ready(function () {

  // BG_COLOR CHANGE ON SCROLL START
  var scroll_start = 0;
    var startchange = $('body');
    var offset = startchange.offset();
    $(document).scroll(function() {
        scroll_start = $(this).scrollTop();
        if(scroll_start > offset.top) {
            $('header').show();
            $('#intro').addClass('animated fadeOut');

        } else {
            $('header').hide();
            $('#intro').removeClass('animated fadeOut');
            $('#intro').addClass('animated fadeIn');
        }
    });

    // TOGGLE-NAV
    $('header').mouseover(function(){
      $('#main-nav').css('visibility', 'visible').removeClass('animated fadeOutUp').addClass('animated fadeInDown');
    })
    $('#main-nav').mouseout(function(){
      $('#main-nav').css('visibility', 'hidden').removeClass('animated fadeInDown').addClass('animated fadeOutUp');
    })

    $('#toggle-nav').click(function(){
      $('#main-nav').css('visibility', 'visible').removeClass('animated fadeOutUp').addClass('animated fadeInDown');
    });
    $('main').click(function(){
      $('#main-nav').css('visibility', 'hidden').removeClass('animated fadeInDown').addClass('animated fadeOutUp');
    });

    // MODALS CLOSING
    // $('div.modal-content').click(function(){
    //   console.log('coucou');
    //   $('div.modal-content').hide();
    // });

    // PARALLAX
    $('.parallax').parallaxBackground();

    // SCROLLA
    $('.animate').scrolla();

});
