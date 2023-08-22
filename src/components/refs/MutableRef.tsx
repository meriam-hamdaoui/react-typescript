// mutable references element used as instance element, interact with component
import { useState, useRef, useEffect } from "react";

export default function MutableRef() {
  const [timer, setTimer] = useState(0);

  const interValRef = useRef<number | null>(null);

  const stopTimer = () =>
    interValRef.current && window.clearInterval(interValRef.current);

  useEffect(() => {
    interValRef.current = window.setInterval(() => {
      setTimer((timer) => timer + 1);
    }, 1000);
    return () => {
      stopTimer();
    };
  }, []);

  return (
    <div>
      HookTimer - {timer}
      <br />
      <button onClick={stopTimer}>Stop Timer</button>
    </div>
  );
}
