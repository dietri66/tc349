$(document).ready(function(){
	var limitnum = 120; // Limit of Characters
	function limits(obj, limit) {
		var cnt = $("#counter > span");
		var txt = $(obj).val();
		var len = txt.length;
		
		if(len > limit) {
			$(obj).val(txt.substr(0, limit));
			$(cnt).html(len-1);
		}
		else {
			$(cnt).html(len);
		}
		
		if (limit-len <= 20) {
			$(cnt).addClass("warning");
		}
	}
	$('textarea').keyup(function(){
		limits($(this), limitnum);
	});
});