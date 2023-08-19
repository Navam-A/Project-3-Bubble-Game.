var time = 60;
var score = 0;
var hitrn = 0;
var timerint = 0;
var bubbles = Number(prompt("Enter a number below 145 to add Bubbles?"));

function scoreIncrease() {
    score += 10;
    document.querySelector("#score").textContent = score;  
}

function newHit() {
    hitrn = Math.floor(Math.random()*10);
    document.querySelector("#hitVal").textContent = hitrn;
}

function makeBubble() {
    var clutter = "";
    for (let i = 1; i <=bubbles; i++) {
        var rn = Math.floor(Math.random()*10);
        clutter += `<div class="circle">${rn}</div>`; 
    }
    document.querySelector(".panelbtm").innerHTML = clutter;
}

function timer(){
    timerint = setInterval(() => {
        if (time > 0) {
            time--;
            document.querySelector("#timer").textContent = time;
        }
        else{
            clearInterval(timerint);
            document.querySelector("#parentBtm").innerHTML = `<h1>Game Over!</h1>`;
        }
    }, 1000);
}

document.querySelector("#parentBtm").addEventListener("click", function(dets) {
    var data = Number(dets.target.textContent);
    if (hitrn === data){
        scoreIncrease();
        makeBubble();
        newHit();
    }
    else{
        clearInterval(timerint);
        document.querySelector("#parentBtm").innerHTML = `<h1>Game Over!</h1>`;
    }
});

timer();
makeBubble();
newHit();
