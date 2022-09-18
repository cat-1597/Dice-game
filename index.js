// Create variables for 3 game states

let player1Score = 0
let player2Score = 0
let player1Turn = true 


const message = document.getElementById("message")
const player1Scoreboard = document.getElementById("player1Scoreboard")
const player2Scoreboard = document.getElementById("player2Scoreboard")
const player1Dice = document.getElementById("player1Dice")
const player2Dice = document.getElementById("player2Dice")
const rollBtn = document.getElementById("rollBtn")
const resetBtn = document.getElementById("resetBtn")

function showDisplayBtn() {
    rollBtn.style.display = "none"
    resetBtn.style.display = "block"
} 

/* Hook up a click event listener to the Roll Dice Button. Log out a random
 number between 1 and 6. Hint: use Math.floor() and Math.random() */

 rollBtn.addEventListener("click", function() {
     const randomNumber = Math.floor(Math.random() * 6) + 1
     //console.log(randomNumber)


    // 1. Display the dice number instead of logging it out
    // 2. Use the 'active' class to show which player's turn it is 
    // Hint: use the .classList.remove() and classList.add() methods
    // 3. Update the "message" DOM node so that it states who's turn it is

    // 1. Update the scores for each player
    // 2. Display the scores in their scoreboards

     if (player1Turn) {
        //console.log("Player 1 rolled a " + randomNumber)
        player1Score += randomNumber
        player1Dice.textContent = randomNumber
        player1Dice.classList.remove("active")
        player2Dice.classList.add("active")
        message.textContent = "Player 2 Turn"
        player1Scoreboard.textContent = player1Score
     } else {
         //console.log("Player 2 rolled a " + randomNumber)
         player2Score += randomNumber
         player2Dice.textContent = randomNumber
         player2Dice.classList.remove("active")
         player1Dice.classList.add("active")
         message.textContent = "Player 1 Turn"
         player2Scoreboard.textContent = player2Score


    // 1. Check if a player has won. If so, change the message to "Player X has won!"
    // 2. Hide the Roll Dice Button and show the Reset Button. Hint: use display none/block

        if (player1Score >= 20) {
            message.textContent = "Player 1 has won! 🥳"
            showDisplayBtn()
           // rollBtn.style.display = "none"
           // resetBtn.style.display = "block"
        } else if (player2Score >= 20) {
            message.textContent = "Player 2 has won! 🎉"
            showDisplayBtn()
            //rollBtn.style.display = "none"
            //resetBtn.style.display = "block"
        }

     }
            // 3. Switch the turn back to the other player
            //one way to write this OR
            //  if (player1Turn) {
            //     player1Turn = false
            // } else {
            //     player1Turn = true
            // }

    player1Turn = !player1Turn
})
    // 1. Hook a click event listener up with the Reset Button
    // 2. Create a reset() function that resets the game
    // 3. Invoke the reset() function when the Reset Button is clicked

resetBtn.addEventListener("click", function(){
    reset()
})
 
function reset() {
    message.textContent = "Player 1 Turn"
    player1Scoreboard.textContent = 0
    player2Scoreboard.textContent = 0
    player1Dice.textContent = '-'
    player2Dice.textContent = '-'
    player1Score = 0
    player2Score = 0
    player1Turn = true
    resetBtn.style.display = "none"
    rollBtn.style.display = "block"
    player2Dice.classList.remove("active")
    player1Dice.classList.add("active")
}
 