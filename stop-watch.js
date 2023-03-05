let time =  document.getElementById('count-down') ;

let intervalId;
function myTime(){
  time.innerText++;
}

document.getElementById('btn-start').addEventListener('click', function(){
  clearInterval(intervalId);
  intervalId = setInterval(myTime,1000)
});

document.getElementById('btn-stop').addEventListener('click', function(){
  clearInterval(intervalId);
 
});
document.getElementById('btn-reset').addEventListener('click', function(){
  clearInterval(intervalId);
  document.getElementById('count-down').innerText = '00';
});
