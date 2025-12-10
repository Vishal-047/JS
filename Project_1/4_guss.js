let userinput=document.querySelector('.input');
let btn=document.querySelector('#Btn');
let result=document.querySelector('#result');
let guessleft=document.querySelector('#guessesLeft');
let g=document.getElementById('g');

let randomnum=parseInt((Math.random()*100)+1);
console.log(randomnum);
let prevguess=[];
let numguess=1;
let playgame=true;
if(playgame){
    btn.addEventListener('click',(e)=>{
        e.preventDefault();
        let guess=parseInt(userinput.value);
        if(isNaN(guess) || guess<1 || guess>100){
            alert('Please enter a valid number between 1 to 100');
        }
        else{
            if(numguess>10){
                playgame=false;
                userinput.setAttribute('disabled','true');
                btn.setAttribute('disabled', 'true');
                userinput.style.backgroundColor='red';
                btn.style.backgroundColor='red';
                g.innerHTML=` You lost the game. The number is ${randomnum}`;
                startgame();
            }
            else{
                if(guess===randomnum){
                    playgame=false;
                    g.innerHTML=`Congratulations! You guessed the number ${randomnum} correctly in ${numguess} guesses.`;
                    userinput.setAttribute('disabled','true');
                    btn.setAttribute('disabled', 'true');
                    userinput.style.backgroundColor='green';
                    btn.style.backgroundColor='green';
                    startgame();
                }
                else{
                    prevguess.push(guess);
                    numguess++;
                    result.innerHTML=`Previous guesses: ${prevguess.join(', ')}`;
                    guessleft.innerHTML=`${11 - numguess}`;
                    startgame();
                }
            }
        }
        userinput.value='';
        function startgame(){
            let resetbtn=document.getElementById('resetBtn');
            resetbtn.addEventListener('click',()=>{
                randomnum=parseInt((Math.random()*100)+1);
                prevguess=[];
                numguess=1;
                playgame=true;
                guessleft.innerHTML=`10`;
                result.innerHTML=`Previous guesses: `;
                userinput.removeAttribute('disabled');
                btn.removeAttribute('disabled');
            })
        }

    })
}