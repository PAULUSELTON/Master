$(document).ready(function () {
    $(".reset").click(function() {
    location.reload(true);
});
    $(".start").click(cardiac);

    var qNum = 0;

    function cardiac() {
        var scoreAry = [];
        var questions = [{
            q: "What is the name of the small artery that supplies the left ventricle with blood?",
            s: ["Right Coronary", "Pulmonary", "Conus", "Left Coronary"],
            a: "Left Coronary",
            //i: images/LeftCoronaryArtery.png;
            correct: 0
        }, {
            q: "The main vein that drains the heart of blood is:",
            s: ["Posterior Vein LV", "Coronary Sinus", "Great Cardiac Vein", "Posterior Interventricular Vein"],
            a: "Coronary Sinus",
            //i: images/CoronarySinus.png;
            correct: 0
        }, {
            q: "What is the name of the ridge located in the Right Atrium?",
            s: ["Triangle of Koch", "Crista Terminalis", "Fossa Ovale", "Intraatrial septum"],
            a: "Crista Terminalis",
            //i: images/CoronarySinus.png;
            correct: 0
        }, {
            q: "The Triangle of Koch is contains Coronary Sinus Ostium, The Tricuspid Septal Leaflet and _____?",
            s: ["Crista Terminalis", "Tendon of Tedaro", "Foramen Ovale", "Right Atrial Appendage"],
            a: "Tendon of Tedaro",
            //i: images/CoronarySinus.png;
            correct: 0
        }, {
            q: "Where are pacer leads placed into to reach the left ventricle ",
            s: ["Right Atrium", "Forament Ovale", "Coronary Sinus", "Tricuspid Valve"],
            a: "Coronary Sinus",
            //i: images/CoronarySinus.png;
            correct: 0
        }, {
            q: "The smallest Tricuspid leaflet is",
            s: ["Anterior", "Posterior", "Septal", "Ventricular"],
            a: "Septal",
            //i: images/CoronarySinus.png;
            correct: 0
        }, {
            q: "Which coronary artery usually supplies the RVOT?",
            s: ["Left Coronary", "Posterior Descending", "Right Coronary", "Conus"],
            a: "Conus",
            //i: images/CoronarySinus.png;
            correct: 0
        }, {
            q: "How many Pulmonary Veins do most people have?",
            s: ["2", "1", "4", "3"],
            a: "4",
            //i: images/CoronarySinus.png;
            correct: 0
        }, {
            q: "Normal Left Ventricular Ejection Fraction is normally at least",
            s: ["65%", "55%", "50%", "60%"],
            a: "55%",
            //i: images/CoronarySinus.png;
            correct: 0
        }, {
            q: "All of the following are in the Posterior Mitral Valve leaflet, EXCEPT",
            s: ["P-1", "P-2", "A-1", "P-3"],
            a: "A-1",
            //i: images/CoronarySinus.png;
            correct: 0
        }];

   var counter = questions.length;

        //This grabs the question and answer data from the questions array and appends it to the #questions div:
        function createQuestion(questions) {
            for (var i = 0; i < questions.length; i++) {
                $(".start").hide();
                $("#questions").append('<form id="' + i + '" class="center-text"><p>Question ' + (i + 1) + ' of ' + questions.length + '</p><h3 class="question">' + questions[i].q + '</h3>' + buttons(questions[i].s, i) + '<button type="submit" class="next">NEXT</button></p></form>');
            }
            //This hides all except the first question:
            for (var k = questions.length - 1; k > 0; k--) {
                $('#' + k).hide();
            }
        }
        //This grabs the answer choices from the questions array and returns them to createQuestion():
        function buttons(ary, qNum) {
            var answers = [];
            for (i = 0; i < ary.length; i++) {
                answers.push('<input type="button" name="' + qNum + '" value="' + ary[i] + '"><br>');
            }
            return answers.join(" ");
        }
        
        //This sums the correct values in the questions array:
        function sumScore(questions) {
            return scoreAry.reduce(function (previousValue, currentValue, index, array) {
                return previousValue + currentValue;
            });
        }
        
        //This checks the user's answer and updates the score:
        function checkAnswer(answer, qNum, questions) {

            if (answer == questions[qNum].a) {
                alert('your right');
                questions[qNum].correct = 1;
                scoreAry.push(questions[qNum].correct);
                $(".next").show();
            } else {
                alert('your wrong');
                scoreAry.push(questions[qNum].correct);
                $(".next").show();
            }
        }
        
        createQuestion(questions);
        $("input").click(function() {
            //alert(this.value); // or alert($(this).attr('id'));
             var userInput = this.value;
             var userQ = this.name;
              //This grabs the user's selected answer
             checkAnswer(userInput, userQ, questions);
        });

        $(".next").click(function (event) {
          //  alert("hi");
            event.preventDefault(); //This stops the form from submitting
             $(".next").hide();
    
            if (counter > 1) {
                //checkAnswer(userInput, qNum, questions);
                $("#" + qNum).hide();
                $("#" + qNum).next().show();
                qNum ++;
                counter--;
            } else if (counter == 1) {
                //checkAnswer(userInput, qNum, questions);
                $("#questions").find("form").remove();
                $("#questions").append('<h3 class="result"></h3>');
                $(".result").text('You answered ' + sumScore(questions) + ' questions correctly out of 10.');
                   for (j = 0; j < scoreAry.length; j++) {
                        if (scoreAry[j] === 0) {
                            console.log(questions[j].q, questions[j].a);
                            $("#questions").append('<p class="missed-' + j + '">You missed: ' + questions[j].q + ' ' + questions[j].a + '</p>');      
                        }
                    }
            } else {
                return false;
            }
        });
    }
});