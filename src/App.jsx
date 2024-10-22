import Player from './components/Player.jsx';
import TimerChallenege from './components/TimerChallenge.jsx';

function App() {
  return (
    <>
      <Player />
      <div id="challenges">
        <TimerChallenege title="Easy" targetTime={1} />
        <TimerChallenege title="Not Easy" targetTime={5} />
        <TimerChallenege title="Getting tough" targetTime={10} />
        <TimerChallenege title="Pros Only" targetTime={15} />
      </div>
    </>
  );
}

export default App;
