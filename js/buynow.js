$(function(){	
	var s2 = $(".s2"), s2Bg = $(".s2__bg");
	$(".s2-plan").hover(
		function(){
			if(s2Bg.is(":hidden")){
				s2Bg.fadeIn();
				s2.addClass("s2_blured");
			}
		},
		function(){
			if(s2Bg.is(":visible")){
				s2Bg.fadeOut();
				s2.removeClass("s2_blured");
			}
		}
	);
	$(".s2-textmore").on("click", function(e){
		e.preventDefault();
		var wrap = $(this).parent();
		var text = wrap.prev(".s2-text").css("height", "auto");
		wrap.hide();
	});
});