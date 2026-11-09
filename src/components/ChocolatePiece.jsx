
import React from "react";

function ChocolatePiece({ label, shape, index, onClick }) {
  return (
    <button
      type="button"
      className={`chocolate-piece chocolate-piece--${shape}`}
      onClick={onClick}
      aria-label={`Open ${label}`}
      style={{ "--piece-index": index }}
    >
      <span className="chocolate-piece__decoration">
        {shape === "flower"
          ? "❤︎"
          : shape === "heart"
          ? "❤︎"
          : shape === "square"
          ? "❤︎"
          : "❤︎"}
      </span>

      <span className="chocolate-piece__label">
        {label}
      </span>
    </button>
  );
}

export default ChocolatePiece;
