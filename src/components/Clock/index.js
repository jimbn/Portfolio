import React, {useState, useEffect} from "react";
import "./style.css";

function Clock() {

  let date = new Date;

  let minutes = date.getMinutes();
  let hours = date.getHours();
  let seconds = date.getSeconds();


  let hourAngle = (hours*30) + (minutes/2);
  let minuteAngle = (minutes*6);
  let secondAngle = (seconds*6)
  const [hour, setHour] = useState([hourAngle]);
  const [minute, setMinute] = useState([minuteAngle])
  const [second, setSecond] = useState([secondAngle])

  useEffect(() => {

    let hourHand = document.querySelector('.hours');
    hourHand.style.webkitTransform = 'rotateZ('+ hour +'deg)';
    hourHand.style.transform = 'rotateZ('+ hour +'deg)';
    
    let secondHand = document.querySelector('.seconds');
    secondHand.style.webkitTransform = 'rotateZ('+ second +'deg)';
    secondHand.style.transform = 'rotateZ('+ second +'deg)';

    let minuteHand = document.querySelector('.minutes');
    minuteHand.style.webkitTransform = 'rotateZ('+ minute +'deg)';
    minuteHand.style.transform = 'rotateZ('+ minute +'deg)'
  })


  function newTime (){
    let newDate = new Date;
    let newSeconds = newDate.getSeconds();
    let newMinutes = newDate.getMinutes();
    let newHours = newDate.getHours();

    let newHourAngle = (newHours*30) + (newMinutes/2);
    let newMinuteAngle = (newMinutes*6);
    let newSecondAngle = (newSeconds*6)

    setHour(newHourAngle);
    setMinute(newMinuteAngle);
    setSecond(newSecondAngle);
  };

  setInterval(newTime, 1000);

  return(
    <div className="background-clock">
      <div className="clock">
        <div className="seconds-container">
          <div className="seconds"></div>
        </div>
        <div className="minutes-container">
          <div className="minutes"></div>
        </div>
        <div className="hours-container">
          <div className="hours"></div>
        </div>
        <div className="center-container">
          <div className="center"></div>
        </div>
      </div>
    </div>
  );

};

export default Clock;