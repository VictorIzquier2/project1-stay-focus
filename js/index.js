// Contadores
const workTime = new Timing();
const wastedTime = new Timing();
const checkWhereIs = new Check();

window.onload = () =>{
  // Declaración de Variables
  
  // Contador productivo
  let hourDec = document.querySelector('#hourDec');
  let hourUni = document.querySelector('#hourUni');
  let minDec = document.querySelector('#minDec');
  let minUni = document.querySelector('#minUni');
  let secDec = document.querySelector('#secDec');
  let secUni = document.querySelector('#secUni');
  
  // Contador improductivo
  let hourDecWasted = document.querySelector('#hourDecWasted');
  let hourUniWasted = document.querySelector('#hourUniWasted');
  let minDecWasted = document.querySelector('#minDecWasted');
  let minUniWasted = document.querySelector('#minUniWasted');
  let secDecWasted = document.querySelector('#secDecWasted');
  let secUniWasted = document.querySelector('#secUniWasted');
  
  // Contador de Apps recompensables
  let minDecCode = document.querySelector('#minDecCode');
  let minUniCode = document.querySelector('#minUniCode');
  let minDecGith = document.querySelector('#minDecGith');
  let minUniGith = document.querySelector('#minUniGith');
  let minDecCodp = document.querySelector('#minDecCodp');
  let minUniCodp = document.querySelector('#minUniCodp');
  let minDecFigm = document.querySelector('#minDecFigm');
  let minUniFigm = document.querySelector('#minUniFigm');
  let minDecLkin = document.querySelector('#minDecLkin');
  let minUniLkin = document.querySelector('#minUniLkin');  
  
  // Contador Apps penalizables
  let minDecFace = document.querySelector('#minDecFace');
  let minUniFace = document.querySelector('#minUniFace');
  let minDecTwit = document.querySelector('#minDecTwit');
  let minUniTwit = document.querySelector('#minUniTwit');
  let minDecInst = document.querySelector('#minDecInst');
  let minUniInst = document.querySelector('#minUniInst');
  let minDecYout = document.querySelector('#minDecYout');
  let minUniYout = document.querySelector('#minUniYout');
  let minDecTtok = document.querySelector('#minDecTtok');
  let minUniTtok = document.querySelector('#minUniTtok');
  
  window.addEventListener('focus', () =>{
    let order = document.getElementById('order');
    order.innerText = "Let's go!";
    workTime.stopTiming();
    wastedTime.startTiming(printWastedTime);
  });
  
  window.addEventListener('blur', () =>{
    wastedTime.stopTiming();
    workTime.startTiming(printWorkTime);
  });
}
    window.addEventListener('pageshow', () =>{
        function whereIsUser() {
          return window.location.href;
        }
        checkWhereIs.starTiming(whereIsUser);
    });