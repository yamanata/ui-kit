$(document).ready(function(){

$('.nav1__item a').on('click',function(){

	var nav2 = $(this).closest('.nav1__item').find('.nav2');
		if(nav2.hasClass("nav--active")){
			nav2.removeClass("nav--active");
		}

		else{
			nav2.addClass("nav--active");
		}
});

});