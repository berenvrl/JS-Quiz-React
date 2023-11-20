function Progress({ numqsns, index, points, maxPossiblePoints, answer }) {
  return (
    <header className="progress">
      <progress max={numqsns} value={index + Number(answer !== null)} />
      <p>
        Question <strong>{index + 1}</strong> / {numqsns}
      </p>
      <p>
        <strong>{points}</strong> / {maxPossiblePoints}
      </p>
    </header>
  );
}

export default Progress;
