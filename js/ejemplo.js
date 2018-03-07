$("document").ready(function(){	
	$(".etiqueta").click(function(){
		var $att = $(this).attr("id");
		 /*alert ($att);*/
	switch ($att) { 
	case 'etiqueta': 
		$("#atributos").html('<select><option value="-----NINGUNO-----">-----NINGUNO-----</option></select>');
		$("#ejemplo").html('<textarea id="ta_ejemplo" disabled><!--esto es un Comentario--></textarea>');
		$("#editor").html('<div id="ta_editor"><!--esto es un Comentario--></div>');
		break;
	case 'etiqueta1': 
		$("#atributos").html('<select><optgroup label="download"><option value="nombre">nombre de archivo</option><optgroup label="href"><option value="url">url</option><option value="correo">"mailto:"</option><optgroup label="target"><option value="_blank">_blank</option><option value="_parent">_parent</option><option value="_self">_self</option><option value="_top">_top</option><option value="framename">framename</option></select>');
		$("#ejemplo").html('<textarea id="ta_ejemplo" disabled><a href="url">texto</a></textarea>');
		$("#editor").html('<div id="ta_editor"><a href="https://al3x3n.github.io/" target="_blank">Redes Gesa</a></div>');
		break;
	case 'etiqueta2': 
		$("#atributos").html('<select><optgroup label="title"><option value="descripcion">descripcion</option></select>');
		$("#ejemplo").html('<textarea id="ta_ejemplo" disabled><abbr title="señor">sr.</abbr></textarea>');
		$("#editor").html('<div id="ta_editor"><abbr title="señor">sr.</abbr></div>');
		break;
		case 'etiqueta3': 
		$("#atributos").html('<select><option value="-----NINGUNO-----">-----NINGUNO-----</option></select>');
		$("#ejemplo").html('<textarea id="ta_ejemplo" disabled><address>informacion de contacto</address></textarea>');
		$("#editor").html('<div id="ta_editor"><address>informacion de contacto</address></div>');
		break;
	case 'etiqueta4': 
		$("#atributos").html('<select><option value="-----NINGUNO-----">-----NINGUNO-----</option></select>');
		$("#ejemplo").html('<textarea id="ta_ejemplo" disabled><article>texto</article></textarea>');
		$("#editor").html('<div id="ta_editor"><article>texto</article></div>');
		break;
	case 'etiqueta5': 
		$("#atributos").html('<select><option value="-----NINGUNO-----">-----NINGUNO-----</option></select>');
		$("#ejemplo").html('<textarea id="ta_ejemplo" disabled><aside>texto</aside></textarea>');
		$("#editor").html('<div id="ta_editor"><aside>texto</aside></div>');
		break;
	case 'etiqueta6': 
		$("#atributos").html('<select><optgroup label="autoplay"><optgroup label="controls"><optgroup label="loop"><optgroup label="muted"><optgroup label="preload"><option value="auto">auto</option><option value="metadata">metadata</option><option value="none">none</option><optgroup label="src"><option value="url">url</option></select>');
		$("#ejemplo").html('<textarea id="ta_ejemplo" disabled><audio src="audio/LA_CARTA_CUMBIA_ECUATORIANA.mp3">No se puede reproducir el audio</audio></textarea>');
		$("#editor").html('<div id="ta_editor"><audio src="" controls id="audioPlayer">No se puede reproducir el audio</audio><ul id="playlist"><li class="current-song"><a href="audio/entrega.mp3">entrega..........5:40</a></li><li><a href="audio/la_carta.mp3">la carta..........4:28</a></li><id/ul></div>');
	 	audioPlayer();
		break;
	case 'etiqueta7': 
		$("#atributos").html('<select><option value="-----NINGUNO-----">-----NINGUNO-----</option></select>');
		$("#ejemplo").html('<textarea id="ta_ejemplo" disabled><b>texto en negrita</b></textarea>');
		$("#editor").html('<div id="ta_editor"><b>texto</b> - en negrita</div>');
		break;
	case 'etiqueta8': 
		$("#atributos").html('<select><optgroup label="href"><option value="url">url</option><optgroup label="target"><option value="_blank">_blank</option><option value="_parent">_parent</option><option value="_self">_self</option><option value="_top">_top</option><option value="framename">framename</option></select>');
		$("#ejemplo").html('<textarea id="ta_ejemplo" disabled><base href="https://al3x3n.github.io/" target="_blank"></textarea>');
		$("#editor").html('<textarea id="ta_editor"><head> <base href="https://al3x3n.github.io/" target="_blank"> </head></textarea>');
		break;
	case 'etiqueta9': 
		$("#atributos").html('<select><optgroup label="dir"><option value="ltr">ltr</option><option value="rtl">rtl</option></select>');
		$("#ejemplo").html('<textarea id="ta_ejemplo" disabled><bdo dir="rtl">texto</bdo></textarea>');
		$("#editor").html('<div id="ta_editor"><bdo dir="rtl">texto</bdo></div>');
		break;
	case 'etiqueta10': 
		$("#atributos").html('<select><optgroup label="cite"><option value="url">url</option></select>');
		$("#ejemplo").html('<textarea id="ta_ejemplo" disabled><blackquote cite="url">texto</blackquote></textarea>');
		$("#editor").html('<div id="ta_editor"><blackquote cite="url">texto</blackquote></div>');
		break;
	case 'etiqueta11': 
		$("#atributos").html('<select><option value="-----NINGUNO-----">-----NINGUNO-----</option></select>');
		$("#ejemplo").html('<textarea id="ta_ejemplo" disabled><body>documento</body></textarea>');
		$("#editor").html('<textarea id="ta_editor"><body>todo el contenido de nuestro documento</body></textarea>');
		break;
	case 'etiqueta12': 
		$("#atributos").html('<select><option value="-----NINGUNO-----">-----NINGUNO-----</option></select>');
		$("#ejemplo").html('<textarea id="ta_ejemplo" disabled>texto<br>texto</textarea>');
		$("#editor").html('<div id="ta_editor">texto</br>texto</div>');
		break;
	case 'etiqueta13': 
		$("#atributos").html('<select><option value="-----NINGUNO-----">-----NINGUNO-----</option></select>');
		$("#ejemplo").html('<textarea id="ta_ejemplo" disabled>texto<br>texto</textarea>');
		$("#editor").html('<div id="ta_editor">texto</br>texto</div>');
		break;		
	default:
		alert ('error');
	}
 	});
});