let randomnumber = Math.trunc(Math.random()*100)+1 //You need this to be at the very beginning
let score=10;//original score
let highscore=0;//you can update this when you have other highscore
document.querySelector('.score').textContent=`💰Score:${score}`
document.querySelector('.highscore').textContent=`🥇Highscore:${highscore}`
document.querySelector('.Check').addEventListener('click',function(){
   inputUser=Number(document.querySelector('.userInput').value)
   if(!inputUser){
    document.querySelector('.msg').textContent='No Input!!'
   }//This will give a message if the user did not submit a value
   if (randomnumber==inputUser){
      document.querySelector('.title').textContent='You got the right answer!!';
      document.querySelector(".think").src="images/correct.gif";
      document.querySelector('.guessnum').textContent=`${randomnumber}`
      document.querySelector('.highscore').textContent=`🥇Highscore:${score}`
      document.body.className = "green";
   }
   else if (randomnumber !== inputUser && (score >=1)){
     score=score-1
     document.querySelector('.score').textContent=`💰Score:${score}`
     document.querySelector(".think").src="images/wrong.gif";
     if (score===0) {
       document.querySelector('.title').textContent='Game Over!!';
       document.querySelector('.guessnum').textContent=`Answer:${randomnumber}`
       document.querySelector(".think").src="images/go.gif";
       document.body.className = "red";
     }
     else if (randomnumber>inputUser) {document.querySelector('.msg').textContent='↟Try a greater number!!';}
     else if (randomnumber<inputUser) {document.querySelector('.msg').textContent='⇓Try a smaller number!!'}
   }

})
document.querySelector('.resetbtn').addEventListener('click',function(){
   randomnumber = Math.trunc(Math.random()*100)+1
   score = 10;
   document.querySelector('.title').textContent='Guess My Number!';
   document.querySelector('.guessnum').textContent=`?`;
   document.querySelector('.score').textContent=`💰Score:${score}`
   document.body.className = "default"
   document.querySelector(".think").src="images/thinker.gif";
   document.querySelector('.guessnum').textContent=`?`
})
