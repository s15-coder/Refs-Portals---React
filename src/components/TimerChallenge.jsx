export default function TimerChallenege({ title, targetTime }) {
    return <section className="challenge">
        <h2>{title}</h2>
        <p className="challenge-time">
            {targetTime} second{targetTime > 1 ? 's' : ''}
        </p>
        <p>
            <button>
                Start Challenge
            </button>
        </p>
        <p className="active">
            Time is running... / Time is inactive
        </p>
    </section>
}