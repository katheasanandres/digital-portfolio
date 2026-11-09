
import React from "react";

function ChocolateSquare({ label, index, onClick }) {
  return (
    <button
      className="chocolate-square"
      type="button"
      onClick={onClick}
      aria-label={`Open ${label}`}
      style={{ "--square-index": index }}
    >
      <span className="chocolate-square__label">
        {label}
      </span>
    </button>
  );
}

export default ChocolateSquare;
