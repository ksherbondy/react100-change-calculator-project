/**
 * @typedef {Object} Denomination
 * @property {string} name - The display name and state key for the currency.
 * @property {number} value - The value of the denomination in cents.
 */

/**
 * Global configuration for currency denominations.
 * Values are stored in cents to ensure integer-based math precision.
 * @type {Denomination[]}
 */
export const CURRENCY_DENOMINATIONS = [
    { name: "twenties", value: 2000 },
    { name: "tens", value: 1000 },
    { name: "fives", value: 500 },
    { name: "ones", value: 100 },
    { name: "quarters", value: 25 },
    { name: "dimes", value: 10 },
    { name: "nickels", value: 5 },
    { name: "pennies", value: 1 }
];