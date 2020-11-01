
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

  // Imprimir minutos en facebook
 
  function printFacebookMin(){
    minUniFace.innerText = facebookTime.twoDigitsNumber(facebookTime.getMinutes())[1];
    minDecFace.innerText = facebookTime.twoDigitsNumber(facebookTime.getMinutes())[0];
  }

  // Imprimir minutos en twitter
 
  function printTwitterMin(){
    minUniTwit.innerText = twitterTime.twoDigitsNumber(facebookTime.getMinutes())[1];
    minDecTwit.innerText = twitterTime.twoDigitsNumber(facebookTime.getMinutes())[0];
  }

  // Imprimir minutos en instagram
 
  function printInstagramMin(){
    minUniInst.innerText = instagramTime.twoDigitsNumber(instagramTime.getMinutes())[1];
    minDecInst.innerText = instagramTime.twoDigitsNumber(instagramTime.getMinutes())[0];
  }

  // Imprimir minutos en youtube
 
  function printYoutubeMin(){
    minUniYout.innerText = youtubeTime.twoDigitsNumber(youtubeTime.getMinutes())[1];
    minDecYout.innerText = youtubeTime.twoDigitsNumber(youtubeTime.getMinutes())[0];
  }

  // Imprimir minutos en tiktok
 
  function printTiktokMin(){
    minUniTtok.innerText = tiktokTime.twoDigitsNumber(tiktokTime.getMinutes())[1];
    minDecTtok.innerText = tiktokTime.twoDigitsNumber(tiktokTime.getMinutes())[0];
  }

  // Imprimir minutos en code
 
  function printCodeMin(){
    minUniCode.innerText = codeTime.twoDigitsNumber(codeTime.getMinutes())[1];
    minDecCode.innerText = codeTime.twoDigitsNumber(codeTime.getMinutes())[0];
  }

  // Imprimir minutos en github
 
  function printGithubMin(){
    minUniGith.innerText = githubTime.twoDigitsNumber(facebookTime.getMinutes())[1];
    minDecGith.innerText = githubTime.twoDigitsNumber(githubTime.getMinutes())[0];
  }

  // Imprimir minutos en codepen
 
  function printCodepenMin(){
    minUniCodp.innerText = codepenTime.twoDigitsNumber(codepenTime.getMinutes())[1];
    minDecCodp.innerText = codepenTime.twoDigitsNumber(codepenTime.getMinutes())[0];
  }

  // Imprimir minutos en figma
 
  function printFigmaMin(){
    minUniFigm.innerText = figmaTime.twoDigitsNumber(figmaTime.getMinutes())[1];
    minDecFigm.innerText = figmaTime.twoDigitsNumber(figmaTime.getMinutes())[0];
  }

  // Imprimir minutos en linkedin
 
  function printLinkedinMin(){
    minUniLkin.innerText = linkedinTime.twoDigitsNumber(linkedinTime.getMinutes())[1];
    minDecLkin.innerText = linkedinTime.twoDigitsNumber(linkedinTime.getMinutes())[0];
  }

