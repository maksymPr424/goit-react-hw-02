import css from "./Options.module.css";

export default function Options({ toSetResponse, totalResponse }) {
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
      {totalResponse !== 0 && (
        <button
          onClick={() => {
            toSetResponse("reset");
          }}
        >
          Reset
        </button>
      )}
    </div>
  );
}
