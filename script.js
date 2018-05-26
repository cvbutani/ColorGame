var numberOfSquare = 6;
var colors;
var pickedColor;

var colorDisp = document.getElementById("colorDisplay");

var squares = document.querySelectorAll(".square");
var modeButton = document.querySelectorAll(".mode");

var messageDisp = document.querySelector("#message");
var resetButton = document.querySelector("#reset");
var h1 = document.querySelector("h1");

init();

function init() {
	modeButtonListeners();
	setupSquare();
	reset();
}

function modeButtonListeners() {
	for (var i = 0; i < modeButton.length; i++) {
		modeButton[i].addEventListener("click", function() {
			modeButton[1].classList.remove("selected");
			modeButton[0].classList.remove("selected");
			this.classList.add("selected");
			this.textContent === "Easy" ? numberOfSquare = 3 : numberOfSquare = 6;
			reset();
		});
	}
}

function setupSquare() {
	for (var i = 0; i < squares.length; i++) {
		squares[i].addEventListener("click", function() {	//	add click listeners to squares
			var clickColor = this.style.backgroundColor;	//	grab color of clicked square
			if (clickColor === pickedColor) {
				messageDisp.textContent = "Correct";		//	compare color to pickedColor
				changeColor(clickColor);
				h1.style.backgroundColor = clickColor;
				resetButton.textContent = "Play Again?";
			} else {
				this.style.backgroundColor = "#232323";
				messageDisp.textContent = "Try Again";
			}
		});
	}
}

function reset() {
	colors = generateRandomColors(numberOfSquare);		//	generate new colors
	pickedColor = pickColor();
	colorDisp.textContent = pickedColor;				//	change color display to match picked color
	resetButton.textContent = "New Colors";
	messageDisp.textContent = "";
	for (var i = 0; i < squares.length; i++) {			//	change colors of squares
		if (colors[i]) {
			squares[i].style.display = "block";
			squares[i].style.backgroundColor = colors[i];
		} else {
			squares[i].style.display = "none";
		}
	}
	h1.style.backgroundColor = "steelblue";				//	change background color of h1 to default
}


resetButton.addEventListener("click", function() {
		reset();
	});


function changeColor(color) {
	for (var i = 0; i < colors.length; i++) {			//	loop through all squares
		squares[i].style.backgroundColor = color;		//	change each color to match given color
	}
}

function pickColor() {
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

function generateRandomColors(num) {
	var arr = [];										//	make an array
	for (var i = 0; i < num; i++) {						//	repeat num times
		arr.push(randomColor());						//	get random color and add in array
	}
	return arr;											//	return that array
}

function randomColor() {
	var r = Math.floor(Math.random() * 256);
	var g = Math.floor(Math.random() * 256);
	var b = Math.floor(Math.random() * 256);

	return "rgb(" + r + ", " + g +", " + b + ")";

}