class Check{
  constructor(){
    this.currentTime = 0;
    this.intervalId = 0;
  }
  starTiming(callbackFunction){
    this.intervalId = setInterval(()=>{
      this.currentTime++;
      console.log(callbackFunction());
    },1000);
  }
}
