'use strict';
const displayMessage = function(message)
{
    document.querySelector('.message').textContent=message;
}
const displayScore = function(score)
{
    document.querySelector('.score').textContent=score;
}
const generateSecretNumber = function()
{
    return Math.trunc(Math.random()*20)+1;
}
const displayNumber = function(number)
{
    document.querySelector('.number').textContent=number;
}
const editCss =function(bgColor,width)
{
    document.querySelector('body').style.backgroundColor=bgColor;
    document.querySelector('.number').style.width=width;
}
let secretNumber =generateSecretNumber();
let score =20;
let highScore = 0;

displayNumber('?');
document.querySelector('.check').addEventListener('click', function(){
    const guess =Number(document.querySelector('.guess').value);
    if(!guess){
        displayMessage('🚫 No Number');
    }else if(guess===secretNumber){
        displayMessage('🎊 Correct Number!');
        displayNumber(secretNumber);
        // when player wins
        editCss('#60b347','30rem')
        if(score>highScore)
        {
            highScore=score;
            document.querySelector('.highscore').textContent=highScore;
        }
    }
    else if(guess!==secretNumber)
    {
        if(score>1){
                 displayMessage(guess<secretNumber ? '📈 Think Big!' : '📉 Go Down!');     
                 displayScore(--score);
                  }
         else{
                displayMessage('😁 You Lost The Game!');   
                displayScore(0);
             }
    } 
})
document.querySelector('.again').addEventListener('click',function(){
        score=20;
        displayScore(score);
        secretNumber=generateSecretNumber();
        displayMessage()
        displayNumber('?');
        // document.querySelector('.number').textContent=secretNumber;
        document.querySelector('.guess').value='';
        editCss('#222','15rem')
})
