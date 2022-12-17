let words = [
    {
        "inputs":5,
        "category":"Sports",
        "word":"Chess"
    },
    {
        "inputs":6,
        "category":"European country name",
        "word":"France"
    }
]

$(document).ready(function(){
    fillBlanks()
})
function fillBlanks() { 
    const randomWord = words[Math.floor(Math.random() * words.length)];
     $("#blanks").empty(); 
     for (let i = 0; i < randomWord.inputs; i++) { 
        let input_html = `<span class="fill_blanks" id="input_${i}">_</span>` 
        $("#blanks").append(input_html) 
     }
      $("#hint").html(randomWord.category)

    

    var gameOver=false 
//Fi11 blanks only if the character match is found 
$(".clickable").click(function(){
    var correctGuess = false;

    //Get the id of the button clicked 
    let id = $(this).attr("id");

    //Get the life 
    var life = parseInt($('#life').text())
    
    //Loop through all the letters 
    for (var i = 0; i <randomWord.word.length; i++) {
        //Check if the character matches the id of the button 
    if (randomWord.word.chartAi(i).tolowerCase() == id) {
    
        //Check if the life is still left and blank is is empty/already filled 
        if (life > 0 && ($(".fill_blanks").eq(i).html() == "_" || $(".fill_blanks").eq(i).html() == id)){
             //fi11 blanks 
        $(".fill_blanks").eq(i).html(id);
        correctGuess = true; 

        //Check if the word guess is complete 
        If ($("#blanks").text() === randomWorld.word.toLowerCase());{
                $("#result").text("You Win!!") 
                correctGuess = true; 
                gameOver=true 
                }
            }
        }
    }

    if (life>0 && correctGuess != true && gameOver != true){
        life  = life-1
        $("#life").text(life)
    }
    else if (life == 0){
        $("#result").text("You Lost")
    }
})
}
