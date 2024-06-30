export default function Feedback({
  good,
  neutral,
  bad,
  totalResponse,
  positiveFeedback ,
}) {
  return (
    <div>
      <p>Good: {good}</p>
      <p>Neutral: {neutral}</p>
      <p>Bad: {bad}</p>
      <p>Total: {totalResponse}</p>
      <p>Positive: {positiveFeedback }%</p>
    </div>
  );
}
