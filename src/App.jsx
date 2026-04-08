import "./App.css";
import { useState } from "react";
import { calcChange, sanitizeInput, CURRENCY_DENOMINATIONS } from "./utils";
import { UserInputBox, ChangeOutputBox } from "./components";

/**
 * App Component (The Controller)
 * * Manages the global state for the Change Calculator application.
 * This component orchestrates data flow by:
 * 1. Synchronizing user inputs via state hooks.
 * 2. Invoking the logic engine to process currency totals.
 * 3. Distributing results to presentational child components.
 * * @returns {JSX.Element} The full application layout using Bootstrap grid.
 */
export default function App() {
  // 1. STATE INITIALIZATION
  const [amountDue, setAmountDue] = useState("");
  const [amountReceived, setAmountReceived] = useState("");

  /**
   * Dynamically constructs the initial state for denominations based on constants.
   * Ensures the UI has "zeroed-out" cards on first load.
   */
  const initialDenominations = {
    changeTotal: 0,
    status: "success",
    ...CURRENCY_DENOMINATIONS.reduce((acc, denom) => {
      acc[denom.name] = 0;
      return acc;
    }, {}),
  };

  const [denominations, setDenominations] = useState(initialDenominations);

  // 2. EVENT HANDLERS
  /**
   * Updates the 'amountDue' state after running the input through the universal sanitizer.
   * @param {ChangeEvent} event - The input change event from UserInputBox.
   */
  const handleAmountDueChange = (event) => {
    const cleanInput = sanitizeInput(event.target.value, event.target);
    setAmountDue(cleanInput);
  };
  /**
   * Updates the 'amountReceived' state after running the input through the universal sanitizer.
   * @param {ChangeEvent} event - The input change event from UserInputBox.
   */
  const handleAmountReceivedChange = (event) => {
    const cleanInput = sanitizeInput(event.target.value, event.target);
    setAmountReceived(cleanInput);
  };
  /**
   * The primary Calculation Trigger.
   * Processes the math via calcChange, assigns a UI status ('success' or 'danger'),
   * and updates the 'denominations' state to re-render the results cards.
   */
  const handleCalculate = () => {
    const data = calcChange(amountDue, amountReceived);

    if (parseFloat(amountReceived) < parseFloat(amountDue)) {
      data.status = "danger";
    } else {
      data.status = "success";
    }

    // MUST match the plural name in your useState
    setDenominations(data);
  };

  // 3. RENDER
  return (
    <main className="container-fluid  text-white min-vh-100 p-5">
      <header className="row border-bottom mb-4 pb-2">
        <h1 className="col-12">Change Calculator</h1>
      </header>

      <div className="row">
        {/* Bootstrap Column (4 columns wide) */}
        <div className="col-md-4">
          <UserInputBox
            amountDue={amountDue}
            onAmountDueChange={handleAmountDueChange}
            amountReceived={amountReceived}
            onAmountReceivedChange={handleAmountReceivedChange}
            onCalcClick={handleCalculate}
          />
        </div>

        {/* Bootstrap Column (8 columns wide) */}
        <div className="col-md-8">
          <ChangeOutputBox denominations={denominations} />
        </div>
      </div>
    </main>
  );
}
