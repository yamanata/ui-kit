$(document).ready(function(){

$('.tab__title a').on('click',function(){
	$(this).closest('.tab').find('.tab__title').removeClass('tab__title--active');
	$(this).closest('.tab__title').addClass('tab__title--active');
	$(this).closest('.tab').find('.tab__content').removeClass('tab__content--active');
	var target_id = $(this).attr('href');
	$(target_id).addClass('tab__content--active');

	return false;
});

});