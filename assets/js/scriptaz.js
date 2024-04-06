
(function ($) {
	'use strict';

	//LOADER
	$(window).on('load', function () {

		$("#preloader").removeClass("loader_show");
		$("#preloader").addClass("hide");
		$(".loader").addClass("fadeout");
	})
	$(document).ready(function () {
		$('.hide-loader').click(function (e) {
			$(this).parent().addClass('hide');
		});
		AOS.init({
			disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
			//duration: 1000, // values from 0 to 3000, with step 50ms
			once: true, // whether animation should happen only once - while scrolling down
		})

		// Sidemenu Panel
		ma5menu({
			menu: '.main_menu',
			activeClass: 'current',
			footer: '.slide_navi',
			position: 'right',
			closeOnBodyClick: true
		});


		var swiper = new Swiper('.theme_slider_2 .swiper-container', {
			centeredSlides: true,
			resistance: true,
			resistanceRatio: 0.6,
			speed: 1600,
			spaceBetween: 0,
			parallax: true,
			effect: "coverflow",
			controller: {
				inverse: true,
			},
			slidesPerView: '1',
			slideToClickedSlide: true,
			navigation: {
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev',
			},
			pagination: {
				el: '.swiper-pagination',
				clickable: true,
			},
		});






		// Youtube
		var $ytvideoTrigger = $(".ytplay_btn");
		$ytvideoTrigger.on("click", function (evt) {
			$(".ytube_video").addClass("play");
			$("#ytvideo")[0].src += "?autoplay=1";
		});


		$('.owl_team').owlCarousel({
			loop: false,
			center: false,
			responsiveClass: true,
			autoplayHoverPause: true,
			autoplay: false,
			items: 1,
			margin: 30,
			dots: false,
			nav: true,
			navText: ["<i class='fa fa-long-arrow-left'></i>", "<i class='fa fa-long-arrow-right'></i>"],
			slideSpeed: 400,
			paginationSpeed: 400,
			autoplayTimeout: 3000,
			responsive: {
				0: {
					items: 1,
				},
				600: {
					items: 2,
					dots: true,
					nav: false,
				},
				1000: {
					items: 2,
				},
				1200: {
					items: 3,
				}
			}
		});

		$('.owl_service').owlCarousel({
			loop: true,
			center: false,
			responsiveClass: true,
			autoplayHoverPause: true,
			autoplay: true,
			items: 1,
			margin: 30,
			dots: false,
			nav: true,
			navText: ["<i class='fa fa-long-arrow-left'></i>", "<i class='fa fa-long-arrow-right'></i>"],
			slideSpeed: 400,
			paginationSpeed: 400,
			autoplayTimeout: 3000,
			responsive: {
				0: {
					items: 1,
				},
				600: {
					items: 2,
					dots: true,
					nav: false,
				},
				1000: {
					items: 2,
				},
				1200: {
					items: 3,
				}
			},
			onInitialized: function (event) {
				$('.owl_service').find('.owl-item').attr('aria-selected', 'false');
				$('.owl_service').find('.owl-item.active').attr('aria-selected', 'true'); // let screen readers know an item is active

				// apply meta info to next and previous buttons and make them focusable
				$('.owl_service').find('.owl-prev').attr('role', 'button').attr('title', 'Previous');
				$('.owl_service').find('.owl-next').attr('role', 'button').attr('title', 'Next');
				$('.owl_service, .owl-prev, .owl-next').attr('tabindex', '0');

				// add instructions to keyboard users that are only visible when the carousel is focused
				//$('.owl_service').find('.owl-stage-outer').append('<p class="alert alert-success show-on-focus">Use left and right arrow keys to navigate.</p>');

				// listen for keyboard input
				$(document).on('keydown', function (e) {

					var $focusedElement = $(document.activeElement),
						singleOwl = $(".owl_service").data('owlCarousel'),
						type = e.which == 39 ? 'next' : null,
						type = e.which == 37 ? 'prev' : type,
						type = e.which == 13 ? 'enter' : type;

					// if the carousel is focused, use left and right arrow keys to navigate
					if ($focusedElement.attr('id') === 'owl-single-example') {

						if (type == 'next') {
							singleOwl.next();
						} else if (type == 'prev') {
							singleOwl.prev();
						}

						// if the prev and next buttons are focused, catch "Enter" and navigate in the right direction
					} else if (type == 'enter') {
						if ($focusedElement.hasClass('owl-next')) {
							singleOwl.next();
						} else if ($focusedElement.hasClass('owl-prev')) {
							singleOwl.prev();
						}
					}
				});
			},
			// let screen readers know which slide is active after navigation or reinit
			onChange: function () {
				$('.owl_service').find('.owl-item').attr('aria-selected', 'false');
				$('.owl_service').find('.owl-item.active').attr('aria-selected', 'true');
			}
		});


		$('.owl_testimonial1').owlCarousel({
			loop: true,
			center: true,
			responsiveClass: true,
			autoplayHoverPause: true,
			autoplay: false,
			items: 1,
			margin: 30,
			dots: true,
			nav: false,
			navText: ["<i class='fa fa-long-arrow-left'></i>", "<i class='fa fa-long-arrow-right'></i>"],
			slideSpeed: 400,
			paginationSpeed: 400,
			autoplayTimeout: 3000,
			responsive: {
				0: {
					items: 1,
				},
				600: {
					items: 2,
				},
				1000: {
					items: 2,
				},
				1200: {
					items: 3,
				}
			}
		});


		$('.owl_testimonial2').owlCarousel({
			loop: true,
			center: true,
			responsiveClass: true,
			autoplayHoverPause: true,
			autoplay: false,
			items: 1,
			margin: 30,
			dots: true,
			nav: false,
			navText: ["<i class='fa fa-long-arrow-left'></i>", "<i class='fa fa-long-arrow-right'></i>"],
			slideSpeed: 400,
			paginationSpeed: 400,
			autoplayTimeout: 3000,
		});


		$('.owl_blog').owlCarousel({
			loop: false,
			center: false,
			responsiveClass: true,
			autoplayHoverPause: true,
			autoplay: false,
			items: 1,
			margin: 30,
			dots: false,
			nav: true,
			navText: ["<i class='fa fa-long-arrow-left'></i>", "<i class='fa fa-long-arrow-right'></i>"],
			slideSpeed: 400,
			paginationSpeed: 400,
			autoplayTimeout: 3000,
			responsive: {
				0: {
					items: 1,
				},
				600: {
					items: 2,
					dots: true,
					nav: false,
				},
				1000: {
					items: 2,
				},
				1200: {
					items: 3,
				}
			}
		});


		// accordion
		$(".accordion").on("click", ".accordion_tab", function () {
			$(this).next().slideDown();
			$(".accordion_info").not($(this).next()).slideUp();
		});

		$(".accordion").on("click", ".item", function () {
			$(this).addClass("active").siblings().removeClass("active");
		});


		// Isotope Portfolio
		var $grid = $('.grid').isotope({
			itemSelector: '.element-item',
			percentPosition: true,
			layoutMode: 'masonry',
			transformsEnabled: true,
			transitionDuration: "700ms",
			resize: true,
			fitWidth: true,
			columnWidth: '.grid-sizer',
		});

		// bind filter button click
		$('.filters-button-group .button').on('click', function () {
			var filterValue = $(this).attr('data-filter');
			// use filterFn if matches value
			$grid.isotope({ filter: filterValue });
		});

		// change is-checked class on buttons
		$('.filters-button-group').each(function (i, buttonGroup) {
			var $buttonGroup = $(buttonGroup);
			$buttonGroup.on('click', 'button', function () {
				$buttonGroup.find('.is-checked').removeClass('is-checked');
				$(this).addClass('is-checked');
			});
		});

		$grid.imagesLoaded().progress(function () {
			$grid.isotope('layout');
		});




		// Search width increase
		$('.open_search .search_form .form-control').click(function (e) {
			$('.open_search .search_form').removeClass('active');
			$(e.target).closest('.open_search .search_form').addClass('active');
		});
		$(document).click(function (e) {
			if ($(e.target).closest('.open_search .search_form').length == 0) {
				$('.open_search .search_form').removeClass('active');
			}
		});



		// Search width increase
		$('.header_search .form-control-submit').click(function (e) {
			$('.open_search').toggleClass('active');
		});




		// ========== SHOP PAGE =========== //

		// Select 2
		$('.basic_select').select2({});

		// Load More Content
		$(".product_view_list .product_item").slice(0, 6).show();
		$(".product_view_list .load_more").on("click", function (e) {
			e.preventDefault();
			$(".product_view_list .product_item:hidden").slice(0, 3).slideDown();
			if ($(".product_view_list .product_item:hidden").length == 0) {
				$(".product_view_list .load_more").css('display', 'none');
			}
		});

		// Product Zoom
		$('.product_zoom_button_group > li > a').eq(0).addClass("selected");
		$('.product_zoom_container > .product_zoom_info').eq(0).css('display', 'block');
		$('.product_zoom_button_group').on("click", function (e) {
			if ($(e.target).is("a")) {

				/*Handle Tab Nav*/
				$('.product_zoom_button_group > li > a').removeClass("selected");
				$(e.target).addClass("selected");

				/*Handles Tab Content*/
				var clicked_index = $("a", this).index(e.target);
				$('.product_zoom_container > .product_zoom_info').css('display', 'none');
				$('.product_zoom_container > .product_zoom_info').eq(clicked_index).fadeIn();
			}
			$(this).blur();
			return false;
		});

		// Product Carousel
		$('.product_carousel_1').owlCarousel({
			items: 4,
			loop: true,
			margin: 30,
			autoplay: true,
			autoplayTimeout: 4000,
			autoplayHoverPause: true,
			dots: true,
			nav: false,
			navText: ["<i class='fa fa-long-arrow-left'></i>", "<i class='fa fa-long-arrow-right'></i>"],
			center: false,
			responsiveClass: true,
			responsive: {
				0: {
					items: 1,
				},
				480: {
					items: 2,
				},
				768: {
					items: 2,
				},
				992: {
					items: 3,
				},
				1200: {
					items: 4,
				}
			}
		})


		//caches a jQuery object containing the header element
		var header = $(".header");
		var scroll = $(window).scrollTop();

		if (scroll >= 50) {
			header.addClass("dark_mode");
		} else {
			header.removeClass("dark_mode");
		}
		$(window).scroll(function () {
			var scroll = $(window).scrollTop();

			if (scroll >= 50) {
				header.addClass("dark_mode");
			} else {
				header.removeClass("dark_mode");
			}
		});
	});

})(jQuery);



// Hide header on scroll down
var didScroll;
var lastScrollTop = 0;
var navbarHeight = $('header').outerHeight();

$(window).scroll(function (event) {
	didScroll = true;
});

setInterval(function () {
	if (didScroll) {
		hasScrolled();
		didScroll = false;
	}
}, 50);

function hasScrolled() {
	var st = $(this).scrollTop();


	if (st > lastScrollTop && st > navbarHeight) {
		// Scroll Down
		$('header .top_bar').addClass('top-up');
	} else {
		// Scroll Up
		$('header .top_bar').removeClass('top-up');
	}

	lastScrollTop = st;
}
// End Sticky Header

