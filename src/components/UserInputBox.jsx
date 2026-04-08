/**
 * UserInputBox Component
 * * Provides a styled Bootstrap card containing the financial input form.
 * Features a "Keyboard Bouncer" to prevent invalid scientific notation.
 * * @param {Object} props - Component properties.
 * @param {string|number} props.amountDue - The current state value for the cost.
 * @param {string|number} props.amountReceived - The current state value for cash received.
 * @param {Function} props.onAmountDueChange - Handler to update amountDue state.
 * @param {Function} props.onAmountReceivedChange - Handler to update amountReceived state.
 * @param {Function} props.onCalcClick - Trigger function to execute change logic.
 * @returns {JSX.Element} The rendered input form component.
 */
export const UserInputBox = ({
  amountDue,
  amountReceived,
  onAmountDueChange,
  onAmountReceivedChange,
  onCalcClick,
}) => {
  /**
   * Keyboard Bouncer: Intercepts and blocks characters that are technically
   * valid in HTML5 number inputs but invalid for currency (scientific notation).
   * @param {KeyboardEvent} e - The native browser keyboard event.
   */
  const blockInvalidChar = (e) => {
    if (["e", "E", "+", "-"].includes(e.key)) {
      e.preventDefault();
    }
  };

  /**
   * Form Submission Handler: Prevents default page refresh and triggers the
   * calculation logic provided by the parent component.
   * @param {SubmitEvent} event - The native browser form submission event.
   */
  const handleSubmit = (event) => {
    event.preventDefault();
    onCalcClick();
  };

  return (
    /* 'card' provides the border and white background seen in the mockup */
    <div className="card shadow-sm" id="input-form">
      {/* 'card-header' creates the gray bar at the top for the title */}
      <div className="card-header bg-light">
        <h5 className="mb-0">Enter Information</h5>
      </div>

      <div className="card-body">
        <form id="input-form" onSubmit={handleSubmit}>
          {/* 'form-group' and 'mb-3' handle spacing between inputs */}
          <div className="mb-3">
            <label htmlFor="amountDue" className="form-label fw-bold">
              How much is due?
            </label>
            <input
              type="number"
              onKeyDown={blockInvalidChar}
              step="0.01"
              className="form-control"
              data-testid="amountDue"
              id="amountDue"
              placeholder="0.00"
              required
              value={amountDue}
              onChange={onAmountDueChange}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="amountReceived" className="form-label fw-bold">
              How much was received?
            </label>
            <input
              type="number"
              onKeyDown={blockInvalidChar}
              step="0.01"
              className="form-control"
              data-testid="amountReceived"
              id="amountReceived"
              placeholder="0.00"
              required
              value={amountReceived}
              onChange={onAmountReceivedChange}
            />
          </div>

          {/* 'btn btn-primary' gives you the blue professional button */}
          {/* 'w-100' makes the button span the full width of the card */}
          <button
            type="submit"
            className="btn w-100 py-2 shadow-sm"
            data-testid="calculate"
            id="calculate-button"
          >
            Calculate
          </button>
        </form>
      </div>
    </div>
  );
};
