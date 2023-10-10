import { useEffect } from "react";

function Timer({ timeRemaining, dispatch }) {
  const min = Math.round(timeRemaining / 60);
  const secs = timeRemaining % 60;
  useEffect(
    function () {
      const id = setInterval(() => {
        dispatch({ type: "tick" });
      }, 1000);

      return () => {
        clearInterval(id);
      };
    },
    [dispatch]
  );
  return (
    <div className="timer">
      {min < 10 && "0"}
      {min}: {secs < 10 && "0"}
      {secs}
    </div>
  );
}

export default Timer;
