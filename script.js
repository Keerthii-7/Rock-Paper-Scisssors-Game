let userCount=0;
let compCount=0;
let choices=document.querySelectorAll(".choice");
let msg=document.getElementById("msg");
let userScore=document.getElementById("userScore");
let compScore=document.getElementById("compScore");
console.log(msg);
let getCompChoice=()=>{
    let arr=["rock","paper","scissors"];
    let ind=Math.floor(Math.random()*3);
    return arr[ind];
}
let drawGame=()=>{
    msg.innerText=`Game has drawn`;
    msg.style.backgroundColor="crimson";
}
let showWinner=(trueUser,userChoice,compChoice)=>{
    if(trueUser){
        userCount++;
        userScore.innerText=userCount;
        msg.innerText=`Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor="green";
    } else{
        compCount++;
        compScore.innerText=compCount;
        msg.innerText=`${compChoice} beats Your ${userChoice}`;
        msg.style.backgroundColor="red";
    }
}
let playGame=(userChoice,compChoice)=>{
    console.log(userChoice);
    console.log(compChoice);
    if(userChoice===compChoice){
        drawGame();
    } else{
        let trueUser=true;
        if(userChoice==="rock"){
            trueUser=compChoice==="paper"?false:true;
        } else if(userChoice==="paper"){
            trueUser=compChoice==="scissors"?false:true;
        } else{
            trueUser=compChoice==="rock"?false:true;
        }
    showWinner(trueUser,userChoice,compChoice);
    }
}
choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userChoice=choice.getAttribute("id");
        const compChoice=getCompChoice();
        playGame(userChoice,compChoice);
    })
});