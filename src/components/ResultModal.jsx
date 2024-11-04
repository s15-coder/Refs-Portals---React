import { forwardRef, useImperativeHandle, useRef } from "react"
const ResultModal = forwardRef(({ result, targetTime }, ref) => {
    const modalRef = useRef(null);
    useImperativeHandle(ref, function () {
        return {
            open: () => {
                modalRef.current.showModal();
            }
        }
    })
    return <dialog ref={modalRef} className="result-modal" >
        <h2>You {result}</h2>
        <p>The target time was <strong>{targetTime} seconds.</strong></p>
        <p>You stopped the timer with <strong>X seconds left.</strong></p>
        <form method="dialog">
            <button>Close</button>
        </form>
    </dialog>
})

export default ResultModal