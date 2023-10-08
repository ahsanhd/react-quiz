function Progress({
  index,
  numQuestions,
  points,
  maxAttainablePoints,
  answer,
}) {
  return (
    <header className="progress">
      <progress max={numQuestions} value={index + +(answer !== null)} />
      <p>
        Question <strong>{index + 1}</strong> / {numQuestions}
      </p>
      <p>
        <strong>{points}</strong> / {maxAttainablePoints}
      </p>
    </header>
  );
}

export default Progress;
