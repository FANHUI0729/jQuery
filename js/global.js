$(function(){
	$('div.scrollTop>a').click(function(e){
		console.log(111);
		e.preventDefault();
    	$('html').animate({'scrollTop':'0'},500);
	})
})