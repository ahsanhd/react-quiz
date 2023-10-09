function FinishScreen({ points, highscore, maxAttainablePoints, dispatch }) {
  const percentage = (points / maxAttainablePoints) * 100;
  let emoji;
  if (percentage === 100) return (emoji = "🔥");
  if (percentage >= 80 && percentage < 100) emoji = "🍕";
  if (percentage >= 50 && percentage < 80) emoji = "😐";
  if (percentage >= 10 && percentage < 50) emoji = "🙅‍♀️";
  if (percentage === 0) emoji = "👎";
  return (
    <>
      <p className="result">
        {emoji} You Scored {points} out of {maxAttainablePoints} Your percentage
        is {Math.ceil(percentage)}%
      </p>
      <p className="highscore"> Your High Score is: {highscore}</p>
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "restart" })}
      >
        Restart Quiz!
      </button>
    </>
  );
}

export default FinishScreen;
