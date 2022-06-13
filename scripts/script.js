$(function () {
	$(".slider-noDots").slick({
		// autoplay: true,
		speed: 1000,
		mobileFirst: true,
		dots: false,
		slidesToShow: 1,
		slidesToScroll: 1,
		pauseOnHover: false,
		respondTo: 'min',
		cssEase: 'linear',
		prevArrow: '<div class="prevArrow"></div>',
		nextArrow: '<div class="nextArrow"></div>',
		arrows: false,
		responsive: [
			{
				breakpoint: 768,
				settings: {
					arrows: true,
				}
			}
			// You can unslick at a given breakpoint now by adding:
			// settings: "unslick"
			// instead of a settings object
		]
	});

	$(".slider__container").slick({
		// autoplay: true,
		autoplaySpeed: 3000,
		speed: 1000,
		mobileFirst: true,
		dots: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		pauseOnHover: false,
		respondTo: 'min',
		cssEase: 'linear',
		prevArrow: '<div class="prevArrow"></div>',
		nextArrow: '<div class="nextArrow"></div>',
		arrows: false,
		responsive: [
			{
				breakpoint: 768,
				settings: {
					arrows: true,
				}
			}
			// You can unslick at a given breakpoint now by adding:
			// settings: "unslick"
			// instead of a settings object
		]
	});


	$('.popup-with-form').magnificPopup({
		type: 'inline',
		focus: '#name'
	});

});

$(".suppliers-slider__container").slick({
	// autoplay: true,
	autoplaySpeed: 3000,
	speed: 1000,
	mobileFirst: true,
	dots: true,
	prevArrow: false,
	nextArrow: false,
	pauseOnHover: false,
	respondTo: 'min',
	cssEase: 'linear',
	responsive: [
		{
		  breakpoint: 1279,
		  settings: {
			slidesToShow: 6,
			slidesToScroll: 6,
			
		  }
		},
		{
		  breakpoint: 970,
		  settings: {
			slidesToShow: 4,
			slidesToScroll: 4
		  }
		},
		{
			breakpoint: 738,
			settings: {
			  slidesToShow: 3,
			  slidesToScroll: 3
			}
		  },
		  {
			breakpoint: 290,
			settings: {
			  slidesToShow: 2,
			  slidesToScroll: 2
			}
		  }

		
		// You can unslick at a given breakpoint now by adding:
		// settings: "unslick"
		// instead of a settings object
	  ]
});
$(".clients-logos__slider").slick({
	autoplay: true,
	autoplaySpeed: 3000,
	speed: 700,
	mobileFirst: true,
	dots: true,
	slidesToShow: 6,
	slidesToScroll: 6,
	prevArrow: false,
	nextArrow: false,
	pauseOnHover: false,
	respondTo: 'min',
	cssEase: 'linear',
	responsive: [
		{
		  breakpoint: 1279,
		  settings: {
			slidesToShow: 6,
			slidesToScroll: 6,
			
		  }
		},
		{
		  breakpoint: 970,
		  settings: {
			slidesToShow: 4,
			slidesToScroll: 4
		  }
		},
		{
			breakpoint: 738,
			settings: {
			  slidesToShow: 3,
			  slidesToScroll: 3
			}
		  },
		  {
			breakpoint: 290,
			settings: {
			  slidesToShow: 2,
			  slidesToScroll: 2
			}
		  }
	  ]
});

