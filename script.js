let boxes=document.querySelectorAll(".box");
let resetbtn=document.querySelector("#reset");
let newGamebtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg= document.querySelector("#msg");

let turn0=true;
//  let clickCount=0;
const winpatterns=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];

const resetGame = ()=>{
 turn0=true;
//  clickCount=0;
 enableBoxes();
 msgContainer.classList.add("hide");
 
}

boxes.forEach((box) => {
    box.addEventListener("click",() =>{
        if(turn0){
            box.innerText =("0");
            turn0=false;
            // box.style.color=green;
        }else{
            box.innerText=("X");
            turn0=true;
        }
        box.disabled=true;
        checkWinner();
    });

});

const disableBoxes =()=>{
    for(let box of boxes){
        box.disabled=true;
    }
}
const enableBoxes =()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerHTML="";
    }
}

const showWinner = (winner) =>{
    msg.innerText= `Congratulation,winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableBoxes();
}

const checkWinner =() =>{
    for(let pattern of winpatterns){
      let pos1Val=boxes[pattern[0]].innerText;
      let pos2Val=boxes[pattern[1]].innerText;
      let pos3Val=boxes[pattern[2]].innerText;
    
    if(pos1Val != "" && pos2Val != "" && pos3Val != ""){
        if(pos1Val === pos2Val && pos2Val === pos3Val){
            showWinner(pos1Val);
         } 
        //  else if(clickCount==9){
        //     msg.innerText="Match is draw";
        //     msg.classList.remove("hide");
        //    }
      }
    }
}

newGamebtn.addEventListener("click",resetGame);
resetbtn.addEventListener("click",resetGame);