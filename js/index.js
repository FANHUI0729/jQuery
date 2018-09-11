$(function(){
	//开始  轮播图
	var timer;
	var aLeft=0;
	var index = 0;
	var arr = document.getElementsByClassName('pic')[0].getElementsByTagName('li');
	var len = arr.length;
	$('div.wrap>.display>.pic>li').children('div').css('opacity',0).animate({'opacity':1},2000);
	function move(index) {
		$('div.wrap>.display>.pic>li').children('div').css('opacity',0).animate({'opacity':1},2000);
		$('div.wrap>.display>.spot li').removeClass('on').eq(index).addClass('on');
		if(aLeft == (-1349*(len-1))){
			$('div.wrap>.display>.pic').append($('div.wrap>.display>.pic li').first());
			aLeft += 1349;
			$('div.wrap>.display>.pic').css('left',aLeft+'px');
		}
		aLeft -= 1349;
		var obj = {
			left:aLeft+'px',
		}
		$('div.wrap>.display>.pic').animate(obj,800);
	}
	function moveRight(index) {
		$('div.wrap>.display>.pic>li').children('div').css('opacity',0).animate({'opacity':1},2000);
		$('div.wrap>.display>.spot li').removeClass('on').eq(index).addClass('on');
		if(aLeft == 0){
			$('div.wrap>.display>.pic').append($('div.wrap>.display>.pic li').first());
			aLeft -= 1349;
			$('div.wrap>.display>.pic').css('left',aLeft+'px');
		}
		aLeft += 1349;
		var obj = {
			left:aLeft+'px',
		}
		$('div.wrap>.display>.pic').animate(obj,800);
	}
	function autoRun(){
		timer = setInterval(function () {		
			index++;
			if (index == len){
				index = 0;
			}
			move(index);
		},5000)
	}
	autoRun();
	$('div.wrap>.display').mouseenter(function(){
		clearInterval(timer);
	})
	$('div.wrap>.display').mouseleave(autoRun);
	$('div.wrap>.display>.spot li').mouseenter(function () {
		clearInterval(timer);
		index = $('div.wrap>.display>.spot li').index(this);
		move(index);
	})
	$('div.wrap>.display>.prev').click(function(){
		clearInterval(timer);
		timer = setTimeout(function(){
			index++;
			if (index == len){
				index = 0;
			}
			move(index);
		},100);
	})
	$('div.wrap>.display>.next').click(function(){
		clearInterval(timer);
		timer = setTimeout(function(){
			index--;
			if (index < 0){
				index = len-1;
			}
			moveRight(index);
		},100);
	})

	//案例欣赏部分
	$('div.wrap>.case>ul li').mouseenter(function(){
		var obj = {
			opacity:0.6,
		}
		$(this).children('.desc').animate(obj,800);
		//$(this).children('.desc').css({'background':'rgba(220,220,220,0.2)','color':'black'});
	})
	$('div.wrap>.case>ul li').mouseleave(function(){
		var obj = {
			opacity:1,
		}
		$(this).children('.desc').animate(obj,300);
		$(this).children('.desc').css({'background':'#333','color':'#eee'});
	})

	//设计师团队部分
	var num = 0;
	var timer2;
	var aLeft2 = 0;
	function shiftLeft(num) {
		if(aLeft2 == (-1190)){
			$('div.wrap>.team>.desi>ul').append($('div.wrap>.team>.desi>ul li').first());
			aLeft2 += 1190;
			$('div.wrap>.team>.desi>ul').css('left',aLeft2+'px');
		}
		aLeft2 -= 1190;
		var obj = {
			left:aLeft2+'px',
		}
		$('div.wrap>.team>.desi>ul').animate(obj,800);
	}
	function shiftRight(num) {
		if(aLeft2 == 0){
			$('div.wrap>.team>.desi>ul').append($('div.wrap>.team>.desi>ul li').first());
			aLeft2 -= 1190;
			$('div.wrap>.team>.desi>ul').css('left',aLeft2+'px');
		}
		aLeft2 += 1190;
		var obj = {
			left:aLeft2+'px',
		}
		$('div.wrap>.team>.desi>ul').animate(obj,800);
	}
	$('div.wrap>.team>.prev').click(function(){
		clearInterval(timer2);
		timer2 = setTimeout(function(){
			num++;
			if (num == 2){
				num = 0;
			}
			shiftLeft(num);
		},100);
	})
	$('div.wrap>.team>.next').click(function(){
		clearInterval(timer2);
		timer2 = setTimeout(function(){
			num--;
			if (num < 0){
				num = 1;
			}
			shiftRight(num);
		},100);
	})
	$('div.wrap>.team>.spot>span').click(function(){
		$(this).addClass('on').siblings().removeClass('on');
		clearInterval(timer2);
		timer2 = setTimeout(function(){
			num--;
			if (num < 0){
				num = 1;
			}
			shiftRight(num);
		},100);
	})

})

$(document).ready(function(){
	$(window).scroll(function(){
		var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
		//背景图片部分
		if((scrollTop >= 660) && (scrollTop <= 1910)){
			$('body').css('background','url(images/1-1.jpg) no-repeat fixed');
		}else if(scrollTop >1910){
			$('body').css('background','url(images/1-2.jpg) no-repeat fixed');
		}
		
	})
	//滚动到某位置时，显示元素
	$(window).scroll(function(){
		var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
		if(scrollTop >= 500 && scrollTop < 1050){
			$('.more').show(1000);
		}else if(scrollTop >= 1052 && scrollTop <= 1600){
			$('.more2').show(1000);
		}else if(scrollTop >= 1660 && scrollTop <= 1900){
			$('.more3').show(1000);
			//$('div.wrap>.about>div>.show>.left>video').attr('autoplay',true);
			//$('div.wrap>.about>div>.show>.left>video').attr('autoplay','autoplay');
		}else if(scrollTop > 2000){
			$('div.wrap>.case>ul>li').fadeIn(2000);
		}
	})
})