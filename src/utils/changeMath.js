import { CURRENCY_DENOMINATIONS } from './constants';

/**
 * Calculates the breakdown of currency denominations for a given change amount.
 * Performs all calculations in cents to ensure floating-point precision.
 * * @param {number|string} amountDue - The total cost of the transaction.
 * @param {number|string} amountReceived - The total amount provided by the customer.
 * @returns {Object} An object containing the changeTotal, status, and coin counts.
 */
export function calcChange(amountDue, amountReceived) {
  // 1. CONVERT TO CENTS
  // Using Math.round prevents floating-point errors like 0.1 + 0.2 = 0.30000000000000004
  let remaining = Math.round((amountReceived - amountDue) * 100);

  // 2. INITIALIZE RESULT
  // We start with the total decimal value. 
  const result = {
    changeTotal: remaining / 100,
  };

  // 3. SEED THE OBJECT WITH ZEROS
  // This ensures every key (twenties, tens, etc.) exists in the result object
  CURRENCY_DENOMINATIONS.forEach(denom => {
    result[denom.name] = 0;
  });

  // 4. THE NEGATIVE CHECK
  // If they owe money, we return the negative changeTotal and the zeros
  if (remaining < 0) return result;

  // 5. THE CALCULATION LOOP
  // We iterate through the master list imported from constants.js
  for (let denom of CURRENCY_DENOMINATIONS) {
    // How many of this denomination fit into the remaining amount?
    result[denom.name] = Math.floor(remaining / denom.value);
    
    // Update 'remaining' to be whatever is left over after taking those out
    remaining %= denom.value;
  }

  return result;
}