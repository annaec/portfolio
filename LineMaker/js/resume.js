$(document).ready(function(){

		(function() {
			var lineMaker = new LineMaker({
				lines: [
					{top: 0, left: '10vw', width: 3.5, height: '150%', color: 'black', hidden: true, animation: { duration: 1300, easing: 'easeInOutSine', delay: 0, direction: 'TopBottom' }},
					{top: 0, left: '10.5vw', width: 3.5, height: '150%', color: 'black', hidden: true, animation: { duration: 1200, easing: 'easeInOutSine', delay: 200, direction: 'TopBottom' }},
					// {top: 0, left: '88vw', width: 2, height: '150%', color: '#ccc', hidden: true, animation: { duration: 1100, easing: 'easeInOutSine', delay: 0, direction: 'TopBottom' }},
					// {top: 0, left: '88.5vw', width: 2, height: '150%', color: 'black', hidden: true, animation: { duration: 1100, easing: 'easeInOutSine', delay: 0, direction: 'TopBottom' }}

					// // {top: 0, left: '75vw', width: 1, height: '100%', color: '#ccc', hidden: true, animation: { duration: 1500, easing: 'easeInOutSine', delay: 0, direction: 'TopBottom' }},
					// {top: '6em', left: 0, width: '100%', height: 4, color: '#ccc', hidden: true, animation: { duration: 1500, easing: 'easeInOutExpo', delay: 200, direction: 'LeftRight' }},
					// {top: '6.95em', left: 0, width: '100%', height: 4, color: 'black', hidden: true, animation: { duration: 1500, easing: 'easeInOutExpo', delay: 200, direction: 'LeftRight' }}
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
		 $('html, body').animate({
            scrollTop: $(".experience").offset().top
        }, 900);
	 $(".arrow").toggleClass("flip");

	} else if (scrollTop = $(".experience")){
		$('html, body').animate({
            scrollTop: 0
        }, 900);
	 $(".arrow").toggleClass("flip");
	}
	
});


});