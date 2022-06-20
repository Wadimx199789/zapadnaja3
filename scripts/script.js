$(function () {
	$(".slider-noDots").slick({
		autoplay: true,
		speed: 2700,
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
		autoplay: true,
		autoplaySpeed: 3000,
		speed: 2700,
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


	$('.show-popup').magnificPopup({
		type: 'inline',
		removalDelay: 500, //delay removal by X to allow out-animation
		callbacks: {
			beforeOpen: function () {
				this.st.mainClass = this.st.el.attr('data-effect');
			}
		},
		midClick: true // allow opening popup on middle mouse click. Always set it to true if you don't provide alternative source.
	});

});

$(".suppliers-slider__container").slick({
	autoplay: true,
	autoplaySpeed: 3000,
	speed:2700,
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
	speed: 2700,
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

$(".pagedescription-inner__slider-box").slick({
	// autoplay: true,
	autoplaySpeed: 3000,
	speed: 2700,
	mobileFirst: true,
	dots: true,
	slidesToShow: 3,
	slidesToScroll: 3,
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






