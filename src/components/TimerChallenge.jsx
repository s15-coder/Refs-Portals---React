import { useState, useRef } from "react";

export default function TimerChallenege({ title, targetTime }) {
    const timer = useRef(null);
    const [timeExpired, setTimeExpired] = useState(false);
    const [timeActive, setTimeActive] = useState(false);
    function onStartTimer() {
        setTimeActive(true);
        timer.current = setTimeout(() => {
            setTimeExpired(true);
            setTimeActive(false);
        }, targetTime * 1000);
    }
    function onStopTimer() {
        clearTimeout(timer.current);
        setTimeActive(false);
    }
    return <section className="challenge">
        <h2>{title}</h2>
        {timeExpired && <p className="challenge-expired">Time is up!</p>}
        <p className="challenge-time">
            {targetTime} second{targetTime > 1 ? 's' : ''}
        </p>
        <p>
            <button onClick={timeActive ? onStopTimer : onStartTimer}>
                {timeActive ? 'Stop Challenge' : 'Start Challenge'}
            </button>
        </p>
        <p className={timeActive ? "active" : undefined}>
            {timeActive ? "Time is running..." : "Time is inactive"}
        </p>
    </section>
}