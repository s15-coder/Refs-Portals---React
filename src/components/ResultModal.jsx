import { forwardRef, useImperativeHandle, useRef } from "react"
import { createPortal } from "react-dom";

const ResultModal = forwardRef(({ targetTime, remainingTime, resetTime }, ref) => {
    const modalRef = useRef(null);
    const userLost = remainingTime <= 0;
    const secondsLeft = (remainingTime / 1000).toFixed(2);
    const score = Math.round((1 - remainingTime / (targetTime * 1000)) * 100);
    useImperativeHandle(ref, function () {
        return {
            open: () => {
                modalRef.current.showModal();
            }
        }
    })
    return createPortal(
        <dialog ref={modalRef} className="result-modal" onClose={resetTime} >
            {userLost && <h2>You lost</h2>}
            {!userLost && <h2>Your score: {score}</h2>}
            <p>The target time was <strong>{targetTime} seconds.</strong></p>
            <p>You stopped the timer with <strong>{secondsLeft} seconds left.</strong></p>
            <form method="dialog" onSubmit={resetTime}>
                <button>Close</button>
            </form>
        </dialog>,
        document.getElementById('modal')
    )
})

export default ResultModal