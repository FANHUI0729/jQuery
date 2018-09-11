$(document).ready(function(){
	$('div.wrap>.main>.info').fadeIn(1500);
})
$(function () {
	//轮播图
	var timer;
	var aLeft=0;
	var index = 0;
	var arr = document.getElementsByClassName('pic')[0].getElementsByTagName('li');
	var len = arr.length;
	console.log(len);
	function move(index) {
    	$('.spot li').removeClass('on').eq(index).addClass('on');
    	if(aLeft == (-478*2)){
			$('.pic').append($('.pic li').first());
			aLeft += 478;
			$('.pic').css('left',aLeft+'px');
		}
		aLeft -= 478;
		var obj = {
			left:aLeft+'px'
		}
		console.log(aLeft);
		$('.pic').animate(obj,1500);
	}
	timer = setInterval(function () {		
		index++;
		if (index == len){
			index = 0;
		}
		move(index);	
	},2000)
	$('.pic').mouseenter(function(){
		clearInterval(timer);
	})
	$('.pic').mouseleave(function () {
		timer = setInterval(function () {
			index++;
			if (index >= len) {
				index = 0;
			}
			move(index);
		},2000)
	})
	$('.spot li').mouseenter(function () {
		clearInterval(timer);
		index = $('.spot li').index(this);
		move(index);
	})
	
	//弹出框
	/*$('div.wrap>.main>.info>.desc>a').click(function(){
		$('div.wrap>.back').fadeIn(800);
		//禁止滚动
		var tops = $(document).scrollTop();
		$(document).bind("scroll",function (){$(document).scrollTop(tops);});
	})
	$('div.wrap>.back>.content>.close>.closeWindow').click(function(){
		$('div.wrap>.back').fadeOut(800);
		$(document).unbind("scroll");
	})*/
})
 

