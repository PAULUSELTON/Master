qManager = {
	currentNum : 0,
    correctPoints : 0,
    questions: loadQuestions(),
    checkAnswer : function () {
		var vgAnswer = $('#vg').text();
		var cnAnswer = $('#cn').text();
		var currQuestion = this.questions[this.currentNum]
		var vgCorrect = currQuestion.correctvg;
		var cnCorrect = currQuestion.correctcn;
		var questionPic = currQuestion.pic;
		var questionDesc = currQuestion.desc;
		function answerScreen(text) {
			$('#answer-screen').find('h1').text(text).next('img').attr('src', questionPic).next('p').text(questionDesc);
		}

		if (vgAnswer === vgCorrect && cnAnswer === cnCorrect) {
			answerScreen("You're Correct!");
            this.correctPoints+=2;
		}
		else if (vgAnswer === vgCorrect || cnAnswer === cnCorrect) {
			answerScreen("You're Half-Correct!");
            this.correctPoints+=1;
		}
		else {
			answerScreen('Incorrect!');
		} ;
		},
    showQuestion : function(){
		//remember to define var in function, when var will dynamically change
        
		//removes previous question
        $('.left-col').find('li').remove();
		$('.right-col').find('li').remove();
		$('#answers').find('#vg').text("Select Video Game").parent().addClass('answer').removeClass('selected');
		$('#answers').find('#cn').text("Select Character Name").parent().addClass('answer').removeClass('selected');
        
		var currQuestion = this.questions[this.currentNum];
		var questionVG  = currQuestion.vg;
        var questionCN  = currQuestion.cn;

            $('#choices').find('img').attr("src", currQuestion.pic);
            $('#choices').find('.cur_quest_num').text(qManager.currentNum +1);
            $('#choices').find('.total_quest_count').text(qManager.questions.length);

            for(var i = 0; i < questionVG.length; i++){
                $('.left-col')
                .find('ul')
                .prepend('<li><button class="choice CN">' + questionVG[i] + '</button></li>')		
            };
            for(var i = 0; i < questionCN.length; i++){
                $('.right-col')
                .find('ul')
                .prepend('<li><button class="choice VG">' + questionCN[i] + '</button></li>')		
            };
        
	}
}; // qManager end
    

helpBox = {
	h2 : function(){
        $('.help-text').removeClass('help-text').addClass('help-text2')
        .find('p').text('Select the characters name');
        $('.help').removeClass('help').addClass('help2');
        
     },
    h3 : function(){
        $('.help2').removeClass('help2').addClass('help3')
        $('.help-text2').removeClass('help-text2').addClass('help-text3')
        .find('p').text('Your answers will appear here, click submit when you\'re ready!');
     },
    h4 : function(){
        $('#help-box').fadeOut();
        $('.darken').fadeOut();
     }
 };
    
$(document).ready(function(){
    $('#answer-screen').hide();
    $('#ending').hide();
    $('.play-area').hide();
	$('#start').one('click', function(){
		qManager.showQuestion();
		$('.play-area').show();
		$('#intro').fadeOut(1000);
	});
    
    
    $('#help-box').on('click', 'button', function(){
        if ($('#help-box').hasClass('help'))
        {
            helpBox.h2();
        }
        else if ($('#help-box').hasClass('help2'))
        {
            helpBox.h3();
        }
        else{
            helpBox.h4();
        }       
});
        
    //show users answers in "Your Answers" area.
	$('.left-col').on('click', '.choice', function(){
		var choice = $(this).text()
		$('#answers').find('#vg').text(choice).parent().addClass('selected').removeClass('answer');
	});
	$('.right-col').on('click', '.choice', function(){
		var choice = $(this).text()
		$('#answers').find('#cn').text(choice).parent().addClass('selected').removeClass('answer');
	});


	$('#submit').on('click', function(){
		qManager.checkAnswer();
		$('#answer-screen').show();
		qManager.currentNum++;
		qManager.showQuestion();
	});

	$('#next').on('click', function(){
		$(this).parent().parent().fadeOut(1000);
        if(qManager.currentNum == qManager.questions.length -1){
            $('#ending').show();
            
        }
	});
});