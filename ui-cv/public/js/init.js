/*-----------------------------------------------------------------------------------
/*
/* Init JS
/*
-----------------------------------------------------------------------------------*/

jQuery(document).ready(function ($) {
	
	/*----------------------------------------------------*/
	/* Smooth Scrolling
------------------------------------------------------ */

	$(".smoothscroll").on("click", function (e) {
		e.preventDefault();

		var target = this.hash,
			$target = $(target);

		$("html, body")
			.stop()
			.animate(
				{
					scrollTop: $target.offset().top,
				},
				800,
				"swing",
				function () {
					window.location.hash = target;
				}
			);
	});

	/*----------------------------------------------------*/
	/* Highlight the current section in the navigation bar
------------------------------------------------------*/

	var sections = $("section");
	var navigation_links = $("#nav-wrap a");

	sections.waypoint({
		handler: function (event, direction) {
			var active_section;

			active_section = $(this);
			if (direction === "up") active_section = active_section.prev();

			var active_link = $(
				'#nav-wrap a[href="#' + active_section.attr("id") + '"]'
			);

			navigation_links.parent().removeClass("current");
			active_link.parent().addClass("current");
		},
		offset: "35%",
	});

	/*----------------------------------------------------*/
	/*	Make sure that #header-background-image height is
/* equal to the browser height.
------------------------------------------------------ */

	$("header").css({ height: $(window).height() });
	$(window).on("resize", function () {
		$("header").css({ height: $(window).height() });
		$("body").css({ width: $(window).width() });
	});

	/*----------------------------------------------------*/
	/*	Fade In/Out Primary Navigation
------------------------------------------------------*/

	$(window).on("scroll", function () {
		var h = $("header").height();
		var y = $(window).scrollTop();
		var nav = $("#nav-wrap");

		if (y > h * 0.2 && y < h && $(window).outerWidth() > 768) {
			nav.fadeOut("fast");
		} else {
			if (y < h * 0.2) {
				nav.removeClass("opaque").fadeIn("fast");
			} else {
				nav.addClass("opaque").fadeIn("fast");
			}
		}
	});


	/*----------------------------------------------------*/
	/*	Flexslider
/*----------------------------------------------------*/
	$(".flexslider").flexslider({
		namespace: "flex-",
		controlsContainer: ".flex-container",
		animation: "slide",
		controlNav: true,
		directionNav: false,
		smoothHeight: true,
		slideshowSpeed: 7000,
		animationSpeed: 600,
		randomize: false,
	});
});
