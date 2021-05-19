//onload function
window.onload = pageReady;
function pageReady(){
    
    var player1 = "Player 1" ; //Player Names
    var player2 ="Player 2";
    var player1Score =0;     //Players Intial scores
    var player2Score =0;
    var clickCount = 0;     //click count of button
   
    
    //Getting different elements by its id attribute
    var die1 = document.getElementById("die1");
    var die2 = document.getElementById("die2");
    var score1 = document.getElementById("score1");
    var score2 = document.getElementById("score2");    
    var editBtn = document.getElementById("editBtn");    
    var rollBtn = document.getElementById("rollBtn");
    var playAgain = document.getElementById("playAgain");
    var Player1 = document.getElementById("Player1");
    var Player2 = document.getElementById("Player2");
    var scoreP1 = document.getElementById("scoreP1");
    var scoreP2 =  document.getElementById("scoreP2"); 
    var formHandle = document.forms.editName;
    var editBtn2 = document.getElementById("editBtn2");
    var editPlayer1 = document.getElementById("editPlayer1");
    var editPlayer2 = document.getElementById("editPlayer2");
    
    formHandle.style.display = "none";
    
    // Function to change the player name 
    editBtn.onclick = editNames;
    function editNames(){ 
        
        formHandle.style.display = "block";
        editBtn2.onclick = changeName;
        
        //Function to display names after changing it
        function changeName(){
            if( editPlayer1.value === "" || editPlayer2.value === "" || editPlayer1.value === null || editPlayer2.value === null){
               player1 = "Player 1";
               player2 = "Player 2";
               Player1.style.display = "block"; 
               Player2.style.display = "block"; 
               scoreP1.style.display= "block"; 
               scoreP2.style.display = "block";
                formHandle.style.display = "none";
            }else{
                Player1.innerHTML = editPlayer1.value; 
                Player2.innerHTML = editPlayer2.value; 
                scoreP1.innerHTML = "Total Score(" + editPlayer1.value +")"; 
                scoreP2.innerHTML = "Total Score(" + editPlayer2.value +")";
                player1 = editPlayer1.value;
                player2 = editPlayer2.value;
                formHandle.style.display = "none";
            }
        }
    } 
    
    
    // Function to roll the dice 
    rollBtn.onclick = rollDice;
    function rollDice() { 
        
        clickCount++;  //increment in the click count
        
        document.querySelector("h1").innerHTML = "Turn" +clickCount;
        
        //properties to display random numbers 
        var randomNumber1 = Math.floor(Math.random() * 6) + 1; 
        var randomNumber2 = Math.floor(Math.random() * 6) + 1; 
        
        die1.innerHTML = randomNumber1;
        die2.innerHTML = randomNumber2;
        score1.innerHTML = player1Score += randomNumber1;
        score2.innerHTML = player2Score += randomNumber2;
        
        //---Logic to display winner----
        //---if player1's total score is more than player1 then player1 is winner message displayed----
        //---if player2's total score is more than player1 then player2 is winner message displayed----
        //---if both players get the same score in 5 turns then match tie message  displayed----
        //---clickcount displays total number of turns i.e. 5 in this game
        if (clickCount >= 5){
            if(player1Score > player2Score)  
            {
                document.querySelector("h2").innerHTML = player1+ " is Winner!";
            }
            else if(player2Score > player1Score) 
            {
                document.querySelector("h2").innerHTML = player2 + " is Winner!";   
            }else                                    
            {
                document.querySelector("h2").innerHTML = "Match Tie!"; 
            }
            rollBtn.disabled = true;
            }//end of if else statement
    }//end of rollDice function
    
    
    //Function to play again
    playAgain.onclick = playagain;
    function playagain(){
        window.location.reload();
    }//end of playAgain function
}//end of onload function