$(function(){
	$('div.wrap>.main>.content>.design>ul>li>.designer').mouseenter(function(){
		var obj = {
			width: 200+'px',
		}
		var obj2 = {
			width: 80+'px',
		}
		$(this).siblings().eq(0).animate(obj2,500).show().next().animate(obj,500);
	})
	$('div.wrap>.main>.content>.design>ul>li>.designer').mouseleave(function(){
		var obj = {
			width: 260+'px',
		}
		var obj2 = {
			width: 0+'px',
		}
		$(this).siblings().eq(0).animate(obj2,500).next().animate(obj,500);
	})
	$(window).scroll(function(){
		var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
		if(scrollTop > 30){
			$('div.wrap>.main>.content>.design>ul>li').eq(1).nextAll().fadeIn(2000);
		}
	})
})
$(document).ready(function(){
	$('div.wrap>.main>.content>.design>ul>li').eq(0).fadeIn(1500);
	$('div.wrap>.main>.content>.design>ul>li').eq(1).fadeIn(1500);
	$('div.wrap>.main>.top>.title>h2').fadeIn(1500);
	$('div.wrap>.main>.top>.title>div').fadeIn(1500);
})