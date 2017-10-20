$(function() {

	// Open mobile menu

	$('.mobile-menu__open').click(function(){
		if ($('.header-nav').css('display') == 'none') { 
			$('.header-nav').animate({height: 'show'}, 300);
		} 
		else {     
			$('.header-nav').animate({height: 'hide'}, 300); 
		}
	});

	// Add Span
	$('.menu-item-has-children').prepend('<span class="open-sub"></span>');

	if(matchMedia){
		var screen = window.matchMedia("(max-width:768px)");
		screen.addListener(changes);
		changes(screen);
	}
	function changes(screen){
		if(screen.matches){
			$('.header-nav').addClass('mobileMenu');
			$('ul.sub-menu').removeClass('sub-menu');
		}
		else{
			$('.header-nav').removeClass('mobileMenu');

			if ($('.menu-item-has-children ul').hasClass('sub-menu') == false) {
				$('.menu-item-has-children ul').addClass('sub-menu');
			}
		}
	}

	// Accordion

	$('.header-nav li.active').addClass('open').children('ul').show();
	$('.header-nav li.menu-item-has-children>span').on('click', function(){
		var element = $(this).parent('li');
		if (element.hasClass('open')) {
			element.removeClass('open');
			element.find('li').removeClass('open');
			element.find('ul').slideUp(200);
		}
		else {
			element.addClass('open');
			element.children('ul').slideDown(200);
			element.siblings('li').children('ul').slideUp(200);
			element.siblings('li').removeClass('open');
			element.siblings('li').find('li').removeClass('open');
			element.siblings('li').find('ul').slideUp(200);
		}
	});

	// Popup

	$(".popup").magnificPopup({
		removalDelay: 150,
		mainClass: 'mfp-fade'
	});

	//  Video

	$('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
		disableOn: 700,
		type: 'iframe',
		mainClass: 'mfp-fade',
		removalDelay: 160,
		preloader: false,

		fixedContentPos: false
	});

	// Select Style

	$(function() {
		jcf.replaceAll();
	});

	// Header Bacground

	$(".header, .header-post").each(function() {
		var attr = $(this).attr('data-image-src');
		if (typeof attr !== typeof undefined && attr !== false) {
				$(this).css('background', 'url('+attr+') center bottom '); //center center
			}
		});

	// Click Prevent Default

	$('#click-prevent').click(function(e){
		e.preventDefault();
	});

	// Footer height

	// function resize() {
	// 	var foot = document.getElementById('footer');
	// 	var footHeight = foot.offsetHeight;
	// 	//foot.style.marginTop = -footHeight+"px";
	// 	document.getElementById('body').style.paddingBottom = footHeight+'px';
	// }
	// window.onload = resize;
	// window.onresize = resize;

	// Fixed menu

	$(window).scroll(function() {
		if ($(this).scrollTop() > 50){  
			$('#top-line__fixed').addClass("active");
		}
		else{
			$('#top-line__fixed').removeClass("active");
		}
	});

	// Fixed closed

	$(window).scroll(function() {
		if ($(this).scrollTop() > 50){  
			$('.post-popup').addClass("active");
		}
		else{
			$('.post-popup').removeClass("active");
		}
	});

	// Animated burger

	$('.mobile-menu__open').click(function() {
		$('.stick').toggleClass(function () {
			return $(this).is('.open, .close') ? 'open close' : 'open';
		});
	});

	// Top Line Bacground

	$('.mobile-menu__open').click(function(){
		$('.top-line__wrapper').toggleClass('top-line__wrapper--bgt top-line__wrapper--bg');
	});

	// Slider Top

	$('.carousel-top').owlCarousel({
		loop:true,
		nav:true,
		dots: true,
		autoplay: false,
		autoplayTimeout:5000,
		//animateOut: 'fadeOut',
		//margin: 50,
		navText : ['',''],
		autoplayHoverPause:true,
		smartSpeed: 750,
		items: 1
	});

	// Accordeon 

	$(".accordeon dd").hide().prev().click(function() {
		$(this).parents(".accordeon").find("dd").not(this).slideUp().prev().removeClass("active");
		$(this).next().not(":visible").slideDown().prev().addClass("active");
	});
	$(".accordeon dd").first().show();

});