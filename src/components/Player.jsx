import { useState, useRef } from "react";
export default function Player() {

  const input = useRef(null);
  const [name, setName] = useState(null);
  function onSubmit() {
    const value = input.current.value;
    setName(value);
  }

  return (
    <section id="player">
      <h2>Welcome {name ?? 'unknown entity'}</h2>
      <p>
        <input ref={input} type="text" />
        <button onClick={onSubmit}>Set Name</button>
      </p>
    </section>
  );
}
