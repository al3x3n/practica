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
		$("#editor").html('<textarea id="ta_editor" disabled><head> <base href="https://al3x3n.github.io/" target="_blank"> </head></textarea>');
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
		$("#editor").html('<textarea id="ta_editor" disabled><body>todo el contenido de nuestro documento</body></textarea>');
		break;
	case 'etiqueta12': 
		$("#atributos").html('<select><option value="-----NINGUNO-----">-----NINGUNO-----</option></select>');
		$("#ejemplo").html('<textarea id="ta_ejemplo" disabled>texto<br>texto</textarea>');
		$("#editor").html('<div id="ta_editor">texto</br>texto</div>');
		break;
	case 'etiqueta13': 
		$("#atributos").html('<select><optgroup label="autofocus"><optgroup label="disabled"><optgroup label="form"><option value="nombre">nombre</option><optgroup label="formaction"><option value="url">url</option><optgroup label="target"><option value="_blank">_blank</option><option value="_parent">_parent</option><option value="_self">_self</option><option value="_top">_top</option><option value="framename">framename</option><optgroup label="name"><option value="nombre">nombre</option><optgroup label="type"><option value="button">button</option><option value="reset">reset</option><option value="submit">submit</option><optgroup label="value"><option value="value">texto</option></select>');
		$("#ejemplo").html('<textarea id="ta_ejemplo" disabled><button type="button">Click!</button></textarea>');
		$("#editor").html('<div id="ta_editor"><button type="button">Click!</button></div>');
		$("button").click(function(){
			alert ('hola  mundo');
		});
		break;
	case 'etiqueta14': 
		$("#atributos").html('<select><option value="-----NINGUNO-----">-----NINGUNO-----</option></select>');
		$("#ejemplo").html('<textarea id="ta_ejemplo" disabled><canvas></canvas></textarea>');
		$("#editor").html('<div id="ta_editor"><canvas  width="200" height="100" style="border:1px solid red;"></canvas></div>');
		break;
	case 'etiqueta15': 
		$("#atributos").html('<select><option value="-----NINGUNO-----">-----NINGUNO-----</option></select>');
		$("#ejemplo").html('<textarea id="ta_ejemplo" disabled><table><caption>Caja de Ahorro</caption><tr><th>Mes</th><th>Ahorro</th></tr><tr><td>Enero</td><td>$100</td></tr><tr><td>Febrero</td><td>$50</td></tr></table></textarea>');
		$("#editor").html('<div id="ta_editor"><table><caption>Caja de Ahorro</caption><tr><th>Mes</th><th>Ahorro</th></tr><tr><td>Enero</td><td>$100</td></tr><tr><td>Febrero</td><td>$50</td></tr></table></div>');
		break;
	case 'etiqueta16': 
		$("#atributos").html('<select><option value="-----NINGUNO-----">-----NINGUNO-----</option></select>');
		$("#ejemplo").html('<textarea id="ta_ejemplo" disabled><cite>texto</cite></textarea>');
		$("#editor").html('<div id="ta_editor"><cite>el grito</cite> por Edward Munch. Pintada en 1893.</div>');
		break;
	case 'etiqueta17': 
		$("#atributos").html('<select><option value="-----NINGUNO-----">-----NINGUNO-----</option></select>');
		$("#ejemplo").html('<textarea id="ta_ejemplo" disabled><code>texto</code></textarea>');
		$("#editor").html('<div id="ta_editor"><code>texto</code> texto.</div>');
		break;
	case 'etiqueta18': 
		$("#atributos").html('<select><option value="-----NINGUNO-----">-----NINGUNO-----</option></select>');
		$("#ejemplo").html('<textarea id="ta_ejemplo" disabled><colgroup></colgroup></textarea>');
		$("#editor").html('<div id="ta_editor">mas informacion en la etiqueta col</div>');
		break;
	case 'etiqueta19': 
		$("#atributos").html('<select><option value="-----NINGUNO-----">-----NINGUNO-----</option></select>');
		$("#ejemplo").html('<textarea id="ta_ejemplo" disabled><colgroup><col span="2" style="background-color:red"><col style="background-color:yellow"></colgroup></textarea>');
		$("#editor").html('<div id="ta_editor"><table><colgroup><col span="2" style="background-color:red"><col style="background-color:yellow"></colgroup> <tr> <th>Miembros</th><th>Titulo</th><th>Precio</th></tr><tr><td>3476896</td><td>HTML</td><td>$53</td></tr><tr><td>5869207</td><td>CSS</td><td>$49</td></tr></table></div>');
		break;
	case 'etiqueta20': 
		$("#atributos").html('<select><option value="-----NINGUNO-----">-----NINGUNO-----</option></select>');
		$("#ejemplo").html('<textarea id="ta_ejemplo" disabled><input list="exploradores" name="exploradores"><datalist id="exploradores"><option value="Internet Explorer"><option value="Firefox"><option value="Chrome"><option value="Opera"><option value="Safari"></datalist></textarea>');
		$("#editor").html('<div id="ta_editor"><input list="exploradores" name="exploradores"><datalist id="exploradores"><option value="Internet Explorer"><option value="Firefox"><option value="Chrome"><option value="Opera"><option value="Safari"></datalist></div>');
		break;
	case 'etiqueta21': 
		$("#atributos").html('<select><option value="-----NINGUNO-----">-----NINGUNO-----</option></select>');
		$("#ejemplo").html('<textarea id="ta_ejemplo" disabled><del>texto</del></textarea>');
		$("#editor").html('<div id="ta_editor"><del>texto</del></div>');
		break;
	case 'etiqueta22': 
		$("#atributos").html('<select><optgroup label="open"></select>');
		$("#ejemplo").html('<textarea id="ta_ejemplo" disabled><details>texto</details></textarea>');
		$("#editor").html('<div id="ta_editor">mas informacion en la etiqueta summary</div>');
		break;
	case 'etiqueta23': 
		$("#atributos").html('<select><option value="-----NINGUNO-----">-----NINGUNO-----</option></select>');
		$("#ejemplo").html('<textarea id="ta_ejemplo" disabled><details><summary>texto</summary>texto</details></textarea>');
		$("#editor").html('<div id="ta_editor"><details><summary>texto</summary>texto</details></div>');
		break;
	case 'etiqueta24': 
		$("#atributos").html('<select><option value="-----NINGUNO-----">-----NINGUNO-----</option></select>');
		$("#ejemplo").html('<textarea id="ta_ejemplo" disabled><dfn>texto</dfn>texto</textarea>');
		$("#editor").html('<div id="ta_editor"><dfn>texto</dfn> texto</div>');
		break;
	case 'etiqueta25': 
		$("#atributos").html('<select><option value="-----NINGUNO-----">-----NINGUNO-----</option></select>');
		$("#ejemplo").html('<textarea id="ta_ejemplo" disabled><div>texto</div></textarea>');
		$("#editor").html('<div id="ta_editor"><div id="div_ejemplo">texto</div></div>');
		break;
	case 'etiqueta26': 
		$("#atributos").html('<select><option value="-----NINGUNO-----">-----NINGUNO-----</option></select>');
		$("#ejemplo").html('<textarea id="ta_ejemplo" disabled><dl>texto</dl></textarea>');
		$("#editor").html('<div id="ta_editor">mas informacion en la etiqueta dt</div>');
		break;
	case 'etiqueta27': 
		$("#atributos").html('<select><option value="-----NINGUNO-----">-----NINGUNO-----</option></select>');
		$("#ejemplo").html('<textarea id="ta_ejemplo" disabled><dl><dt>texto</dt></dl></textarea>');
		$("#editor").html('<div id="ta_editor">mas informacion en la etiqueta dd</div>');
		break;
	case 'etiqueta28': 
		$("#atributos").html('<select><option value="-----NINGUNO-----">-----NINGUNO-----</option></select>');
		$("#ejemplo").html('<textarea id="ta_ejemplo" disabled><dl><dt>texto</dt><dd><texto/dd></dl></textarea>');
		$("#editor").html('<div id="ta_editor"><dl><dt>Cafe</dt><dd>bebida caliente negra</dd><dt>Leche</dt><dd>bebida fria blanca</dd></dl></div>');
		break;
	case 'etiqueta29': 
		$("#atributos").html('<select><option value="-----NINGUNO-----">-----NINGUNO-----</option></select>');
		$("#ejemplo").html('<textarea id="ta_ejemplo" disabled><em>texto</em></textarea>');
		$("#editor").html('<div id="ta_editor"><em>texto</em></div>');
		break;
	case 'etiqueta30': 
		$("#atributos").html('<select><optgroup label="src"><option value="url">url</option></select>');
		$("#ejemplo").html('<textarea id="ta_ejemplo" disabled><embed src="helloworld.swf"></textarea>');
		$("#editor").html('<div id="ta_editor"><embed src="giphy.gif"></div>');
		break;
	case 'etiqueta31': 
		$("#atributos").html('<select><optgroup label="disabled"><optgroup label="form"><option value="nombre">nombre formulario</option><optgroup label="name"><option value="nombre">nombre</option></select>');
		$("#ejemplo").html('<textarea id="ta_ejemplo" disabled><fieldset></fieldset></textarea>');
		$("#editor").html('<div id="ta_editor"><fieldset></fieldset></div>');
		break;
	case 'etiqueta32': 
		$("#atributos").html('<select><option value="-----NINGUNO-----">-----NINGUNO-----</option></select>');
		$("#ejemplo").html('<textarea id="ta_ejemplo" disabled><figure>imagen</figure></textarea>');
		$("#editor").html('<textarea id="ta_editor" disabled><figure>imagen</figure></textarea>');
		break;
	case 'etiqueta33': 
		$("#atributos").html('<select><option value="-----NINGUNO-----">-----NINGUNO-----</option></select>');
		$("#ejemplo").html('<textarea id="ta_ejemplo" disabled><figure>imagen<figcaption>Fig.1 - titulo</figcaption></figure></textarea>');
		$("#editor").html('<div id="ta_editor"><figure>imagen<figcaption>Fig.1 - titulo</figcaption></figure></div>');
		break;
	case 'etiqueta34': 
		$("#atributos").html('<select><option value="-----NINGUNO-----">-----NINGUNO-----</option></select>');
		$("#ejemplo").html('<textarea id="ta_ejemplo" disabled><footer>informacion</footer></textarea>');
		$("#editor").html('<textarea id="ta_editor" disabled><footer>informacion</footer></textarea>');
		break;
	case 'etiqueta35': 
		$("#atributos").html('<select><optgroup label="action"><option value="url">url</option><optgroup label="autocomplete"><option value="on">on</option><option value="off">off</option><optgroup label="method"><option value="get">get</option><option value="post">post</option><optgroup label="name"><option value="nombre">nombre</option><optgroup label="target"><option value="_blank">_blank</option><option value="_parent">_parent</option><option value="_self">_self</option><option value="_top">_top</option></select>');
		$("#ejemplo").html('<textarea id="ta_ejemplo" disabled><form>informacion</form></textarea>');
		$("#editor").html('<textarea id="ta_editor" disabled><form>informacion</form></textarea>');
		break;
	case 'etiqueta36': 
		$("#atributos").html('<select><option value="-----NINGUNO-----">-----NINGUNO-----</option></select>');
		$("#ejemplo").html('<textarea id="ta_ejemplo" disabled><h1>texto encabezado</h1><h2>texto encabezado</h2><h3>texto encabezado</h3><h4>texto encabezado</h4><h5>texto encabezado</h5><h6>texto encabezado</h6></textarea>');
		$("#editor").html('<div id="ta_editor"><h1>texto encabezado</h1><h2>texto encabezado</h2><h3>texto encabezado</h3><h4>texto encabezado</h4><h5>texto encabezado</h5><h6>texto encabezado</h6></div>');
		break;
	case 'etiqueta37': 
		$("#atributos").html('<select><option value="-----NINGUNO-----">-----NINGUNO-----</option></select>');
		$("#ejemplo").html('<textarea id="ta_ejemplo" disabled><head>elementos</head></textarea>');
		$("#editor").html('<textarea id="ta_editor" disabled><head>elementos</head></textarea>');
		break;
	case 'etiqueta38': 
		$("#atributos").html('<select><option value="-----NINGUNO-----">-----NINGUNO-----</option></select>');
		$("#ejemplo").html('<textarea id="ta_ejemplo" disabled><article><header>texto</header>texto</article></textarea>');
		$("#editor").html('<div id="ta_editor"><article><header>texto</header>texto</article></div>');
		break;
	case 'etiqueta39': 
		$("#atributos").html('<select><option value="-----NINGUNO-----">-----NINGUNO-----</option></select>');
		$("#ejemplo").html('<textarea id="ta_ejemplo" disabled>texto<hr>texto</textarea>');
		$("#editor").html('<div id="ta_editor">texto<hr>texto</div>');
		break;
	case 'etiqueta40': 
		$("#atributos").html('<select><option value="-----NINGUNO-----">-----NINGUNO-----</option></select>');
		$("#ejemplo").html('<textarea id="ta_ejemplo" disabled><html>documento</html></textarea>');
		$("#editor").html('<textarea id="ta_editor" disabled><html>documento</html></textarea>');
		break;
	case 'etiqueta41': 
		$("#atributos").html('<select><option value="-----NINGUNO-----">-----NINGUNO-----</option></select>');
		$("#ejemplo").html('<textarea id="ta_ejemplo" disabled><i>texto</i></textarea>');
		$("#editor").html('<div id="ta_editor"><i>texto</i></div>');
		break;
	case 'etiqueta42': 
		$("#atributos").html('<select><optgroup label="name"><option value="nombre">nombre</option><optgroup label="src"><option value="url">url</option></select>');
		$("#ejemplo").html('<textarea id="ta_ejemplo" disabled><iframe src="https://al3x3n.github.io/"></iframe></textarea>');
		$("#editor").html('<div id="ta_editor"><iframe src="https://al3x3n.github.io/"></iframe></div>');
		break;
	case 'etiqueta43': 
		$("#atributos").html('<select><optgroup label="alt"><option value="texto">texto</option><optgroup label="src"><option value="url">url</option><optgroup label="usemap"><option value="nombre">#nombre</option></select>');
		$("#ejemplo").html('<textarea id="ta_ejemplo" disabled><img src="image/santa2.jpg" alt="santa"></textarea>');
		$("#editor").html('<div id="ta_editor"><img src="image/santa2.jpg" alt="santa"</div>');
		break;
	case 'etiqueta': 
		$("#atributos").html('<select></select>');
		$("#ejemplo").html('<textarea id="ta_ejemplo" disabled></textarea>');
		$("#editor").html('<div id="ta_editor"></div>');
		break;
	case 'etiqueta': 
		$("#atributos").html('<select></select>');
		$("#ejemplo").html('<textarea id="ta_ejemplo" disabled></textarea>');
		$("#editor").html('<div id="ta_editor"></div>');
		break;
	case 'etiqueta': 
		$("#atributos").html('<select></select>');
		$("#ejemplo").html('<textarea id="ta_ejemplo" disabled></textarea>');
		$("#editor").html('<div id="ta_editor"></div>');
		break;
	case 'etiqueta': 
		$("#atributos").html('<select></select>');
		$("#ejemplo").html('<textarea id="ta_ejemplo" disabled></textarea>');
		$("#editor").html('<div id="ta_editor"></div>');
		break;
	case 'etiqueta': 
		$("#atributos").html('<select></select>');
		$("#ejemplo").html('<textarea id="ta_ejemplo" disabled></textarea>');
		$("#editor").html('<div id="ta_editor"></div>');
		break;
	case 'etiqueta': 
		$("#atributos").html('<select></select>');
		$("#ejemplo").html('<textarea id="ta_ejemplo" disabled></textarea>');
		$("#editor").html('<div id="ta_editor"></div>');
		break;
	case 'etiqueta': 
		$("#atributos").html('<select></select>');
		$("#ejemplo").html('<textarea id="ta_ejemplo" disabled></textarea>');
		$("#editor").html('<div id="ta_editor"></div>');
		break;
	case 'etiqueta': 
		$("#atributos").html('<select></select>');
		$("#ejemplo").html('<textarea id="ta_ejemplo" disabled></textarea>');
		$("#editor").html('<div id="ta_editor"></div>');
		break;
	case 'etiqueta': 
		$("#atributos").html('<select></select>');
		$("#ejemplo").html('<textarea id="ta_ejemplo" disabled></textarea>');
		$("#editor").html('<div id="ta_editor"></div>');
		break;
	case 'etiqueta': 
		$("#atributos").html('<select></select>');
		$("#ejemplo").html('<textarea id="ta_ejemplo" disabled></textarea>');
		$("#editor").html('<div id="ta_editor"></div>');
		break;
	case 'etiqueta': 
		$("#atributos").html('<select></select>');
		$("#ejemplo").html('<textarea id="ta_ejemplo" disabled></textarea>');
		$("#editor").html('<div id="ta_editor"></div>');
		break;
	case 'etiqueta': 
		$("#atributos").html('<select></select>');
		$("#ejemplo").html('<textarea id="ta_ejemplo" disabled></textarea>');
		$("#editor").html('<div id="ta_editor"></div>');
		break;
	case 'etiqueta': 
		$("#atributos").html('<select></select>');
		$("#ejemplo").html('<textarea id="ta_ejemplo" disabled></textarea>');
		$("#editor").html('<div id="ta_editor"></div>');
		break;
	case 'etiqueta': 
		$("#atributos").html('<select></select>');
		$("#ejemplo").html('<textarea id="ta_ejemplo" disabled></textarea>');
		$("#editor").html('<div id="ta_editor"></div>');
		break;
	case 'etiqueta': 
		$("#atributos").html('<select></select>');
		$("#ejemplo").html('<textarea id="ta_ejemplo" disabled></textarea>');
		$("#editor").html('<div id="ta_editor"></div>');
		break;		
	default:
		alert ('error');
	}
 	});
});