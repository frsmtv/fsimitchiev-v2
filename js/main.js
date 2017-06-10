$(document).ready(function () {

  // BG_COLOR CHANGE ON SCROLL START
  // var scroll_start = 0;
  //   var startchange = $('body');
  //   var offset = startchange.offset();
  //   $(document).scroll(function() {
  //       scroll_start = $(this).scrollTop();
  //       if(scroll_start > offset.top) {
  //           // $('header').show();
  //           $('#intro').addClass('animated fadeOut');
  //
  //       } else {
  //           // $('header').hide();
  //           $('#intro').removeClass('animated fadeOut');
  //           $('#intro').addClass('animated fadeIn');
  //       }
  //   });

    // TOGGLE-NAV
    // $('header').mouseover(function(){
    //   $('#main-nav').css('visibility', 'visible').removeClass('animated fadeOutUp').addClass('animated fadeInDown');
    // })
    // $('#main-nav').mouseout(function(){
    //   $('#main-nav').css('visibility', 'hidden').removeClass('animated fadeInDown').addClass('animated fadeOutUp');
    // })

    // $('#toggle-nav').click(function(){
    //   $('#main-nav').css('visibility', 'visible').removeClass('animated fadeOut').addClass('animated fadeInDown');
    // });
    // $('#main-nav-content').click(function(){
    //   $('#main-nav').css('visibility', 'hidden').removeClass('animated fadeInDown').addClass('animated fadeOut');
    // });

    // PROJECTS HIDDEN CONTENT REVEAL ON HOVER
    // $('.project').click(function(){
    //   $(this).find('.hide').css('visibility', 'visible');
    //   $(this).find('iframe').css('visibility', 'visible');
    //   $(this).find('img').css('opacity', '0');
    //   $('.project').not(this).find('img').css('opacity', '0');
    //   $('footer').hide();
    // });
    //
    // $('.close').click(function(){
    //   javascript:window.location.reload();
    //   $('footer').show();
    //   // $('.hide').css('opacity', '0');
    //   // $('.project').find('img').opacity('1');
    // });

    // MODALS CLOSING
    // $('div.modal-content').click(function(){
    //   console.log('coucou');
    //   $('div.modal-content').hide();
    // });

    // PARALLAX
    // $('.parallax').parallaxBackground();

    // SCROLLA
    // $('.animate').scrolla();

		// GRADIENTIFY
		// $('body').gradientify({
	  //   gradients: [
	  //       { start: [49,76,172], stop: [242,159,191] },
	  //       { start: [255,103,69], stop: [240,154,241] },
	  //       { start: [33,229,241], stop: [235,236,117] }
	  //   ]
		// });

		// MULTISCROLL
    $('#multiscroll').multiscroll({
		verticalCentered : true,
		scrollingSpeed: 700,
		easing: 'easeInQuart',
		menu: false,
		sectionsColor: [],
		navigation: false,
		navigationPosition: 'right',
		navigationColor: '#000',
		navigationTooltips: [],
		loopBottom: true,
		loopTop: true,
		css3: false,
		paddingTop: 0,
		paddingBottom: 0,
		normalScrollElements: null,
		keyboardScrolling: true,
		touchSensitivity: 5,

		//responsive
		responsiveWidth: 0,
		responsiveHeight: 0,
		responsiveExpand: false,

		// Custom selectors
		sectionSelector: '.ms-section',
		leftSelector: '.ms-left',
		rightSelector: '.ms-right',

		//events
		onLeave: function(index, nextIndex, direction){},
		afterLoad: function(anchorLink, index){},
		afterRender: function(){},
		afterResize: function(){},
	});


});
