import { useState, useRef } from "react";
import ResultModal from "./ResultModal";

export default function TimerChallenege({ title, targetTime }) {
    const timer = useRef(null);
    const modalRef = useRef(null);
    const [timeExpired, setTimeExpired] = useState(false);
    const [timeActive, setTimeActive] = useState(false);
    function onStartTimer() {
        setTimeActive(true);
        timer.current = setTimeout(() => {
            modalRef.current.open()
            setTimeExpired(true);
            setTimeActive(false);
        }, targetTime * 1000);
    }
    function onStopTimer() {
        clearTimeout(timer.current);
        setTimeActive(false);
    }
    return <>
        <ResultModal ref={modalRef} result='lost' targetTime={targetTime} />
        <section className="challenge">
            <h2>{title}</h2>
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
    </>
}