var questionArray = [
  {
    question:'What is your quest?',
    answer: 'i seek the grail'
  },
   {
    question:'What is the capital of Assyria?',
    answer: 'assur'
  },
  {
    question:'What is the air-speed velocity of an unladen swallow?',
    answer: 'african or european'
  },
   {
    question:'What do you do with witches?',
    answer: 'burn them'
  },
    {
    question:'What also floats on water?',
    answer: 'a duck'
  },
]

//display questions
for(i = 0; i < questionArray.length; i++) {
 var questionDisplay = questionArray[i].question
   document.getElementById('question' + [i]).textContent = questionDisplay
}

//runs functiion
function scoreQuiz(){
  var correct=0;
  var incorrect=0;
for(i = 0; i < questionArray.length; i++) {
  var answer = document.getElementById('userAnswer' + [i]).value
      var formQuestion = document.getElementById('question' + [i])

  if (answer == questionArray[i].answer){
          formQuestion.className = 'correct'
          correct++

  } else {
      formQuestion.className = 'incorrect'
      incorrect++
  }
}
  if (correct>4){
    alert("Congratulations! You may continue on your quest.")
  } else {
    alert("You have failed and will now be cast into the Gorge of Eternal Peril!! AAAHHHH!!!!")
  }
  document.getElementById("correct").textContent = correct
  document.getElementById("incorrect").textContent = incorrect
}








