function AudioManager(url) {
	this.url = url;
	this.context = new (window.AudioContext || window.webkitAudioContext)();
	this.sounds = [];
	this.buffer = null;
}

AudioManager.prototype.load = function() {
	var url = this.url, 
		context = this.context,
		that = this,
		request = new XMLHttpRequest();

	return new Promise(function(resolve, reject) {
	  request.open('GET', url, true);
	  request.responseType = 'arraybuffer';
	  request.onload = function() {
	    context.decodeAudioData(request.response, onBufferLoad, onBufferError);
	  };
	  request.send();

	  function onBufferLoad(b) {
	  	that.buffer = b;
	  	resolve();
	  }

	  function onBufferError(err) {
	  	console.log('Error occurred when loading ' + url);
	  	reject(err);
	  }
  });
}

AudioManager.prototype.registerSounds = function(obj, durations) {
	if (durations === undefined) durations = {};
	var keys = Object.keys(obj);
	for (var i=0; i<keys.length; i++) {
		var name = keys[i],
			offset = obj[name],
			duration = durations[name],
			sound = new Sound(this.context, this.buffer, name, offset, duration);
		this.sounds.push(sound);
	}
}

AudioManager.prototype.updateSounds = function() {
	for (var i=0; i<this.sounds.length; i++) {
		this.sounds[i].update();
	}
}

AudioManager.prototype.getSoundByName = function(name) {
	return this.sounds.filter(function(sound) {
		return sound.name === name;
	});
}

AudioManager.prototype.getAllNames = function() {
	return this.sounds.map(function(sound) { return sound.name });
}

AudioManager.prototype.play = function(names, loop) {
	if (loop === undefined) loop = true;
	var that = this;
	names.map(function(name) {
		var sound = that.getSoundByName(name)[0];
		sound.loop = loop;
		sound.play();
	});
}

AudioManager.prototype.pause = function(names) {
	if (names === 'all') {
		names = this.getAllNames();
	}
	var that = this;
	names.map(function(name) {
		var sound = that.getSoundByName(name)[0];
		sound.pause();
	});
}

AudioManager.prototype.stop = function(names) {
	if (names === 'all') {
		names = this.getAllNames();
	}
	var that = this;
	names.map(function(name) {
		var sound = that.getSoundByName(name)[0];
		sound.stop();
	});
}

//	SOUND

function Sound(context, buffer, name, offset, duration) {
	this.context = context;
	this.buffer = buffer;
	this.name = name;
	this.offset = offset;
	this.duration = duration;
	this.isPlaying = false;
	this.pausedAt = 0;
	this.loop = true;
	this.progress = 0;
	this.lastTick = undefined;
}

Sound.prototype.play = function() {
	if (this.isPlaying) return;
	var context = this.context,
		buffer = this.buffer,
		offset = this.offset,
		pausedAt = this.pausedAt;
	var source = context.createBufferSource();
	source.buffer = buffer;
	source.connect(context.destination);
	source.start(0, (pausedAt/1000)+offset);
	this.source = source;
	this.isPlaying = true;
	this.startedAt = Date.now();
	this.lastTick = this.context.currentTime;
}

Sound.prototype.update = function() {
	if (this.lastTick === undefined) {
		this.lastTick = this.context.currentTime;
		return;
	}
	var currentTick = this.context.currentTime;
	if (this.isPlaying) {
		this.progress += (currentTick - this.lastTick);
	}
	this.lastTick = currentTick;
	if (this.progress > this.duration) {
		this.stop();
		if (!this.loop) return;
		this.play();
	}
}

Sound.prototype.pause = function() {
	if (!this.isPlaying) return;
	var source = this.source;
	source.stop(0);
	this.isPlaying = false;
	this.pausedAt = Date.now() - this.startedAt;
}

Sound.prototype.stop = function() {
	this.pause();
	this.pausedAt = 0;
	this.progress = 0;
}