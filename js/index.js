
window.onload = () =>{
  const timing = new Timing();

  // Declaración de Variables
  let min = document.querySelectorAll('.min');

  let hourDec = document.querySelector('#hourDec');
  let hourUni = document.querySelector('#hourUni');
  let minDec = document.querySelector('#minDec');
  let minUni = document.querySelector('#minUni');
  let secDec = document.querySelector('#secDec');
  let secUni = document.querySelector('#secUni');

  let hourDecWasted = document.querySelector('#hourDecWasted');
  let hourUniWasted = document.querySelector('#hourUniWasted');
  let minDecWasted = document.querySelector('#minDecWasted');
  let minUniWasted = document.querySelector('#minUniWasted');
  let secDecWasted = document.querySelector('#secDecWasted');
  let secUniWasted = document.querySelector('#secUniWasted');

  let timeFacebook = document.querySelector('#time-facebook');
  let timeTwitter = document.querySelector('#time-twitter');
  let timeInsta = document.querySelector('#time-instagram');
  let timeYoutube = document.querySelector('#time-youtube');
  let timeTiktok = document.querySelector('#time-tiktok');

  let timeCode = document.querySelector('#time-code');
  let timeGithub = document.querySelector('#time-github');
  let timeCodepen = document.querySelector('#time-codepen');
  let timeFigma = document.querySelector('#time-figma');
  let timeLinkedin = document.querySelector('#time-linkedin');

  function printWorkTime(){
    printWorkHours();
    printWorkMinutes();
    printWorkSeconds();
  }
  function printWorkHours(){
    hourUni.innerText = timing.twoDigitsNumber(timing.getHours())[1];
    hourDec.innerText = timing.twoDigitsNumber(timing.getHours())[0];
  }
  function printWorkMinutes(){
    minUni.innerText = timing.twoDigitsNumber(timing.getMinutes())[1];
    minDec.innerText = timing.twoDigitsNumber(timing.getMinutes())[0];
  }
  function printWorkSeconds(){
    secUni.innerText = timing.twoDigitsNumber(timing.getSeconds())[1];
    secDec.innerText = timing.twoDigitsNumber(timing.getSeconds())[0];
  }
  function printWastedTime(){
    printWastedHours();
    printWastedMinutes();
    printWastedSeconds();
  }
    function printWastedHours(){
    hourUniWasted.innerText = timing.twoDigitsNumber(timing.getHours())[1];
    hourDecWasted.innerText = timing.twoDigitsNumber(timing.getHours())[0];
  }
  function printWastedMinutes(){
    minUniWasted.innerText = timing.twoDigitsNumber(timing.getMinutes())[1];
    minDecWasted.innerText = timing.twoDigitsNumber(timing.getMinutes())[0];
  }
  function printWastedSeconds(){
    secUniWasted.innerText = timing.twoDigitsNumber(timing.getSeconds())[1];
    secDecWasted.innerText = timing.twoDigitsNumber(timing.getSeconds())[0];
  }

  window.addEventListener('focus', () =>{
    let order = document.getElementById('order');
    order.innerText = "Let's go!";
  });

  window.addEventListener('blur', () =>{
    console.log('blured!');
    timing.startTiming(printWastedTime);

  });
}


