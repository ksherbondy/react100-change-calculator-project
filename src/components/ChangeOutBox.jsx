const ChangeOutputBox = ({ denominations, changeTotal }) => {
  const labels = Object.keys(denominations).filter(
    (key) => key !== "changeTotal",
  );

  return (
    <div className="output-container">
      <h2>Total Change: ${changeTotal.toFixed(2)}</h2>
      <div className="grid">
        {labels.map((label) => (
          <div key={label} className="purple-card">
            <span className="label-text">{label.toUpperCase()}</span>
            <span className="count-value">{denominations[label]}</span>
          </div>
        ))}
      </div>
    </div>
  );
};
