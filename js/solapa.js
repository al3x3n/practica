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

		$("#ejemplo").html('<textarea id="ta_ejemplo" disabled></textarea>');

		$("#botonera").html('<div id="bot_opciones"><div id="list_opciones"></div></div>');

		$("#editor").html('<div id="ta_editor"></div>');

		return false;
	});
});