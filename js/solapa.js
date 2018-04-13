$(document).ready(function(){
$('ul.tabs li a:first').addClass('active');
	$('.menu-o').hide();
	$('.menu-o:first').show();

	$('ul.tabs li a').click(function(){
		$('ul.tabs li a').removeClass('active');
		$(this).addClass('active');
		$('.menu-o').hide();

		var activeTab = $(this).attr('href');
		$(activeTab).show();
		return false;
	});
});