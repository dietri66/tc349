$(document).ready(function() {
$(window).load(function() {
    // weave your magic here.
	
	 $('.slide-trigger').collapsable();
	
	$('.content h1').fadeIn(1000, function(){
		
     	$('.container').fadeIn(1000, function (){
			$('#appearancesContent a').fadeIn(1000);			
			$('#appearancesContent p').fadeIn(1000);
			$('#appearancesContent ul').fadeIn(1000);
			$('#appearancesContent h3').fadeIn(1000);
			$('#appearancesContent input').fadeIn(1000);
			$('#appearancesContent img').fadeIn(1000);
		}).css("padding", "10px");
		
		
	});
}); 	
});
