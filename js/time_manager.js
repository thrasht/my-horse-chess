function ResetTime(){
  clearInterval(cronometer);
}

function StartTime(){
  seconds = 0;

  s = document.getElementById("seconds");
  m = document.getElementById("minutes");

  cronometer = setInterval(function(){
    seconds++;
    secs = seconds;

    mins = 0;

    while(secs >= 60)
    {
      mins++;
      secs-=60;
    }


    total_secs = secs;
    total_mins = mins;

    if(secs < 10)
      s.innerHTML = "0" + secs;
    else
      s.innerHTML = secs;

    if(mins < 10)
      m.innerHTML = "0" + mins;
    else
      m.innerHTML = mins;

  }, 1000);

}
