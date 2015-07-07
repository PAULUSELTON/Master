$(document).ready(function () {

$('#guess').focus(function () {
	if ($(this).val() == $(this).attr("value")) {
		$(this).val("");
	}
}).blur(function () {
	if ($(this).val() === "") {
		$(this).val($(this).attr("value"));
	}
});


    //Initial Variables

    var answer = Math.floor((Math.random() * 100) + 1);
    console.log("The secret number is: " + answer);
    var numberOfGuesses = 0;
    var guesses = [];
    guesses.length = 0;
    var distance = null;
    var previousDistance = null;

    function getGuess() {
        $("#submit").click(game);
        $("#guess").keydown(function (enter) {
            if (enter.keyCode == 13) {
                game();
            }
        });
    }

    getGuess();

    function game() {
        var guess = parseInt($('#guess').val());
        if (guess !== null && $.isNumeric(guess) && (guess < 101) && (guess > 0)) {
            $('#guess').val('Guess a number...');
            numberOfGuesses += 1;
            if ($.inArray(guess,guesses) > -1) {
            	 $('body').css("background-color", "#222");
            	 $('#error').html('ERROR: You guessed that number already. Please try a new number.');
          } else {
            guesses.push(guess);
            distance = Math.abs(answer - guess);
            previousDistance = Math.abs(answer - guesses[guesses.length - 2]);
            $('#error').html('');
            if (guess === answer) {
                $('body').css("background-color", "#CC0000");
                $('#hint').html('Congrats! You got it in ' + numberOfGuesses + ' guesses! The secret number was ' + answer +"!");
            } else {
                if (isNaN(previousDistance)) {
                    if (guess > answer) {
                        $('#hint').html('Guess lower! Last guess: ' + guess);
                    } else if (guess < answer) {
                        $('#hint').html('Guess higher! Last guess: ' + guess);
                    }

                } else if (distance > previousDistance) {
                    $('body').css("background-color", "#3399FF");
                    if (guess > answer) {
                        $('#hint').html('You\'re getting colder, guess LOWER! Last guess: ' + guess);
                    } else if (guess < answer) {
                        $('#hint').html('You\'re getting colder, guess HIGHER! Last guess: ' + guess);
                    }
                } else if (distance < previousDistance) {
                    $('body').css("background-color", "#CC0000");
                    if (guess > answer) {
                        $('#hint').html('You\'re getting hotter, guess LOWER! Last guess: ' + guess);
                    } else if (guess < answer) {
                        $('#hint').html('You\'re getting hotter, guess HIGHER! Last guess: ' + guess);
                    }
                } else if (distance === previousDistance) {
                    if (guess > answer) {
                        $('#hint').html('You\'re on fire, guess LOWER! Last guess: ' + guess);
                    } else if (guess < answer) {
                        $('#hint').html('You\'re on fire, guess HIGHER! Last guess: ' + guess);
                    }
} 
}
}
        } else {
        $('#error').html('ERROR: Your guess must be a number between 1 and 100');
        }
        $('#newgame').click(function (e) {
            e.preventDefault();
            $('body').css("background-color", "#222");
            answer = Math.floor((Math.random() * 100) + 1);
            console.log("The secret number is: " + answer);
            numberOfGuesses = 0;
            guesses.length = 0;
            distance = null;
            previousDistance = null;
            $('#hint').html('');
            $('#error').html('');
            $('#guess').val('Guess a number...');
        });
    }
    });
