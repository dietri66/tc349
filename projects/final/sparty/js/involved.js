$(document).ready(function(){
$(window).load(function() {
    // weave your magic here.
	
	 $('.slide-trigger').collapsable();
	
	$('.content h1').fadeIn(1000, function(){
		
     	$('.container').fadeIn( 2000, function (){
 		
			$('#involve > *').fadeIn(1000);
			
		
		});
		
		
	});
 	
});
});
