$(document).ready(function(){
	$(".propiedad").click(function(){
		var $att = $(this).attr("id");
		$("#editor").html('<div id="ta_editor"></div>')
		switch($att) {
			case 'propiedad':
			    $("#ejemplo").html('<div id="border_ejemplo" style="overflow:auto;">align-content: stretch|center|flex-start|flex-end|space-between|space-around;<hr>contenedor principal {<br><p>width:70px;</p><p>height:300px;</p><p>border:1px solid red;</p><p>display:flex;</p><p>flex-wrap:wrap;</p><p>align-content:"";</p>}</div>');
				$("#botonera").html('<div id="bot_opciones"><div id="list_opciones"><input type="radio" name="option" value="stretch" class="option" id="stretch"><label for="stretch">stretch</label><input type="radio" name="option" value="center" class="option" id="center"><label for="center">center</label><input type="radio" name="option" value="flex-start" class="option" id="flex-start"><label for="flex-start">flex-start</label><input type="radio" name="option" value="flex-end" class="option" id="flex-end"><label for="flex-end">flex-end</label><input type="radio" name="option" value="space-between" class="option" id="space-between"><label for="space-between">space-between</label><input type="radio" name="option" value="space-around" class="option" id="space-around"><label for="space-around">space-around</label></div></div>');
				$(".option").click(function(){
					var $cambio = $(this).attr("value");
					$("#editor").html('<div id="ta_editor"><div id="main" style="width:70px; height:300px; border:1px solid red; display:flex; flex-wrap:wrap; align-content:'+$cambio+';"><div style="background-color:coral; width:70px; height:70px;"></div><div style="background-color:lightblue; width:70px; height:70px;"></div><div style="background-color:pink; width:70px; height:70px;"></div></div></div>');			    	
			    });
				break;
			case 'propiedad1':
			    $("#ejemplo").html('<div id="border_ejemplo" style="overflow:auto;">align-items: stretch|center|flex-start|flex-end|baseline;<hr>contenedor principal {<br><p>width:220px;</p><p>height:300px;</p><p>border:1px solid red;</p><p>display:flex;</p><p>align-items:"";</p>}</div>');
				$("#botonera").html('<div id="bot_opciones"><div id="list_opciones"><input type="radio" name="option" value="stretch" class="option" id="stretch"><label for="stretch">stretch</label><input type="radio" name="option" value="center" class="option" id="center"><label for="center">center</label><input type="radio" name="option" value="flex-start" class="option" id="flex-start"><label for="flex-start">flex-start</label><input type="radio" name="option" value="flex-end" class="option" id="flex-end"><label for="flex-end">flex-end</label></div></div>');
				$(".option").click(function(){
					var $cambio = $(this).attr("value");
					$("#editor").html('<div id="ta_editor"><div id="main" style="width:220px;height:300px;border:1px solid red;display:flex;align-items:'+$cambio+';"><div style="background-color:crimson;flex:1;">ROJO</div><div style="background-color:lightblue;flex:1;">AZUL</div><div style="background-color:lightgreen;flex:1;">VERDE</div></div></div>');			    	
			    });
				break;
			case 'propiedad2':
			    $("#ejemplo").html('<div id="border_ejemplo" style="overflow:auto;">align-self: stretch|center|flex-start|flex-end;<hr>contenedor a mover {<br><p>align-self:"";</p>}</div>');
				$("#botonera").html('<div id="bot_opciones"><div id="list_opciones"><input type="radio" name="option" value="stretch" class="option" id="stretch"><label for="stretch">stretch</label><input type="radio" name="option" value="center" class="option" id="center"><label for="center">center</label><input type="radio" name="option" value="flex-start" class="option" id="flex-start"><label for="flex-start">flex-start</label><input type="radio" name="option" value="flex-end" class="option" id="flex-end"><label for="flex-end">flex-end</label></div></div>');
				$(".option").click(function(){
					var $cambio = $(this).attr("value");
					$("#editor").html('<div id="ta_editor"><div id="main" style="width:220px;height:300px;border:1px solid red;display:flex;align-items:flex-start;"><div style="background-color:crimson;flex:1;">ROJO</div><div style="background-color:lightblue;flex:1;align-self:'+$cambio+';" id="myBlueDiv">AZUL</div><div style="background-color:lightgreen;flex:1;">VERDE</div></div></div>');			    	
			    });
				break;
			case 'propiedad3':
			    $("#ejemplo").html('<div id="border_ejemplo" style="overflow:auto;">all: initial|inherit|unset;<hr>elemento a afectar {<br><p>background-color:yellow;</p><p>color:red;</p><p>all:"";</p>}</div>');
				$("#botonera").html('<div id="bot_opciones"><div id="list_opciones"><input type="radio" name="option" value="initial" class="option" id="initial"><label for="initial">initial</label><input type="radio" name="option" value="inherit" class="option" id="inherit"><label for="inherit">inherit</label></div></div>');
				$(".option").click(function(){
					var $cambio = $(this).attr("value");
					$("#editor").html('<div id="ta_editor"><div style="font-size:small;color:blue;"><p>sin propiedad all:</p><div id="ex1" style="background-color:yellow;color:red;">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div><p>con propiedad all:</p><div id="ex2" style="background-color:yellow;color:red;all:'+$cambio+';">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div></div></div>');			    	
			    });
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
			case 'propiedad101':
			    $("#ejemplo").html('<textarea id="ta_ejemplo" disabled></textarea>');
				$("#editor").html('<div id="ta_editor" style=""></div>');
				break;
			case 'propiedad102':
			    $("#ejemplo").html('<textarea id="ta_ejemplo" disabled></textarea>');
				$("#editor").html('<div id="ta_editor" style=""></div>');
				break;
			case 'propiedad103':
			    $("#ejemplo").html('<textarea id="ta_ejemplo" disabled></textarea>');
				$("#editor").html('<div id="ta_editor" style=""></div>');
				break;
			case 'propiedad104':
			    $("#ejemplo").html('<textarea id="ta_ejemplo" disabled></textarea>');
				$("#editor").html('<div id="ta_editor" style=""></div>');
				break;
			case 'propiedad105':
			    $("#ejemplo").html('<textarea id="ta_ejemplo" disabled></textarea>');
				$("#editor").html('<div id="ta_editor" style=""></div>');
				break;
			case 'propiedad106':
			    $("#ejemplo").html('<textarea id="ta_ejemplo" disabled></textarea>');
				$("#editor").html('<div id="ta_editor" style=""></div>');
				break;
			case 'propiedad107':
			    $("#ejemplo").html('<textarea id="ta_ejemplo" disabled></textarea>');
				$("#editor").html('<div id="ta_editor" style=""></div>');
				break;
			case 'propiedad108':
			    $("#ejemplo").html('<textarea id="ta_ejemplo" disabled></textarea>');
				$("#editor").html('<div id="ta_editor" style=""></div>');
				break;
			case 'propiedad109':
			    $("#ejemplo").html('<textarea id="ta_ejemplo" disabled></textarea>');
				$("#editor").html('<div id="ta_editor" style=""></div>');
				break;
			case 'propiedad110':
			    $("#ejemplo").html('<textarea id="ta_ejemplo" disabled></textarea>');
				$("#editor").html('<div id="ta_editor" style=""></div>');
				break;
			case 'propiedad111':
			    $("#ejemplo").html('<textarea id="ta_ejemplo" disabled></textarea>');
				$("#editor").html('<div id="ta_editor" style=""></div>');
				break;
			case 'propiedad112':
			    $("#ejemplo").html('<textarea id="ta_ejemplo" disabled></textarea>');
				$("#editor").html('<div id="ta_editor" style=""></div>');
				break;
			case 'propiedad113':
			    $("#ejemplo").html('<textarea id="ta_ejemplo" disabled></textarea>');
				$("#editor").html('<div id="ta_editor" style=""></div>');
				break;
			case 'propiedad114':
			    $("#ejemplo").html('<textarea id="ta_ejemplo" disabled></textarea>');
				$("#editor").html('<div id="ta_editor" style=""></div>');
				break;
			case 'propiedad115':
			    $("#ejemplo").html('<textarea id="ta_ejemplo" disabled></textarea>');
				$("#editor").html('<div id="ta_editor" style=""></div>');
				break;
			case 'propiedad116':
			    $("#ejemplo").html('<textarea id="ta_ejemplo" disabled></textarea>');
				$("#editor").html('<div id="ta_editor" style=""></div>');
				break;
			case 'propiedad117':
			    $("#ejemplo").html('<textarea id="ta_ejemplo" disabled></textarea>');
				$("#editor").html('<div id="ta_editor" style=""></div>');
				break;
			case 'propiedad118':
			    $("#ejemplo").html('<textarea id="ta_ejemplo" disabled></textarea>');
				$("#editor").html('<div id="ta_editor" style=""></div>');
				break;
			case 'propiedad119':
			    $("#ejemplo").html('<textarea id="ta_ejemplo" disabled></textarea>');
				$("#editor").html('<div id="ta_editor" style=""></div>');
				break;
			case 'propiedad120':
			    $("#ejemplo").html('<textarea id="ta_ejemplo" disabled></textarea>');
				$("#editor").html('<div id="ta_editor" style=""></div>');
				break;
			case 'propiedad121':
			    $("#ejemplo").html('<textarea id="ta_ejemplo" disabled></textarea>');
				$("#editor").html('<div id="ta_editor" style=""></div>');
				break;
			case 'propiedad122':
			    $("#ejemplo").html('<textarea id="ta_ejemplo" disabled></textarea>');
				$("#editor").html('<div id="ta_editor" style=""></div>');
				break;
			case 'propiedad123':
			    $("#ejemplo").html('<textarea id="ta_ejemplo" disabled></textarea>');
				$("#editor").html('<div id="ta_editor" style=""></div>');
				break;
			case 'propiedad124':
			    $("#ejemplo").html('<textarea id="ta_ejemplo" disabled></textarea>');
				$("#editor").html('<div id="ta_editor" style=""></div>');
				break;
			case 'propiedad125':
			    $("#ejemplo").html('<textarea id="ta_ejemplo" disabled></textarea>');
				$("#editor").html('<div id="ta_editor" style=""></div>');
				break;
			case 'propiedad126':
			    $("#ejemplo").html('<textarea id="ta_ejemplo" disabled></textarea>');
				$("#editor").html('<div id="ta_editor" style=""></div>');
				break;
			case 'propiedad127':
			    $("#ejemplo").html('<textarea id="ta_ejemplo" disabled></textarea>');
				$("#editor").html('<div id="ta_editor" style=""></div>');
				break;
			case 'propiedad128':
			    $("#ejemplo").html('<textarea id="ta_ejemplo" disabled></textarea>');
				$("#editor").html('<div id="ta_editor" style=""></div>');
				break;
			case 'propiedad129':
			    $("#ejemplo").html('<textarea id="ta_ejemplo" disabled></textarea>');
				$("#editor").html('<div id="ta_editor" style=""></div>');
				break;
			case 'propiedad130':
			    $("#ejemplo").html('<textarea id="ta_ejemplo" disabled></textarea>');
				$("#editor").html('<div id="ta_editor" style=""></div>');
				break;
			case 'propiedad131':
			    $("#ejemplo").html('<textarea id="ta_ejemplo" disabled></textarea>');
				$("#editor").html('<div id="ta_editor" style=""></div>');
				break;
			case 'propiedad132':
			    $("#ejemplo").html('<textarea id="ta_ejemplo" disabled></textarea>');
				$("#editor").html('<div id="ta_editor" style=""></div>');
				break;
			case 'propiedad133':
			    $("#ejemplo").html('<textarea id="ta_ejemplo" disabled></textarea>');
				$("#editor").html('<div id="ta_editor" style=""></div>');
				break;
			case 'propiedad134':
			    $("#ejemplo").html('<textarea id="ta_ejemplo" disabled></textarea>');
				$("#editor").html('<div id="ta_editor" style=""></div>');
				break;
			case 'propiedad135':
			    $("#ejemplo").html('<textarea id="ta_ejemplo" disabled></textarea>');
				$("#editor").html('<div id="ta_editor" style=""></div>');
				break;
			case 'propiedad136':
			    $("#ejemplo").html('<textarea id="ta_ejemplo" disabled></textarea>');
				$("#editor").html('<div id="ta_editor" style=""></div>');
				break;
			case 'propiedad137':
			    $("#ejemplo").html('<textarea id="ta_ejemplo" disabled></textarea>');
				$("#editor").html('<div id="ta_editor" style=""></div>');
				break;
			case 'propiedad138':
			    $("#ejemplo").html('<textarea id="ta_ejemplo" disabled></textarea>');
				$("#editor").html('<div id="ta_editor" style=""></div>');
				break;
			case 'propiedad139':
			    $("#ejemplo").html('<textarea id="ta_ejemplo" disabled></textarea>');
				$("#editor").html('<div id="ta_editor" style=""></div>');
				break;
			case 'propiedad140':
			    $("#ejemplo").html('<textarea id="ta_ejemplo" disabled></textarea>');
				$("#editor").html('<div id="ta_editor" style=""></div>');
				break;
			case 'propiedad141':
			    $("#ejemplo").html('<textarea id="ta_ejemplo" disabled></textarea>');
				$("#editor").html('<div id="ta_editor" style=""></div>');
				break;
			case 'propiedad142':
			    $("#ejemplo").html('<textarea id="ta_ejemplo" disabled></textarea>');
				$("#editor").html('<div id="ta_editor" style=""></div>');
				break;
			case 'propiedad143':
			    $("#ejemplo").html('<textarea id="ta_ejemplo" disabled></textarea>');
				$("#editor").html('<div id="ta_editor" style=""></div>');
				break;
			case 'propiedad144':
			    $("#ejemplo").html('<textarea id="ta_ejemplo" disabled></textarea>');
				$("#editor").html('<div id="ta_editor" style=""></div>');
				break;
			case 'propiedad145':
			    $("#ejemplo").html('<textarea id="ta_ejemplo" disabled></textarea>');
				$("#editor").html('<div id="ta_editor" style=""></div>');
				break;
			case 'propiedad146':
			    $("#ejemplo").html('<textarea id="ta_ejemplo" disabled></textarea>');
				$("#editor").html('<div id="ta_editor" style=""></div>');
				break;
			case 'propiedad147':
			    $("#ejemplo").html('<textarea id="ta_ejemplo" disabled></textarea>');
				$("#editor").html('<div id="ta_editor" style=""></div>');
				break;
			case 'propiedad148':
			    $("#ejemplo").html('<textarea id="ta_ejemplo" disabled></textarea>');
				$("#editor").html('<div id="ta_editor" style=""></div>');
				break;
			case 'propiedad149':
			    $("#ejemplo").html('<textarea id="ta_ejemplo" disabled></textarea>');
				$("#editor").html('<div id="ta_editor" style=""></div>');
				break;
			case 'propiedad150':
			    $("#ejemplo").html('<textarea id="ta_ejemplo" disabled></textarea>');
				$("#editor").html('<div id="ta_editor" style=""></div>');
				break;
			case 'propiedad151':
			    $("#ejemplo").html('<textarea id="ta_ejemplo" disabled></textarea>');
				$("#editor").html('<div id="ta_editor" style=""></div>');
				break;
			case 'propiedad152':
			    $("#ejemplo").html('<textarea id="ta_ejemplo" disabled></textarea>');
				$("#editor").html('<div id="ta_editor" style=""></div>');
				break;
			case 'propiedad153':
			    $("#ejemplo").html('<textarea id="ta_ejemplo" disabled></textarea>');
				$("#editor").html('<div id="ta_editor" style=""></div>');
				break;
			case 'propiedad154':
			    $("#ejemplo").html('<textarea id="ta_ejemplo" disabled></textarea>');
				$("#editor").html('<div id="ta_editor" style=""></div>');
				break;
			case 'propiedad155':
			    $("#ejemplo").html('<textarea id="ta_ejemplo" disabled></textarea>');
				$("#editor").html('<div id="ta_editor" style=""></div>');
				break;
			case 'propiedad156':
			    $("#ejemplo").html('<textarea id="ta_ejemplo" disabled></textarea>');
				$("#editor").html('<div id="ta_editor" style=""></div>');
				break;
			case 'propiedad157':
			    $("#ejemplo").html('<textarea id="ta_ejemplo" disabled></textarea>');
				$("#editor").html('<div id="ta_editor" style=""></div>');
				break;
			case 'propiedad158':
			    $("#ejemplo").html('<textarea id="ta_ejemplo" disabled></textarea>');
				$("#editor").html('<div id="ta_editor" style=""></div>');
				break;
			case 'propiedad159':
			    $("#ejemplo").html('<textarea id="ta_ejemplo" disabled></textarea>');
				$("#editor").html('<div id="ta_editor" style=""></div>');
				break;
			case 'propiedad160':
			    $("#ejemplo").html('<textarea id="ta_ejemplo" disabled></textarea>');
				$("#editor").html('<div id="ta_editor" style=""></div>');
				break;
			case 'propiedad161':
			    $("#ejemplo").html('<textarea id="ta_ejemplo" disabled></textarea>');
				$("#editor").html('<div id="ta_editor" style=""></div>');
				break;
			case 'propiedad162':
			    $("#ejemplo").html('<textarea id="ta_ejemplo" disabled></textarea>');
				$("#editor").html('<div id="ta_editor" style=""></div>');
				break;
			case 'propiedad163':
			    $("#ejemplo").html('<textarea id="ta_ejemplo" disabled></textarea>');
				$("#editor").html('<div id="ta_editor" style=""></div>');
				break;
			case 'propiedad164':
			    $("#ejemplo").html('<textarea id="ta_ejemplo" disabled></textarea>');
				$("#editor").html('<div id="ta_editor" style=""></div>');
				break;
			case 'propiedad165':
			    $("#ejemplo").html('<textarea id="ta_ejemplo" disabled></textarea>');
				$("#editor").html('<div id="ta_editor" style=""></div>');
				break;
			case 'propiedad166':
			    $("#ejemplo").html('<textarea id="ta_ejemplo" disabled></textarea>');
				$("#editor").html('<div id="ta_editor" style=""></div>');
				break;
			case 'propiedad167':
			    $("#ejemplo").html('<textarea id="ta_ejemplo" disabled></textarea>');
				$("#editor").html('<div id="ta_editor" style=""></div>');
				break;
			case 'propiedad168':
			    $("#ejemplo").html('<textarea id="ta_ejemplo" disabled></textarea>');
				$("#editor").html('<div id="ta_editor" style=""></div>');
				break;
			case 'propiedad169':
			    $("#ejemplo").html('<textarea id="ta_ejemplo" disabled></textarea>');
				$("#editor").html('<div id="ta_editor" style=""></div>');
				break;
			case 'propiedad170':
			    $("#ejemplo").html('<textarea id="ta_ejemplo" disabled></textarea>');
				$("#editor").html('<div id="ta_editor" style=""></div>');
				break;
			case 'propiedad171':
			    $("#ejemplo").html('<textarea id="ta_ejemplo" disabled></textarea>');
				$("#editor").html('<div id="ta_editor" style=""></div>');
				break;
			case 'propiedad172':
			    $("#ejemplo").html('<textarea id="ta_ejemplo" disabled></textarea>');
				$("#editor").html('<div id="ta_editor" style=""></div>');
				break;
			case 'propiedad173':
			    $("#ejemplo").html('<textarea id="ta_ejemplo" disabled></textarea>');
				$("#editor").html('<div id="ta_editor" style=""></div>');
				break;
			case 'propiedad174':
			    $("#ejemplo").html('<textarea id="ta_ejemplo" disabled></textarea>');
				$("#editor").html('<div id="ta_editor" style=""></div>');
				break;
			case 'propiedad175':
			    $("#ejemplo").html('<textarea id="ta_ejemplo" disabled></textarea>');
				$("#editor").html('<div id="ta_editor" style=""></div>');
				break;
			case 'propiedad176':
			    $("#ejemplo").html('<textarea id="ta_ejemplo" disabled></textarea>');
				$("#editor").html('<div id="ta_editor" style=""></div>');
				break;
			case 'propiedad177':
			    $("#ejemplo").html('<textarea id="ta_ejemplo" disabled></textarea>');
				$("#editor").html('<div id="ta_editor" style=""></div>');
				break;
			case 'propiedad178':
			    $("#ejemplo").html('<textarea id="ta_ejemplo" disabled></textarea>');
				$("#editor").html('<div id="ta_editor" style=""></div>');
				break;
			case 'propiedad179':
			    $("#ejemplo").html('<textarea id="ta_ejemplo" disabled></textarea>');
				$("#editor").html('<div id="ta_editor" style=""></div>');
				break;
			case 'propiedad180':
			    $("#ejemplo").html('<textarea id="ta_ejemplo" disabled></textarea>');
				$("#editor").html('<div id="ta_editor" style=""></div>');
				break;
			case 'propiedad181':
			    $("#ejemplo").html('<textarea id="ta_ejemplo" disabled></textarea>');
				$("#editor").html('<div id="ta_editor" style=""></div>');
				break;
			case 'propiedad182':
			    $("#ejemplo").html('<textarea id="ta_ejemplo" disabled></textarea>');
				$("#editor").html('<div id="ta_editor" style=""></div>');
				break;
			case 'propiedad183':
			    $("#ejemplo").html('<textarea id="ta_ejemplo" disabled></textarea>');
				$("#editor").html('<div id="ta_editor" style=""></div>');
				break;
			case 'propiedad184':
			    $("#ejemplo").html('<textarea id="ta_ejemplo" disabled></textarea>');
				$("#editor").html('<div id="ta_editor" style=""></div>');
				break;
			case 'propiedad185':
			    $("#ejemplo").html('<textarea id="ta_ejemplo" disabled></textarea>');
				$("#editor").html('<div id="ta_editor" style=""></div>');
				break;
			case 'propiedad186':
			    $("#ejemplo").html('<textarea id="ta_ejemplo" disabled></textarea>');
				$("#editor").html('<div id="ta_editor" style=""></div>');
				break;
			case 'propiedad187':
			    $("#ejemplo").html('<textarea id="ta_ejemplo" disabled></textarea>');
				$("#editor").html('<div id="ta_editor" style=""></div>');
				break;
			case 'propiedad188':
			    $("#ejemplo").html('<textarea id="ta_ejemplo" disabled></textarea>');
				$("#editor").html('<div id="ta_editor" style=""></div>');
				break;
			case 'propiedad189':
			    $("#ejemplo").html('<textarea id="ta_ejemplo" disabled></textarea>');
				$("#editor").html('<div id="ta_editor" style=""></div>');
				break;
			case 'propiedad190':
			    $("#ejemplo").html('<textarea id="ta_ejemplo" disabled></textarea>');
				$("#editor").html('<div id="ta_editor" style=""></div>');
				break;
			case 'propiedad191':
			    $("#ejemplo").html('<textarea id="ta_ejemplo" disabled></textarea>');
				$("#editor").html('<div id="ta_editor" style=""></div>');
				break;
			case 'propiedad192':
			    $("#ejemplo").html('<textarea id="ta_ejemplo" disabled></textarea>');
				$("#editor").html('<div id="ta_editor" style=""></div>');
				break;
			case 'propiedad193':
			    $("#ejemplo").html('<textarea id="ta_ejemplo" disabled></textarea>');
				$("#editor").html('<div id="ta_editor" style=""></div>');
				break;
			case 'propiedad194':
			    $("#ejemplo").html('<textarea id="ta_ejemplo" disabled></textarea>');
				$("#editor").html('<div id="ta_editor" style=""></div>');
				break;
			case 'propiedad195':
			    $("#ejemplo").html('<textarea id="ta_ejemplo" disabled></textarea>');
				$("#editor").html('<div id="ta_editor" style=""></div>');
				break;
			case 'propiedad196':
			    $("#ejemplo").html('<textarea id="ta_ejemplo" disabled></textarea>');
				$("#editor").html('<div id="ta_editor" style=""></div>');
				break;
			case 'propiedad197':
			    $("#ejemplo").html('<textarea id="ta_ejemplo" disabled></textarea>');
				$("#editor").html('<div id="ta_editor" style=""></div>');
				break;
			case 'propiedad198':
			    $("#ejemplo").html('<textarea id="ta_ejemplo" disabled></textarea>');
				$("#editor").html('<div id="ta_editor" style=""></div>');
				break;
			case 'propiedad199':
			    $("#ejemplo").html('<textarea id="ta_ejemplo" disabled></textarea>');
				$("#editor").html('<div id="ta_editor" style=""></div>');
				break;
			case 'propiedad200':
			    $("#ejemplo").html('<textarea id="ta_ejemplo" disabled></textarea>');
				$("#editor").html('<div id="ta_editor" style=""></div>');
				break;
			case 'propiedad201':
			    $("#ejemplo").html('<textarea id="ta_ejemplo" disabled></textarea>');
				$("#editor").html('<div id="ta_editor" style=""></div>');
				break;
			case 'propiedad202':
			    $("#ejemplo").html('<textarea id="ta_ejemplo" disabled></textarea>');
				$("#editor").html('<div id="ta_editor" style=""></div>');
				break;
			case 'propiedad203':
			    $("#ejemplo").html('<textarea id="ta_ejemplo" disabled></textarea>');
				$("#editor").html('<div id="ta_editor" style=""></div>');
				break;
			case 'propiedad204':
			    $("#ejemplo").html('<textarea id="ta_ejemplo" disabled></textarea>');
				$("#editor").html('<div id="ta_editor" style=""></div>');
				break;
			case 'propiedad205':
			    $("#ejemplo").html('<textarea id="ta_ejemplo" disabled></textarea>');
				$("#editor").html('<div id="ta_editor" style=""></div>');
				break;
			case 'propiedad206':
			    $("#ejemplo").html('<textarea id="ta_ejemplo" disabled></textarea>');
				$("#editor").html('<div id="ta_editor" style=""></div>');
				break;
			case 'propiedad207':
			    $("#ejemplo").html('<textarea id="ta_ejemplo" disabled></textarea>');
				$("#editor").html('<div id="ta_editor" style=""></div>');
				break;
			case 'propiedad208':
			    $("#ejemplo").html('<textarea id="ta_ejemplo" disabled></textarea>');
				$("#editor").html('<div id="ta_editor" style=""></div>');
				break;
			case 'propiedad209':
			    $("#ejemplo").html('<textarea id="ta_ejemplo" disabled></textarea>');
				$("#editor").html('<div id="ta_editor" style=""></div>');
				break;
			case 'propiedad210':
			    $("#ejemplo").html('<textarea id="ta_ejemplo" disabled></textarea>');
				$("#editor").html('<div id="ta_editor" style=""></div>');
				break;
			case 'propiedad211':
			    $("#ejemplo").html('<textarea id="ta_ejemplo" disabled></textarea>');
				$("#editor").html('<div id="ta_editor" style=""></div>');
				break;
			case 'propiedad212':
			    $("#ejemplo").html('<textarea id="ta_ejemplo" disabled></textarea>');
				$("#editor").html('<div id="ta_editor" style=""></div>');
				break;
			case 'propiedad213':
			    $("#ejemplo").html('<textarea id="ta_ejemplo" disabled></textarea>');
				$("#editor").html('<div id="ta_editor" style=""></div>');
				break;
			case 'propiedad214':
			    $("#ejemplo").html('<textarea id="ta_ejemplo" disabled></textarea>');
				$("#editor").html('<div id="ta_editor" style=""></div>');
				break;
			case 'propiedad215':
			    $("#ejemplo").html('<textarea id="ta_ejemplo" disabled></textarea>');
				$("#editor").html('<div id="ta_editor" style=""></div>');
				break;
			case 'propiedad216':
			    $("#ejemplo").html('<textarea id="ta_ejemplo" disabled></textarea>');
				$("#editor").html('<div id="ta_editor" style=""></div>');
				break;
			case 'propiedad217':
			    $("#ejemplo").html('<textarea id="ta_ejemplo" disabled></textarea>');
				$("#editor").html('<div id="ta_editor" style=""></div>');
				break;
			case 'propiedad218':
			    $("#ejemplo").html('<textarea id="ta_ejemplo" disabled></textarea>');
				$("#editor").html('<div id="ta_editor" style=""></div>');
				break;
			case 'propiedad219':
			    $("#ejemplo").html('<textarea id="ta_ejemplo" disabled></textarea>');
				$("#editor").html('<div id="ta_editor" style=""></div>');
				break;
			case 'propiedad220':
			    $("#ejemplo").html('<textarea id="ta_ejemplo" disabled></textarea>');
				$("#editor").html('<div id="ta_editor" style=""></div>');
				break;
			case 'propiedad221':
			    $("#ejemplo").html('<textarea id="ta_ejemplo" disabled></textarea>');
				$("#editor").html('<div id="ta_editor" style=""></div>');
				break;
			case 'propiedad222':
			    $("#ejemplo").html('<textarea id="ta_ejemplo" disabled></textarea>');
				$("#editor").html('<div id="ta_editor" style=""></div>');
				break;
			case 'propiedad223':
			    $("#ejemplo").html('<textarea id="ta_ejemplo" disabled></textarea>');
				$("#editor").html('<div id="ta_editor" style=""></div>');
				break;
			case 'propiedad224':
			    $("#ejemplo").html('<textarea id="ta_ejemplo" disabled></textarea>');
				$("#editor").html('<div id="ta_editor" style=""></div>');
				break;
			default:
				alert('error');
		}
	});
});