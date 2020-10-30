
window.onload = () =>{
  window.addEventListener('focus', () =>{
    console.log('focused!');
  });

  window.addEventListener('blur', () =>{
    console.log('blured!');
  });
}


