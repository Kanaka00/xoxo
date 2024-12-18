let boxes=document.querySelectorAll('.box');
let resetButton=document.querySelector('#reset-button');
let true0=true;
let winPatterns=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];
let msg=document.querySelector('.msg');
let msgContainer=document.querySelector('.msg-container');
let newBtn=document.querySelector('#new-button');

boxes.forEach((box)=>{
    box.addEventListener('click',()=>{
        console.log('box clicked');
        if(true0)
        {
            true0=false;
            box.innerText="0";
            box.style.color="lightblue";

        }
        else{
            true0=true;
            box.innerText="X";
            box.style.color="lightgreen";
        }
        box.disabled=true;
        checkwinner();
    })
})
const checkwinner = ()=>{
    for(let patter of winPatterns){
        let pos1=boxes[patter[0]].innerText;
        let pos2=boxes[patter[1]].innerText;
        let pos3=boxes[patter[2]].innerText;
        
        if(pos1 !="" && pos2 !="" && pos3 !=""){
            if(pos1==pos2 && pos2==pos3){
                showWinner(pos1);
            }
        }
    }
}

const showWinner=(winner)=>{
   msg.innerText=`congration winner is ${winner}`;
   msgContainer.classList.remove("hide");
   disableBox();
   
}
const disableBox=()=>{
    for(let box of boxes){
        box.disabled=true;
        box.innerText="";
    }
}
const enableBox=()=>{
    for(let box of boxes){
        box.disabled=false;
    }
}
let resetBut=()=>{
    true0=true;
    enableBox();
    msgContainer.classList.add("hide");

}
let restItems=()=>{
    resetBox();
}


resetButton.addEventListener("click",restItems);
newBtn.addEventListener("click",resetBut);
