(function() {
	var container = document.getElementById('people__container')


	var english_text = 'Founding Director. <br>Theo Ellin Ballew is a writer, translator, and novice coder. She has gone home to Los Angeles, CA; Cincinnati, OH; Scottsdale, AZ; Tempe, AZ; Fresno, CA; Phoenix, AZ; Salt Lake City, UT; New Haven, CT; Cambridge, MA; Dallas, TX; Brooklyn, NY; and Denver,CO, in roughly that order. She currently lives in Mexico City.'
	var spanish_text = 'Directora y Fundadora. <br>Theo Ellin Ballew es una escritora, traductora, y aprendiz programadora. Ha llamado hogar a Los Angeles, CA; Cincinnati, OH; Scottsdale, AZ; Tempe, AZ; Fresno, CA; Phoenix, AZ; Salt Lake City, UT; New Haven, CT; Cambridge, MA; Dallas, TX; Brooklyn, NY; y Denver, CO m&aacute;s o menos en ese orden. Vive actualmente en el DF.' 
	var vid_src = 'Gente/Theo.mp4'
	var theo = new Person(container, english_text, spanish_text, vid_src)


	var english_text = 'Editor.<br>Paul Freudenberg has lived in Columbus, OH; Urbana, IL; Hamden, CT; and New Haven, CT. He now lives in Brooklyn, NY, where he works for an architecture firm.'
	var spanish_text = 'Editor.<br>Paul Freudenberg ha vivido en Columbus, OH; Urbana, IL; Hamden, CT; y New Haven, CT. Actualmente vive en Brooklyn, NY, y trabaja para un despacho de architectura.'
	var vid_src = 'Gente/Paul.mp4'
	var paul = new Person(container, english_text, spanish_text, vid_src)


	var english_text = 'Editor.<br>Kalil Smith-Nuevelle has lived all over the U.S. and in a few other countries, though not entirely by choice. Now he lives in Providence, RI, and is really hoping this will improve the results when you google him.'
	var spanish_text = 'Editor.<br>Kalil Smith-Nuevelle ha vivido por todas partes en Estados Unidos y en algunos otros pa&iacute;ses por circunstancias ajenas a su voluntad. Hoy en d&iacute;a vive en Providence, RI, y tiene grandes expectativas de que esto pueda mejorar los resultados cuando alguien lo busque en google.'
	var vid_src = 'Gente/Kalil.mp4'
	var kalil = new Person(container, english_text, spanish_text, vid_src)


	var english_text = 'Arts Director and Editor.<br>Maddie Butler lives in Minneapolis, MN, but she enjoys going other places when she can.  Maddie makes lattes and runs a gallery called Yeah Maybe.  Before Minneapolis, Maddie lived in New Haven, CT.  There, she studied art and dusted furniture.  Maddie makes videos and sculptures, fragments of which can be seen at maddiebutler.com.  Maddie has never lived in Mexico City but she visited once and had a great time.'
	var spanish_text = 'Directora de arte y editora.<br>Maddie Butler vive en Minneapolis, MN pero le gusta viajar a otros destinos cada vez que puede.  Maddie hace lattes y dirige una galer&iacute;a llamada Yeah Maybe.  Antes de mudarse a Minneapolis, vivía en New Haven, CT, donde estudi&oacute; arte y desempolvaba muebles.  Maddie hace videos y esculturas, fragmentos de los cuales se puede ver en maddiebutler.com.  Maddie nunca ha vivido en la Ciudad de M&eacute;xico, pero la visit&oacute; una vez y le encant&oacute; su estancia.'
	var vid_src = 'Gente/Maddie.mp4'
	var maddie = new Person(container, english_text, spanish_text, vid_src)


	var english_text = 'NYC Outreach.<br>Sophie Swanson is a student of Material Culture currently residing in Mexico City. After graduating university and working in the museum and arts research sector in New York City, she made the move south of the border. A child of Europe and the American desert, she has lived in Russia, England, Italy, Phoenix, and New Haven. Sophie loves to dance and eat tacos al pastor.'
	var spanish_text = 'Divulgaci&oacute;n en Nueva York.<br>Sophie Swanson es una estudiante de cultura material que vive actualmente en la Ciudad de M&eacute;xico. Despu&eacute;s de acabar la universidad y de trabajar en Nueva York en museos y en investigaci&oacute;n de arte decidi&oacute; mudarse al sur de la frontera. Hija de Europa y del desierto estadounidense, ha vivido en Rusia, Inglaterra, Italia, Phoenix y New Haven. A Sophie le encanta bailar y los tacos al pastor.'
	var vid_src = 'Gente/Sophie.mp4'
	var sophie = new Person(container, english_text, spanish_text, vid_src)
	var english_text = 'Marketing Director.<br>Juan '
	var spanish_text = 'Director de hablar.<br>Diego Tuno.'
	var vid_src = 'Pablo.mp4'
	var diego = new Person(container, english_text, spanish_text, vid_src)

	
		var english_text = 'Social Media Consultant.<br>Ivonne Gonzalez is a Chicana from East Los Angeles currently residing in Mexico City. Before moving to Mexico, she  lived and studied in New Haven, where she learned that she hates writing bios because writing in third person is just plain weird. She likes Mexico City&rsquo;s jacaranda trees and enjoys a good mezcal with some gossip on the side.'
	var spanish_text = 'Consultora de redes sociales.<br>Ivonne Gonzalez es una chicana del este de Los Angeles. Actualmente vive en la Ciudad de M&eacute;xico. Antes de mudarse aqu&iacute;, vivi&oacute; y estudi&oacute; en New Haven, donde se di&oacute; cuenta que odia escribir biograf&iacute;as porque escribir de tercera persona es netamente raro. A ella le gustan los &aacute;rboles de jacarand&aacute de la Ciudad de M&eacute;xico y disfrutar de un buen mezcal acompa&ntilde;ado de un poco de chisme.'
	var vid_src = 'Gente/Ivonne.mp4'
	var ivonne = new Person(container, english_text, spanish_text, vid_src)
	

	var english_text = 'IRL Site Designer.<br>Juan Pablo Ponce de Le&oacute;n has elected to abstain from a bio.'
	var spanish_text = 'Dise&ntilde;ador de sitios reales.<br>Juan Pablo Ponce de Le&oacute;n eligi&oacute; abstenerse de incluir una biograf&iacute;a.'
	var vid_src = 'Gente/Pablo.mp4'
	var pablo = new Person(container, english_text, spanish_text, vid_src)


	var english_text = 'Co-designer.<br>Anna Halbleib, currently situated in Mexico City, has lived in Australia, Rwanda and the Netherlands. She was born and raised in Germany. Not in Berlin though. Anna&rsquo;s background is in fashion.'
	var spanish_text = 'Co-dise&ntilde;adora.<br>Anna Halbleib vive actualmente en la Ciudad de M&eacute;xico. Ha vivido en Australia, Ruanda y los Pa&iacute;ses Bajos. Naci&oacute; y creci&oacute;; en Alemana. Pero no en Berl&iacute;n. Estudi&oacute; dise&ntilde;o y moda.'
	var vid_src = 'Gente/Anna.mp4'
	var anna = new Person(container, english_text, spanish_text, vid_src)


	var english_text = 'Co-designer.<br>Lila Mendez-Pap. Lilight. Budapest-Mexico City. Light&Costume Designer. Experimental photographer.'
	var spanish_text = 'Co-dise&ntilde;adora.<br>Lila Mendez-Pap. Lilight. Budapest-La Ciudad de M&eacute;xico. Dise&ntilde;adora de la luz&el vestuario. Fot&oacute;grafa experimental.'
	var vid_src = 'Gente/Lila.mp4'
	var lila = new Person(container, english_text, spanish_text, vid_src)

	var english_text = 'Marketing Director.<br>Diego Zavala, 1984. Resident of the city once known as D.F., he has lived in La Roma, Portales, and Condesa. His family left when a wave of gentrification cleared the graffiti from the Lindberg roundabout &mdash; after that time when decadence did not yet wear the disguise of a restaurant&ndash;bar, when the prostitutes that currently work in Aguascalientes street shone under the dirty and broken lights of Amsterdam. Diego also lived in Mixcoac, New York, Bacalar, Ohio, Oaxaca, Berlin y la Lupe Inn, where he currently lives and works as a slutty artist.'
	var spanish_text = 'Director de hablar.<br>Diego Zavala, 1984.  Residente de  lo que alguna vez se conoci&oacute; como D.F. Ha vivido entre la Roma, Portales, Condesa, lugar que su familia decide dejar debido a la ola gentrificadora que borr&oacute; los graffitis del foro Lindberg, &eacute;poca en que la decadencia a&uacute;n no ten&iacute;a disfraz de restaurant bar; cuando las prostitutas que ahora chambean sobre Aguascalientes, brillaban bajo las luminarias sucias y rotas de Amsterdam; Tambi&eacute;n ha visto su hogar en: Mixcoac, NY, Bacalar, Ohio, Oaxaca, Berl&iacute;n, y la Lupe Inn, donde actualmente vive y realiza su trabajo personal como artista.'
	var vid_src = 'Gente/Diego.mp4'
	var diego = new Person(container, english_text, spanish_text, vid_src)

	var english_text = 'LA Outreach. <br>Moss Turpan is the managing editor of Epiphany Magazine. He has lived in Vermont and Missoula, MT, and now resides mostly in LA. He also works as a graphic designer.'
	var spanish_text = 'Divulgaci&oacute;n en Los &Aacute;ngeles.<br>Moss Turpan es el director editorial de Epiphany Magazine. Ha vivido Vermont y Missoula, MT, y hoy en d&iacute;a pasa la mayor parte de su tiempo en Los Angeles. Tambi&eacute;n trabaja como dise&ntilde;ador gr&aacute;fico. '
	var vid_src = 'Gente/Moss.mp4'
	var moss = new Person(container, english_text, spanish_text, vid_src)	


	var english_text = 'Spanish-language Consultant. Pablo Arellano is an artist/designer who spends most of his time working with his hands. He also works with language in French, Spanish, English, and Portuguese. He has lived in Mexico and in Paris.<br>.'
	var spanish_text = 'Consultor lingu&iacute;stico.<br>Pablo Arellano es un artista/dise&ntilde;ador que trabaja con las manos la mayor parte del tiempo y que colabora en proyectos en franc&eacute;s, espa&ntilde;ol, ingl&eacute;s y portugu&eacute;s. Ha vivido entre la Ciudad de M&eacute;xico y Par&iacute;s.'
	var vid_src = 'Gente/Pabloa.mp4'
	var pabloa = new Person(container, english_text, spanish_text, vid_src)	


	var english_text = '&lt;corp&gt;ORAL Director<br>Rodrigo Echeverr&iacute;a Noriega was born on September 29, 1988 in Mexico City. He got his BFA in Fine Arts from Concordia University in Montreal, Canada. He specialized in painting, drawing, and art history. He works primarily with painting and related media, but also works with performance and installation. He&apos;s also worked as aesthetic advisor in other media, such as film. Currently, he lives and works in Mexico City and is 28 years old.'
	var spanish_text = 'Director de &lt;corp&gt;ORAL<br>Rodrigo Echeverr&iacute;a Noriega naci&oacute; el 29 de septiembre de 1988 en la ciudad de M&eacute;xico. Estudi&oacute; la licenciatura en Bellas Artes en la Universidad de Concordia en Montreal, Canad&aacute;. Se especializ&oacute;s en pintura, dibujo, y historia del arte. Trabaja principalmente en la pintura y otras t&eacute;cnicas derivadas de ella y ha expandido su pr&aacute;ctica al performance y a la instalaci&oacute;n. Tambi&eacute;n se ha desempe&ntilde;ado como asesor est&eacute;tico en otras disciplinas entre las que destaca en el cine  Actualmente, vive y trabaja en la Ciudad de M&eacute;xico y tiene 28 a&ntilde;os.'
	var vid_src = 'Gente/Rodrigo.jpg'
	var rodrigo = new Person(container, english_text, spanish_text, vid_src)





// 	
	
	// 	var english_text = 'Events Committee and Model.<br>Claudio D&iacute;az has dabbled in acting, fashion, event production, translation, and visual arts (with a focus in photography). He has lived in Shanghai and New Haven, but he was born and raised in Mexico City. He&rsquo;s into experimenting.'
// 	var spanish_text = 'Comisi&oacute;n de eventos y modelo.<br>Claudio D&iacute;az ha experimentado en areas como actuaci&oacute;n, loda, traducci&oacute;n, producci&oacute;n de eventos, y artes visuales (enfocando en fotograf&iacute;a). Ha vivido en Shanghai y New Haven, pero la Ciudad de M&eacute;xico es su hogar. A&uacute;n est&aacute; experimentando.'	
// 	var vid_src = 'Gente/Claudio.mp4'
// 	var claudio = new Person(container, english_text, spanish_text, vid_src)

	
	
	
	
	
	
	
	
	
	
	
	var english_text = 'Site-maker, <a href="https://oral.pub/Joseph/PINKPANSPERMIA.html">"PINKPANSPERMIA."</a><br>Joseph Buckley, b. 1990, Ellesmere Port, United Kingdom. Leeds College of Art 2010, Goldsmiths University of London 2010&ndash;2013, Yale School of Art 2013&ndash;2015. Recent solo shows include Days of Madness & of Learning, at a gallery in London, UK; The History Of The Earth & The First American, at C&ocirc;t&eacute Du 69 in Nantes, France; The Demon Of Regret at the International Studio & Curatorial Programme in New York City, USA.'
	var spanish_text = 'Creador de sitio, <a href="https://oral.pub/Joseph/ESPERMOSATODAROSA.html">"ESPERMOSATODAROSA."</a><br>Joseph Buckley, nacido en 1990, Ellesmere Port, United Kingdom. Leeds College of Art 2010, Goldsmiths University of London 2010&ndash;2013, Yale School of Art 2013&ndash;2015. Exposiciones independentes recientes incluyen: Days of Madness & of Learning, en una galería de London, UK; The History Of The Earth & The First American, en C&ocirc;t&eacute; Du 69 en Nantes, France; The Demon Of Regret en el International Studio & Curatorial Programme de Nueva York.'
	var vid_src = 'Gente/Joseph.mp4'
	var joseph = new Person(container, english_text, spanish_text, vid_src)


	var english_text = 'Site-translator, <a href="https://oral.pub/Joseph/PINKPANSPERMIA.html">"PINKPANSPERMIA."</a><br>Mario Chanona is a translator who&rsquo;s lived in Mexico City for the past seven years. Before he was a Chilango he was a Chiapaneco and a few other things. He&rsquo;s a Leo with Pisces rising and his moon sign is Libra (fire, water, and air). He thinks this combination makes him interesting and somewhat mentally balanced. He doesn&rsquo;t know why he studied translation but he likes it because he likes taking the shackles off readers, or at least that&rsquo;s what he says.'
	var spanish_text = 'Traductor de sitio, <a href="https://oral.pub/Joseph/ESPERMOSATODAROSA.html">"ESPERMOSATODAROSA."</a><br>Mario es traductor y desde hace siete a&ntilde;os vive en la Ciudad de M&eacute;xico. Antes de ser chilango fue chiapaneco y algunas otras cosas m&aacute;s. Es leo, con ascendente en piscis y signo lunar en libra (fuego, agua y aire) y piensa que esa variedad le da un poco de equilibrio mental y que lo hace interesante. No sabe por qu&eacute; estudi&oacute; traducci&oacute;n y le gusta traducir para que los lectores no se sientan imposibilitados o al menos eso es lo que dice.'
	var vid_src = 'Gente/Mario.mp4'
	var mario = new Person(container, english_text, spanish_text, vid_src)


	var english_text = 'Site-maker, <a href="http://www.panopticon.club/">"panopticon.club."</a><br>Carl Chen is an artist, researcher, and software developer. He currently resides in the Bay Area, and has previously lived in Brooklyn, New Haven, and southern California. @cc4vr'
	var spanish_text = 'Creador de sitio, <a href="http://www.panopticon.club/">"panopticon.club."</a><br>Carl Chen es un artista, investigador, y desarrollador de software. Actualmente vive en el &aacute;rea de la Bah&iacute;a de San Francisco y anteriormente ha vivido en Brooklyn, New Haven, y el sur de California. @cc4vr'
	var vid_src = 'Gente/Carl.mp4'
	var carl = new Person(container, english_text, spanish_text, vid_src)

	var english_text = 'Site-maker, <a href="http://www.panopticon.club/">"panopticon.club."</a><br>Christian Manuel Perez was born in Los Angeles to parents who immigrated from San Juli&aacute;n, Jalisco. He was raised on farms across the Inland Empire and Central Valley of California. He then spent 4 years studying architectural design at Yale in New Haven, Connecticut, and abroad in Copenhagen, Denmark, after which he lived in Oakland, CA for several years, working on architecture and web projects. Currently he lives in Sunnyvale, California working on growth at LinkedIn.'
	var spanish_text = 'Creador de sitio, <a href="http://www.panopticon.club/">"panopticon.club."</a><br>Christian Manuel Perez naci&oacute; en Los Angeles. Es hijo de inmigrantes de San Juli&aacute;n, Jalisco. Creci&oacute; en granjas por todas partes del valle central de la California. Despu&eacute;s de esto, pas&oacute; 4 a&ntilde;os en New Haven, Connecticut estudiando en Yale, y un rato en Copenhagen, Dinamarca. Posteriormente vivi&oacute; en Oakland, CA durante varios a&ntilde;os, donde trabaj&oacute; en la architectura y desarrollo web. Actualmente trabaja para LinkedIn en Sunnyvale, California. '
	var vid_src = 'Gente/Chris.mp4'
	var chris = new Person(container, english_text, spanish_text, vid_src)


	var english_text = 'Site-translator, <a href="http://www.cheche.sexy/">"The Lost Cactus."</a><br>Coryna Ogunseitan. I&rsquo;m a senior at Yale studying comparative literature. My languages are Spanish and French. I was born in Orange California and raised in Irvine, but have lived in Paris (very briefly) and Santiago, Chile for six months but where I would love to live again! I love poetry and translation and am working on translating short stories by Dominican author Aurora Arias for my senior thesis. Last summer, I worked on Glossolalia, PEN America&rsquo;s journal of literary translation. I&rsquo;m so excited to be working with ORAL, which in my opinion is an awesome and very necessary project!'
	var spanish_text = 'Traductor de sitio, <a href="http://www.cheche.sexy/">"El cactus perdido."</a><br>Coryna Ogunseitan. Estoy en mi &uacute;ltimo a&ntilde;o en Yale, donde estudio la literatura comparativa. Las lenguas que estudio son el franc&eacute;s y el espa&ntilde;ol. Nac&iacute; en Orange, California, y crec&iacute; en Irvine, pero he vivido en Par&iacute;s (durante muy poco tiempo) y Santiago, Chile. Viv&iacute; all&iacute; seis meses y me gustar&iacute;a mucho hacerlo otra vez! Me encanta la poes&iacute;a y la traducci&oacute;n. Actualmente estoy traduciendo unas cuantas cortas por la dominicana Aurora Arias para mi t&eacute;sis. El verano pasado, trabaj&eacute; en Glossolalia, la revista de traducci&oacute;n de PEN America. Estoy tan emocionada para trabajar con ORAL, lo cual seg&uacute;n yo es un proyecto chido y muy necesario!'
	var vid_src = 'Gente/Coryna.mp4'
	var coryna = new Person(container, english_text, spanish_text, vid_src)

	var english_text = 'Site-maker, <a href="http://www.cheche.sexy/">"The Lost Cactus."</a><br>CheCh&eacute;, 26<br>Self-employed<br>UVM Campus San Rafael<br>less than a mile away<br><br>Artist who pays the bills by designing websites. <br>Father to Majo <3<br>CDMX. <br>Illustrator and Designer.'
	var spanish_text = 'Creador de sitio, <a href="http://www.cheche.sexy/">"El cactus perdido.</a><br>CheCh&eacute;, 26<br>Self-employed<br>UVM Campus San Rafael<br>a menos de un km de distancia. <br><br>Artista que se gana la vida dise&ntilde;ando sitios web. <br>Padre de Majo <3<br>CDMX. <br>Ilustrador y Dise&ntilde;ador.'
	var vid_src = 'Gente/Che.mp4'
	var che = new Person(container, english_text, spanish_text, vid_src)


	var english_text = 'Site-maker, <a href="https://oral.pub/Deer.html">"Deer."</a><br>Descended from Jiaki Yoreme, Fabricio Cajeme dedicates his time to the preservation of his family&rsquo;s heritage: the Yaqui Native American tribe from Northern Mexico and the Southwest of the United States. Because of this, all his works deal with the magic that exists in nature. He is intent on defending oral traditions and ancient worldviews of Mexico via all art forms.'
	var spanish_text = 'Creador de sitio, <a href="https://oral.pub/Venado.html">"Venado."</a> <br>Con descendencia Jiaki Yoreme, Fabricio Cajeme dedica sus a&ntilde;os a la preservacion de la herencia de la familia (tradiciones yaquis) pueblo nativo americano del Norte de M&eacute;xico y del Sur de los Estados Unidos de America. Esto refiere a todas sus obras con una caracter&iacute;stica de naturaleza m&aacute;gica. Dedicado a difundir las tradiciones orales y cosmovisiones del M&eacute;xico antiguo por medio de cualquier arte o forma de expresion.'
	var vid_src = 'Gente/Venado.mp4'
	var venado = new Person(container, english_text, spanish_text, vid_src)


	var english_text = 'Site-maker, <a href="https://oral.pub/Intern/Surprise.html">"Intern Surprise."</a><br>Virginia Lee Montgomery received her MFA from Yale University School of Art in 2016, and has worked in corporate creative consulting. Shows: Sculpture Center; Simone Subal Gallery; MEYOHAS; Greene Gallery; Franklin Street Works; Walter Phillips Gallery; and Wright Nuclear Laboratory. Honors: residencies at Coast Time, The Shandaken Project at Storm King, and The Vermont Studio Center; Yale University&rsquo;s Susan H. Wedon Award; Toby Devan Lewis Fellowship 2016 Nominee in Sculpture. She has lived in Texas, New York, Connecticut, and the Netherlands.'
	var spanish_text = 'Creador de sitio, <a href="https://oral.pub/Pasante/Sorpresa.html">"Pasante Sorpresa."</a><br>Virginia Lee Montgomery se gradu&oacute; de la Maestr&iacute;a en Artes Pl&aacute;sticas de la Escuela de Arte de Yale en 2016 y ha trabajado como consultora creativa empresarial. Exhibiciones: Sculpture Center; Simone Subal Gallery; MEYOHAS; Greene Gallery; Franklin Street Works; Walter Phillips Gallery; y Wright Nuclear Laboratory. Distinciones: residencias en Coast Time, The Shandaken Project de Storm King, y The Vermont Studio Center; el premio Susan H. Wedon de la Universidad de Yale; y nominada a la beca Toby Devan Lewis Fellowship en 2016 en la categor&iacute;a de esculutra. Ha vivido en Texas, Nueva York, Connecticut y en los Pa&iacute;ses Bajos.'
	var vid_src = 'Gente/Virginia.mp4'
	var virginia = new Person(container, english_text, spanish_text, vid_src)

	var english_text = 'Site-translator, <a href="https://oral.pub/Intern/Surprise.html">"Intern Surprise."</a><br>Agus Giorgi Games is a translator, reader/dreamer, dog and cat lover. Agustina has a Licentiate in Literature from her home city in Argentina, and an MA in Translation. She is currently living in London, enjoying the multicultural life the city has to offer.'
	var spanish_text = 'Traductora de sitio, <a href="https://oral.pub/Pasante/Sorpresa.html">"Pasante Sorpresa."</a><br>Agus Giorgi Games es traductora, lectora/so&ntilde;adora, amante de perros y gatos. Agustina es Licenciada en Letras y Magister en Traducci&oacute;n. Actualmente reside en Londres, ciudad que le encanta por su multiculturalismo.'
	var vid_src = 'Gente/Agus.mp4'
	var agus = new Person(container, english_text, spanish_text, vid_src)


	var english_text = 'Site-maker, <a href="https://oral.pub/Intern/Surprise.html">"Intern Surprise."</a><br>Zack Schiller has spent most of his life in New York City or, more recently, on trains that lead to it.'
	var spanish_text = 'Creador de sitio, <a href="https://oral.pub/Pasante/Sorpresa.html">"Pasante Sorpresa."</a><br>Zack Schiller ha pasado la mayor parte de su vida en Nueva York, o &uacute;ltimamente en los trenes que llevan a esa ciudad.'
	var vid_src = 'Gente/Zack.mp4'
	var zack = new Person(container, english_text, spanish_text, vid_src)

	var english_text = 'Site-maker, <a href="https://oral.pub/ElAleph.html">"The Aleph."</a><br>Lucie Castel is an artist. She is currently living in Strasbourg, France, and right before that she spent several months in Mexico City. She is looking for some way to return to Mexico, because there&rsquo;s something in that gray city that connects her to the ground..'
	var spanish_text = 'Creador de sitio, <a href="https://oral.pub/ElAleph.html">"El aleph."</a><br>Lucie Castel es artista pl&aacute;stica. Actualmente vive en Estrasburgo en Francia, pero pas&oacute; varios meses en la Ciudad de M&eacute;xico. Est&acute; buscando volver, porque hay algo en esa gris cuidad que la conecta con la tierra.'
	var vid_src = 'Gente/Lucie.mp4'
	var lucie = new Person(container, english_text, spanish_text, vid_src)

	var english_text = 'Site-maker, <a href="https://oral.pub/ElAleph.html">"The Aleph."</a><br>Luis Del Rio Francos was born and raised in Mexico City, where he continues to live.'
	var spanish_text = 'Creador de sitio, <a href="https://oral.pub/ElAleph.html">"El aleph."</a><br>Luis Del Rio Francos naci&oacute; y creci&oacute; en la Ciudad de M&eacute;xico, donde sigue viviendo hoy en d&iacute;a.'
	var vid_src = 'Gente/Luis.mp4'
	var luis = new Person(container, english_text, spanish_text, vid_src)

	var english_text = 'Site-maker, <a href="https://oral.pub/:/Tonight.html">"Tonight."</a><br> David Johnson (b.1993) is an artist born and based in New York City. He is the recipient of the Elliot Lash Memorial prize for excellence in sculpture, The Cooper Union Full Tuition Scholarship, participated as a resident at the TAAK summer program in Marfa, Texas (2015) and has received grant support from Creative Engagement, supported by the New York City Department of Cultural Affairs. He received a BFA from Cooper Union in 2015.'
	var spanish_text = 'Creador de sitio, <a href="https://oral.pub/:/Estanoche.html">"Esta noche."</a><br>David Johnson (nacido en 1993) es un artista que naci&oacute; y creci&oacute; en Nueva York. Recibi&oacute; el premio de excelencia en escultura  Elliot Lash Memorial y una beca completa en The Cooper Union. Particip&oacute; como residente en el programa TAAK en Marfa, Texas en 2015 y ha recibido apoyo financiero de Creative Engagement, apoyado por el Departamento de Relaciones Culturales de la Ciudad de Nueva York. Se gradu&oacute; en artes pl&aacute;sticas de Cooper Union en 2015.'
	var vid_src = 'Gente/David.mp4'
	var david = new Person(container, english_text, spanish_text, vid_src)

	var english_text = 'Site-translator <a href="https://oral.pub/:/Tonight.html">"Tonight."</a><br>Mariana Roa Oliva writes, translates and drinks mezcal in DF. She&rsquo;s lived in Hong Kong, St. Paul, and Paris. She likes animals and theory.'
	var spanish_text = 'Traductora de sitio, <a href="https://oral.pub/:/Estanoche.html">"Esta noche."</a><br>Mariana Roa Oliva escribe, traduce y toma mezcal en el DF. Ha vivido en Hong Kong, St. Paul, y Par&iacute;s. Le gustan los animales y la teor&iacute;a.'
	var vid_src = 'Gente/Mariana.mp4'
	var mariana = new Person(container, english_text, spanish_text, vid_src)




	var english_text = 'Site-maker, <a href="https://oral.pub/David/YearZero.html">"For David, Year Zero."</a><br>Jonathan Mildenberg is an American multi-media artist. Born in Massachusetts, he has lived in Boston and San Fransisco; he has been living and working in Brooklyn, NY since 2004.  He received his BFA from Massachusetts College of Art in 2003 and his MFA from Yale University in 2015. He was the 2015 Nominee in Sculpture for the Toby Devan Lewis Fellowship and is a current fellow in Environmental Structures for the New York Foundation of the Arts.  Recent solo exhibitions of his large scale installations include <i>Here, Tyrant Death / Look Backward, Idiot</i> at Treasure Town and <i>The Transition of Power</i> at Meyohas.'
	var spanish_text = 'Creador de sitio, <a href="https://oral.pub/David/anocero.html">"Para Dav&iacute;d, a&ntilde;o cero."</a><br>Jonathan Mildenberg es un artista multimedia estadounidense. Naci&oacute; en Massachusetts y ha vivido en Boston y San Fransisco; vive y trabaja en Brooklyn, NY desde 2004.  Se gradu&oacute; de artes pl&aacute;sticas en el Massachusetts College of Art en 2003 y termin&oacute; su maestr&iacute;a en artes pl&aacute;sticas en Yale en 2015. El mismo a&ntilde;o, fue nominado a la beca Toby Devan Lewis Fellowship en la categor&iacute;a de escultura, y actualmente es becario de estructuras ambientales para la New York Foundation of the Arts. Sus exposiciones recientes de obras de gran tama&ntilde;o incluyen: <i>Here Tyrant Death / Look Backward, Idiot</i> en Treasure Town y <i>The Transition of Power</i> en Meyohas.'
	var vid_src = 'Gente/Jon.mp4'
	var jon = new Person(container, english_text, spanish_text, vid_src)

	var english_text = 'Site-maker, <a href="https://oral.pub/David/YearZero.html">"For David, Year Zero."</a><br>Nick Fagan is a programmer based in New York.'
	var spanish_text = 'Creador de sitio, <a href="https://oral.pub/David/anocero.html">"Para Dav&iacute;d, a&ntilde;o cero."</a><br>Nick Fagan es un programador establecido en Nueva York.'
	var vid_src = 'Gente/Nick.mp4'
	var nick = new Person(container, english_text, spanish_text, vid_src)


	var english_text = 'Site-maker, <a href="https://oral.pub/Let/ters.html">"Letters."</a><br>Gwendolyn Harper is a writer and translator. Her translations and essays have appeared in D21 Editions, Latin American Literature Today, and The Caravan. She currently splits her time between working on a collection of crónicas by Pedro Lemebel and packing boxes to move to Providence, RI. Previous sites of nesting include Oakland, New Haven, Taipei, Buenos Aires, and Valparaíso.'
	var spanish_text = 'Creador de sitio, <a href="https://oral.pub/Let/ras.html">"Letras."</a><br>Gwendolyn Harper es una escritora y traductora. Sus traducciones y ensayos se han publicado en D21 Editions, Latin American Literature Today, y The Caravan. Actualmente trabaja en la traducci&oacute;n de una colleci&oacute;n de cr&oacute;nicas por Pedro Lemebel, y en mud&acute;ndose a Providence, RI. Anteriormente ha anidado en lugares como Oakland, New Haven, Taipei, Buenos Aires, and Valparaíso.'
	var vid_src = 'Gente/Gwen.jpg'
	var gwen = new Person(container, english_text, spanish_text, vid_src)


	var english_text = 'Translator, <a href="https://oral.pub/Let/ters.html">"Letters."</a><br>Arturo &quot;Raturo&quot; Moreno. I&apos;ve always lived in Mexico City. I studied English literature in Facultad de Filosof&iacute;a y Letras, but I am also interested in XXth Century European literature, particularly in Theatre of the Absurd, Expressionism, and Existentialism. (I&apos;m a reader most of the time, and barely write.) I&apos;m an audio-visual media translator (That&apos;s how I earn money and pay the rent). I’ve translated films, documentaries, tv series and videogames. You might have seen my work in Gotham, Flash, Arrow, Blindspot, and Horrible Histories.'
	var spanish_text = 'Traductor, <a href="https://oral.pub/Let/ras.html">"Letras."</a><br>Arturo &quot;Raturo&quot; Moreno. Siempre he vivido en la ciudad de M&eacute;ico. Estudi&eacute; lengua y literatura inglesa en la facultad de filosof&iacute;a y letras, pero tambi&eacute;n estoy interesado en la literatura europea del siglo XX, particularmente en el teatro del absurdo, el expresionismo y el existencialismo. Soy lector en su mayor&iacute;a y casi nunca escribo. Soy traductor de medios audiovisuales, (as&iacute; gano dinero y pago la renta) He traducido pel&iacute;culas, documentales, series de televisi&oacute;n y videojuegos. Tal vez hayan visto mi trabajo en Gotham, Flash, Arrow e historias horribles.'
	var vid_src = 'Gente/Raturo.mp4'
	var raturo = new Person(container, english_text, spanish_text, vid_src)


	var english_text = 'Site-maker, <a href="https://oral.pub/Let/ters.html">"Letters."</a><br>Tim Farnam lives in Mexico City where he is a writer of code for https://codex.press/. Earlier, he was a writer of words for the Washington Post and the Wall Street Journal, covering national politics, lobbying and congressional ethics.'
	var spanish_text = 'Creador de sitio, <a href="https://oral.pub/Let/ras.html">"Letras."</a><br>Tim Farnam vive en la Ciudad de M&eacute;xico, donde escribe c&oacute;digo para https://codex.press/. Anteriormente, escribi&oacute; cosas sobre las pol&iacute;ticas estadounidenses, la presi&oacute;n pol&iacute;tica, y la &eacute;tica congresional para el Washington Post y el Wall Street Journal.'
	var vid_src = 'Gente/Tim.mp4'
	var tim = new Person(container, english_text, spanish_text, vid_src)


	var english_text = 'Site-maker, <a href="https://oral.pub/Piano/BocaMouth.html">"Piano and Mouth."</a><br>Todd Brozman plays piano and makes music. Music is sound and sound is vibration. But not all sound is music, and not all vibration, sound. For sound to be music, someone or something must be experiencing the sound and having a subjectively musical experience. For vibration to be sound, it has to be the vibration of physical molecules. Other things can vibrate, like electro-magnetic waves, but that&apos;s not sound. People also talk about &quot;vibes&quot; which must be related to the vibration of something, but it&apos;s unclear what. And also not sound. Todd has lived in Prairie Village, KS; Middletown, CT; and the Bay Area, CA. He now resides in New York City.'
	var spanish_text = 'Creador de sitio, <a href="https://oral.pub/Piano/BocaMouth.html">"Piano y Boca."</a><br>Todd Brozman toca el piano y hace m&uacute;sica. La m&uacute;sica es el sonido y el sonido es la vibraci&oacute;n. Pero no es que todo sonido sea la m&uacute;sica, y que toda vibraci&oacute; sea el sonido. Para que el sonido sea la m&uacute;sica, alguien o algo debe experimentarlo de una manera subjetiva. Para que la vibraci&oacute;n sea el sonido, debe ser la vibraci&oacute;n de mol&eacute;culas f&iacute;sicas. Otras cosas pueden vibrar, como ondas electromagn&eacute;ticas, pero eso no es el sonido. Tambi&eacute;n hablan sobre las &quot;vibras&quot;, lo cual debe corresponder a algo que vibre, pero no se sabe que sea esta cosa. Tampoco se trata del sonido. Todd ha vivido en Prairie Village, KS; Middletown, CT; y el Bay Area, CA. Actualmente reside en Nueva York.'
	var vid_src = 'Gente/Todd.mp4'
	var todd = new Person(container, english_text, spanish_text, vid_src)





	var people = [theo, paul, moss, joseph, maddie, carl, chris, venado, sophie, diego, coryna, pablo, anna, lila, ivonne, che, kalil, virginia, agus, mario, zack, lucie, luis, mariana, david, jon, nick, pabloa, gwen, tim, raturo, todd, rodrigo]


	function shuffle_people(arr) {
		var current_index = arr.length, temp_val, random_index
		while (0 !== current_index) {
			random_index = Math.floor(Math.random() * current_index)
			current_index -= 1
			temp_val = arr[current_index]
			arr[current_index] = arr[random_index]
			arr[random_index] = temp_val
		}
		return arr
	}
	people = shuffle_people(people)
	people.forEach(function(pers) {
		pers.add_to_document()
	})

})();






