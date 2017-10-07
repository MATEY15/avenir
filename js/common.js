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
		document.getElementById('body').style.paddingBottom = footHeight+"px";
	}
	window.onresize = resize;
	window.onload = resize;

	// Open Menu

	$(".container").click(function() {
    $(".stick").toggleClass(function () {
      return $(this).is('.open, .close') ? 'open close' : 'open';
    });
  });

});
