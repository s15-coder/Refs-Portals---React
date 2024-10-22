import { useState } from "react";
export default function Player() {
  const [name, setName] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function onChangeName(e) {
    setSubmitted(false)
    setName(e.target.value);
  }
  function onSubmitName() {
    setSubmitted(true);
  }
  return (
    <section id="player">
      <h2>Welcome {submitted ? name : 'unknown entity'}</h2>
      <p>
        <input type="text" onChange={onChangeName} value={name} />
        <button onClick={onSubmitName}>Set Name</button>
      </p>
    </section>
  );
}
