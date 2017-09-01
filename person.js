function Person(container, english_text, spanish_text, video_src) {
	var element = document.createElement('div'),
		english_node = document.createElement('div'),
		spanish_node = document.createElement('div'),
		break_node = document.createElement('div')

	english_node.innerHTML = english_text
	spanish_node.innerHTML = spanish_text
	break_node.innerHTML = '------------------------------------------------------------'

	break_node.className = 'break'
	english_node.className = 'eng'
	spanish_node.className = 'esp'
	element.className = 'person'

	element.appendChild(english_node)
	element.appendChild(spanish_node)
	if (typeof(video_src) != 'undefined') {
		video = document.createElement('video')
		video.setAttribute('src', video_src)
		video.setAttribute('autoplay', true)
		element.appendChild(video)
	}
	element.appendChild(break_node)
	this.element = element
	this.container = container
}

Person.prototype.add_to_document = function() {
	this.container.appendChild(this.element)
}