$(document).ready(function () {

  // ACTIVE CLASS TOGGLE ON MAIN MENU
  // $('#main-nav li a').click(function(){
  //   $(this).addClass('active');
  //   $('#main-nav li a').not(this).removeClass('active');
  // })

  // if ($('#contact').visible(true)) {
  //   $('#contact-btn').addClass('active');
  //   $('#main-nav li a').not('#contact-btn').removeClass('active');
  // }

    // ABOUT HIDE PARAGRAPHS
    $('#about-fr .more').click(function(){
			// $('#about-wrapper').css('flex-direction', 'column');
      $('#about-fr .hide').fadeIn();
      $('.hide-hide').hide();
      // $(this).hide();
      $('#about-en .hide').hide();
    });

		$('#about-en .more').click(function(){
      $('#about-en .hide').fadeIn();
      $('.hide-hide').hide();
			// $(this).hide();
      $('#about-fr .hide').hide();
    });

    // ****

    $('#about-fr .more-more').click(function(){
			// $('#about-wrapper').css('flex-direction', 'column');
      $('#about-fr .hide-hide').fadeIn();
      $('.hide').hide();
      // $(this).hide();
      $('#about-en .hide-hide').hide();
    });

		$('#about-en .more-more').click(function(){
      $('#about-en .hide-hide').fadeIn();
			$('.hide').hide();
      $('#about-fr .hide-hide').hide();
    });

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
