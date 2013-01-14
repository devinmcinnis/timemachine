var canvas, stage, div, div2, spaceDiv, spaceDiv2, button, button2;

window.onload = init;

function init() {
	canvas = document.getElementById('canvas');
	stage = new Stage(canvas);

	var num = Math.floor(Math.random()*(5000-1000+1)+1000);
	document.getElementById('current').getElementsByClassName('random_number')[0].innerHTML = '<p>'+num+'</p>';

	button1 = document.getElementById('submit');
	button2 = document.getElementById('submit2');

	div = document.getElementById('current');
	div2 = document.getElementById('new');

	spaceDiv = new DOMElement(div);
	spaceDiv2 = new DOMElement(div2);

	spaceDiv.regX = spaceDiv2.regX = div.offsetWidth / 2;
	spaceDiv.regY = spaceDiv2.regY = div.offsetHeight / 2;

	spaceDiv.x = spaceDiv2.x = canvas.offsetWidth / 2;
	spaceDiv.y = spaceDiv2.y = canvas.offsetHeight / 2;

	spaceDiv2.scaleX = spaceDiv2.scaleY = 0;

	button1.onclick = timeTravel;
	button2.onclick = timeTravel2;

	Ticker.setFPS(24);
	Ticker.addListener(stage);

	stage.onTick = function () {
		//Tic Toc
	}
	
	stage.addChild(spaceDiv);
	stage.addChild(spaceDiv2);
	stage.update();
}

function timeTravel() {
	var canvasHeight = canvas.offsetHeight + div.offsetHeight;
	var originalY = spaceDiv2.y = canvas.offsetHeight / 2;
	var num = Math.floor(Math.random()*(5000-1000+1)+1000);
	document.getElementById('new').getElementsByClassName('random_number')[0].innerHTML = '<p>'+num+'</p>';

	// Move #current down
	Tween.get(spaceDiv).wait(500).to({y: canvasHeight, scaleX: 1, scaleY: 1, alpha: 0}, 1000, Ease.quadInOut).wait(800).to({y: originalY, scaleX: 0, scaleY: 0, alpha: 1});
	
	// Bring #new to front
	Tween.get(spaceDiv2).to({scaleX: 0, scaleY: 0}).wait(800).to({scaleX: 1, scaleY: 1}, 600, Ease.quadInOut);
}

function timeTravel2() {
	var canvasHeight = canvas.offsetHeight + div.offsetHeight;
	var originalY = spaceDiv.y = canvas.offsetHeight / 2;
	var num = Math.floor(Math.random()*(5000-1000+1)+1000);
	document.getElementById('current').getElementsByClassName('random_number')[0].innerHTML = '<p>'+num+'</p>';

	// Move #new down
	Tween.get(spaceDiv2).wait(500).to({y: canvasHeight, scaleX: 1, scaleY: 1, alpha: 0}, 1000, Ease.quadInOut).wait(800).to({y: originalY, scaleX: 0, scaleY: 0, alpha: 1});

	// Bring #current to front
	Tween.get(spaceDiv).to({scaleX: 0, scaleY: 0}).wait(800).to({scaleX: 1, scaleY: 1}, 600, Ease.quadInOut);
}