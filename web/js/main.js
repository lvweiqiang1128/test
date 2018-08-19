// JavaScript Document

$(function(){
    
	$(".menubok>ul>li").hover(function(){
		var liw=$(this).width()+40;
		//$(this).find("ul").css({"width":liw+"px","display":"block"});
		$(this).find("ul").css({"display":"block","left":$(this).offset().left+"px","top":$(this).offset().top+37+"px"});
		$(this).addClass("selectde");
		},
	
	function(){
		$(this).find("ul").css({"display":"none"});
		$(this).removeClass("selectde");
		})
		
    $(".headnav_b a").click(function(){
		if($(".headnav_suso").is(":hidden"))
		{
			$(".headnav_suso").css({"left":$(this).offset().left+"px","top":$(this).offset().top+37+"px","display":"block"});
		}else{
			$(".headnav_suso").css({"display":"none"});
		}	
		})
		
		$(".sousolist li:nth-child(even)").css({"background":"#ebebeb"});
	
});