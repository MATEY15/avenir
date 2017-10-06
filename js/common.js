$(function() {

	// Footer height

	function resize() {
		var foot = document.getElementById('footer');
		var footHeight = foot.offsetHeight;
		//foot.style.marginTop = -footHeight+"px";
		document.getElementById('body').style.paddingBottom = footHeight+"px";
	}
	window.onload = resize;

});
