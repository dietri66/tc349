$(document).ready(function(){
$(window).load(function() {
    // weave your magic here.
		$('#mainHeading>h1').fadeIn(2000);	

	    $('.slide-trigger').collapsable();

	$(".trigger").click(function(){
		$(".panel").toggle("fast");
		
		
		$(this).toggleClass("active");
		return false;
	}, function(){
		$(".panel").hide(500);
		$(this).toggleClass("active");});
		
		$(".triggerRight").click(function(){
		$(".panelRight").toggle("fast");
		$(this).toggleClass("active");
		return false;
	}, function(){
		$(".panelRight").hide(500);
		$(this).toggleClass("active").fadeIn(1000);});
});		 
});
