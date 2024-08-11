
var q1 = document.getElementById("q1");
var q2 = document.getElementById("q2");
var q3 = document.getElementById("q3");

var next1 = document.getElementById('next1')
var back1 = document.getElementById('back1')
var next2 = document.getElementById('next2')
var back2 = document.getElementById('back2')
document.addEventListener('DOMContentLoaded', function () {
let query = window.matchMedia("(max-width: 767px)");
if (query.matches) {
next1.onclick = function () {
q1.style.left = "-650px";
q2.style.left = "15px";
}
back1.onclick = function () {
q1.style.left = "15px";
q2.style.left = "650px";
}
back2.onclick = function () {
q2.style.left = "15px";
q3.style.left = "650px";
}
next2.onclick = function () {
q2.style.left = "-650px";
q3.style.left = "15px";
}
}
else {
next1.onclick = function () {
q1.style.left = "-650px";
q2.style.left = "50px";
}
back1.onclick = function () {
q1.style.left = "50px";
q2.style.left = "650px";
}
back2.onclick = function () {
q2.style.left = "50px";
q3.style.left = "650px";
}
next2.onclick = function () {
q2.style.left = "-650px";
q3.style.left = "50px";
}
}
});


function uncheck() {
var rad = document.getElementById('rd')
rad.removeAttribute('checked')
}
document.addEventListener('DOMContentLoaded', function () {
const main = document.querySelector('body')
const toggleSwitch = document.querySelector('.slider')

toggleSwitch.addEventListener('click', () => {
main.classList.toggle('dark-theme')
})
})



// Video section 
// let's select all required tags or elements
const mainVideo = document.querySelector('#main-Video');
const musicList = document.querySelector('.music-list');
const playlist = document.getElementById('playlist');
const AllLessons = document.querySelector('.AllLessons');
const videoTitle = document.querySelector('.title');


const ulTag = document.querySelector("ul");
AllLessons.innerHTML = `${allVideos.length} Lessons`


let musicIndex = 1;
window.addEventListener('load',()=>{
   loadMusic(musicIndex);
   playingNow();
})
function playMusic(){
   mainVideo.play();
   playlist.classList.add('active')
}
function loadMusic(indexNumb){
   mainVideo.src = `${allVideos[indexNumb - 1].src}.mp4`;
   videoTitle.innerHTML = `${indexNumb}. ${allVideos[indexNumb - 1].name}`
   
}

for(let i = 0; i < allVideos.length; i++){
   let liTag = `<li li-index="${i + 1}">
      <div class="row">
         <span>${i + 1}. ${allVideos[i].name}</span>
      </div>
      <video class="${allVideos[i].id}" src="${allVideos[i].src}.mp4" style="display: none;" title="${allVideos[i].name}"></video>
      <span id="${allVideos[i].id}" class="duration"></span>
   </li>`;
   playlist.insertAdjacentHTML('beforeend',liTag); 

   let liVideoDuration = ulTag.querySelector(`#${allVideos[i].id}`)
   let liVideoTag = ulTag.querySelector(`.${allVideos[i].id}`);
   

   liVideoTag.addEventListener("loadeddata", ()=>{
      let videoDuration = liVideoTag.duration;
      let totalMin = Math.floor(videoDuration / 60);
      let totalSec = Math.floor(videoDuration % 60);
      // if totalSec is less then 10 then add 0 at the beginging
      totalSec < 10 ? totalSec = "0"+ totalSec : totalSec
      liVideoDuration.innerText = `${totalMin}:${totalSec}`;
      // adding t duration attribe which we'll use below
      liVideoDuration.setAttribute("t-duration", `${totalMin}:${totalSec}`);
   })  
}
// let's work on play particular song on click
const allLiTags = playlist.querySelectorAll('li');
function playingNow(){
   for(let j = 0; j<allVideos.length; j++){
      if(allLiTags[j].classList.contains('playing')){
         allLiTags[j].classList.remove("playing")
      }
      if(allLiTags[j].getAttribute('li-index')==musicIndex){
         allLiTags[j].classList.add('playing')
      }
      // adding onclick attribute in all li tags
      allLiTags[j].setAttribute("onclick", "clicked(this)")
   }
}

function clicked(element){
   // getting li index of particular clicked li tag
   let getIndex = element.getAttribute("li-index");
   musicIndex = getIndex;
   loadMusic(musicIndex);
   playMusic();
   playingNow();
}