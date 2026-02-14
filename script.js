var timer = 20;
var score = 0
var pBottom = document.querySelector("#pBottom")
var hitNum = 0


function scoreCard() {
    score += 10;
    document.querySelector("#score").textContent = score
}


function hit() {
    hitNum = Math.floor(Math.random() * 10)
    document.querySelector("#hit").textContent = hitNum
}


function bubble() {
    var clutter = ""

    for (var i = 1; i <= 152; i++) {
        var num = Math.floor(Math.random() * 10)
        clutter += ` <div class="bubble">${num}</div>`
    }
    pBottom.innerHTML = clutter
}


function runTimer() {
    var timeNum = document.querySelector("#timer")
    var timeEnd = setInterval(function () {
        if (timer > 0) {
            timer--;
            timeNum.textContent = timer
        } else {
            clearInterval(timeEnd);
            pBottom.innerHTML = `<div id="over"><h1 id="game">GAME OVER</h1>
            <h2> total score ${score} </h2>
<button>Play again</button></div>`
            again();
        }
    }, 1000)
}


// function points(rn) {
//     var bubble = document.querySelectorAll(".bubble")
//     bubble.forEach(function (el) {
//         el.addEventListener("click", function (details) {
//             let count = details.target.textContent
//             console.log(count)
//             if(count === rn){
//                 scoreCard();
//                 hit()
//             }
//             else{
//                 // alert("error")
//             }
//         })
//     })

// }
// points();

function point() {
    pBottom.addEventListener("click", function (details) {
        var count = Number(details.target.textContent)
        if (count === hitNum) {
            hit();
            scoreCard();
            bubble();
        }
    })
}

function again() {
    document.querySelector("#over button")
        .addEventListener("click", function () {
            bubble();
            score = 0
            timer = 20
            runTimer();
        })
}
point();
bubble();
runTimer();
hit();
