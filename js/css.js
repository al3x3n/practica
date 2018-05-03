$(document).ready(function(){
	$(".propiedad").click(function(){
		var $att = $(this).attr("id");
		switch($att) {
			case 'propiedad':
			    $("#ejemplo").html('<textarea id="ta_ejemplo" disabled>background-color: color;\nbackground-image: url|linear-gradient()|radial-gradient()|repeating-linear-gradient()|repeating-radial-gradient();\nbackground-repeat: repeat-x|repeat-y|no-repeat|space|round;\nbackground-attachment: scroll|fixed;\nbackground-position: x% y%|xpx ypx|left  right center - top center bottom;</textarea>');
				$("#editor").html('<div id="ta_editor" style="background:SPRINGGREEN url(image/css3.png) no-repeat scroll center center;"></div>');
				break;
			default:
				alert('error');
		}
	});
});