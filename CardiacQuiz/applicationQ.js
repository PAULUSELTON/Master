$(document).ready(function() {
	// object that contains questions, choices and correct answer
	var allQuestions = [
	{
		qNumber: 1,
		question: "The artery that takes blood from the heart to the body is",
		choices: ["Aorta", "Pulmonary Artery", "Pulmonary Veins", "Inferior Vena Cava", "Superior Vena Cava"],
		correctAnswer: 1,
		correctAnswerBlurb: "That's correct!",
		incorrectAnswerBlurb: "Sorry, that's not correct!"
	}, 
	{
		qNumber: 2,
		question: "The small artery that provides blood to the Left Ventricle is",
		choices:   ["Aorta", "Pulmonary Artery", "Pulmonary Veins", "Left Coronary Artery", "Right Coronary Artery"],
		correctAnswer: 4,
		correctAnswerBlurb: "That's correct!",
		incorrectAnswerBlurb: "Sorry, that's not the right vessel!",
	{
		qNumber: 3,
		question: "The small chamber that receives blood back from the body is",
		choices: ["Right Atrium","Left Atrium", "Left Ventricle", "RightVentricle", "Pulmonary Veins"],
		correctAnswer: 1,
		correctAnswerBlurb: "That's correct!",
		incorrectAnswerBlurb: "Sorry, that's not the right chamber!"
	}, 
	{
		qNumber: 4,
		question: "The main artery that takes blood to the lungs is called",
		choices: ["PulmonaryArtery","RightCoronaryArtery", "LeftCoronaryArtery", "PulmonaryVeins", "PulmonaryArtery"],
		correctAnswer: 5,
		correctAnswerBlurb: "That's correct!",
		incorrectAnswerBlurb: "Sorry, that's not the right artery!"
	},
	{
		qNumber: 5,
		question: "The tip of the heart being pointed to the arrow is",
		choices: ["Apex", "PosteriorWall", "Base", "RightAtrium", "SuperiorVenaCava"],
		correctAnswer: 1,
		correctAnswerBlurb: "That's correct!",
		incorrectAnswerBlurb: "Sorry, that's not the right answer!"
	}
	];

	// initialize global variables
	var questionIndex = 0;
	var totalCorrectAnswers = 0;
	var totalNumberQuestions = allQuestions.length;

