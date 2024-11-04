import { useState, useRef } from "react";
import ResultModal from "./ResultModal";

export default function TimerChallenege({ title, targetTime }) {
    const interval = useRef(null);
    const modalRef = useRef(null);
    const [remainingTime, setRemainingTime] = useState(targetTime * 1000);
    const isTimeActive = remainingTime > 0 && remainingTime < targetTime * 1000;

    if (remainingTime <= 0) {
        clearInterval(interval.current);
        modalRef.current.open();
    }
    function resetRemainingTime() {
        setRemainingTime(targetTime * 1000);
    }
    function onStart() {
        interval.current = setInterval(() => {
            setRemainingTime((prevRemainingTime) => prevRemainingTime - 10)
        }, 10);
    }
    function onStop() {
        modalRef.current.open();
        clearInterval(interval.current);
    }
    return <>
        <ResultModal
            ref={modalRef}
            targetTime={targetTime}
            remainingTime={remainingTime}
            resetTime={resetRemainingTime} />
        <section className="challenge">
            <h2>{title}</h2>
            <p className="challenge-time">
                {targetTime} second{targetTime > 1 ? 's' : ''}
            </p>
            <p>
                <button onClick={isTimeActive ? onStop : onStart}>
                    {isTimeActive ? 'Stop Challenge' : 'Start Challenge'}
                </button>
            </p>
            <p className={isTimeActive ? "active" : undefined}>
                {isTimeActive ? "Time is running..." : "Time is inactive"}
            </p>
        </section>
    </>
}