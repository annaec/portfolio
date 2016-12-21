$(document).ready(function(){

		(function() {
			var lineMaker = new LineMaker({
				lines: [
					{top: '15%', left: 0, width: '100%', height: 3, color: '#ddd', hidden: true, animation: { duration: 1200, easing: 'easeInOutExpo', delay: 200, direction: 'LeftRight' }},
					{top: '16%', left: 0, width: '100%', height: 3, color: '#ddd', hidden: true, animation: { duration: 1300, easing: 'easeInOutExpo', delay: 0, direction: 'LeftRight' }}
				]
			});
			
			setTimeout(function() {
				lineMaker.animateLinesIn();
			}, 0);
		})();



//////// DOWN ARROW ///////////

$(".arrow").on("click", function () {
	var scrollTop = $(window).scrollTop();
	if(scrollTop ==0) {
		 $(".arrow").toggleClass("flip");
		 $('html, body').animate({
            scrollTop: $("#game").offset().top
        }, 1000);
		} else {
			$(".arrow").toggleClass("flip");
			$('html, body').animate({
	            scrollTop: 0
	        }, 1000);
		 	
		}
	
});


});