(function(window) {

	//	ensure requestAnimationFrame exists
	var requestAnimationFrame = 
		window.requestAnimationFrame ||
		window.webkitRequestAnimationFrame || 
		window.mozRequestAnimationFrame || 
		window.msRequestAnimationFrame || 
		function(callback){ window.setTimeout(function() { callback(); }, 1000 / 60); };

	var DEBUG = false;
	var AUDIO_URL = 'audio/single_longer.mp3';
	var VIDEO_URL = 'video/';

	var engLoadText = 'Loading ...';
	var espLoadText = 'Cargando ...';

	var href = window.location.href.split('/');
	href.splice(href.length-1, 1);
	href = href.join('/');

	AUDIO_URL = [href, AUDIO_URL].join('/');
	VIDEO_URL = [href, VIDEO_URL].join('/');

	var start = Date.now();

	var NEXT_VIDEO_READY = false;
	var SOUNDS_READY = false;

	//	display info
	var STYLE = {};
	STYLE.video = {
		sizes: {
			small: .75,
			large: 1
		},
		maxSizes: {
			small: 500,
			large: Number.MAX_VALUE
		},
		zIndices: {
			foreground: 100,
			background: -2
		}
	}
	STYLE.title = {
		className: 'titleCard'
	}

	//	get video elements
	var VIDEO = {},
			vids = document.querySelectorAll('video');
	VIDEO.elements = Array.prototype.slice.call(vids);
	VIDEO.elements.map(function(el) {
		el.loop = true;
	});
	VIDEO.displayType = VIDEO.elements.map(function(el) {
		return 'small';
	});
	VIDEO.isLoaded = VIDEO.elements.map(function(el) {
		return false;
	});
	VIDEO.madeRequest = VIDEO.elements.map(function(el) {
		return false;
	});
	VIDEO.ids = VIDEO.elements.map(function(el) {
		return el.id;
	});

	var videoPromises = [];
	for (var i=0; i<VIDEO.elements.length; i++) {
		videoPromises.push(sendVideoRequestPromise(VIDEO_URL, VIDEO.ids[i]));
	}
	Promise.all(videoPromises).then(function() {
		NEXT_VIDEO_READY = true;
		if (DEBUG) {
			var ellapsed = (Date.now() - start) / 1000;
			console.log('Resources loaded in ' + ellapsed + ' seconds.');
		}
	});


	//	AUDIO

	// var SONG_TIMES = { 
	// 	"DAVID_AUDIO_1": 0,
	// 	"DAVID_AUDIO_2": 60,
	// 	"DAVID_AUDIO_3": 120,
	// 	"DAVID_AUDIO_4": 180,
	// 	"DAVID_AUDIO_4B": 240,
	// 	"DAVID_AUDIO_5": 300,
	// 	"DAVID_AUDIO_6": 360,
	// 	"DAVID_AUDIO_7": 420
	// }
	var SONG_DURATIONS = {
		"DAVID_AUDIO_1": 300,
		"DAVID_AUDIO_2": 120,
		"DAVID_AUDIO_3": 60,
		"DAVID_AUDIO_4": 60,
		"DAVID_AUDIO_4B": 60,
		"DAVID_AUDIO_5": 60,
		"DAVID_AUDIO_6": 60,
		"DAVID_AUDIO_7": 130
	}
	var SONG_TIMES = {};

	(function() {
		var trackNames = Object.keys(SONG_DURATIONS);
		var cumulative = 0;
		for (var i=0; i<trackNames.length; i++) {
			var key = trackNames[i],
				duration = SONG_DURATIONS[key];
			SONG_TIMES[key] = cumulative;
			cumulative += duration;
		}
		console.log(SONG_TIMES);
	})();

  	var audExtension = '';
  	var audioManager = new AudioManager(AUDIO_URL);
  		audioManager.load().then(function() {
  		audioManager.registerSounds(SONG_TIMES, SONG_DURATIONS);
  		SOUNDS_READY = true;
  		if (DEBUG) console.log('All sounds ready.');
  	});

	//	get starting circle
	var HOME = {};
	HOME.element = document.getElementById('homeCircleContainer');

	//	get title cards
	var TITLE = {},
		cards = document.getElementsByClassName(STYLE.title.className);
	TITLE.elements = Array.prototype.slice.call(cards);

	//	get loading element

	var loadingElement = document.getElementById('titleCard__load');
	if (pageType === 'eng') {
		loadingElement.innerHTML = engLoadText;
	} else {
		loadingElement.innerHTML = espLoadText;
	}

	// define states
	var STATES = {},
			stateSequence = ['homePage'],
			nVideoStates = 13;
	for (var j=0; j<nVideoStates; j++) {
		stateSequence.push('video' + (j+1));
	}
	var video4Index = stateSequence.indexOf('video4');
	stateSequence.splice(video4Index+1, 0, 'video4b');
	if (pageType === 'eng') {
		stateSequence.push('titleCardEnglish');
	} else {
		stateSequence.push('titleCardSpanish');
	}
	stateSequence.push('loading');

	var firstVideoIndex = stateSequence.indexOf('video1');

	//	make STATES an enumeration
	stateSequence.map(function(state, i) {
		STATES[state] = i;
	});

	//	define starting states and parameters
	var currentState = STATES.loading;
	var needUpdate = true;
	var removedLoading = false;

	//	state machine
	var run = function() {

		if (SOUNDS_READY && NEXT_VIDEO_READY && !removedLoading) {
			stateSequence.splice(stateSequence.length-1, 1);
			currentState = STATES.homePage;
			hideElements(TITLE.elements);
			removedLoading = true;
			needUpdate = true;
		}

		switch (currentState) {

			//	HOMEPAGE
			case STATES.homePage:
				if (!needUpdate) break;
				if (DEBUG) console.log('homePage');
				hideVideos(VIDEO.elements);
				hideElements(TITLE.elements);
				showElement(HOME.element);
				resize();
				needUpdate = false;
				break;

			//	VIDEOS 1-4
			case STATES.video1:
			case STATES.video2: 
			case STATES.video3:
			case STATES.video4:
				if (!needUpdate) break;
				var currentVideo = currentState - firstVideoIndex;
				if (DEBUG) console.log('video' + (currentVideo+1));
				hideElement(HOME.element);
				audioManager.play(['DAVID_AUDIO_' + (currentVideo+1) + audExtension], true);
				setDisplaySize(currentVideo, 'small');
				resize();
				playVideoAndHideOthers(currentVideo);
				needUpdate = false;
				break;

			case STATES.video4b:
				if (!needUpdate) break;
				if (DEBUG) console.log('video4b');
				setDisplaySize(11, 'large');
				resize();
				playVideoAndHideOthers(11);
				audioManager.play(['DAVID_AUDIO_4B' + audExtension], false);
				needUpdate = false;
				break;

			//	VIDEO 5
			case STATES.video5:
				if (!needUpdate) break;
				if (DEBUG) console.log('video5');
				setDisplaySize(4, 'large');
				resize();
				playVideoAndHideOthers(4);
				var toPause = audioIndexMapper(['1', '2', '3', '4', '4B']);
				audioManager.pause(toPause);
				audioManager.play(['DAVID_AUDIO_5' + audExtension], true);
				needUpdate = false;
				break;

			//	VIDEO 6
			case STATES.video6:
				if (!needUpdate) break;
				if (DEBUG) console.log('video6');
				setDisplaySize(5, 'fullscreen');
				resize();
				playVideoAndHideOthers(5);
				audioManager.pause('all');
				needUpdate = false;
				break;

			//	VIDEO 7
			case STATES.video7:
				if (!needUpdate) break;
				if (DEBUG) console.log('video7');
				setDisplaySize(6, 'small');
				resize();
				sendAllToBackground();
				bringToForeground(6);
				showVideo(6);
				playVideo(6);
				audioManager.play(['DAVID_AUDIO_3' + audExtension], true);
				needUpdate = false;
				break;

			//	VIDEO 8
			case STATES.video8:
				if (!needUpdate) break;
				if (DEBUG) console.log('video8');
				setDisplaySize(7, 'fullscreen');
				resize();
				playVideoAndHideOthers(7);
				var toPlay = audioIndexMapper(['1', '2', '4', '6']);
				audioManager.play(toPlay, true);
				needUpdate = false;
				break;

			//	VIDEO 9
			case STATES.video9:
				if (!needUpdate) break;
				if (DEBUG) console.log('video9');
				setDisplaySize(8, 'fullscreen');
				resize();
				playVideoAndHideOthers(8);
				needUpdate = false;
				break;

			//	VIDEO 10
			case STATES.video10:
				if (!needUpdate) break;
				if (DEBUG) console.log('video10');
				setDisplaySize(7, 'fullscreen');
				resize();
				playVideoAndHideOthers(7);
				needUpdate = false;
				break;

			//	VIDEO 11
			case STATES.video11:
				if (!needUpdate) break;
				if (DEBUG) console.log('video11');
				setDisplaySize(9, 'large');
				resize();
				playVideoAndHideOthers(9);
				needUpdate = false;
				break;

			//	VIDEO 12
			case STATES.video12:
				if (!needUpdate) break;
				if (DEBUG) console.log('video12');
				setDisplaySize(7, 'fullscreen');
				resize();
				playVideoAndHideOthers(7);
				needUpdate = false;
				break;

			//	VIDEO 13
			case STATES.video13:
				if (!needUpdate) break;
				if (DEBUG) console.log('video13');
				VIDEO.elements[10].loop = false;
				var toPause = audioIndexMapper(['1', '2', '4', '5', '6']);
				audioManager.pause(toPause);
				audioManager.play(['DAVID_AUDIO_7' + audExtension], false);
				VIDEO.elements[10].onended = function() { incrementState(); }
				setDisplaySize(10, 'small');
				resize();
				playVideoAndHideOthers(10);
				needUpdate = false;
				break;

			//	TITLE CARD -- ENGLISH
			case STATES.titleCardEnglish:
				if (!needUpdate) break;
				if (DEBUG) console.log('titleCardEnglish');
				hideVideos(VIDEO.elements);
				pauseVideos('all');
				resetVideos('all');
				audioManager.stop('all');
				showElement(TITLE.elements[0]);
				needUpdate = false;
				break;

			//	TITLE CARD -- SPANISH
			case STATES.titleCardSpanish:
				if (!needUpdate) break;
				if (DEBUG) console.log('titleCardSpanish');
				hideVideos(VIDEO.elements);
				pauseVideos('all');
				resetVideos('all');
				audioManager.stop('all');
				showElement(TITLE.elements[1]);
				needUpdate = false;
				break;

			case STATES.loading:
				if (!needUpdate) break;
				if (DEBUG) console.log('Loading');
				hideVideos(VIDEO.elements);
				hideElement(HOME.element);
				hideElements(TITLE.elements);
				showElement(TITLE.elements[2]);
				resize();
				needUpdate = false;
				break;
		}

		//	check to see whether we need to loop sounds
		if (SOUNDS_READY) {
			audioManager.updateSounds();
		}

		requestAnimationFrame(run);
	}

	function audioIndexMapper(inds) {
		return inds.map(function(ind) {
			return 'DAVID_AUDIO_' + ind + audExtension;
		})
	}

	function allTrue(arr) {
		for (var i=0; i<arr.length; i++) {
			if (!arr[i]) return false;
		}
		return true;
	}

	var showElement = function(el) {
		el.style.display = '';
	}
	var hideElement = function(el) {
		el.style.display = 'none';
	}
	var hideElements = function(els) {
		els.map(function(el) { hideElement(el); });
	}

	//	change the display size of the current video
	var setDisplaySize = function(id, to) {
		VIDEO.displayType[id] = to;
	}
	//	resize videos + circle
	var resize = function() {
		//	keep videos center
		VIDEO.elements.map(function(el, i) {
			var displayType = VIDEO.displayType[i];
			if (displayType !== 'fullscreen') {
				var size = STYLE.video.sizes[displayType],
					maxSize = STYLE.video.maxSizes[displayType];
				keepCenter(el, size, maxSize);
			} else {
				makeFullscreen(el);
			}
		});
	}
	//	bring a video to the foreground
	var bringToForeground = function(id) {
		VIDEO.elements[id].style.zIndex = STYLE.video.zIndices.foreground.toString();
	}
	//	send a video to the background
	var sendToBackground = function(id) {
		VIDEO.elements[id].style.zIndex = STYLE.video.zIndices.background.toString();
	}
	//	send all videos to the background
	var sendAllToBackground = function() {
		for (var i = 0; i < VIDEO.elements.length; i++) {
			sendToBackground(i);
		}
	}
	//	get videos except
	var getVideosExcept = function(id) {
		return VIDEO.elements.filter(function(el, i) {
			return i !== id;
		});
	}
	//	play one video and hide all others
	var playVideoAndHideOthers = function(id) {
		playVideo(id);
		showVideoAndHideOthers(id);
	}
	var playVideo = function(id) {
		VIDEO.elements[id].play();
	}
	var pauseVideo = function(id) {
		VIDEO.elements[id].pause();
	}
	var resetVideo = function(id) {
		VIDEO.elements[id].currentTime = 0;
	}
	var resetVideos = function(ids) {
		videoTransportFunc(ids, resetVideo);
	}
	var pauseVideos = function(ids) {
		videoTransportFunc(ids, pauseVideo);
	}
	var playVideos = function(ids) {
		videoTransportFunc(ids, playVideo);
	}
	var videoTransportFunc = function(ids, fnc) {
		//	ids can be an array of numbers, or 'all'
		if (ids === 'all') {
			VIDEO.elements.map(function(el, i) {
				fnc(i);
			});
			return;
		}
		ids.map(function(id) {
			fnc(id);
		});	
	}
	//	show a video -- either an index or element
	var showVideo = function(el, size) {
		if (typeof el == 'number') {
			el = VIDEO.elements[el];
		}
		el.style.display = '';
	}
	//	hide one video
	var hideVideo = function(el) {
		if (typeof el == 'number') {
			el = VIDEO.elements[el];
		}
		el.style.display = 'none';
	}
	//	hide multiple videos
	var hideVideos = function(els) {
		els.map(function(el) {
			hideVideo(el);
		});
	}
	//	show and hide others
	var showVideoAndHideOthers = function(id) {
		var toShow = VIDEO.elements[id],
			toHide = getVideosExcept(id);
		showVideo(toShow);
		toHide.map(function(vid) {
			hideVideo(vid);
		})
	}
	//	size video to percentage of window width, and keep it
	//	centered in the viewport
	var keepCenter = function(el, percentage, maximum) {
		var aspect = el.videoWidth/el.videoHeight,
			w = window.innerWidth,
			h = window.innerHeight,
			maxDim = w > h ? w : h,
			newWidth = maxDim * percentage,
			maximum = maximum || Number.MAX_VALUE;
		if (newWidth > maximum) newWidth = maximum;
		var newHeight = newWidth * aspect,
			left = (w-newWidth)/2,
			top = (h-newHeight)/2;

		el.style.width = newWidth + 'px';
		el.style.height = newHeight + 'px';
		el.style.top = top + 'px';
		el.style.left = left + 'px';
	}
	//	make the video take up the full viewport
	var makeFullscreen = function(el) {
		var w = window.innerWidth,
			h = window.innerHeight,
			aspect = el.videoWidth / el.videoHeight,
			elWidth = parseFloat(el.style.width),
			elHeight = parseFloat(el.style.height) || elWidth/aspect,
			scaleH = h / elHeight,
			scaleW = w / elWidth,
			scale = scaleH > scaleW ? scaleH : scaleW,
			newWidth = elWidth * scale,
			newHeight = elHeight * scale,
			overflowX = w - newWidth,
			overflowY = h - newHeight,
			newTop = overflowY / 2,
			newLeft = overflowX / 2;

		el.style.width = newWidth + 'px';
		el.style.height = newHeight + 'px';
		el.style.top = newTop + 'px';
		el.style.left = newLeft + 'px';
	}
	//	transport controls
	var playSound = function(id) {
		AUDIO.elements[id].play();
	}
	var pauseSound = function(id) {
		AUDIO.elements[id].pause();
	}
	var resetSound = function(id) {
		AUDIO.elements[id].currentTime = 0;
	}
	var playSounds = function(ids) {
		ids.map(function(id) {
			playSound(id);
		});
	}
	var audioTransportFunc = function(ids, fnc) {
		//	ids can be an array of numbers, or 'all'
		if (ids === 'all') {
			AUDIO.elements.map(function(el, i) {
				fnc(i);
			});
			return;
		}
		ids.map(function(id) {
			fnc(id);
		});	
	}
	var pauseSounds = function(ids) {
		audioTransportFunc(ids, pauseSound);
	}
	var resetSounds = function(ids) {
		audioTransportFunc(ids, resetSound);
	}
	var pauseSoundsExcept = function(id) {
		AUDIO.elements.map(function(el, i) {
			if (i !== id) el.pause();
		});
	}
	//	go to the next state
	var incrementState = function() {
		needUpdate = true;
		var nStates = stateSequence.length-1;
		if (currentState == nStates) {
			currentState = 0;
		} else {
			currentState++;
		}
	}
	//	check if mouse is within bounds
	var isWithinBounds = function(e) {
		var isHome = HOME.element.style.display !== 'none',
			x = e.clientX,
			y = e.clientY,
			bounds;
		if (isHome) {
			bounds = HOME.element.children[0].getBoundingClientRect();
		} else {
			var rect = { width: window.innerWidth, height: window.innerHeight };
			var bounds = {};
			bounds.left = rect.width*.4;
			bounds.top = rect.height*.4;
			bounds.bottom = rect.height - rect.height*.4;
			bounds.right = rect.width - rect.width*.4;
		}
		var withinX = x >= bounds.left && x <= bounds.right,
			withinY = y >= bounds.top && y <= bounds.bottom;

		if (withinX && withinY) return true;
		return false;
	}

	function stringToArrayBuffer(str) {
    var buf = new ArrayBuffer(str.length);
    var bufView = new Uint8Array(buf);

    for (var i=0, strLen=str.length; i<strLen; i++) {
    	bufView[i] = str.charCodeAt(i);
    }
    return buf;
	}

	function sendVideoRequestPromise(baseUrl, videoName) {
		return new Promise(function(resolve, reject) {
			var xhr = new XMLHttpRequest(),
	    	url = baseUrl + videoName;
  		xhr.open('GET', url, true);
  		xhr.responseType = 'blob';
  		xhr.onload = function() {
  			if (this.status == 200) {
	    		if (DEBUG) console.log('received ' + videoName);
	      	var response = this.response,
	      		vid = window.URL.createObjectURL(response),
	      		index = VIDEO.ids.indexOf(videoName),
	      		element = VIDEO.elements[index];
	    		element.src = vid;
	    		resolve();
	    	} else {
	    		console.log('err');
	    	}
  		}
  		xhr.send(null);
		});
	}

	function sendVideoRequest(baseUrl, videoName) {
		var index = VIDEO.ids.indexOf(videoName);
		if (VIDEO.isLoaded[index]) {
			NEXT_VIDEO_READY = true;
		}
		if (VIDEO.madeRequest[index]) return;
		if (DEBUG) {
			console.log('Requesting ' + videoName);
		}
	  var xhr = new XMLHttpRequest(),
	    url = baseUrl + videoName;
	  xhr.open('GET', url, true);
	  xhr.responseType = 'blob';
	  VIDEO.madeRequest[index] = true;
	  xhr.onload = function(e) {
	    if (this.status == 200) {
	    	if (DEBUG) {
	    		console.log('received ' + videoName);
	    	}
	      var response = this.response;
	      var vid = window.URL.createObjectURL(response);
	    } else {
	    	console.log('err');
	    }
			var element = VIDEO.elements[index];
	    element.src = vid;
	    VIDEO.isLoaded[index] = true;
	    NEXT_VIDEO_READY = true;
	  }

	  xhr.send(null);
	}

	//	listen for mouse movement to change the pointer style
	window.addEventListener('mousemove', function(e) {
		var resourcesReady = NEXT_VIDEO_READY && SOUNDS_READY;
		if (isWithinBounds(e) && resourcesReady) {
			document.body.style.cursor = 'pointer';
		} else {
			document.body.style.cursor = 'default';
		}
	});

	//	listen for click events to increment state
	window.addEventListener('click', function(e) {
		var resourcesReady = NEXT_VIDEO_READY && SOUNDS_READY;
		if (!resourcesReady) return;
		if (isWithinBounds(e)) incrementState();
	});

	//	listen for resize to keep videos center
	window.addEventListener('resize', function(e) { resize(); });

	//	start the state machine
	run();

})(window);