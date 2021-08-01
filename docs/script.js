let randomnumber = Math.trunc(Math.random()*100)+1 //You need this to be at the very beginning
let score=10;//original score
let highscore=0;//you can update this when you have other highscore
document.querySelector('.score').textContent=`💰Score:${score}`
document.querySelector('.highscore').textContent=`🥇Highscore:${highscore}`
console.log(randomnumber)
document.querySelector('.Check').addEventListener('click',function(){
   inputUser=Number(document.querySelector('.userInput').value)
   if(!inputUser){
    document.querySelector('.msg').textContent='No Input!!'
   }//This will give a message if the user did not submit a value
   if (randomnumber==inputUser){
      document.querySelector('.msg').textContent='You got the right answer!!';
      document.querySelector('.guessnum').textContent=`${randomnumber}`
      document.querySelector('.highscore').textContent=`🥇Highscore:${score}`
      document.body.className = "green"
   }
   else if (randomnumber !== inputUser && (score >=1)){
     score=score-1
     document.querySelector('.score').textContent=`💰Score:${score}`
     if (score===0) {
       document.querySelector('.msg').textContent='Game Over!!';
       document.body.className = "red"
     }
     else if (randomnumber>inputUser) {
       document.querySelector('.msg').textContent='↟Try a greater number!!';
     }
     else if (randomnumber<inputUser) {document.querySelector('.msg').textContent='⇓Try a smaller number!!'

     }
   }

})
document.querySelector('.resetbtn').addEventListener('click',function(){
   randomnumber = Math.trunc(Math.random()*100)+1
   score = 10;
   document.querySelector('.score').textContent=`💰Score:${score}`
   console.log(randomnumber)
   document.body.className = "default"
})
// You are listening to user input. You can define the function right away of outside

/*to change background color

document.querySelector('body').style.backgroundColor=''*/
