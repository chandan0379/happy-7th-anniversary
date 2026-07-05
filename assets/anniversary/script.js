// =======================================================
// PREMIUM ANNIVERSARY WEBSITE
// SCRIPT.JS (PART 1)
// =======================================================

// =========================
// PAGE NAVIGATION
// =========================

const pages = document.querySelectorAll(".page");
const nextButtons = document.querySelectorAll(".next");

let currentPage = 0;

pages.forEach((page,index)=>{

page.classList.remove("active");

if(index===0){

page.classList.add("active");

}

});

nextButtons.forEach(button=>{

button.addEventListener("click",()=>{

pages[currentPage].classList.remove("active");

currentPage++;

if(currentPage>=pages.length){

currentPage=pages.length-1;

return;

}

pages[currentPage].classList.add("active");

window.scrollTo({

top:0,

behavior:"smooth"

});

});

});

// =========================
// LIVE COUNTER
// =========================

const counter=document.getElementById("counter");

const weddingDate=new Date("2019-07-06T00:00:00");

function updateCounter(){

if(!counter)return;

const now=new Date();

let years=now.getFullYear()-weddingDate.getFullYear();
let months=now.getMonth()-weddingDate.getMonth();
let days=now.getDate()-weddingDate.getDate();

if(days<0){

months--;

const prev=new Date(
now.getFullYear(),
now.getMonth(),
0
);

days+=prev.getDate();

}

if(months<0){

years--;

months+=12;

}

const diff=now-weddingDate;

const hours=Math.floor((diff/(1000*60*60))%24);

const minutes=Math.floor((diff/(1000*60))%60);

const seconds=Math.floor((diff/1000)%60);

counter.innerHTML=`

<div class="count-box">

<h1>${years}</h1>

<span>Years</span>

</div>

<div class="count-box">

<h1>${months}</h1>

<span>Months</span>

</div>

<div class="count-box">

<h1>${days}</h1>

<span>Days</span>

</div>

<div class="count-box">

<h1>${hours}</h1>

<span>Hours</span>

</div>

<div class="count-box">

<h1>${minutes}</h1>

<span>Minutes</span>

</div>

<div class="count-box">

<h1>${seconds}</h1>

<span>Seconds</span>

</div>

`;

}

updateCounter();

setInterval(updateCounter,1000);

// =========================
// FLOATING HEARTS
// =========================

const hearts=document.querySelector(".hearts");

function createHeart(){

const heart=document.createElement("div");

heart.className="heart";

heart.innerHTML="❤️";

heart.style.left=Math.random()*100+"vw";

heart.style.fontSize=(18+Math.random()*25)+"px";

heart.style.animationDuration=(5+Math.random()*5)+"s";

heart.style.opacity=Math.random();

hearts.appendChild(heart);

setTimeout(()=>{

heart.remove();

},10000);

}

setInterval(createHeart,350);

// =========================
// LOVE RAIN
// =========================

const rain=document.querySelector(".love-rain");

const loveIcons=[

"❤️",
"💖",
"💕",
"💗",
"💘",
"💝",
"🌸",
"🌹"

];

function createLove(){

const love=document.createElement("div");

love.className="love";

love.innerHTML=loveIcons[Math.floor(Math.random()*loveIcons.length)];

love.style.left=Math.random()*100+"vw";

love.style.fontSize=(20+Math.random()*28)+"px";

love.style.animationDuration=(5+Math.random()*6)+"s";

love.style.opacity=.6+Math.random();

rain.appendChild(love);

setTimeout(()=>{

love.remove();

},11000);

}

setInterval(createLove,180);
// =======================================================
// CELEBRATION
// =======================================================

const finish=document.getElementById("finish");
const celebration=document.getElementById("celebration");

if(finish){

finish.onclick=function(){

celebration.classList.add("show");

startConfetti();

startSparkles();

};

}

// =======================================================
// CONFETTI
// =======================================================

function startConfetti(){

for(let i=0;i<180;i++){

setTimeout(()=>{

createConfetti();

},i*25);

}

}

function createConfetti(){

const confetti=document.createElement("div");

confetti.innerHTML=["🎉","🎊","✨","💖","❤️","🌸"][Math.floor(Math.random()*6)];

confetti.style.position="fixed";

confetti.style.left=Math.random()*100+"vw";

confetti.style.top="-50px";

confetti.style.fontSize=(18+Math.random()*25)+"px";

confetti.style.zIndex="999999";

confetti.style.pointerEvents="none";

document.body.appendChild(confetti);

const duration=5000+Math.random()*3000;

const x=(Math.random()-0.5)*300;

confetti.animate([

{

transform:"translate(0,0) rotate(0deg)",

opacity:1

},

{

transform:`translate(${x}px,110vh) rotate(720deg)`,

opacity:0

}

],{

duration:duration,

easing:"linear"

});

setTimeout(()=>{

confetti.remove();

},duration);

}

// =======================================================
// SPARKLES
// =======================================================

function startSparkles(){

setInterval(()=>{

const spark=document.createElement("div");

spark.innerHTML="✨";

spark.style.position="fixed";

spark.style.left=Math.random()*100+"vw";

spark.style.top=Math.random()*100+"vh";

spark.style.fontSize=(15+Math.random()*25)+"px";

spark.style.opacity="0";

spark.style.pointerEvents="none";

spark.style.zIndex="99999";

document.body.appendChild(spark);

spark.animate([

{

opacity:0,

transform:"scale(.5)"

},

{

opacity:1,

transform:"scale(1.3)"

},

{

opacity:0,

transform:"scale(.3)"

}

],{

duration:1500

});

setTimeout(()=>{

spark.remove();

},1500);

},200);

}

// =======================================================
// BUTTON RIPPLE
// =======================================================

document.querySelectorAll("button").forEach(btn=>{

btn.addEventListener("mouseenter",()=>{

btn.animate([

{

transform:"scale(1)"

},

{

transform:"scale(1.06)"

},

{

transform:"scale(1)"

}

],{

duration:350

});

});

});

// =======================================================
// BACKGROUND PULSE
// =======================================================

setInterval(()=>{

document.body.animate([

{

filter:"brightness(1)"

},

{

filter:"brightness(1.08)"

},

{

filter:"brightness(1)"

}

],{

duration:2500

});

},3500);

// =======================================================
// AUTO HEART BURST
// =======================================================

function burstHearts(){

for(let i=0;i<20;i++){

setTimeout(()=>{

createHeart();

},i*60);

}

}

setInterval(burstHearts,8000);

// =======================================================
// END
// =======================================================

console.log("❤️ Premium Anniversary Website Loaded ❤️");