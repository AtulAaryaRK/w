var SpeechRecognition = window.webkitSpeechRecognition;

var recognition = new SpeechRecognition();

function preload() {
	mario_gameover = loadSound("gameover.wav");
	world_start = loadSound("world_start.wav");
	setSprites();
	MarioAnimation();
}

function setup() {
	canvas = createCanvas(1240,336);
	instializeInSetup(mario);
	

}
   
function draw() {
	game();
}




function qwer() {

	var synth = window.speechSynthesis;

    speak_data = "Hello There ! , I am your game (Help The Jack) talking . My name is Jack . I am your chosen game . the life throws unlimited challenges to all of us irrespective of living or non-living . Yes , I too Jack , A non-living game hero face numerous obstacles in every step I take . Please help me to move ahead by saving me from these obstacles and help me to move on . I will also help you by being a good user friendly game !!! . Thank you for choosing me . By helping me , your concentration power , and , alertness , will increase ."

    var utterThis = new SpeechSynthesisUtterance(speak_data);

    synth.speak(utterThis);
}
