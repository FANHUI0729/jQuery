$(function(){
	$('div.wrap>.main>.new>.left>div').click(function(){
		var index = $(this).attr('index');
		if(index == 0){
			$('div.wrap>.main>.new>.right>ul>li').css('display','block');
		}else if(index == 1){
			$('div.wrap>.main>.new>.right>ul>li.aboutUs').css('display','block');	
			$('div.wrap>.main>.new>.right>ul>li.industryNews').css('display','none');	
		}else if(index == 2){
			$('div.wrap>.main>.new>.right>ul>li.aboutUs').css('display','none');	
			$('div.wrap>.main>.new>.right>ul>li.industryNews').css('display','block');
		}
	})
})