import { forwardRef, useImperativeHandle, useRef } from "react"
const ResultModal = forwardRef(({ result, targetTime, remainingTime, resetTime }, ref) => {
    const modalRef = useRef(null);

    const userLost = remainingTime <= 0;
    const secondsLeft = (remainingTime / 1000).toFixed(2);
    useImperativeHandle(ref, function () {
        return {
            open: () => {
                modalRef.current.showModal();
            }
        }
    })
    return <dialog ref={modalRef} className="result-modal" >
        {userLost && <h2>You lost</h2>}
        {!userLost && <h2>Stopped on time!</h2>}
        <p>The target time was <strong>{targetTime} seconds.</strong></p>
        <p>You stopped the timer with <strong>{secondsLeft} seconds left.</strong></p>
        <form method="dialog" onSubmit={resetTime}>
            <button>Close</button>
        </form>
    </dialog>
})

export default ResultModal