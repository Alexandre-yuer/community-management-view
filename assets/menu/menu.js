
$(document).ready(function() {
	$(".main>a").click(function() {
		$(this).next("ul").slideToggle(500);
	});
})