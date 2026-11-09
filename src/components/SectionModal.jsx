import React from "react";

function SectionModal({ onClose, title, children }) {
  return (
    <div className="modal-overlay" onClick={onClose}>
      <section
        className="section-modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
        onClick={(event) => event.stopPropagation()}
      >
        <button
          className="modal-close"
          type="button"
          onClick={onClose}
          aria-label="Close modal"
        >
          ×
        </button>

        <div className="modal-content">
          <h2 id="modal-title">{title}</h2>
          <div className="modal-divider" aria-hidden="true">
            ✧ ♡ ✧
          </div>
          <div className="modal-body">{children}</div>
        </div>
      </section>
    </div>
  );
}

export default SectionModal;