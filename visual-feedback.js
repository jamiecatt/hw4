function setup() { 
  createCanvas(400, 400);
} 

function draw() { 
  background(220);
}

var freqA = 174;
var freqS = 196;
var freqD = 220;
var freqF = 246;

var oscA, oscS, oscD, oscF;
var playingA, playingS, playingD, playingF;

function setup() {
  backgroundColor = color(255, 0, 255);
  textAlign(CENTER);
  
  oscA = new p5.Oscillator();
  oscA.setType('triangle');
  oscA.freq(freqA);
  oscA.amp(0);
  oscA.start();
  
  oscS = new p5.Oscillator();
  oscS.setType('triangle');
  oscS.freq(freqS);
  oscS.amp(0);
  oscS.start();
  
  oscD = new p5.Oscillator();
  oscD.setType('triangle');
  oscD.freq(freqD);
  oscD.amp(0);
  oscD.start();
  
  oscF = new p5.Oscillator();
  oscF.setType('triangle');
  oscF.freq(freqF);
  oscF.amp(0);
  oscF.start();
}


	

function keyPressed() {
  print("got key press for ", key);
  var osc;
  if (key == 'A') {
    osc = oscA;
		playingA = true;

  } else if (key == 'S') {
    osc = oscS;
		playingS = true;

  } else if (key == 'D') {
    osc = oscD;
		playingD = true;

  } else if (key == 'F') {
    osc = oscF;
		playingF = true;

  }
  if (osc) {
    osc.amp(0.5, 0.1);
	}
}

function keyReleased() {
  print("got key release for ", key);
  var osc;
  if (key == 'A') {
    osc = oscA;
		playingA = false;

  } else if (key == 'S') {
    osc = oscS;
		playingS = false;

  } else if (key == 'D') {
    osc = oscD;
		playingD = false;

  } else if (key == 'F') {
    osc = oscF;
		playingF = false;

  }
  if (osc) {
    osc.amp(0, 0.5);
	}
}

function draw() {
  background(255);
	noStroke();
  if (playingA) {
		  fill(255, 160, 120);
    ellipse(35, 35, 55, 55);
	}
	 if (playingS) {
		   fill(255, 130, 25);
    rect(55, 45, 55, 5);
	}
	 if (playingD) {
		   fill(255, 165, 0);
    ellipse(20, 65, 35, 35);
	}
	 if (playingF) {
		   fill(255, 130, 75);
    rect(55, 45, 55, 55);
	}
}
