$( document ).ready(function() {

//user count of correct, incorrect, no answers
var correctAnswers = 0;
var incorrectAnswers = 0;
var noAnswers = 0;

//hiding the questions and hiding the results
$("#question").hide();
$("#endTrivia").hide();

//user clicks on button to begin the game.  this will hid the begin view and show the questions. 

$("#beginButton").on("click", function(){

$("#beginTrivia").hide();

		$("#question").show();

		runTimer();


});

//button  is to submit your answer before time runs out
$("#submitButton").on("click", function(){

		$("#question").hide();

		finalResult();

});

// function will check the value of the raidals and will check the answer if it is correct. My main focus to get this code to work. 
//not as dynamic as i like. 
function finalResult(){

	var q1 = $('input:radio[name="q1"]:checked').val();
	var q2 = $('input:radio[name="q2"]:checked').val();
	var q3 = $('input:radio[name="q3"]:checked').val();
	var q4 = $('input:radio[name="q4"]:checked').val();
	var q5 = $('input:radio[name="q5"]:checked').val();
	var q6 = $('input:radio[name="q6"]:checked').val();

		if(q1 == undefined){
			noAnswers++;
		}
		else if(q1 == "Austin"){
			correctAnswers++;
		}
		else{
			incorrectAnswers++;
			}
		if(q2 == undefined){
			noAnswers++;
		}
		else if(q2 == "4"){
			correctAnswers++;
		}
		else{
			incorrectAnswers++;
			}
		if(q3 == undefined){
			noAnswers++;
		}
		else if(q3 == "Donald Trump"){
			correctAnswers++;
		}
		else{
			incorrectAnswers++;
			}
		if(q4 == undefined){
			noAnswers++;
		}
		else if(q4 == "Your Shadow"){
			correctAnswers++;
		}
		else{
			incorrectAnswers++;
			}

		if(q5 == undefined){
			noAnswers++;
		}
		else if(q5 == "Nancy Astor"){
			correctAnswers++;
		}
		else{
			incorrectAnswers++;
		}
		if(q6 == undefined){
			noAnswers++;
		}
		else if(q6 == "Yellow"){
			correctAnswers++;
		}
		else{
			incorrectAnswers++;
			}


		$("#correct_Answer").html("Correct Answers " + correctAnswers++);
		$("#incorrect_Answer").html("Incorrect Answers "+ incorrectAnswers++);
		$("#no_Answer").html("No Answers " + noAnswers++);

		// Show the completed Score Div

		$("#endTrivia").show();
	}

	    var number = 30;
	    var intervalId;

	  	function runTimer() {
      intervalId = setInterval(decrement, 1000);
    

    //  The decrement function.
    function decrement() {

      //  Decrease number by one.
      number--;

      //  Show the number in the #show-number tag.
      $("#show-number").html("<h2>" + number + " Seconds</h2>");


      //  Once number hits zero...
      if (number === 0) {

        //  ...run the stop function.
        stop();

        //  Alert the user that time is up.
        alert("Your time is up I have what I need");
      }
    }

    //  The stop function
    function stop() {

      //  Clears our intervalId
      //  We just pass the name of the interval
      //  to the clearInterval function.
      clearInterval(intervalId);

      $("#question").hide();

	  finalResult();
    }
}



});
