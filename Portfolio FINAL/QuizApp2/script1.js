$(document).ready(function() {


var complete = false; // will turn to true after the test is done
var score = 0;
var questionsAnswered = 0; // counter for number of questions answered
var status; // will convert a boolean to 'correct' or 'incorrect'
var response; //user response
var numChoices = 4; // stores how many choices each question will have so that if it changes, loops in program will automatically change
var questions = [
				{question: "Which small chamber of the heart recieves blood back from the rest of the body?", choices: ["Right Atrium", "Right Ventricle", "Left Ventricle", "Left Atrium"], correct:0, answered:false, result:null, pic:"RA", userChoice:null, feedback:"This small chamber on the right side of the heart is the right atrium and recieves blood back from rest of body"},
				{question: "What is the name of this structure being pointed to in the image?", choices: ["Right Atrium", "Left Atrium", "Aorta", "Pulmonary Artery"], correct:2, answered:false, result:null, pic:"Aorta", userChoice:null, feedback: "This is the aorta or the largest artery in the body and originates from the heart here."},
				{question: "What is name of the this vessel?", choices: ["Pulmonary Veins", "Pulmonary Artery", "Right Coronary Artery", "Left Coronary Artery"], correct:1, answered:false, result:null, pic:"PA", userChoice:null, feedback:"This is the Pulmonary Artery. It is the only artery that does transport blood the rest of the body."},
				{question: "This small artery provides blood the left ventricle.", choices: ["Left Coronary Artery", "Right Coronary Artery", "Pulmonary Artery", "Pulmonary Veins"], correct:0, answered:false, result:null, pic:"LCA", userChoice:null, feedback:"This small artery is the Left Coronary. It provides blood the the majority of the left ventricle."},
				{question: "The outside tip of the heart being pointed to by the black arrow is:", choices: ["Great Vessels", "Base", "Lateral Wall, Left ventricle", "Apex"], correct:3, answered:false, result:null, pic:"Apex", userChoice:null, feedback:"The apex is the very tip of the heart and is being pointed to here. It contributes nearly 15% to the heart's pumping action."}
				];

var qNum = 0; //question user is on
var correct; //correct answer
var answered; //whether the user has already answered the question
var result; //answered correctly or incorrectly (true = correct, false = incorrect)

var loadQuestionsChoices = function() {
clearRadios();
$('#score').text(score + "/" + questions.length);
if (questions[qNum].answered == false) { 
$('#question').text(questions[qNum].question); 

$('.picture').attr("id", questions[qNum].pic).hide().show();
}
else {
$('.picture').attr("id", questions[qNum].pic) 
	if (questions[qNum].result)
		status = "Correct! ";
	else if (questions[qNum].result == false) 
		status = "Incorrect. ";
$('#feedback').hide().show().text(status + questions[qNum].feedback); 
}

for (var i=0; i<numChoices; i++) {	
	$("#choice" + i).text(questions[qNum].choices[i]); 
	
	if (questions[qNum].answered) {
		if (i == questions[qNum].correct) 
			$("#choice" + i).toggleClass("correct", 1000);
		else 
			$("#choice" + i).toggleClass("incorrect", 1000);
		}
		else {
			$("#choice" + i).toggleClass("unanswered", 1000);
			$('#feedback').hide().show().text("Choose an answer, then hit the submit button. " + "Question " + (qNum + 1) + " of " + questions.length);
		}
		// next, show the answer that the user has chosen
		if (i == questions[qNum].userChoice) 
			$("#chosen" + i).hide().fadeIn().text("You chose #" + (i + 1));
	}
	//update nav buttons to show which questions were answered correctly/incorrectly or unanswered	
for (var i=0; i<questions.length; i++) {
	
	if(questions[i].result) 
		$('#nav' + i).toggleClass("correct", 1000);
	else if (questions[i].result == false)
		$('#nav' + i).toggleClass("incorrect", 1000);
	else
		$('#nav' + i).toggleClass("unanswered", 1000);	
	}
if(questionsAnswered == questions.length && complete == false) {
	alert("Your final score: " + score + "/" + questions.length);
	complete = true; 
	}
}


var loadNavButtons = function() {
	for (var i=0; i<questions.length; i++) 
		$('#nav-buttons').append('<div class="nav-button num" id="nav' + i + '">' + (i+1) + '</div>'); 
}

var loadRadioButtons = function() {
	for (var i=0; i<numChoices; i++) 	
		$('#choices').append('<br><input type="radio" id="radio' + i + '" name="radios"><div class="choice" id="choice' + i + '"></div>' + '<div class="chosen" id="chosen' + i + '"' + '></div>'); // load correct number of radio buttons
}	

var checkAnswer = function() {
	correct = questions[qNum].correct; 
	answered = questions[qNum].answered; 
	result = questions[qNum].result;

	if (answered) {alert("You have already answered the question")}
	else {
		for (var i=0; i<numChoices; i++) {
		//determine which radio button is pressed
		if (document.getElementById('radio' + i).checked) {
		response = i;
		questions[qNum].userChoice = i; 
			} 
		}
		if (response == null) 
			alert("Please make a selection before hitting submit")
		else {	
			
			if (response == correct) {
				questions[qNum].result = true;
				score++; 
			}
			else {
				questions[qNum].result = false;
			}
	questions[qNum].answered = true; 
	questionsAnswered++; 
		}
	response = null; 
	loadQuestionsChoices();
	}
}	



// reset radio selection
var clearRadios = function() {
	for (var i=0; i<numChoices; i++) {
		document.getElementById('radio' + i).checked = false;
		$("#choice" + i).attr('class', 'choice');
		$('.chosen').text("");
		}
	for (var i=0; i<questions.length; i++) 
		$('#nav' + i).attr('class', 'nav-button num');
}


var refresh = function() {
	$('#feedback').text('');
	clearRadios();
	loadQuestionsChoices();
}



//  intro
$('h1').hide().toggle("blind", {direction: "right"}, 1000);
loadRadioButtons();
loadNavButtons();
refresh();


$('#submit').click(checkAnswer);

$('#previous').click(function() {
	if (qNum != 0) {
		$('#box').animate({left:"-=122px"}, 500);
		qNum--;
		refresh();
	}
});

$('#next').click(function() {
	if (qNum != questions.length - 1) {
		$('#box').animate({left:"+=122px"}, 500);
		qNum++;
		refresh();
	}
});

$('.num').click(function() {
		var id = $(this).attr("id");
		var idNum = parseInt(id.substr(3,3));
		var position = 0;;
		console.log(position + " " + idNum);	
		switch (idNum) {
			case 0: 
				position = "270px";
				break;
			case 1:	
				position = "392px";
				break;
			case 2:
				position = "514px";
				break;
			case 3:
				position = "636px";
				break;		
			case 4:
				position = "758px";
				break;
		}
		console.log(position + " " + idNum);
		$('#box').animate({left:position}, 500);
		qNum = idNum;
		refresh();
		// animateBox();
});

$('.nav-button').hover(
	function() {$(this).animate({boxShadow:"0px 0px 30px rgba(255, 136, 0, 1.0) inset, 1px 1px 3px rgba(0, 0, 0, 1.0) outset"}, 200)}, 
	function() {$(this).animate({boxShadow:"0px 0px 30px rgba(255, 136, 0, 0.0) inset, 1px 1px 3px rgba(0, 0, 0, 1.0) outset"}, 200)}
);

});