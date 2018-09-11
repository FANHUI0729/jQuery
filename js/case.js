$(document).ready(function(){
	$('div.wrap>.main>.pic>ul>li').eq(0).fadeIn(1500);
	$('div.wrap>.main>.pic>ul>li').eq(1).fadeIn(1500);
	$('div.wrap>.main>.pic>ul>li').eq(2).fadeIn(1500);
})

$(function(){
	$(window).bind('scroll',function(){
		var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
		if(scrollTop > 5 && scrollTop < 340){
			$('div.wrap>.main>.pic>ul>li').eq(3).fadeIn(1500);
			$('div.wrap>.main>.pic>ul>li').eq(4).fadeIn(1500);
			$('div.wrap>.main>.pic>ul>li').eq(5).fadeIn(1500);
		}else if(scrollTop > 340){
			$('div.wrap>.main>.pic>ul>li').eq(5).nextAll().fadeIn(1500);
		}
	})

	$('.choose ul li').click(function(){
		$(window).unbind('scroll');
		var index = $(this).attr('value');
		$('div.wrap>.main>.pic>ul>li').css('display','none');
		if(index == 0){
			$('div.wrap>.main>.pic>ul>li').fadeIn(1500);
		}else if(index == 1){
			$('div.wrap>.main>.pic>ul>li.art').fadeIn(1500);	
			$('div.wrap>.main>.pic>ul>li.muse').css('display','none');	
			$('div.wrap>.main>.pic>ul>li.conv').css('display','none');	
		}else if(index == 2){
			$('div.wrap>.main>.pic>ul>li.art').css('display','none');	
			$('div.wrap>.main>.pic>ul>li.muse').fadeIn(1500);	
			$('div.wrap>.main>.pic>ul>li.conv').css('display','none');
		}else{
			$('div.wrap>.main>.pic>ul>li.art').css('display','none');	
			$('div.wrap>.main>.pic>ul>li.muse').css('display','none');	
			$('div.wrap>.main>.pic>ul>li.conv').fadeIn(1500);
		}
		$(this).css({'color':'white','background':'#F1501A'});
		$(this).siblings().css({'color':'#ddd','background':'#111'});
	})
	$('.pic ul li').mouseenter(function(){
		$(this).children('img').css('opacity','0.4');
		$(this).children('div').fadeIn(800);
	})
	$('.pic ul li').mouseleave(function(){
		$(this).children('img').css('opacity','1');
		$(this).children('div').fadeOut(300);
	})

})
