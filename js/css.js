$(document).ready(function(){
	$(".propiedad").click(function(){
		var $att = $(this).attr("id");
		switch($att) {
			case 'propiedad':
			    $("#ejemplo").html('<textarea id="ta_ejemplo" disabled>align-content: stretch|center|flex-start|flex-end|space-between|space-around;</textarea>');
				$("#editor").html('<div id="ta_editor"><div><input type="radio" name="option" value="stretch" class="option">stretch<input type="radio" name="option" value="center" class="option">center</div></div>');
				$(".option").click(function(){
					var $cambio = $(this).attr("value");
					alert($cambio);
					$("#editor").html('<div id="ta_editor"><div id="main" style="width:70px; height:300px; border:1px solid red; display:flex; flex-wrap:wrap; align-content:'+$cambio+';"><div style="background-color:coral; width:70px; height:70px;"></div><div style="background-color:lightblue; width:70px; height:70px;"></div><div style="background-color:pink; width:70px; height:70px;"></div></div></div>');

					// switch($cambio){
					// 	case  '1':
					// 		var $1 = 'stretch';
					// 		alert($1);
					// 		$("#editor").html('<div id="ta_editor"><div id="main" style="width:70px; height:300px; border:1px solid red; display:flex; flex-wrap:wrap; align-content:stretch;"><div style="background-color:coral; width:70px; height:70px;"></div><div style="background-color:lightblue; width:70px; height:70px;"></div><div style="background-color:pink; width:70px; height:70px;"></div></div></div>');
					// 		break;
					// 	case '2':
					// 		var $2 = 'center';
					// 		alert($2);
					// 		$("#editor").html('<div id="ta_editor"><div id="main" style="width:70px; height:300px; border:1px solid red; display:flex; flex-wrap:wrap; align-content:center;"><div style="background-color:coral; width:70px; height:70px;"></div><div style="background-color:lightblue; width:70px; height:70px;"></div><div style="background-color:pink; width:70px; height:70px;"></div></div></div>');
					// 		break;
					// 	default:
					// 		alert('error');
					// }			    	
			    });
				break;
			case 'propiedad1':
			    $("#ejemplo").html('<textarea id="ta_ejemplo" disabled></textarea>');
				$("#editor").html('<div id="ta_editor"></div>');
				break;
			case 'propiedad2':
			    $("#ejemplo").html('<textarea id="ta_ejemplo" disabled></textarea>');
				$("#editor").html('<div id="ta_editor"></div>');
				break;
			case 'propiedad3':
			    $("#ejemplo").html('<textarea id="ta_ejemplo" disabled></textarea>');
				$("#editor").html('<div id="ta_editor"></div>');
				break;
			case 'propiedad4':
			    $("#ejemplo").html('<textarea id="ta_ejemplo" disabled></textarea>');
				$("#editor").html('<div id="ta_editor"></div>');
				break;
			case 'propiedad5':
			    $("#ejemplo").html('<textarea id="ta_ejemplo" disabled></textarea>');
				$("#editor").html('<div id="ta_editor"></div>');
				break;
			case 'propiedad6':
			    $("#ejemplo").html('<textarea id="ta_ejemplo" disabled></textarea>');
				$("#editor").html('<div id="ta_editor"></div>');
				break;
			case 'propiedad7':
			    $("#ejemplo").html('<textarea id="ta_ejemplo" disabled></textarea>');
				$("#editor").html('<div id="ta_editor"></div>');
				break;
			case 'propiedad8':
			    $("#ejemplo").html('<textarea id="ta_ejemplo" disabled></textarea>');
				$("#editor").html('<div id="ta_editor"></div>');
				break;
			case 'propiedad9':
			    $("#ejemplo").html('<textarea id="ta_ejemplo" disabled></textarea>');
				$("#editor").html('<div id="ta_editor"></div>');
				break;
			case 'propiedad10':
			    $("#ejemplo").html('<textarea id="ta_ejemplo" disabled></textarea>');
				$("#editor").html('<div id="ta_editor"></div>');
				break;
			case 'propiedad11':
			    $("#ejemplo").html('<textarea id="ta_ejemplo" disabled></textarea>');
				$("#editor").html('<div id="ta_editor" style=""></div>');
				break;
			case 'propiedad12':
			    $("#ejemplo").html('<textarea id="ta_ejemplo" disabled></textarea>');
				$("#editor").html('<div id="ta_editor" style=""></div>');
				break;
			case 'propiedad13':
			    $("#ejemplo").html('<textarea id="ta_ejemplo" disabled></textarea>');
				$("#editor").html('<div id="ta_editor" style=""></div>');
				break;
			case 'propiedad14':
			    $("#ejemplo").html('<textarea id="ta_ejemplo" disabled></textarea>');
				$("#editor").html('<div id="ta_editor" style=""></div>');
				break;
			case 'propiedad15':
			    $("#ejemplo").html('<textarea id="ta_ejemplo" disabled></textarea>');
				$("#editor").html('<div id="ta_editor" style=""></div>');
				break;
			case 'propiedad16':
			    $("#ejemplo").html('<textarea id="ta_ejemplo" disabled></textarea>');
				$("#editor").html('<div id="ta_editor" style=""></div>');
				break;
			case 'propiedad17':
			    $("#ejemplo").html('<textarea id="ta_ejemplo" disabled></textarea>');
				$("#editor").html('<div id="ta_editor" style=""></div>');
				break;
			case 'propiedad18':
			    $("#ejemplo").html('<textarea id="ta_ejemplo" disabled></textarea>');
				$("#editor").html('<div id="ta_editor" style=""></div>');
				break;
			case 'propiedad19':
			    $("#ejemplo").html('<textarea id="ta_ejemplo" disabled></textarea>');
				$("#editor").html('<div id="ta_editor" style=""></div>');
				break;
			case 'propiedad20':
			    $("#ejemplo").html('<textarea id="ta_ejemplo" disabled></textarea>');
				$("#editor").html('<div id="ta_editor" style=""></div>');
				break;
			case 'propiedad21':
			    $("#ejemplo").html('<textarea id="ta_ejemplo" disabled></textarea>');
				$("#editor").html('<div id="ta_editor" style=""></div>');
				break;
			case 'propiedad22':
			    $("#ejemplo").html('<textarea id="ta_ejemplo" disabled></textarea>');
				$("#editor").html('<div id="ta_editor" style=""></div>');
				break;
			case 'propiedad23':
			    $("#ejemplo").html('<textarea id="ta_ejemplo" disabled></textarea>');
				$("#editor").html('<div id="ta_editor" style=""></div>');
				break;
			case 'propiedad24':
			    $("#ejemplo").html('<textarea id="ta_ejemplo" disabled></textarea>');
				$("#editor").html('<div id="ta_editor" style=""></div>');
				break;
			case 'propiedad25':
			    $("#ejemplo").html('<textarea id="ta_ejemplo" disabled></textarea>');
				$("#editor").html('<div id="ta_editor" style=""></div>');
				break;
			case 'propiedad26':
			    $("#ejemplo").html('<textarea id="ta_ejemplo" disabled></textarea>');
				$("#editor").html('<div id="ta_editor" style=""></div>');
				break;
			case 'propiedad27':
			    $("#ejemplo").html('<textarea id="ta_ejemplo" disabled></textarea>');
				$("#editor").html('<div id="ta_editor" style=""></div>');
				break;
			case 'propiedad28':
			    $("#ejemplo").html('<textarea id="ta_ejemplo" disabled></textarea>');
				$("#editor").html('<div id="ta_editor" style=""></div>');
				break;
			case 'propiedad29':
			    $("#ejemplo").html('<textarea id="ta_ejemplo" disabled></textarea>');
				$("#editor").html('<div id="ta_editor" style=""></div>');
				break;
			case 'propiedad30':
			    $("#ejemplo").html('<textarea id="ta_ejemplo" disabled></textarea>');
				$("#editor").html('<div id="ta_editor" style=""></div>');
				break;
			case 'propiedad31':
			    $("#ejemplo").html('<textarea id="ta_ejemplo" disabled></textarea>');
				$("#editor").html('<div id="ta_editor" style=""></div>');
				break;
			case 'propiedad32':
			    $("#ejemplo").html('<textarea id="ta_ejemplo" disabled></textarea>');
				$("#editor").html('<div id="ta_editor" style=""></div>');
				break;
			case 'propiedad33':
			    $("#ejemplo").html('<textarea id="ta_ejemplo" disabled></textarea>');
				$("#editor").html('<div id="ta_editor" style=""></div>');
				break;
			case 'propiedad34':
			    $("#ejemplo").html('<textarea id="ta_ejemplo" disabled></textarea>');
				$("#editor").html('<div id="ta_editor" style=""></div>');
				break;
			case 'propiedad35':
			    $("#ejemplo").html('<textarea id="ta_ejemplo" disabled></textarea>');
				$("#editor").html('<div id="ta_editor" style=""></div>');
				break;
			case 'propiedad36':
			    $("#ejemplo").html('<textarea id="ta_ejemplo" disabled></textarea>');
				$("#editor").html('<div id="ta_editor" style=""></div>');
				break;
			case 'propiedad37':
			    $("#ejemplo").html('<textarea id="ta_ejemplo" disabled></textarea>');
				$("#editor").html('<div id="ta_editor" style=""></div>');
				break;
			case 'propiedad38':
			    $("#ejemplo").html('<textarea id="ta_ejemplo" disabled></textarea>');
				$("#editor").html('<div id="ta_editor" style=""></div>');
				break;
			case 'propiedad39':
			    $("#ejemplo").html('<textarea id="ta_ejemplo" disabled></textarea>');
				$("#editor").html('<div id="ta_editor" style=""></div>');
				break;
			case 'propiedad40':
			    $("#ejemplo").html('<textarea id="ta_ejemplo" disabled></textarea>');
				$("#editor").html('<div id="ta_editor" style=""></div>');
				break;
			case 'propiedad41':
			    $("#ejemplo").html('<textarea id="ta_ejemplo" disabled></textarea>');
				$("#editor").html('<div id="ta_editor" style=""></div>');
				break;
			case 'propiedad42':
			    $("#ejemplo").html('<textarea id="ta_ejemplo" disabled></textarea>');
				$("#editor").html('<div id="ta_editor" style=""></div>');
				break;
			case 'propiedad43':
			    $("#ejemplo").html('<textarea id="ta_ejemplo" disabled></textarea>');
				$("#editor").html('<div id="ta_editor" style=""></div>');
				break;
			case 'propiedad44':
			    $("#ejemplo").html('<textarea id="ta_ejemplo" disabled></textarea>');
				$("#editor").html('<div id="ta_editor" style=""></div>');
				break;
			case 'propiedad45':
			    $("#ejemplo").html('<textarea id="ta_ejemplo" disabled></textarea>');
				$("#editor").html('<div id="ta_editor" style=""></div>');
				break;
			case 'propiedad46':
			    $("#ejemplo").html('<textarea id="ta_ejemplo" disabled></textarea>');
				$("#editor").html('<div id="ta_editor" style=""></div>');
				break;
			case 'propiedad47':
			    $("#ejemplo").html('<textarea id="ta_ejemplo" disabled></textarea>');
				$("#editor").html('<div id="ta_editor" style=""></div>');
				break;
			case 'propiedad48':
			    $("#ejemplo").html('<textarea id="ta_ejemplo" disabled></textarea>');
				$("#editor").html('<div id="ta_editor" style=""></div>');
				break;
			case 'propiedad49':
			    $("#ejemplo").html('<textarea id="ta_ejemplo" disabled></textarea>');
				$("#editor").html('<div id="ta_editor" style=""></div>');
				break;
			case 'propiedad50':
			    $("#ejemplo").html('<textarea id="ta_ejemplo" disabled></textarea>');
				$("#editor").html('<div id="ta_editor" style=""></div>');
				break;
			case 'propiedad51':
			    $("#ejemplo").html('<textarea id="ta_ejemplo" disabled></textarea>');
				$("#editor").html('<div id="ta_editor" style=""></div>');
				break;
			case 'propiedad52':
			    $("#ejemplo").html('<textarea id="ta_ejemplo" disabled></textarea>');
				$("#editor").html('<div id="ta_editor" style=""></div>');
				break;
			case 'propiedad53':
			    $("#ejemplo").html('<textarea id="ta_ejemplo" disabled></textarea>');
				$("#editor").html('<div id="ta_editor" style=""></div>');
				break;
			case 'propiedad54':
			    $("#ejemplo").html('<textarea id="ta_ejemplo" disabled></textarea>');
				$("#editor").html('<div id="ta_editor" style=""></div>');
				break;
			case 'propiedad55':
			    $("#ejemplo").html('<textarea id="ta_ejemplo" disabled></textarea>');
				$("#editor").html('<div id="ta_editor" style=""></div>');
				break;
			case 'propiedad56':
			    $("#ejemplo").html('<textarea id="ta_ejemplo" disabled></textarea>');
				$("#editor").html('<div id="ta_editor" style=""></div>');
				break;
			case 'propiedad57':
			    $("#ejemplo").html('<textarea id="ta_ejemplo" disabled></textarea>');
				$("#editor").html('<div id="ta_editor" style=""></div>');
				break;
			case 'propiedad58':
			    $("#ejemplo").html('<textarea id="ta_ejemplo" disabled></textarea>');
				$("#editor").html('<div id="ta_editor" style=""></div>');
				break;
			case 'propiedad59':
			    $("#ejemplo").html('<textarea id="ta_ejemplo" disabled></textarea>');
				$("#editor").html('<div id="ta_editor" style=""></div>');
				break;
			case 'propiedad60':
			    $("#ejemplo").html('<textarea id="ta_ejemplo" disabled></textarea>');
				$("#editor").html('<div id="ta_editor" style=""></div>');
				break;
			case 'propiedad61':
			    $("#ejemplo").html('<textarea id="ta_ejemplo" disabled></textarea>');
				$("#editor").html('<div id="ta_editor" style=""></div>');
				break;
			case 'propiedad62':
			    $("#ejemplo").html('<textarea id="ta_ejemplo" disabled></textarea>');
				$("#editor").html('<div id="ta_editor" style=""></div>');
				break;
			case 'propiedad63':
			    $("#ejemplo").html('<textarea id="ta_ejemplo" disabled></textarea>');
				$("#editor").html('<div id="ta_editor" style=""></div>');
				break;
			case 'propiedad64':
			    $("#ejemplo").html('<textarea id="ta_ejemplo" disabled></textarea>');
				$("#editor").html('<div id="ta_editor" style=""></div>');
				break;
			case 'propiedad65':
			    $("#ejemplo").html('<textarea id="ta_ejemplo" disabled></textarea>');
				$("#editor").html('<div id="ta_editor" style=""></div>');
				break;
			case 'propiedad66':
			    $("#ejemplo").html('<textarea id="ta_ejemplo" disabled></textarea>');
				$("#editor").html('<div id="ta_editor" style=""></div>');
				break;
			case 'propiedad67':
			    $("#ejemplo").html('<textarea id="ta_ejemplo" disabled></textarea>');
				$("#editor").html('<div id="ta_editor" style=""></div>');
				break;
			case 'propiedad68':
			    $("#ejemplo").html('<textarea id="ta_ejemplo" disabled></textarea>');
				$("#editor").html('<div id="ta_editor" style=""></div>');
				break;
			case 'propiedad69':
			    $("#ejemplo").html('<textarea id="ta_ejemplo" disabled></textarea>');
				$("#editor").html('<div id="ta_editor" style=""></div>');
				break;
			case 'propiedad70':
			    $("#ejemplo").html('<textarea id="ta_ejemplo" disabled></textarea>');
				$("#editor").html('<div id="ta_editor" style=""></div>');
				break;
			case 'propiedad71':
			    $("#ejemplo").html('<textarea id="ta_ejemplo" disabled></textarea>');
				$("#editor").html('<div id="ta_editor" style=""></div>');
				break;
			case 'propiedad72':
			    $("#ejemplo").html('<textarea id="ta_ejemplo" disabled></textarea>');
				$("#editor").html('<div id="ta_editor" style=""></div>');
				break;
			case 'propiedad73':
			    $("#ejemplo").html('<textarea id="ta_ejemplo" disabled></textarea>');
				$("#editor").html('<div id="ta_editor" style=""></div>');
				break;
			case 'propiedad74':
			    $("#ejemplo").html('<textarea id="ta_ejemplo" disabled></textarea>');
				$("#editor").html('<div id="ta_editor" style=""></div>');
				break;
			case 'propiedad75':
			    $("#ejemplo").html('<textarea id="ta_ejemplo" disabled></textarea>');
				$("#editor").html('<div id="ta_editor" style=""></div>');
				break;
			case 'propiedad76':
			    $("#ejemplo").html('<textarea id="ta_ejemplo" disabled></textarea>');
				$("#editor").html('<div id="ta_editor" style=""></div>');
				break;
			case 'propiedad77':
			    $("#ejemplo").html('<textarea id="ta_ejemplo" disabled></textarea>');
				$("#editor").html('<div id="ta_editor" style=""></div>');
				break;
			case 'propiedad78':
			    $("#ejemplo").html('<textarea id="ta_ejemplo" disabled></textarea>');
				$("#editor").html('<div id="ta_editor" style=""></div>');
				break;
			case 'propiedad79':
			    $("#ejemplo").html('<textarea id="ta_ejemplo" disabled></textarea>');
				$("#editor").html('<div id="ta_editor" style=""></div>');
				break;
			case 'propiedad80':
			    $("#ejemplo").html('<textarea id="ta_ejemplo" disabled></textarea>');
				$("#editor").html('<div id="ta_editor" style=""></div>');
				break;
			case 'propiedad81':
			    $("#ejemplo").html('<textarea id="ta_ejemplo" disabled></textarea>');
				$("#editor").html('<div id="ta_editor" style=""></div>');
				break;
			case 'propiedad82':
			    $("#ejemplo").html('<textarea id="ta_ejemplo" disabled></textarea>');
				$("#editor").html('<div id="ta_editor" style=""></div>');
				break;
			case 'propiedad83':
			    $("#ejemplo").html('<textarea id="ta_ejemplo" disabled></textarea>');
				$("#editor").html('<div id="ta_editor" style=""></div>');
				break;
			case 'propiedad84':
			    $("#ejemplo").html('<textarea id="ta_ejemplo" disabled></textarea>');
				$("#editor").html('<div id="ta_editor" style=""></div>');
				break;
			case 'propiedad85':
			    $("#ejemplo").html('<textarea id="ta_ejemplo" disabled></textarea>');
				$("#editor").html('<div id="ta_editor" style=""></div>');
				break;
			case 'propiedad86':
			    $("#ejemplo").html('<textarea id="ta_ejemplo" disabled></textarea>');
				$("#editor").html('<div id="ta_editor" style=""></div>');
				break;
			case 'propiedad87':
			    $("#ejemplo").html('<textarea id="ta_ejemplo" disabled></textarea>');
				$("#editor").html('<div id="ta_editor" style=""></div>');
				break;
			case 'propiedad88':
			    $("#ejemplo").html('<textarea id="ta_ejemplo" disabled></textarea>');
				$("#editor").html('<div id="ta_editor" style=""></div>');
				break;
			case 'propiedad89':
			    $("#ejemplo").html('<textarea id="ta_ejemplo" disabled></textarea>');
				$("#editor").html('<div id="ta_editor" style=""></div>');
				break;
			case 'propiedad90':
			    $("#ejemplo").html('<textarea id="ta_ejemplo" disabled></textarea>');
				$("#editor").html('<div id="ta_editor" style=""></div>');
				break;
			case 'propiedad91':
			    $("#ejemplo").html('<textarea id="ta_ejemplo" disabled></textarea>');
				$("#editor").html('<div id="ta_editor" style=""></div>');
				break;
			case 'propiedad92':
			    $("#ejemplo").html('<textarea id="ta_ejemplo" disabled></textarea>');
				$("#editor").html('<div id="ta_editor" style=""></div>');
				break;
			case 'propiedad93':
			    $("#ejemplo").html('<textarea id="ta_ejemplo" disabled></textarea>');
				$("#editor").html('<div id="ta_editor" style=""></div>');
				break;
			case 'propiedad94':
			    $("#ejemplo").html('<textarea id="ta_ejemplo" disabled></textarea>');
				$("#editor").html('<div id="ta_editor" style=""></div>');
				break;
			case 'propiedad95':
			    $("#ejemplo").html('<textarea id="ta_ejemplo" disabled></textarea>');
				$("#editor").html('<div id="ta_editor" style=""></div>');
				break;
			case 'propiedad96':
			    $("#ejemplo").html('<textarea id="ta_ejemplo" disabled></textarea>');
				$("#editor").html('<div id="ta_editor" style=""></div>');
				break;
			case 'propiedad97':
			    $("#ejemplo").html('<textarea id="ta_ejemplo" disabled></textarea>');
				$("#editor").html('<div id="ta_editor" style=""></div>');
				break;
			case 'propiedad98':
			    $("#ejemplo").html('<textarea id="ta_ejemplo" disabled></textarea>');
				$("#editor").html('<div id="ta_editor" style=""></div>');
				break;
			case 'propiedad99':
			    $("#ejemplo").html('<textarea id="ta_ejemplo" disabled></textarea>');
				$("#editor").html('<div id="ta_editor" style=""></div>');
				break;
			case 'propiedad100':
			    $("#ejemplo").html('<textarea id="ta_ejemplo" disabled></textarea>');
				$("#editor").html('<div id="ta_editor" style=""></div>');
				break;
			case 'propiedad':
			    $("#ejemplo").html('<textarea id="ta_ejemplo" disabled></textarea>');
				$("#editor").html('<div id="ta_editor" style=""></div>');
				break;
			case 'propiedad':
			    $("#ejemplo").html('<textarea id="ta_ejemplo" disabled></textarea>');
				$("#editor").html('<div id="ta_editor" style=""></div>');
				break;
			case 'propiedad':
			    $("#ejemplo").html('<textarea id="ta_ejemplo" disabled></textarea>');
				$("#editor").html('<div id="ta_editor" style=""></div>');
				break;
			case 'propiedad':
			    $("#ejemplo").html('<textarea id="ta_ejemplo" disabled></textarea>');
				$("#editor").html('<div id="ta_editor" style=""></div>');
				break;
			case 'propiedad':
			    $("#ejemplo").html('<textarea id="ta_ejemplo" disabled></textarea>');
				$("#editor").html('<div id="ta_editor" style=""></div>');
				break;
			case 'propiedad':
			    $("#ejemplo").html('<textarea id="ta_ejemplo" disabled></textarea>');
				$("#editor").html('<div id="ta_editor" style=""></div>');
				break;
			case 'propiedad':
			    $("#ejemplo").html('<textarea id="ta_ejemplo" disabled></textarea>');
				$("#editor").html('<div id="ta_editor" style=""></div>');
				break;
			case 'propiedad':
			    $("#ejemplo").html('<textarea id="ta_ejemplo" disabled></textarea>');
				$("#editor").html('<div id="ta_editor" style=""></div>');
				break;
			case 'propiedad':
			    $("#ejemplo").html('<textarea id="ta_ejemplo" disabled></textarea>');
				$("#editor").html('<div id="ta_editor" style=""></div>');
				break;
			case 'propiedad':
			    $("#ejemplo").html('<textarea id="ta_ejemplo" disabled></textarea>');
				$("#editor").html('<div id="ta_editor" style=""></div>');
				break;
			case 'propiedad':
			    $("#ejemplo").html('<textarea id="ta_ejemplo" disabled></textarea>');
				$("#editor").html('<div id="ta_editor" style=""></div>');
				break;
			case 'propiedad':
			    $("#ejemplo").html('<textarea id="ta_ejemplo" disabled></textarea>');
				$("#editor").html('<div id="ta_editor" style=""></div>');
				break;
			case 'propiedad':
			    $("#ejemplo").html('<textarea id="ta_ejemplo" disabled></textarea>');
				$("#editor").html('<div id="ta_editor" style=""></div>');
				break;
			case 'propiedad':
			    $("#ejemplo").html('<textarea id="ta_ejemplo" disabled></textarea>');
				$("#editor").html('<div id="ta_editor" style=""></div>');
				break;
			case 'propiedad':
			    $("#ejemplo").html('<textarea id="ta_ejemplo" disabled></textarea>');
				$("#editor").html('<div id="ta_editor" style=""></div>');
				break;
			case 'propiedad':
			    $("#ejemplo").html('<textarea id="ta_ejemplo" disabled></textarea>');
				$("#editor").html('<div id="ta_editor" style=""></div>');
				break;
			case 'propiedad':
			    $("#ejemplo").html('<textarea id="ta_ejemplo" disabled></textarea>');
				$("#editor").html('<div id="ta_editor" style=""></div>');
				break;
			case 'propiedad':
			    $("#ejemplo").html('<textarea id="ta_ejemplo" disabled></textarea>');
				$("#editor").html('<div id="ta_editor" style=""></div>');
				break;
			case 'propiedad':
			    $("#ejemplo").html('<textarea id="ta_ejemplo" disabled></textarea>');
				$("#editor").html('<div id="ta_editor" style=""></div>');
				break;
			case 'propiedad':
			    $("#ejemplo").html('<textarea id="ta_ejemplo" disabled></textarea>');
				$("#editor").html('<div id="ta_editor" style=""></div>');
				break;
			case 'propiedad':
			    $("#ejemplo").html('<textarea id="ta_ejemplo" disabled></textarea>');
				$("#editor").html('<div id="ta_editor" style=""></div>');
				break;
			case 'propiedad':
			    $("#ejemplo").html('<textarea id="ta_ejemplo" disabled></textarea>');
				$("#editor").html('<div id="ta_editor" style=""></div>');
				break;
			case 'propiedad':
			    $("#ejemplo").html('<textarea id="ta_ejemplo" disabled></textarea>');
				$("#editor").html('<div id="ta_editor" style=""></div>');
				break;
			case 'propiedad':
			    $("#ejemplo").html('<textarea id="ta_ejemplo" disabled></textarea>');
				$("#editor").html('<div id="ta_editor" style=""></div>');
				break;
			case 'propiedad':
			    $("#ejemplo").html('<textarea id="ta_ejemplo" disabled></textarea>');
				$("#editor").html('<div id="ta_editor" style=""></div>');
				break;
			case 'propiedad':
			    $("#ejemplo").html('<textarea id="ta_ejemplo" disabled></textarea>');
				$("#editor").html('<div id="ta_editor" style=""></div>');
				break;
			case 'propiedad':
			    $("#ejemplo").html('<textarea id="ta_ejemplo" disabled></textarea>');
				$("#editor").html('<div id="ta_editor" style=""></div>');
				break;
			case 'propiedad':
			    $("#ejemplo").html('<textarea id="ta_ejemplo" disabled></textarea>');
				$("#editor").html('<div id="ta_editor" style=""></div>');
				break;
			case 'propiedad':
			    $("#ejemplo").html('<textarea id="ta_ejemplo" disabled></textarea>');
				$("#editor").html('<div id="ta_editor" style=""></div>');
				break;
			case 'propiedad':
			    $("#ejemplo").html('<textarea id="ta_ejemplo" disabled></textarea>');
				$("#editor").html('<div id="ta_editor" style=""></div>');
				break;
			case 'propiedad':
			    $("#ejemplo").html('<textarea id="ta_ejemplo" disabled></textarea>');
				$("#editor").html('<div id="ta_editor" style=""></div>');
				break;
			case 'propiedad':
			    $("#ejemplo").html('<textarea id="ta_ejemplo" disabled></textarea>');
				$("#editor").html('<div id="ta_editor" style=""></div>');
				break;
			case 'propiedad':
			    $("#ejemplo").html('<textarea id="ta_ejemplo" disabled></textarea>');
				$("#editor").html('<div id="ta_editor" style=""></div>');
				break;
			case 'propiedad':
			    $("#ejemplo").html('<textarea id="ta_ejemplo" disabled></textarea>');
				$("#editor").html('<div id="ta_editor" style=""></div>');
				break;
			case 'propiedad':
			    $("#ejemplo").html('<textarea id="ta_ejemplo" disabled></textarea>');
				$("#editor").html('<div id="ta_editor" style=""></div>');
				break;
			case 'propiedad':
			    $("#ejemplo").html('<textarea id="ta_ejemplo" disabled></textarea>');
				$("#editor").html('<div id="ta_editor" style=""></div>');
				break;
			case 'propiedad':
			    $("#ejemplo").html('<textarea id="ta_ejemplo" disabled></textarea>');
				$("#editor").html('<div id="ta_editor" style=""></div>');
				break;
			case 'propiedad':
			    $("#ejemplo").html('<textarea id="ta_ejemplo" disabled></textarea>');
				$("#editor").html('<div id="ta_editor" style=""></div>');
				break;
			case 'propiedad':
			    $("#ejemplo").html('<textarea id="ta_ejemplo" disabled></textarea>');
				$("#editor").html('<div id="ta_editor" style=""></div>');
				break;
			case 'propiedad':
			    $("#ejemplo").html('<textarea id="ta_ejemplo" disabled></textarea>');
				$("#editor").html('<div id="ta_editor" style=""></div>');
				break;
			case 'propiedad':
			    $("#ejemplo").html('<textarea id="ta_ejemplo" disabled></textarea>');
				$("#editor").html('<div id="ta_editor" style=""></div>');
				break;
			case 'propiedad':
			    $("#ejemplo").html('<textarea id="ta_ejemplo" disabled></textarea>');
				$("#editor").html('<div id="ta_editor" style=""></div>');
				break;
			case 'propiedad':
			    $("#ejemplo").html('<textarea id="ta_ejemplo" disabled></textarea>');
				$("#editor").html('<div id="ta_editor" style=""></div>');
				break;
			case 'propiedad':
			    $("#ejemplo").html('<textarea id="ta_ejemplo" disabled></textarea>');
				$("#editor").html('<div id="ta_editor" style=""></div>');
				break;
			case 'propiedad':
			    $("#ejemplo").html('<textarea id="ta_ejemplo" disabled></textarea>');
				$("#editor").html('<div id="ta_editor" style=""></div>');
				break;
			case 'propiedad':
			    $("#ejemplo").html('<textarea id="ta_ejemplo" disabled></textarea>');
				$("#editor").html('<div id="ta_editor" style=""></div>');
				break;
			case 'propiedad':
			    $("#ejemplo").html('<textarea id="ta_ejemplo" disabled></textarea>');
				$("#editor").html('<div id="ta_editor" style=""></div>');
				break;
			case 'propiedad':
			    $("#ejemplo").html('<textarea id="ta_ejemplo" disabled></textarea>');
				$("#editor").html('<div id="ta_editor" style=""></div>');
				break;
			case 'propiedad':
			    $("#ejemplo").html('<textarea id="ta_ejemplo" disabled></textarea>');
				$("#editor").html('<div id="ta_editor" style=""></div>');
				break;
			case 'propiedad':
			    $("#ejemplo").html('<textarea id="ta_ejemplo" disabled></textarea>');
				$("#editor").html('<div id="ta_editor" style=""></div>');
				break;
			case 'propiedad':
			    $("#ejemplo").html('<textarea id="ta_ejemplo" disabled></textarea>');
				$("#editor").html('<div id="ta_editor" style=""></div>');
				break;
			case 'propiedad':
			    $("#ejemplo").html('<textarea id="ta_ejemplo" disabled></textarea>');
				$("#editor").html('<div id="ta_editor" style=""></div>');
				break;
			default:
				alert('error');
		}
	});
});