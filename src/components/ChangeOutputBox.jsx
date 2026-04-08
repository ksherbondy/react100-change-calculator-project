import { CURRENCY_DENOMINATIONS } from "../utils";
/**
 * ChangeOutputBox Component
 * * Renders the results of the change calculation. It dynamically switches
 * between a "danger" alert for insufficient funds and a "success" grid
 * of denomination cards using the Bootstrap grid system.
 * * @param {Object} props - Component properties.
 * @param {Object} props.denominations - The calculated change data package.
 * @param {number} props.denominations.changeTotal - The numerical total of change due or owed.
 * @param {string} props.denominations.status - The status flag ('success' or 'danger').
 * @returns {JSX.Element|null} The rendered results section or null if no data exists.
 */
export const ChangeOutputBox = ({ denominations }) => {
  if (!denominations) return null;

  // 1. DANGER PIVOT: Handle money owed
  if (denominations.status === "danger") {
    const owedAmount = Math.abs(denominations.changeTotal).toFixed(2);
    return (
      <div className="alert alert-danger" role="alert">
        {`Additional money owed is $${owedAmount}`}
      </div>
    );
  }

  // 2. SUCCESS FLOW: Handle change due
  return (
    <section className="output-container">
      <div className="alert alert-success" role="alert">
        {`The total change due is $${denominations.changeTotal.toFixed(2)}`}
      </div>

      <div className="row mt-3">
        {CURRENCY_DENOMINATIONS.map((denom) => (
          <div key={denom.name} className="col-sm-3 mb-3">
            <div className="purple-card text-center p-3 border rounded shadow-sm">
              <h5 className="label-text mb-2">{denom.name.toUpperCase()}</h5>

              {/* WE CHANGED THIS: 
                  Using denom.name to match your constants.js.
                  Added the data-testid={denom.name} so tests can find it.
              */}
              <p className="count-value h4 mb-0" data-testid={denom.name}>
                {denominations[denom.name]}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
