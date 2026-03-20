//create array for seq 
let gameSeq=[];
let userSeq=[];
let btns = ["yellow", "red", "purple", "green"];
// create variables
let started = false;
//when game not started 
let level = 0;
let h2 = document.querySelector("h2");
document.addEventListener("keypress", function(){
    //for game start one time 
    if(started == false){
        console.log("game started");
        started = true;  
        levelUp();
    }
});
//create a function for flash btn 
function gameFlash(btn){
    btn.classList.add("flash");
    setTimeout(function () {
        btn.classList.remove("flash");
    }, 250);
}
function userFlash(btn){
    btn.classList.add("userflash");
    setTimeout(function () {
        btn.classList.remove("userflash");
    }, 200);
}

function levelUp(){
    userSeq =  [];
    level++;
    h2.innerText = `Level ${level}`;

   let randIdx = Math.floor(Math.random()*3);
   let randColor = btns[randIdx];
   let randBtn = document.querySelector(`.${randColor}`);
   gameSeq.push(randColor);
   console.log(gameSeq);
   gameFlash(randBtn);
   console.log("LEVEL UP CALLED");
}
function checkAns(idx){
    if(userSeq[idx] === gameSeq[idx]){
    if(userSeq.length === gameSeq.length){
        setTimeout(levelUp, 1000);
    }
    else{
        h2.innerHTML = `Game over! your score was <b>${level}</b><br>Press any key to start.`;
        reset();
    }
}
}
function btnPress(){
    console.log(this);
    let btn = this;
    userFlash(btn);

    let userColor = btn.getAttribute("id");
    userSeq.push(userColor);
    checkAns(userSeq.length - 1);
}
let allBtns = document.querySelectorAll(".btn");
for(let btn of allBtns){
  btn.addEventListener("click", btnPress);  
}
function reset() {
    started = false; 
    gameSeq = [];
    userSeq = [];
    level = 0;
}