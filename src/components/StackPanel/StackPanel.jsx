import React from 'react';

function StackPanel({ stack, onRemove, onRemoveAll }) {
  const countText = `${stack.length} Technology${stack.length === 1 ? '' : 's'} Selected`;

  return (
    <aside className="stack-panel" aria-live="polite">
      <div className="stack-heading">
        <h2>Your Stack</h2>
        <p>{stack.length === 0 ? 'No technologies selected yet.' : countText}</p>
      </div>
      {stack.length === 0 ? (
        <div className="empty-stack">Your stack is empty.</div>
      ) : (
        <>
          <div className="stack-list">
            {stack.map((item) => (
              <div className="stack-item" key={item.id}>
                <img src={item.icon} alt="" />
                <div>
                  <strong>{item.name}</strong>
                  <span>{item.category}</span>
                </div>
                <button type="button" aria-label={`Remove ${item.name}`} onClick={() => onRemove(item)}>
                  ×
                </button>
              </div>
            ))}
          </div>
          <button className="remove-all-btn" type="button" onClick={onRemoveAll}>Remove All</button>
        </>
      )}
    </aside>
  );
}

export default StackPanel;
