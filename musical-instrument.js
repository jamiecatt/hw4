// Code 1: Continuous Music, No Visual Feedback

function setup() { 
  createCanvas(400, 400);

} 


var freqA = 174;
var freqS = 196;
var freqD = 220;
var freqF = 246;

var freq1 = 250;
var freq2 = 150;
var freq3 = 400;
var freq4 = 300;

var oscA, oscS, oscD, oscF;
var playingA, playingS, playingD, playingF;

var osc1, osc2, osc3, osc4;
var playing1, playing2, playing3, playing4;


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
	
	osc1 = new p5.Oscillator();
  osc1.setType('triangle');
  osc1.freq(freq1);
  osc1.amp(0);
  osc1.start();
  
  osc2 = new p5.Oscillator();
  osc2.setType('triangle');
  osc2.freq(freq2);
  osc2.amp(0);
  osc2.start();
  
  osc3 = new p5.Oscillator();
  osc3.setType('triangle');
  osc3.freq(freq3);
  osc3.amp(0);
  osc3.start();
  
  osc4 = new p5.Oscillator();
  osc4.setType('triangle');
  osc4.freq(freq4);
  osc4.amp(0);
  osc4.start();
	
}



function keyPressed() {
  print("got key press for ", key);
  var osc;
  if (key == 'A') {
    osc = oscA;
		playingA = true;

  }  if (key == 'S') {
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
	else if (key == '1') {
      oscA.freq(freq1);
			playing1 = true;
  }
	
		else if (key == '2') {
      oscA.freq(freq2);
			playing2 = true;
  }
		else if (key == '3') {
      oscA.freq(freq3);
			playing3 = true;
  }
		else if (key == '4') {
      oscA.freq(freq4);
			playing4 = true;
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
	else if (key == '1') {
    osc = osc1;
		playing1 = false;

	}
	
		else if (key == '2') {
    osc = osc2;
		playing2 = false;
		}
	
		else if (key == '3') {
    osc = osc3;
		playing3 = false;
		}

		else if (key == '4') {
    osc = osc4;
		playing4 = false;
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
	
	  if (mouseIsPressed) {
    ellipse(50, 50, 50, 50);
  } else {
    rect(25, 25, 50, 50);
  }

  print(mouseIsPressed);
}
}

// Code 2: Visual Feedback, Music Per Key Pressed


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

var freq1 = 250;
var freq2 = 150;
var freq3 = 400;
var freq4 = 300;

var oscA, oscS, oscD, oscF;
var playingA, playingS, playingD, playingF;

var osc1, osc2, osc3, osc4;
var playing1, playing2, playing3, playing4;

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
	
		osc1 = new p5.Oscillator();
  osc1.setType('triangle');
  osc1.freq(freq1);
  osc1.amp(0);
  osc1.start();
  
  osc2 = new p5.Oscillator();
  osc2.setType('triangle');
  osc2.freq(freq2);
  osc2.amp(0);
  osc2.start();
  
  osc3 = new p5.Oscillator();
  osc3.setType('triangle');
  osc3.freq(freq3);
  osc3.amp(0);
  osc3.start();
  
  osc4 = new p5.Oscillator();
  osc4.setType('triangle');
  osc4.freq(freq4);
  osc4.amp(0);
  osc4.start();
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
	else if (key == '1') {
      oscA.freq(freq1);
			playing1 = true;
  }
	
		else if (key == '2') {
      oscA.freq(freq2);
			playing2 = true;
  }
		else if (key == '3') {
      oscA.freq(freq3);
			playing3 = true;
  }
		else if (key == '4') {
      oscA.freq(freq4);
			playing4 = true;
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
	
function mouseReleased() {
	var osc;
     if (key == 'A') {
			  osc = oscA1;
			playingA1 = false;
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
	
	  if (mouseIsPressed) {
    ellipse(50, 50, 50, 50);
  } else {
    rect(25, 25, 50, 50);
  }

  print(mouseIsPressed);
}
