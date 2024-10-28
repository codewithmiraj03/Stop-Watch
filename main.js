const time = document.querySelector('.time');

const start = document.querySelector('.start');
const stop = document.querySelector('.stop');
const reset = document.querySelector('.reset');

let hours = 0;
let min = 0;
let sec = 0;
let milisec = 0;

let invalidVal = null;

start.addEventListener("click", function(){
    if(!invalidVal){
       invalidVal = setInterval(updateTime, 10);
    }
});

stop.addEventListener("click", function(){
    if(invalidVal){
       clearInterval(invalidVal);
       invalidVal = null
    }
});

reset.addEventListener("click", function(){
    clearInterval(invalidVal)
    invalidVal = null;
       hours = 0;
       min = 0;
       sec = 0;
       milisec = 0;

       time.innerHTML = '00:00:00:000';
       laps.innerHTML = "";
    
});


function updateTime(){
    milisec += 10;
    if(milisec === 1000){
        milisec = 0;
        sec++
    }

    if(sec === 60){
        sec = 0;
        min++
    }

    if(min === 60){
        min = 0;
        hours++
    }

    time.innerText =  
    hours.toString().padStart(2, "0") + ":" +
    min.toString().padStart(2, "0") + ":" +
    sec.toString().padStart(2, "0") + ":" +
    milisec.toString().padStart(3, "0");
};



const lap = document.querySelector(".lapBtn");

lap.addEventListener('click', function(){
    const currentTime = time.innerText;
    
   const lapDiv = document.createElement("div");
    lapDiv.classList.add("lap");
 
    lapDiv.innerText =  currentTime;
    
    document.querySelector("#laps").appendChild(lapDiv);

    scrollTo(0,100)

});
