// Contadores
const workTime = new Timing();
const wastedTime = new Timing();

const facebookTime = new Timing();
const twitterTime = new Timing();
const instagramTime = new Timing();
const youtubeTime = new Timing();
const tiktokTime = new Timing();

const codeTime = new Timing();
const githubTime = new Timing();
const codepenTime = new Timing();
const figmaTime = new Timing();
const linkedinTime = new Timing();

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
  
  // Enlaces a webs
  let enlaceFacebook = document.querySelector('.fa-facebook');
  let enlaceTwitter = document.querySelector('.fa-twitter');
  let enlaceInstagram = document.querySelector('.fa-instagram');
  let enlaceYoutube = document.querySelector('.fa-youtube');
  let enlaceTiktok = document.querySelector('.fa-tiktok');
  
  let enlaceCode = document.querySelector('.fa-code');
  let enlaceGithub = document.querySelector('.fa-github');
  let enlaceCodepen = document.querySelector('.fa-codepen');
  let enlaceFigma = document.querySelector('.fa-figma');
  let enlaceLinkedin = document.querySelector('.fa-linkedin');
  
  // Logos Stall
  const logoFacebook = document.querySelector('.fa-facebook');
  const quitFacebook = document.querySelector('#quitFacebook');
  const logoTwitter = document.querySelector('.fa-twitter');
  const quitTwitter = document.querySelector('#quitTwitter');
  const logoInstagram = document.querySelector('.fa-instagram');
  const quitInstagram = document.querySelector('#quitInstagram');
  const logoYoutube = document.querySelector('.fa-youtube');
  const quitYoutube = document.querySelector('#quitYoutube');
  const logoTiktok = document.querySelector('.fa-tiktok');
  const quitTikok = document.querySelector('#quitTiktok');

  // Logos Seize
  const logoCode = document.querySelector('.fa-code');
  const quitCode = document.querySelector('#quitCode');
  const logoGithub = document.querySelector('.fa-github');
  const quitGithub = document.querySelector('#quitGithub');
  const logoCodepen = document.querySelector('.fa-codepen');
  const quitCodepen = document.querySelector('#quitCodepen');
  const logoFigma = document.querySelector('.fa-figma');
  const quitFigma = document.querySelector('#quitFigma');
  const logoLinkedin = document.getElementsByClassName('.fa-linkedin');
  const quitLinkedin = document.querySelector('#quitLinkedin');

  // Status
  const user = document.querySelector('.fa-user-clock');
  const astronaut = document.querySelector('.fa-user-astronaut');
  const smile = document.querySelector('.fa-smile');
  const meh = document.querySelector('.fa-meh');
  const poo = document.querySelector('.fa-poo');
  const slurp = document.querySelector('#order');
  
  // Print status
  
  function printStatus(){
    if(workTime.currentTime === 0 && wastedTime.currentTime === 0){
      showUser();
    }
    else if(workTime.currentTime >= (wastedTime.currentTime * 15)){
      showAstronaut();    
    }
    else if(workTime.currentTime < (wastedTime.currentTime * 15) && workTime.currentTime >= (wastedTime.currentTime * 12)){
      showSmile();
    }else if(workTime.currentTime < (wastedTime.currentTime * 12) && workTime.currentTime >= (wastedTime.currentTime * 6)){
      showMeh();
    }else if(workTime.currentTime < (wastedTime.currentTime * 6)){
      showPoo();
    }
  }

  // User
  function showUser(){
    astronaut.style.display = 'none';
    smile.style.display = 'none';
    meh.style.display = 'none';
    poo.style.display = 'none';
    user.style.display = 'block';
    slurp.innerText = "time to Start";
  }
  
  // astronaut
  function showAstronaut(){
    user.style.display = 'none';
    smile.style.display = 'none';
    meh.style.display = 'none';
    poo.style.display = 'none';
    astronaut.style.display = 'block';
    slurp.innerText = "exploring the unknown...";
  }
  // Smile
  function showSmile(){
    user.style.display = 'none';
    astronaut.style.display = 'none';
    meh.style.display = 'none';
    poo.style.display = 'none';
    smile.style.display = 'block';
    slurp.innerText = "doing you best";
  }
  // Meh
  function showMeh(){
    user.style.display = 'none';
    astronaut.style.display = 'none';
    smile.style.display = 'none';
    poo.style.display = 'none';
    meh.style.display = 'block';
    slurp.innerText = "let's go!";
  }
  
  // Poo
  function showPoo(){
    user.style.display = 'none';
    astronaut.style.display = 'none';
    smile.style.display = 'none';
    meh.style.display = 'none';
    poo.style.display = 'block';
    slurp.innerText = "being in the shit!";
  }
  
  // Clasification
  const stars = document.querySelectorAll('.fa-star');
  const star1 = stars[4];
  const star2 = stars[3];
  const star3 = stars[2];
  const star4 = stars[1];
  const star5 = stars[0];
  
    
  // Stars
  function getStar(star){
    star.classList.remove('far');
    star.classList.add('fas');
  }
  function showClasification(){
    if(workTime.currentTime >= 3600 && workTime.currentTime < 7200){
      getStar(star1);
    }
    if(workTime.currentTime >= 7200 && workTime.currentTime < 10800){
      getStar(star2);
    }
    if(workTime.currentTime >= 10800 && workTime.currentTime < 14400){
      getStar(star3);
    }
    if(workTime.currentTime >= 14400 && workTime.currentTime < 18000){
      getStar(star4);
    }
    if(workTime.currentTime >= 18000 && workTime.currentTime < 21600){
      getStar(star5);
    }
  }
  function hiddenStars(){
    const allStars = document.querySelector('.stars');
    allStars.style.display = 'none';
  }
  
  // Medal of Honor
  const medal = document.querySelector('#medalOfHonor');
  
  
  function showBronzeMedal(){
    medal.style.display = 'block';
    medal.style.color = '#d2691e';
  }
  function showSilverMedal(){
    medal.style.color = '#c0c0c0';
  }
  function showGoldMedal(){
    medal.style.color = '#ffd700';
  }
  
  function showMedal(){
    if(workTime.currentTime >= 21600 && workTime.currentTime < 25200){
      hiddenStars();
      showBronzeMedal();
    }else if(workTime.currentTime >= 25200 && workTime.currentTime < 28800){
      showSilverMedal();
    }else if(workTime.currentTime >= 28800 && workTime.currentTime < 50000){
      showGoldMedal();
    }
  }

  // Event Focus
  
  window.addEventListener('focus', () =>{
    workTime.stopTiming();
    wastedTime.stopTiming();
    printStatus();
    showClasification();
    showMedal();
  });
  
  // Event Blur
  
  window.addEventListener('blur', () =>{
    if(typeof openedFacebook === 'undefined' && typeof openedTwitter === 'undefined' && typeof openedInstagram === 'undefined' && typeof openedYoutube === 'undefined' && typeof openedTiktok === 'undefined' && typeof openedCode){
      workTime.stopTiming();
      workTime.startTiming(printWorkTime);
      wastedTime.stopTiming();
    }else if(typeof openedFacebook === 'object' || typeof openedTwitter === 'object' || typeof openedInstagram === 'object' || typeof openedYoutube === 'object' || typeof openedTiktok === 'object'){
      workTime.stopTiming();
      wastedTime.stopTiming();
      wastedTime.startTiming(printWastedTime);
      }
      printStatus();
      showClasification();
      showMedal();
  });

  // Event pageshow
  window.addEventListener('pageshow', () =>{
    enlaceFacebook.addEventListener('click', () => {
      openFacebook();
      quitFacebook.style.display = 'block';
      facebookTime.stopTiming();
      facebookTime.startTiming(printFacebookMin);
    });
    quitFacebook.addEventListener('click', ()=>{
      closeFacebook();
      facebookTime.stopTiming();
      quitFacebook.style.display = 'none';
    });
    enlaceTwitter.addEventListener('click', () => {
      openTwitter();
      quitTwitter.style.display = 'block';
      twitterTime.stopTiming();
      twitterTime.startTiming(printTwitterMin);
    });
    quitTwitter.addEventListener('click', ()=>{
      closeTwitter();
      twitterTime.stopTiming();
      quitTwitter.style.display = 'none';
    });
    enlaceInstagram.addEventListener('click', () => {
      openInstagram();
      quitInstagram.style.display = 'block';
      instagramTime.stopTiming();
      instagramTime.startTiming(printInstagramMin);
    });
    quitInstagram.addEventListener('click', ()=>{
      closeInstagram();
      instagramTime.stopTiming();
      quitInstagram.style.display = 'none';
    });
    enlaceYoutube.addEventListener('click', () => {
      openYoutube();
      quitYoutube.style.display = 'block';
      youtubeTime.stopTiming();
      youtubeTime.startTiming(printYoutubeMin);
    });
    quitYoutube.addEventListener('click', ()=>{
      closeYoutube();
      youtubeTime.stopTiming();
      quitYoutube.style.display = 'none';
    });
    enlaceTiktok.addEventListener('click', () => {
      openTiktok();
      quitTiktok.style.display = 'block';
      tiktokTime.stopTiming();
      tiktokTime.startTiming(printTiktokMin);
    });
    quitTiktok.addEventListener('click', ()=>{
      closeTiktok();
      tiktokTime.stopTiming();
      quitTiktok.style.display = 'none';
    });
    enlaceCode.addEventListener('click', () => {
      openCode();
      quitCode.style.display = 'block';
      codeTime.stopTiming();
      codeTime.startTiming(printCodeMin);
    });
    quitCode.addEventListener('click', () =>{
      closeCode();
      codeTime.stopTiming();
      quitCode.style.display = 'none';
    });
    enlaceGithub.addEventListener('click', () => {
      openGithub();
      quitGithub.style.display = 'block';
      githubTime.stopTiming();
      githubTime.startTiming(printGithubMin);
    });
    quitGithub.addEventListener('click', () =>{
      closeGithub();
      githubTime.stopTiming();
      quitGithub.style.display = 'none';
    });
    
    enlaceCodepen.addEventListener('click', () => {
      openCodepen();
      quitCodepen.style.display = 'block';
      codepenTime.stopTiming();
      codepenTime.startTiming(printCodepenMin);
    });
    quitCodepen.addEventListener('click', () =>{
      closeCodepen();
      codepenTime.stopTiming();
      quitCodepen.style.display = 'none';
    });
    enlaceFigma.addEventListener('click', () => {
      openFigma();
      quitFigma.style.display = 'block';
      figmaTime.stopTiming();
      figmaTime.startTiming(printFigmaMin);
    });
    quitFigma.addEventListener('click', () =>{
      closeFigma();
      figmaTime.stopTiming();
      quitFigma.style.display = 'none';
    });
    enlaceLinkedin.addEventListener('click', () => {
      openLinkedin();
      quitLinkedin.style.display = 'block';
      linkedinTime.stopTiming();
      linkedinTime.startTiming(printLinkedinMin);
    });
    quitLinkedin.addEventListener('click', () =>{
      closeLinkedin();
      linkedinTime.stopTiming();
      quitLinkedin.style.display = 'none';
    });
    printStatus();
    showClasification();
    showMedal();
  });
}