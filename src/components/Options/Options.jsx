import css from "./Options.module.css";

export default function Options({ toSetResponse }) {
  return (
    <div className={css.buttons}>
      <button
        onClick={() => {
          toSetResponse("good");
        }}
      >
        Good
      </button>
      <button
        onClick={() => {
          toSetResponse("neutral");
        }}
      >
        Neutral
      </button>
      <button
        onClick={() => {
          toSetResponse("bad");
        }}
      >
        Bad
      </button>
      <button
        onClick={() => {
          toSetResponse("reset");
        }}
      >
        Reset
      </button>
    </div>
  );
}
