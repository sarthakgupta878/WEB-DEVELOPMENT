console.log('Testing');

const alarmsubmit = document.getElementById('alarmSubmit');

alarmsubmit.addEventListener('click',setAlarm);
var audio=new Audio('')  //ADD AN AUDIO FILE FOR ALARM

function ringBell(){
    audio.play();
}

function setAlarm(e){
    e.preventDefault();
    
    const alarm =document.getElementById('alarm');
    alarmDate =new Date(alarm.value)
    console.log(alarmDate);
     let now =new Date();
    
    let timeToAlarm = alarmDate-now;
    if(timeToAlarm>=0)
    {
        setTimeout(()=>{
            ringBell();
        },timeToAlarm)
    }

}