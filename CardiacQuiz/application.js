$(document).ready(function(){
    $('#answer-screen').hide();
    $('#ending').hide();
    $('.play-area').hide();
	$('#start').one('click', function(){
		//qManager.showQuestion();
		$('.play-area').show();
		$('#intro').fadeOut(1000);
	});