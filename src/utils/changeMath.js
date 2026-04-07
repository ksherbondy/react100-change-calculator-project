/**
 * Global constant defining currency denominations in cents to avoid 
 * floating-point arithmetic errors.
 * @type {Array<{key: string, value: number}>}
 */
const denominations = [
    { key: "twenties", value: 2000 },
    { key: "tens", value: 1000 },
    { key: "fives", value: 500 },
    { key: "ones", value: 100 },
    { key: "quarters", value: 25 },
    { key: "dimes", value: 10 },
    { key: "nickels", value: 5 },
    { key: "pennies", value: 1 }
];

/**
 * Calculates the breakdown of currency denominations for a given change amount.
 * Performs all calculations in cents to ensure precision.
 * @param {number} amountDue - The total cost of the transaction.
 * @param {number} amountReceived - The total amount provided by the customer.
 * @returns {Object} An object containing the total change and counts for each denomination.
 * @returns {number} return.changeTotal - The total change due in decimal format.
 * @returns {number} return.twenties - Count of $20 bills.
 * @returns {number} return.tens - Count of $10 bills.
 * @returns {number} return.fives - Count of $5 bills.
 * @returns {number} return.ones - Count of $1 bills.
 * @returns {number} return.quarters - Count of quarters.
 * @returns {number} return.dimes - Count of dimes.
 * @returns {number} return.nickels - Count of nickels.
 * @returns {number} return.pennies - Count of pennies.
 */
export function calcChange(amountDue, amountReceived) {
  let remaining = Math.round((amountReceived - amountDue) * 100);

  const result = {
    changeTotal: remaining / 100,
    twenties: 0,
    tens: 0,
    fives: 0,
    ones: 0,
    quarters: 0,
    dimes: 0,
    nickels: 0,
    pennies: 0
  };

  if (remaining < 0) return result;

  

  for (let denom of denominations) {
    result[denom.key] = Math.floor(remaining / denom.value);
    remaining %= denom.value;
  }

  return result;
}