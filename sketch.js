let table;

function preload() {
  //my table is comma separated value "csv"
  //and has a header specifying the columns labels
  table = loadTable('Rating1.csv', 'csv', 'header');
}

function setup() {
  createCanvas(800, 800);
}

function draw() {
  background(220);
  noStroke();
  
  //Headline
  push();
  fill(51);
  textStyle(BOLD);
  textFont('Helvetica', 20);
  text('Environmental Impact Ratings (A - G) in each London Borough', 40, 50);
  pop();
  
  // Description
  push();
  fill(51);
  textStyle();
  textFont('Helvetica', 12);
  text('Number of Energy Performance Certificates (EPC)', 40, 110);
  text('lodged on the Register, in each London Borough, ', 40, 125);
  text('by Environmental Impact Rating (CO2 emissions), ', 40, 140);
  text('in 2018.  ', 40, 155);
	pop();
  
  // Legend
  push();
  //A
  fill(0, 226, 0)
  rect(40, 70, 15, 15)
  fill(51);
  textStyle();
  textFont('Helvetica', 12);  
  text('A', 60, 82);
  //B
  fill(84, 172, 81)
  rect(80, 70, 15, 15)
  fill(51);
  textStyle();
  textFont('Helvetica', 12);  
  text('B', 100, 82);
  //C
  fill(143, 152, 66)
  rect(120, 70, 15, 15)
  fill(51);
  textStyle();
  textFont('Helvetica', 12);  
  text('C', 140, 82);
  //D
  fill(255, 216, 12)
  rect(160, 70, 15, 15)
  fill(51);
  textStyle();
  textFont('Helvetica', 12);  
  text('D', 180, 82);
  //E
  fill(255, 131, 0)
  rect(200, 70, 15, 15)
  fill(51);
  textStyle();
  textFont('Helvetica', 12);  
  text('E', 220, 82);
  //F
  fill(202, 68, 101)
  rect(240, 70, 15, 15)
  fill(51);
  textStyle();
  textFont('Helvetica', 12);  
  text('F', 260, 82);
  //G
  fill(255, 0, 0)
  rect(280, 70, 15, 15)
  fill(51);
  textStyle();
  textFont('Helvetica', 12);  
  text('G', 300, 82);
  pop();
  
  // Draw borough squares
  Borough(0, 640, 320, 'Bar');
  Borough(1, 320, 160, 'Brn');
  Borough(2, 640, 400, 'Bxl');
  Borough(3, 240, 240, 'Brt');
  Borough(4, 480, 480, 'Brm');
  Borough(5, 320, 240, 'Cmd');
  Borough(6, 400, 320, 'Cty');
  Borough(7, 400, 480, 'Crd');
  Borough(8, 160, 240, 'Elg');
  Borough(9, 400, 80, 'Enf');
  Borough(10, 560, 400, 'Grn');
  Borough(11, 480, 240, 'Hck');
  Borough(12, 160, 320, 'Hms');
  Borough(13, 400, 160, 'Hgy');
  Borough(14, 240, 160, 'Hrw');
  Borough(15, 640, 240, 'Hvg');
	Borough(16, 80, 240, 'Hdn');
  Borough(17, 80, 320, 'Hns');
  Borough(18, 400, 240, 'Isl');
  Borough(19, 240, 320, 'Kns');
  Borough(20, 240, 480, 'Kng');
  Borough(21, 320, 400, 'Lam');
  Borough(22, 480, 400, 'Lsh');
  Borough(23, 320, 480, 'Mrt');
  Borough(24, 560, 320, 'Nwm');
  Borough(25, 560, 240, 'Rdb');
  Borough(26, 160, 400, 'Rch');
  Borough(27, 400, 400, 'Swr');
  Borough(28, 320, 560, 'Stn');
  Borough(29, 480, 320, 'Tow');
  Borough(30, 480, 160, 'Wth');
  Borough(31, 240, 400, 'Wns');
  Borough(32, 320, 320, 'Wst');
  
  //Add river
  //Push();
  noFill();
  stroke(105, 155, 193);//220
  strokeWeight(5);
  strokeCap(SQUARE);
  beginShape();
  curveVertex(40, 397);
  curveVertex(40, 397);
  curveVertex(300, 397);
  // curveVertex(318, 392);
curveVertex(340, 400);
curveVertex(360, 410);
curveVertex(385, 390);
	curveVertex(400, 388);
  curveVertex(470, 392);
curveVertex(500, 370);
curveVertex(515, 375);
curveVertex(520, 410);
curveVertex(540, 410);
curveVertex(545, 375);
curveVertex(555, 375);
curveVertex(580, 390);
	curveVertex(760, 397);
  curveVertex(760, 397);
  endShape();
	//Pop();
}

//index is the index value of the Borough of interest
// eClass is the energy rating class (A-G) in question, e.g. 'Ap'
function Borough(index, startH, startV, name){ // startH represents the starting corner position of the borough rectangle horisontally, and startV represent the same vertically
	// colours representing each energy rating class
  let cA = color(0, 226, 0); 
  let cB = color(84, 172, 81);
  let cC = color(143, 152, 66);
  let cD = color(255, 216, 12);
  let cE = color(255, 131, 0);
  let cF = color(202, 68, 101);
  let cG = color(255, 0, 0);
  
  let pA = (table.get(index, 'Ap')) * 0.75; // calculates width of rect relative to the proportion of lodgement in the given borough with energy class A
  let pB = (table.get(index, 'Bp')) * 0.75; // -"- for energy class B
  let pC = (table.get(index, 'Cp')) * 0.75; // -"- C
  let pD = (table.get(index, 'Dp')) * 0.75; // D
  let pE = (table.get(index, 'Ep')) * 0.75; // E
  let pF = (table.get(index, 'Fp')) * 0.75; // F
  let pG = (table.get(index, 'Gp')) * 0.75; // G
  
  let A = startH;
  let B = A + pA; // the rectangle representing energy class B starts where rect for A stops
  let C = B + pB;
  let D = C + pC;
  let E = D + pD;
  let F = E + pE;
  let G = F + pF;
  
  let textStartH = startH + 5; // dictates where the each borough text starts on the horisontal axis
  let textStartV = startV + 15;  // -"- vertical axis
  
  fill(cA) //fill colour corresponding to energy rating class A
  rect(A, startV, pA, 75)
  fill(cB) //fill colour corresponding to energy rating class B
  rect(B, startV, pB, 75)
  fill(cC) //fill colour corresponding to energy rating class C
  rect(C, startV, pC, 75)
  fill(cD) //D
  rect(D, startV, pD, 75)
  fill(cE) //E
  rect(E, startV, pE, 75)
  fill(cF) //F
  rect(F, startV, pF, 75)
  fill(cG) //G
  rect(G, startV, pG, 75)
  fill(255); // text colour = white
	text(name, textStartH, textStartV);
  
  return;
}
