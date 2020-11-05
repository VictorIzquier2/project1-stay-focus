class Timing{
  constructor(){
    this.currentTime = 0;
    this.intervalId = 0;
  }
  startTiming(callbackFunction){
    this.intervalId = setInterval(()=>{
      this.currentTime++;
      callbackFunction();
    }, 1000);
  }

  getHours(){
    return Math.floor(this.currentTime / 3600) % 24;
  }
  getMinutes(){
      return Math.floor(this.currentTime / 60) % 60;
  }
  getSeconds(){
    return this.currentTime % 60;
  }
  twoDigitsNumber(number) {
    // ... your code goes here
    if(number < 10){
      return `0${number}`;
    }else if(number >= 10){
      return `${number}`;
    }
  }
  stopTiming(){
    clearInterval(this.intervalId);
  }
}
