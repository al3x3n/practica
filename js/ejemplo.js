$("document").ready(function(){	
	$(".etiqueta").click(function(){
		var $att = $(this).attr("id");
		 /*alert ($att);*/
	switch ($att) {
/*==========================================================
html basico
==========================================================*/
	case 'etiqueta': 
		$("#ejemplo").html('<textarea id="ta_ejemplo" disabled><!DOCTYPE html></textarea>');
		$("#editor").html('<textarea id="ta_editor" disabled><!DOCTYPE html>\n<html>\n<head>\n<title>Title of the document</title>\n</head>\n<body>\nel contenido del documento......\n</body>\n</html></textarea>');
		break;
	case 'etiqueta1': 
		$("#ejemplo").html('<textarea id="ta_ejemplo" disabled><html></html></textarea>');
		$("#editor").html('<textarea id="ta_editor" disabled><!DOCTYPE html>\n<html>\n<head>\n<title>Title of the document</title>\n</head>\n<body>\nel contenido del documento......\n</body>\n</html></textarea>');
		break;
	case 'etiqueta2': 
		$("#ejemplo").html('<textarea id="ta_ejemplo" disabled><head></head></textarea>');
		$("#editor").html('<textarea id="ta_editor" disabled><!DOCTYPE html>\n<html>\n<head>\n<title>Title of the document</title>\n</head>\n<body>\nel contenido del documento......\n</body>\n</html></textarea>');
		break;
	case 'etiqueta3': 
		$("#ejemplo").html('<textarea id="ta_ejemplo" disabled><title></title></textarea>');
		$("#editor").html('<textarea id="ta_editor" disabled><!DOCTYPE html>\n<html>\n<head>\n<title>Title of the document</title>\n</head>\n<body>\nel contenido del documento......\n</body>\n</html></textarea>');
		break;
	case 'etiqueta4': 
		$("#ejemplo").html('<textarea id="ta_ejemplo" disabled><body></body></textarea>');
		$("#editor").html('<textarea id="ta_editor" disabled><!DOCTYPE html>\n<html>\n<head>\n<title>Title of the document</title>\n</head>\n<body>\nel contenido del documento......\n</body>\n</html></textarea>');
		break;
	case 'etiqueta5': 
		$("#ejemplo").html('<textarea id="ta_ejemplo" disabled><h1>texto</h1>\n<h2>texto</h2>\n<h3>texto</h3>\n<h4>texto</h4>\n<h5>texto</h5>\n<h6>texto</h6></textarea>');
		$("#editor").html('<div id="ta_editor"><h1>texto encabezado</h1><h2>texto encabezado</h2><h3>texto encabezado</h3><h4>texto encabezado</h4><h5>texto encabezado</h5><h6>texto encabezado</h6></div>');
		break;
	case 'etiqueta6': 
		$("#ejemplo").html('<textarea id="ta_ejemplo" disabled><p>texto</p></textarea>');
		$("#editor").html('<div id="ta_editor"><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam rutrum.</p></div>');
		break;
	case 'etiqueta7': 
		$("#ejemplo").html('<textarea id="ta_ejemplo" disabled>texto<br>texto</textarea>');
		$("#editor").html('<div id="ta_editor">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam rutrum.</br>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam rutrum.</div>');
		break;
	case 'etiqueta8': 
		$("#ejemplo").html('<textarea id="ta_ejemplo" disabled>texto<hr>texto</textarea>');
		$("#editor").html('<div id="ta_editor">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam rutrum.<hr>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam rutrum.</div>');
		break;
	case 'etiqueta9': 
		$("#ejemplo").html('<textarea id="ta_ejemplo" disabled><!--esto es un Comentario--></textarea>');
		$("#editor").html('<textarea id="ta_editor"><!DOCTYPE html>\n<html>\n<head>\n<title>Title of the document</title>\n</head>\n<body>\n<!--el contenido del documento......-->\n</body>\n</html></textarea>');
		break;
/*==========================================================
formato
==========================================================*/
	case 'etiqueta10': 
		$("#ejemplo").html('<textarea id="ta_ejemplo" disabled><abbr title="defininion">texto</abbr></textarea>');
		$("#editor").html('<div id="ta_editor"><abbr title="señor">sr.</abbr></div>');
		break;
	case 'etiqueta11': 
		$("#ejemplo").html('<textarea id="ta_ejemplo" disabled><address>informacion de contacto</address></textarea>');
		$("#editor").html('<div id="ta_editor"><address> Escrita por <a href="mailto:correo@ejemplo.com">nombre</a>.<br> Visitanos en:<br> Ejemplo.com<br> Direccion<br> Mexico </address></div>');
		break;
	case 'etiqueta12': 
		$("#ejemplo").html('<textarea id="ta_ejemplo" disabled><b>texto</b></textarea>');
		$("#editor").html('<div id="ta_editor"><b>Lorem ipsum</b> dolor sit amet, consectetur adipiscing elit. Nam rutrum.</div>');
		break;
	case 'etiqueta13': 
		$("#ejemplo").html('<textarea id="ta_ejemplo" disabled><bdo dir="rtl|ltr">texto</bdo></textarea>');
		$("#editor").html('<div id="ta_editor"><bdo dir="rtl">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam rutrum.</bdo></div>');
		break;
	case 'etiqueta14': 
		$("#atributos").html('<select><optgroup label="cite"><option value="url">url</option></select>');
		$("#ejemplo").html('<textarea id="ta_ejemplo" disabled><blackquote cite="url">texto</blackquote></textarea>');
		$("#editor").html('<div id="ta_editor"><blackquote cite="https://es.lipsum.com/feed/html">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam rutrum.</blackquote></div>');
		break;
	case 'etiqueta15': 
		$("#ejemplo").html('<textarea id="ta_ejemplo" disabled><cite>texto</cite>texto</textarea>');
		$("#editor").html('<div id="ta_editor"><cite>el grito</cite> por Edward Munch. Pintada en 1893.</div>');
		break;
	case 'etiqueta16': 
		$("#ejemplo").html('<textarea id="ta_ejemplo" disabled><code>texto</code></textarea>');
		$("#editor").html('<div id="ta_editor"><code>Lorem ipsum dolor sit amet,</code>consectetur adipiscing elit. Nam rutrum.</div>');
		break;
	case 'etiqueta17': 
		$("#ejemplo").html('<textarea id="ta_ejemplo" disabled><del>texto</del></textarea>');
		$("#editor").html('<div id="ta_editor"><del>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam rutrum.</del></div>');
		break;
	case 'etiqueta18': 
		$("#ejemplo").html('<textarea id="ta_ejemplo" disabled><dfn>texto</dfn>texto</textarea>');
		$("#editor").html('<div id="ta_editor"><dfn>HTML</dfn> Lenguaje de marcado de hipertexto</div>');
		break;
	case 'etiqueta19': 
		$("#ejemplo").html('<textarea id="ta_ejemplo" disabled><em>texto</em></textarea>');
		$("#editor").html('<div id="ta_editor"><em>Lorem ipsum</em> dolor sit amet, consectetur adipiscing elit. Nam rutrum.</div>');
		break;
	case 'etiqueta20': 
		$("#ejemplo").html('<textarea id="ta_ejemplo" disabled><i>texto</i></textarea>');
		$("#editor").html('<div id="ta_editor"><i>Lorem ipsum</i> dolor sit amet, consectetur adipiscing elit. Nam rutrum.</div>');
		break;
	case 'etiqueta21': 
		$("#ejemplo").html('<textarea id="ta_ejemplo" disabled><ins>texto</ins></textarea>');
		$("#editor").html('<div id="ta_editor"><ins>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam rutrum.</ins></div>');
		break;
	case 'etiqueta22': 
		$("#ejemplo").html('<textarea id="ta_ejemplo" disabled><kbd>texto</kbd></textarea>');
		$("#editor").html('<div id="ta_editor"><kbd>Lorem ipsum</kbd> dolor sit amet, consectetur adipiscing elit. Nam rutrum.</div>');
		break;
	case 'etiqueta23': 
		$("#ejemplo").html('<textarea id="ta_ejemplo" disabled><mark>texto</mark></textarea>');
		$("#editor").html('<div id="ta_editor"><mark>Lorem ipsum</kbd> dolor sit amet, consectetur adipiscing elit. Nam rutrum.</mark></div>');
		break;
	case 'etiqueta24': 
		$("#ejemplo").html('<textarea id="ta_ejemplo" disabled><meter value="valor actual" max="numero maximo" min="numero minimo" low="valor bajo" high="valor alto"></meter></textarea>');
		$("#editor").html('<div id="ta_editor"><meter value="6" min="0" max="10">6 de 10</meter><br><meter value="4" min="0" max="10" low="5" high="9">4 de 10</meter></div>');
		break;
	case 'etiqueta25': 
		$("#ejemplo").html('<textarea id="ta_ejemplo" disabled><pre>texto</pre></textarea>');
		$("#editor").html('<div id="ta_editor"><pre>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean id.<pre></div>');
		break;
	case 'etiqueta26': 
		$("#ejemplo").html('<textarea id="ta_ejemplo" disabled><progress value="porcentaje realizado" max="numero total"></progress></textarea>');
		$("#editor").html('<div id="ta_editor"><progress value="22" max="100"></progress></div>');
		break;
	case 'etiqueta27': 
		$("#ejemplo").html('<textarea id="ta_ejemplo" disabled><q>texto</q></textarea>');
		$("#editor").html('<div id="ta_editor"><p>Lorem ipsum:<q> dolor sit amet, consectetur adipiscing elit...</q> Aenean id.</p></div>');
		break;
	case 'etiqueta28': 
		$("#ejemplo").html('<textarea id="ta_ejemplo" disabled><s>texto</s></textarea>');
		$("#editor").html('<div id="ta_editor"><s>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean id.</s></div>');
		break;
	case 'etiqueta29': 
		$("#ejemplo").html('<textarea id="ta_ejemplo" disabled><samp>texto</samp></textarea>');
		$("#editor").html('<div id="ta_editor"><samp>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean id.</samp></div>');
		break;
	case 'etiqueta30': 
		$("#ejemplo").html('<textarea id="ta_ejemplo" disabled><small>texto</small></textarea>');
		$("#editor").html('<div id="ta_editor"><small>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean id.</small></div>');
		break;
	case 'etiqueta31': 
		$("#ejemplo").html('<textarea id="ta_ejemplo" disabled><strong>texto</strong></textarea>');
		$("#editor").html('<div id="ta_editor"><strong>Lorem ipsum dolor sit amet, </strong>consectetur adipiscing elit. Aenean id.</div>');
		break;
	case 'etiqueta32': 
		$("#ejemplo").html('<textarea id="ta_ejemplo" disabled><sub>texto</sub></textarea>');
		$("#editor").html('<div id="ta_editor"><sub>Lorem ipsum dolor sit amet</sub>, consectetur adipiscing elit. Aenean id.</div>');
		break;
	case 'etiqueta33': 
		$("#ejemplo").html('<textarea id="ta_ejemplo" disabled><sup>texto</sup></textarea>');
		$("#editor").html('<div id="ta_editor"><sup>Lorem ipsum dolor sit amet</sup>, consectetur adipiscing elit. Aenean id.</div>');
		break;
	case 'etiqueta34': 
		$("#ejemplo").html('<textarea id="ta_ejemplo" disabled><template><h2>flores</h2><img src="#"></template></textarea>');
		$("#editor").html('<div id="ta_editor"><template><h2>flores</h2><img src="#"></template></div>');
		break;
	case 'etiqueta35': 
		$("#ejemplo").html('<textarea id="ta_ejemplo" disabled><time datetime="fecha|hora">hora/fecha</time></textarea>');
		$("#editor").html('<div id="ta_editor"><time>10:00</time><br><time datetime="2008-02-14 20:00">San Valentin</time></div>');
		break;
	case 'etiqueta36': 
		$("#ejemplo").html('<textarea id="ta_ejemplo" disabled><u>texto</u></textarea>');
		$("#editor").html('<div id="ta_editor"><u>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean id.</u></div>');
		break;
	case 'etiqueta37': 
		$("#ejemplo").html('<textarea id="ta_ejemplo" disabled><var>texto</var></textarea>');
		$("#editor").html('<div id="ta_editor"><var>Lorem ipsum dolor sit amet</var>, consectetur adipiscing elit. Aenean id.</div>');
		break;
	case 'etiqueta38': 
		$("#ejemplo").html('<textarea id="ta_ejemplo" disabled><wbr></textarea>');
		$("#editor").html('<div id="ta_editor"><p>This is a veryveryveryveryveryveryveryveryveryveryveryveryveryveryveryveryveryvery<wbr>longwordthatwillbreakatspecific<wbr>placeswhenthebrowserwindowisresized.</p></div>');
		break;
/*==========================================================
formulario
==========================================================*/
	case 'etiqueta39': 
		$("#ejemplo").html('<textarea id="ta_ejemplo" disabled><form action="url" autocomplete="on|off" method="get|post" name="nombre" target="_blank|_self|_parent|_top|framename">informacion</form></textarea>');
		$("#editor").html('<div id="ta_editor"><form action="url" method="get">Nombre:<input type="text" name="fname"><br>Apellido:<input type="text" name="lname"><br><input type="submit" value="Submit" disabled></form></div>');
		break;
	case 'etiqueta40': 
		$("#ejemplo").html('<textarea id="ta_ejemplo" disabled><input type="value" accept="file_extension|audio/*|video/*|image/*|" alt="texto" autocomplete="on|off" autofocus checked disabled formaction="URL" formtarget="_blank|_self|_parent|_top|framename" height="pixeles" width="pixeles" list="datalist_id" max="numero|fecha" min="numero|fecha" maxlength="numero" multiple name="texto" pattern="regexp" placeholder="texto" readonly required size="numero" src="url" step="numero"  value="texto"></textarea>');
		$("#editor").html('<div id="ta_editor"><table><tr><td>button <input type="button" value="Click me" id="in_button"></td><td> checkbox <input type="checkbox" name="vehicle1" value="Bike">tengo una bicicleta</td><td>color <input type="color" name="favcolor"></td></tr><tr><td>date <input type="date" name="bday"></td><td>date/time <input type="datetime-local" name="bdaytime"></td><td>email <input type="email" name="usremail"></td></tr><tr><td>file <input type="file" name="img"></td><td>hidden-INPUT OCULTO<input type="hidden" name="country" value="Norway"></td><td>image <input type="image" src="image/Next_arrow.png" alt="Submit" width="48" height="48"></td></tr><tr><td>month <input type="month" name="bdaymonth"></td><td>number <input type="number" name="quantity" min="1" max="5"></td><td>password <input type="password" name="pwd"></td></tr><tr><td>radio <input type="radio" name="gender" value="Privado">Privado<input type="radio" name="gender" value="Publico">Publico</td><td>range <input type="range" name="points" min="0" max="10"></td><td>reset <input type="reset"></td></tr><tr><td>search <input type="search" name="googlesearch"></td><td>submit <input type="submit"></td><td>tel <input type="tel" name="usrtel"></td></tr><tr><td>text <input type="text" name="fname"></td><td>time <input type="time" name="usr_time"></td><td>url <input type="url" name="homepage"></td></tr><tr><td>week <input type="week" name="week_year"></td><td></td><td></td></tr></table></div>');
		$("#in_button").click(function(){
			alert ('hola  mundo');
		});
		break;
	case 'etiqueta41': 
		$("#ejemplo").html('<textarea id="ta_ejemplo" disabled><textarea autofocus cols="numero" rows="numero" disabled maxlength="numero" name="texto" placeholder="texto" readonly required wrap="soft|hard">&lt;/textarea></textarea>');
		$("#editor").html('<div id="ta_editor"><textarea id="area_">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lobortis.</textarea></div>');
		break;
	case 'etiqueta42': 
		$("#atributos").html('<select><optgroup label="autofocus"><optgroup label="disabled"><optgroup label="form"><option value="nombre">nombre</option><optgroup label="formaction"><option value="url">url</option><optgroup label="target"><option value="_blank">_blank</option><option value="_parent">_parent</option><option value="_self">_self</option><option value="_top">_top</option><option value="framename">framename</option><optgroup label="name"><option value="nombre">nombre</option><optgroup label="type"><option value="button">button</option><option value="reset">reset</option><option value="submit">submit</option><optgroup label="value"><option value="value">texto</option></select>');
		$("#ejemplo").html('<textarea id="ta_ejemplo" disabled><button autofocus disabled name="texto" formaction="url" formtarget="_blank|_self|_parent|_top|framename" type="button|submit|reset" value="value">Click!</button></textarea>');
		$("#editor").html('<div id="ta_editor"><button type="button">Click!</button><button type="reset">reset</button><button type="submit">Enviar</button></div>');
		$("button").click(function(){
			alert ('hola  mundo');
		});
		break;
	case 'etiqueta43': 
		$("#ejemplo").html('<textarea id="ta_ejemplo" disabled><select autofocus disabled multiple name="texto" required size="numero"></select></textarea>');
		$("#editor").html('<div id="ta_editor"><select></select></div>');
		break;
	case 'etiqueta44': 
		$("#ejemplo").html('<textarea id="ta_ejemplo" disabled><option disabled select value="texto">texto</option></textarea>');
		$("#editor").html('<div id="ta_editor"><select><option value="volvo">Volvo</option><option value="saab">Saab</option><option value="opel">Opel</option><option value="audi">Audi</option></select></div>');
		break;
	case 'etiqueta45': 
		$("#ejemplo").html('<textarea id="ta_ejemplo" disabled><optgroup label="texto" disabled></optgroup></textarea>');
		$("#editor").html('<div id="ta_editor"><select><optgroup label="carros suecos"><option value="volvo">Volvo</option><option value="saab">Saab</option></optgroup><optgroup label="carros alemanes"><option value="mercedes">Mercedes</option><option value="audi">Audi</option></optgroup></select></div>');
		break;
	case 'etiqueta46': 
		$("#ejemplo").html('<textarea id="ta_ejemplo" disabled><label for="texto">Male</label></textarea>');
		$("#editor").html('<div id="ta_editor"><label for="masculino">Masculino</label><input type="radio" name="gender" id="masculino" value="masculino"><br><label for="femenino">Femenino</label><input type="radio" name="gender" id="femenino" value="femenino"></div>');
		break;
	case 'etiqueta47': 
		$("#ejemplo").html('<textarea id="ta_ejemplo" disabled><fieldset disabled name="texto"></fieldset></textarea>');
		$("#editor").html('<div id="ta_editor"><form><fieldset>Nombre: <input type="text"><br>Correo:  <input type="text"><br>Fecha de Nacimiento: <input type="text"></fieldset></form></div>');
		break;
	case 'etiqueta48': 
		$("#ejemplo").html('<textarea id="ta_ejemplo" disabled><legend></legend></textarea>');
		$("#editor").html('<div id="ta_editor"><form><fieldset><legend>Datos-Personales</legend>Nombre: <input type="text"><br>Correo: <input type="text"><br>Fecha de Nacimiento: <input type="text"></fieldset></form></div>');
		break;
	case 'etiqueta49': 
		$("#ejemplo").html('<textarea id="ta_ejemplo" disabled><input list="exploradores" name="exploradores">\n<datalist id="exploradores">\n<option value="Internet Explorer">\n<option value="Firefox">\n<option value="Chrome">\n<option value="Opera">\n<option value="Safari">\n</datalist></textarea>');
		$("#editor").html('<div id="ta_editor"><input list="exploradores" name="exploradores"><datalist id="exploradores"><option value="Internet Explorer"><option value="Firefox"><option value="Chrome"><option value="Opera"><option value="Safari"></datalist></div>');
		break;
	case 'etiqueta50': 
		$("#ejemplo").html('<textarea id="ta_ejemplo" disabled><output name="texto"></output></textarea>');
		$("#editor").html('<div id="ta_editor"><form oninput="x.value=parseInt(a.value)+parseInt(b.value)">0<input type="range" id="a" value="50">100+<input type="number" id="b" value="50">=<output name="x" for="a b"></output></form></div>');
		break;
/*==========================================================
marco
==========================================================*/
	case 'etiqueta51': 
		$("#ejemplo").html('<textarea id="ta_ejemplo" disabled><iframe src="url" name="texto"></iframe></textarea>');
		$("#editor").html('<div id="ta_editor"><iframe src="https://al3x3n.github.io/"></iframe></div>');
		break;
/*==========================================================
imagen
==========================================================*/
	case 'etiqueta52': 
		$("#ejemplo").html('<textarea id="ta_ejemplo" disabled><img src="url" alt="texto" usemap="#nombre"></textarea>');
		$("#editor").html('<div id="ta_editor"><img src="image/santa2.jpg" alt="santa" class="img_tamaño"></div>');
		break;
	case 'etiqueta53': 
		$("#ejemplo").html('<textarea id="ta_ejemplo" disabled><map name="nombre"></map></textarea>');
		$("#editor").html('<div id="ta_editor"><img src="image/sol-tierra-luna-06.jpg" width="145" height="126" alt="Planetas" usemap="#planetmap" class="img_tamaño"><map name="planetmap"></map></div>');
		break;
	case 'etiqueta54': 
		$("#ejemplo").html('<textarea id="ta_ejemplo" disabled><area alt="texto" coords="cordenadas" download="nombre de archivo" href="url" shape="default|rect|circle|poly" target="_blank|_self|_parent|_top|framename"></textarea>');
		$("#editor").html('<div id="ta_editor"><img src="image/sol-tierra-luna-06.jpg" width="145" height="126" alt="Planets" usemap="#planetmap" class="img_tamaño"><map name="planetmap"><area shape="rect" coords="0,0,679,57" href="image/iStock-520222808.jpg" alt="Sol"><area shape="rect" coords="266,74,422,148" href="image/Full_Moon_Luc_Viatour.jpg" alt="Luna"><area shape="rect" coords="178,166,510,320" href="image/AS8-16-2593.jpg" alt="Tierra"></map></div>');
		break;
	case 'etiqueta55': 
		$("#ejemplo").html('<textarea id="ta_ejemplo" disabled><canvas height="pixeles width="pixeles"></canvas></textarea>');
		$("#editor").html('<div id="ta_editor"><canvas  width="200" height="100" style="border:1px solid red;"></canvas></div>');
		break;
	case 'etiqueta56': 
		$("#ejemplo").html('<textarea id="ta_ejemplo" disabled><figure>contenido</figure></textarea>');
		$("#editor").html('<div id="ta_editor"><figure><img src="image/0000315208.jpg" alt="lobo" class="img_tamaño"></figure></div>');
		break;
	case 'etiqueta57': 
		$("#ejemplo").html('<textarea id="ta_ejemplo" disabled><figure>\nimagen\n<figcaption>titulo</figcaption>\n</figure></textarea>');
		$("#editor").html('<div id="ta_editor"><figure><figcaption>lobo en noche de luna llena...</figcaption><img src="image/0000315208.jpg" alt="lobo" class="img_tamaño"></figure></div>');
		break;
	case 'etiqueta58': 
		$("#ejemplo").html('<textarea id="ta_ejemplo" disabled><picture><source srcset="url" media="(min-width:px)"><img></picture></textarea>');
		$("#editor").html('<div id="ta_editor"><iframe id="icar" src="picture.html" style="resize:horizontal; overflow:auto;"></iframe></div>');
		break;
	case 'etiqueta59': 
		$("#ejemplo").html('<textarea id="ta_ejemplo" disabled><svg width="pixeles" height="pixeles"></svg></textarea>');
		$("#editor").html('<div id="ta_editor"><svg width="100" height="100" style="border:1px solid red;"></svg></div>');
		break;
/*==========================================================
audio/video
==========================================================*/
	case 'etiqueta60': 
		$("#ejemplo").html('<textarea id="ta_ejemplo" disabled><audio src="url" autoplay controls loop muted preload="auto|metadata|none">No se puede reproducir el audio</audio></textarea>');
		$("#editor").html('<div id="ta_editor"><audio src="" controls id="audioPlayer">No se puede reproducir el audio</audio><ul id="playlist"><li class="current-song"><a href="audio/entrega.mp3">entrega..........5:40</a></li><li><a href="audio/la_carta.mp3">la carta..........4:28</a></li></ul></div>');
	 	audioPlayer();
		break;
	case 'etiqueta61': 
		$("#ejemplo").html('<textarea id="ta_ejemplo" disabled><source src="url" type=".audio"></textarea>');
		$("#editor").html('<div id="ta_editor"><audio controls><source src="audio/entrega.mp3" type="audio/mpeg"><source src="audio/entrega.ogg" type="audio/ogg">tu navegador no soporta este elemento.</audio></div>');
		break;
	case 'etiqueta62': 
		$("#ejemplo").html('<textarea id="ta_ejemplo" disabled><track src="url" kind="captions|chapters|descriptions|metadata|subtitles" label="texto" srclang="idioma"></textarea>');
		$("#editor").html('<div id="ta_editor"></div>');
		break;
	case 'etiqueta63': 
		$("#ejemplo").html('<textarea id="ta_ejemplo" disabled><video autoplay controls height="pixeles" width="pixeles" loop muted src="url" poster="url" preload="auto|metadata|none">No se puede reproducir el video</video></textarea>');
		$("#editor").html('<div id="ta_editor"><video controls src="" id="audioPlayer" height="300px" width="700px">No se puede reproducir el video</video><ul id="playlist"><li class="current-song"><a href="video/Metete_A_La_pista.mp4">Metete a la pista..........3:26</a></li><li><a href="video/Dragon_Ball_Super_Capitulo_131_Sub_Español_HD.mp4">Dragon ball super final..........23:07</a></li></ul></div>');
		audioPlayer();
		break;
/*==========================================================
enlace
==========================================================*/
	case 'etiqueta64': 
		$("#ejemplo").html('<textarea id="ta_ejemplo" disabled><a href="url" download="nombre de archivo" target="_blank|_self|_parent|_top|framename">texto</a></textarea>');
		$("#editor").html('<div id="ta_editor"><a href="https://al3x3n.github.io/" target="_blank">Redes Gesa</a></div>');
		break;
	case 'etiqueta65': 
		$("#ejemplo").html('<textarea id="ta_ejemplo" disabled><link href="url" type="text/css" rel="stylesheet"></textarea>');
		$("#editor").html('<textarea id="ta_editor" disabled><!DOCTYPE html>\n<html>\n<head>\n<title>Title of the document</title>\n<link href="url" type="text/css" rel="stylesheet">\n</head>\n<body>\nel contenido del documento......\n</body>\n</html></textarea>');
		break;
	case 'etiqueta66': 
		$("#ejemplo").html('<textarea id="ta_ejemplo" disabled><nav></nav></textarea>');
		$("#editor").html('<div id="ta_editor"><nav id="nav_ejemplo"><a href="#">HTML</a> | <a href="#">CSS</a> | <a href="#">JavaScript</a> | <a href="#">jQuery</a></nav></div>');
		break;
/*==========================================================
lista
==========================================================*/
	case 'etiqueta67': 
		$("#ejemplo").html('<textarea id="ta_ejemplo" disabled><ul></ul></textarea>');
		$("#editor").html('<div id="ta_editor"></div>');
		break;
	case 'etiqueta68': 
		$("#ejemplo").html('<textarea id="ta_ejemplo" disabled><ol reversed start="numero" type="1|a|A|i|I"></ol></textarea>');
		$("#editor").html('<div id="ta_editor"></div>');
		break;	
	case 'etiqueta69': 
		$("#ejemplo").html('<textarea id="ta_ejemplo" disabled><li></li></textarea>');
		$("#editor").html('<div id="ta_editor"><ol><li>cafe</li><li>te</li><li>leche</li></ol><ul><li>cafe</li><li>te</li><li>leche</li></ul></div>');
		break;
	case 'etiqueta70': 
		$("#ejemplo").html('<textarea id="ta_ejemplo" disabled><dl></dl></textarea>');
		$("#editor").html('<div id="ta_editor"></div>');
		break;
	case 'etiqueta71': 
		$("#ejemplo").html('<textarea id="ta_ejemplo" disabled><dl><dt></dt></dl></textarea>');
		$("#editor").html('<div id="ta_editor"></div>');
		break;
	case 'etiqueta72': 
		$("#ejemplo").html('<textarea id="ta_ejemplo" disabled><dl><dt></dt><dd></dd></dl></textarea>');
		$("#editor").html('<div id="ta_editor"><dl><dt>Cafe</dt><dd>bebida caliente negra</dd><dt>Leche</dt><dd>bebida fria blanca</dd></dl></div>');
		break;
/*==========================================================
tabla
==========================================================*/
	case 'etiqueta73': 
		$("#ejemplo").html('<textarea id="ta_ejemplo" disabled><table></table></textarea>');
		$("#editor").html('<div id="ta_editor"></div>');
		break;
	case 'etiqueta74': 
		$("#ejemplo").html('<textarea id="ta_ejemplo" disabled><table><caption></caption></table></textarea>');
		$("#editor").html('<div id="ta_editor"><table><caption>Caja de Ahorro</caption><tr><th>Mes</th><th>Ahorro</th></tr><tr><td>Enero</td><td>$100</td></tr><tr><td>Febrero</td><td>$50</td></tr></table></div>');
		break;
	case 'etiqueta75': 
		$("#ejemplo").html('<textarea id="ta_ejemplo" disabled><table><tr><th colspan="numero" rowspan="numero"></th></tr></table></textarea>');
		$("#editor").html('<div id="ta_editor"><table><caption>Caja de Ahorro</caption><tr><th>Mes</th><th>Ahorro</th></tr><tr><td>Enero</td><td>$100</td></tr><tr><td>Febrero</td><td>$50</td></tr></table></div>');
		break;
	case 'etiqueta76': 
		$("#ejemplo").html('<textarea id="ta_ejemplo" disabled><table><tr></tr></table></textarea>');
		$("#editor").html('<div id="ta_editor"><table><caption>Caja de Ahorro</caption><tr><th>Mes</th><th>Ahorro</th></tr><tr><td>Enero</td><td>$100</td></tr><tr><td>Febrero</td><td>$50</td></tr></table></div>');
		break;
	case 'etiqueta77': 
		$("#ejemplo").html('<textarea id="ta_ejemplo" disabled><table><tr><td colspan="numero" rowspan="numero"></td></tr></table></textarea>');
		$("#editor").html('<div id="ta_editor"><table><caption>Caja de Ahorro</caption><tr><th>Mes</th><th>Ahorro</th></tr><tr><td>Enero</td><td>$100</td></tr><tr><td>Febrero</td><td>$50</td></tr></table></div>');
		break;
	case 'etiqueta78': 
		$("#ejemplo").html('<textarea id="ta_ejemplo" disabled><table><thead><tr><th></th></tr></thead></table></textarea>');
		$("#editor").html('<div id="ta_editor"></div>');
		break;
	case 'etiqueta79': 
		$("#ejemplo").html('<textarea id="ta_ejemplo" disabled><table><tbody><tr><td></td></tr></tbody></table></textarea>');
		$("#editor").html('<div id="ta_editor"></div>');
		break;
	case 'etiqueta80': 
		$("#ejemplo").html('<textarea id="ta_ejemplo" disabled><table><tfoot><tr><td></td></tr></tfoot></table></textarea>');
		$("#editor").html('<div id="ta_editor"></div>');
		break;
	case 'etiqueta81': 
		$("#ejemplo").html('<textarea id="ta_ejemplo" disabled><colgroup></colgroup></textarea>');
		$("#editor").html('<div id="ta_editor"></div>');
		break;
	case 'etiqueta82': 
		$("#ejemplo").html('<textarea id="ta_ejemplo" disabled><colgroup><col span="numero"></colgroup></textarea>');
		$("#editor").html('<div id="ta_editor"><table><colgroup><col span="2" style="background-color:red"><col style="background-color:yellow"></colgroup> <tr> <th>Miembros</th><th>Titulo</th><th>Precio</th></tr><tr><td>3476896</td><td>HTML</td><td>$53</td></tr><tr><td>5869207</td><td>CSS</td><td>$49</td></tr></table></div>');
		break;
/*==========================================================
semantica
==========================================================*/
	case 'etiqueta83': 
		$("#ejemplo").html('<textarea id="ta_ejemplo" disabled><style></style></textarea>');
		$("#editor").html('<textarea id="ta_editor" disabled><!DOCTYPE html>\n<html>\n<head>\n<title>Title of the document</title>\n<style>\n</style>\n</head>\n<body>\nel contenido del documento......\n</body>\n</html></textarea>');
		break;
	case 'etiqueta84': 
		$("#ejemplo").html('<textarea id="ta_ejemplo" disabled><div></div></textarea>');
		$("#editor").html('<div id="ta_editor"><div id="div_ejemplo">texto</div></div>');
		break;
	case 'etiqueta85': 
		$("#ejemplo").html('<textarea id="ta_ejemplo" disabled><span></span></textarea>');
		$("#editor").html('<div id="ta_editor"></div>');
		break;
	case 'etiqueta86': 
		$("#ejemplo").html('<textarea id="ta_ejemplo" disabled><article><header></header></article></textarea>');
		$("#editor").html('<div id="ta_editor"></div>');
		break;
	case 'etiqueta87': 
		$("#ejemplo").html('<textarea id="ta_ejemplo" disabled><footer></footer></textarea>');
		$("#editor").html('<textarea id="ta_editor" disabled></textarea>');
		break;
	case 'etiqueta88': 
		$("#ejemplo").html('<textarea id="ta_ejemplo" disabled><main></main></textarea>');
		$("#editor").html('<textarea id="ta_editor" disabled><!DOCTYPE html>\n<html>\n<head>\n<title>Title of the document</title>\n</head>\n<body>\n<main>\nel contenido del documento......\n</main>\n</body>\n</html></textarea>');
		break;
	case 'etiqueta89': 
		$("#ejemplo").html('<textarea id="ta_ejemplo" disabled><section></section></textarea>');
		$("#editor").html('<div id="ta_editor"></div>');
		break;
	case 'etiqueta90': 
		$("#ejemplo").html('<textarea id="ta_ejemplo" disabled><article></article></textarea>');
		$("#editor").html('<div id="ta_editor"></div>');
		break;
	case 'etiqueta91': 
		$("#ejemplo").html('<textarea id="ta_ejemplo" disabled><aside></aside></textarea>');
		$("#editor").html('<div id="ta_editor"></div>');
		break;
	case 'etiqueta92': 
		$("#ejemplo").html('<textarea id="ta_ejemplo" disabled><details open></details></textarea>');
		$("#editor").html('<div id="ta_editor"><details>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer mauris.</details></div>');
		break;
	case 'etiqueta93': 
		$("#ejemplo").html('<textarea id="ta_ejemplo" disabled><details><summary></summary></details></textarea>');
		$("#editor").html('<div id="ta_editor"><details><summary>Lorem ipsum dolor sit amet</summary>consectetur adipiscing elit. Integer mauris.</details></div>');
		break;
/*==========================================================
meta
==========================================================*/
	case 'etiqueta94': 
		$("#ejemplo").html('<textarea id="ta_ejemplo" disabled><meta></textarea>');
		$("#editor").html('<textarea id="ta_editor" disabled><!DOCTYPE html>\n<html>\n<head>\n<title>Title of the document</title>\n<meta charset="UTF-8">\n<meta name="keywords" content="HTML, CSS, XML, XHTML, JavaScript">\n<meta name="description" content="Free Web tutorials on HTML and CSS">\n<meta name="author" content="John Doe">\n<meta name="viewport" content="width=device-width, initial-scale=1.0">\n</head>\n<body>\n<main>\nel contenido del documento......\n</main>\n</body>\n</html></textarea>');
		break;	
	case 'etiqueta95': 
		$("#ejemplo").html('<textarea id="ta_ejemplo" disabled><base href="url" target="_blank|_self|_parent|_top|framename"></textarea>');
		$("#editor").html('<textarea id="ta_editor" disabled><!DOCTYPE html>\n<html>\n<head>\n<title>Title of the document</title>\n<base href="https://al3x3n.github.io/" target="_blank">\n</head>\n<body>\n<main>\nel contenido del documento......\n</main>\n</body>\n</html></textarea>');
		break;
/*==========================================================
programacion
==========================================================*/
	case 'etiqueta96': 
		$("#atributos").html('<select></select>');
		$("#ejemplo").html('<textarea id="ta_ejemplo" disabled><script type="text/javascript" src=""></script></textarea>');
		$("#editor").html('<textarea id="ta_editor" disabled><!DOCTYPE html>\n<html>\n<head>\n<title>Title of the document</title>\n<script type="text/javascript" src="">\n</script>\n</head>\n<body>\n<main>\nel contenido del documento......\n</main>\n</body>\n</html></textarea>');
		break;
	case 'etiqueta97': 
		$("#ejemplo").html('<textarea id="ta_ejemplo" disabled><embed src="url"></textarea>');
		$("#editor").html('<div id="ta_editor"><embed src="giphy.gif"></div>');
		break;	
	case 'etiqueta98': 
		$("#ejemplo").html('<textarea id="ta_ejemplo" disabled><object data="ulr" height="pixeles" width="pixeles" ></object></textarea>');
		$("#editor").html('<div id="ta_editor"><object data="giphy.gif" height="" width=""></object></div>');
		break;
	default:
		alert ('error');
	}
 	});
});