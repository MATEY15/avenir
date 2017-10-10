$(function() {

	// Header Bacground

	$( ".header" ).each(function() {
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

	function resize() {
		var foot = document.getElementById('footer');
		var footHeight = foot.offsetHeight;
		//foot.style.marginTop = -footHeight+"px";
		document.getElementById('body').style.paddingBottom = footHeight+'px';
	}
	window.onload = resize;
	window.onresize = resize;

	// Fixed menu

	$(window).scroll(function() {
		if ($(this).scrollTop() > 50){  
			$('#top-line__fixed').addClass("active");
		}
		else{
			$('#top-line__fixed').removeClass("active");
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

	// Open mobile menu

	$('.mobile-menu__open').click(function(){
		if ($('.header-nav__list').css('display') == 'none') { 
			$('.mobile-menu__list').animate({height: 'show'}, 300); 
		} 
		else {     
			$('.mobile-menu__list').animate({height: 'hide'}, 300); 
		}
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

});
