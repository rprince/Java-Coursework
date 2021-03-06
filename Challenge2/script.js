
(function(){
	var PREFIXES = ["-webkit-", "-o-", "-ms-", "-moz-", ""];
	window.addEventListener("mousemove", function(e) {
		if (!window.is3DAnimated) return false;
		var obj = document.getElementById("JavaApplet"), string = "", borders = {x: window.innerWidth / 2, y: window.innerHeight / 2}, offsets = {x: 0, y: 0};

		if (e.clientX < borders.x) offsets.x = e.clientX / borders.x * 90 - 90;
		else offsets.x = (e.clientX - borders.x) / borders.x * 90;

		if (e.clientY < borders.y) offsets.y = 90 - e.clientY / borders.y * 90;
		else offsets.y = - (e.clientY - borders.y) / borders.y * 90;

		for (index in PREFIXES) string += PREFIXES[index] + "transform: rotateY(" + offsets.x + "deg) rotateX(" + offsets.y + "deg);"
		obj.setAttribute("style", string);
	});
	window.addEventListener("click", function(e) {
		if (e.target.tagName !== "OBJECT") window.is3DAnimated = !!! window.is3DAnimated;
		else window.is3DAnimated = false;

		if (!window.is3DAnimated) document.getElementById("JavaApplet").setAttribute("style", "");
	});
})()
