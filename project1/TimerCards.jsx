import { useState, useRef } from "react";

export default function TimerCards() {
  const [startTimer, setStartTimer] = useState(false);
  const [timeExpired, setTimeExpired] = useState(false);
  const timer = useRef();

  function handleTimer(time) {
    setStartTimer(true);
    timer.current = setTimeout(() => {
      setTimeExpired(true);
    }, time);
  }

  function stopTimer() {
    clearTimeout(timer.current);
    setTimeExpired(false);
    setStartTimer(false);
  }
  return (
    <>
      <section className="cards">
        <div id="item">
          <p>
            <label>Beginner</label>
            <label id="time">1 Second</label>
            <button onClick={startTimer ? stopTimer : () => handleTimer(1000)}>
              {startTimer ? "Stop Timer" : "Start Timer"}
            </button>
            <>
              {startTimer && "In Progress..."}
              {timeExpired && "You lost"}
            </>
          </p>
        </div>
        <div id="item">
          <p>
            <label>Intermediate</label>
            <label id="time">5 Seconds</label>
            <button>{startTimer ? "Stop Timer" : "Start Timer"}</button>
            <>
              {startTimer && "In Progress..."}
            </>
          </p>
        </div>
        <div id="item">
          <p>
            <label>Expert</label>
            <label id="time">8 Seconds</label>
            <button>{startTimer ? "Stop Timer" : "Start Timer"}</button>
            <>
              {startTimer && "In Progress..."}
            </>
          </p>
        </div>
        <div id="item">
          <p>
            <label>Pro Only</label>
            <label id="time">10 Seconds</label>
            <button>{startTimer ? "Stop Timer" : "Start Timer"}</button>
            <>
              {startTimer && "In Progress..."}
            </>
          </p>
        </div>
      </section>
    </>
  );
}
