$(document).ready(function() {
$(window).load(function() {
    // weave your magic here.
	
	 $('.slide-trigger').collapsable();
	
	$('.content h1').fadeIn(1000, function(){
		
     	$('.container').fadeIn(2000, function (){
 			$('#mediaContent .separate').fadeIn(1000);
			$('#mediaContent p').fadeIn(1000);
			$('#mediaContent ul').fadeIn(1000);
			$('#mediaContent h3').fadeIn(1000);
			$('#mediaContent input').fadeIn(1000);
			$('#mediaContent img').fadeIn(1000);
		}).css("padding", "10px");
		
		
	});
	
	$(".thumbnail").click(function(){
		var fileLoc = $(this).attr("src");
		$("#popup").fadeIn("fast");
		$("#lightbox").attr("src", fileLoc);
	});
	
	$("#close").click(function(){
		$("#popup").fadeOut("fast");
	});
}); 	
});
