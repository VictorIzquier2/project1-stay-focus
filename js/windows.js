function openFacebook(){
  openedFacebook = window.open('https://www.facebook.com', 'facebook', 'toolbar=yes, titlebar=yes, menubar=yes, scrollbars=yes, resizable=yes, location=yes');
    return openedFacebook;
}
function closeFacebook(){
  openedFacebook.close();
  openedFacebook = undefined;
  if(typeof openedFacebook === 'undefined' && typeof openedTwitter === 'undefined' && typeof openedInstagram === 'undefined' && typeof openedYoutube === 'undefined' && typeof openedTiktok === 'undefined'){
    workTime.stopTiming();
    workTime.startTiming(printWorkTime);
    wastedTime.stopTiming();
  }
}

function openTwitter(){
  openedTwitter = window.open('https://www.twitter.com', 'twitter', 'toolbar=yes, titlebar=yes, menubar=yes, scrollbars=yes, resizable=yes');
  return openedTwitter;
}
function closeTwitter(){
  openedTwitter.close();
  openedTwitter = undefined;
  if(typeof openedTwitter === 'undefined' && typeof openedFacebook === 'undefined' && typeof openedInstagram === 'undefined' && typeof openedYoutube === 'undefined' && typeof openedTiktok === 'undefined'){
    workTime.stopTiming();
    workTime.startTiming(printWorkTime);
    wastedTime.stopTiming();
  }
}

function openInstagram(){
  openedInstagram = window.open('https://www.instagram.com', 'instagram', 'toolbar=yes, titlebar=yes, menubar=yes, scrollbars=yes, resizable=yes');
    return openedInstagram;
}
function closeInstagram(){
  openedInstagram.close();
  openedInstagram = undefined;
  if(typeof openedInstagram === 'undefined' && typeof openedFacebook === 'undefined' && typeof openedTwitter === 'undefined' && typeof openedYoutube === 'undefined' && typeof openedTiktok === 'undefined'){
    workTime.stopTiming();
    workTime.startTiming(printWorkTime);
    wastedTime.stopTiming();
  }
}

function openYoutube(){
  openedYoutube = window.open('https://www.youtube.com', 'youtube', 'toolbar=yes, titlebar=yes, menubar=yes, scrollbars=yes, resizable=yes, location=yes');
    return openedYoutube;
}
function closeYoutube(){
  openedYoutube.close();
  openedYoutube = undefined;
  if(typeof openedYoutube === 'undefined' && typeof openedFacebook === 'undefined' && typeof openedTwitter === 'undefined' && typeof openedInstagram === 'undefined' && typeof openedTiktok === 'undefined'){
    workTime.stopTiming();
    workTime.startTiming(printWorkTime);
    wastedTime.stopTiming();
  }
}

function openTiktok(){
  openedTiktok = window.open('https://www.tiktok.com', 'tiktok', 'toolbar=yes, titlebar=yes, menubar=yes, scrollbars=yes, resizable=yes');
    return openedTiktok;
}
function closeTiktok(){
  openedTiktok.close();
  openedTiktok = undefined;
  if(typeof openedTiktok === 'undefined' && typeof openedFacebook === 'undefined' && typeof openedTwitter === 'undefined' && typeof openedInstagram === 'undefined' && typeof openedYoutube === 'undefined'){
    workTime.stopTiming();
    workTime.startTiming(printWorkTime);
    wastedTime.stopTiming();
  }
}

function openCode(){
  openedCode = window.open('https://repl.it/', 'repl', 'toolbar=yes, titlebar=yes, menubar=yes, scrollbars=yes, resizable=yes');
    return openedCode;
}
function closeCode(){
  openedCode.close();
  openedCode = undefined;
  if(typeof openedCode === 'undefined' && typeof openedGithub === 'undefined' && typeof openedCodepen === 'undefined' && typeof openedFigma === 'undefined' && typeof openedLinkedin === 'undefined'){
    workTime.stopTiming();
  }
}
function openGithub(){
  openedGithub = window.open('https://www.github.com', 'facebook', 'toolbar=yes, titlebar=yes, menubar=yes, scrollbars=yes, resizable=yes');
    return openedGithub;
}
function closeGithub(){
  openedGithub.close();
  openedGithub = undefined;
  if(typeof openedCode === 'undefined' && typeof openedGithub === 'undefined' && typeof openedCodepen === 'undefined' && typeof openedFigma === 'undefined' && typeof openedLinkedin === 'undefined'){
    workTime.stopTiming();
  }
}
function openCodepen(){
  openedCodepen = window.open('https://www.codepen.io', 'facebook', 'toolbar=yes, titlebar=yes, menubar=yes, scrollbars=yes, resizable=yes');
    return openedCodepen;
}
function closeCodepen(){
  openedCodepen.close();
  openedCodepen = undefined;
  if(typeof openedCode === 'undefined' && typeof openedGithub === 'undefined' && typeof openedCodepen === 'undefined' && typeof openedFigma === 'undefined' && typeof openedLinkedin === 'undefined'){
    workTime.stopTiming();
  }
}
function openFigma(){
  openedFigma = window.open('https://www.figma.com', 'facebook', 'toolbar=yes, titlebar=yes, menubar=yes, scrollbars=yes, resizable=yes');
    return openedFigma;
}
function closeFigma(){
  openedFigma.close();
  openedFigma = undefined;
  if(typeof openedCode === 'undefined' && typeof openedGithub === 'undefined' && typeof openedCodepen === 'undefined' && typeof openedFigma === 'undefined' && typeof openedLinkedin === 'undefined'){
    workTime.stopTiming();
  }
}
function openLinkedin(){
  openedLinkedin = window.open('https://www.linkedin.com', 'facebook', 'toolbar=yes, titlebar=yes, menubar=yes, scrollbars=yes, resizable=yes');
    return openedLinkedin;
}
function closeLinkedin(){
  openedLinkedin.close();
  openedLinkedin = undefined;
  if(typeof openedCode === 'undefined' && typeof openedGithub === 'undefined' && typeof openedCodepen === 'undefined' && typeof openedFigma === 'undefined' && typeof openedLinkedin === 'undefined'){
    workTime.stopTiming();
  }
}