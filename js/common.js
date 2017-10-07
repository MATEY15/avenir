$(function() {

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
	window.onresize = resize;
	window.onload = resize;

	// Open Menu

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
    if ($('.header-nav__list').css('display') == 'none') 
        { 
            $('.mobile-menu__list').animate({height: 'show'}, 300); 
        } 
    else 
        {     
            $('.mobile-menu__list').animate({height: 'hide'}, 300); 
        }

  	//$('.mobile-menu__list').animate({height: 'show'}, 500); 
  });

});
