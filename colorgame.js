var numSquares =6;
var colors = [];
var pickedColor;
var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("cDisp");
var msgDisplay = document.querySelector("#msg");  
var h1 = document.querySelector("h1");
var resetButton	= document.querySelector("#reset"); 
var modeButtons = document.querySelectorAll(".mode");

init();

function init(){
	setUpModeButtons();	
	setUpSquares();
	reset();
}

resetButton.addEventListener("click",reset); 

function setUpModeButtons(){
	for(var i=0; i<modeButtons.length;i++){
		modeButtons[i].addEventListener("click",function(){
			modeButtons[0].classList.remove("btnselected");
			modeButtons[1].classList.remove("btnselected");
			this.classList.add("btnselected");
			this.textContent==="Easy" ? numSquares=3 :numSquares=6;
			reset();
		});
	}
}

function setUpSquares(){
	for(var i=0;i<squares.length;i++ ){
		squares[i].addEventListener("click",function(){
			var clickedColor = this.style.backgroundColor;
			if(clickedColor===pickedColor){ 
				msgDisplay.textContent= "Correct";
				resetButton.textContent="Play Again?";
				changeColors(clickedColor); 
				h1.style.backgroundColor = pickedColor;			
				}
				else{
				this.style.backgroundColor = "#232323";
				msgDisplay.textContent= "Try Again";
				}
		}); 
	}
}
function reset(){
	colors = generateRandomColors(numSquares);
	pickedColor=pickColor();
	colorDisplay.textContent = pickedColor;
	resetButton.textContent="New Colors";
	for(var i=0;i<squares.length;i++ ){
		if(colors[i]){
			squares[i].style.display = "block";	
			squares[i].style.backgroundColor = colors[i];
		}else{
			squares[i].style.display = "none";	
		}		
	}
	h1.style.backgroundColor = "steelblue";
	msgDisplay.textContent="";
}

function changeColors(color){
	for(var i=0;i<squares.length;i++){
		squares[i].style.backgroundColor = color;
	} 
}
function pickColor(){
	var random = Math.floor(Math.random()*colors.length)
	return(colors[random]);
}
function generateRandomColors(num){
	var arr = [];
	for(var i=0;i<num;i++){
		arr.push(randomColor());
	}
	return arr;
}
function randomColor(){
	var r = Math.floor(Math.random() *256)
	var g = Math.floor(Math.random() *256)
	var b = Math.floor(Math.random() *256)
	return "rgb(" + r + ", " + g +", " + b +")";
}