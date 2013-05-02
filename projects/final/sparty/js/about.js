$(document).ready(function(){

$(window).load(function() {
    
	 $('.slide-trigger').collapsable();
	$('.content h1').fadeIn(1000, function(){
		
     	$('.container').fadeIn(2000, function (){
 			$('#aboutContent .separate').fadeIn(1000);
			$('#aboutContent p').fadeIn(1000);
			$('#aboutContent h3').fadeIn(1000);
		}).css("padding", "5px");
		
		
	});
});	
});
