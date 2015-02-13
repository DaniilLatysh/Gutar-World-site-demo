function initiate(){
	var elem = document.getElementById('canvas');
	var canvas = elem.getContext('2d');
	var text = "My text text text ";
	canvas.beginPath();
	canvas.arc(200, 150, 50, 0, Math.PI*2, false);
	canvas.stroke();
	
	canvas.lineWidth = 10;
	canvas.lineCap = "round";
	canvas.beginPath();
	canvas.moveTo(230, 150);
	canvas.arc(200, 150, 30, 0, Math.PI, false);
	canvas.stroke();
	
	canvas.lineWidth = 5;
	canvas.lineJoin = "miter";
	canvas.beginPath();
	canvas.moveTo(195, 135);
	canvas.lineTo(215, 155);
	canvas.lineTo(195, 155);
	canvas.stroke();
	
	
	canvas.font = "bold 24px verdana, sans-serif";
	canvas.textAlign = "start";
	canvas.textBaseline = "bottom";
	canvas.fillText(text, 130, 50);
	
	var size = canvas.measureText(text);
	canvas.strokeRect(130, 50, size.width, 24);
}
addEventListener("load", initiate);