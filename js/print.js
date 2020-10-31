
  // Imprimir tiempo productivo
  function printWorkTime(){
    printWorkHours();
    printWorkMinutes();
    printWorkSeconds();
  }
  function printWorkHours(){
    hourUni.innerText = workTime.twoDigitsNumber(workTime.getHours())[1];
    hourDec.innerText = workTime.twoDigitsNumber(workTime.getHours())[0];
  }
  function printWorkMinutes(){
    minUni.innerText = workTime.twoDigitsNumber(workTime.getMinutes())[1];
    minDec.innerText = workTime.twoDigitsNumber(workTime.getMinutes())[0];
  }
  function printWorkSeconds(){
    secUni.innerText = workTime.twoDigitsNumber(workTime.getSeconds())[1];
    secDec.innerText = workTime.twoDigitsNumber(workTime.getSeconds())[0];
  }

  // Imprimir el tiempo improductivo
  function printWastedTime(){
    printWastedHours();
    printWastedMinutes();
    printWastedSeconds();
  }
  function printWastedHours(){
    hourUniWasted.innerText = wastedTime.twoDigitsNumber(wastedTime.getHours())[1];
    hourDecWasted.innerText = wastedTime.twoDigitsNumber(wastedTime.getHours())[0];
  }
  function printWastedMinutes(){
    minUniWasted.innerText = wastedTime.twoDigitsNumber(wastedTime.getMinutes())[1];
    minDecWasted.innerText = wastedTime.twoDigitsNumber(wastedTime.getMinutes())[0];
  }
  function printWastedSeconds(){
    secUniWasted.innerText = wastedTime.twoDigitsNumber(wastedTime.getSeconds())[1];
    secDecWasted.innerText = wastedTime.twoDigitsNumber(wastedTime.getSeconds())[0];
  }