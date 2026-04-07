import { useMemo } from 'react';
import { calcChange } from "../utils/changeMath";

/**
 * A custom React hook that memoizes the calculation of change denominations.
 * This prevents expensive recalculations unless the input values change.
 * * @param {number} amountDue - The amount the customer owes.
 * @param {number} amountReceived - The amount the customer paid.
 * @returns {Object} The memoized result from the calcChange utility function.
 * @example
 * const changeData = useCalcChange(15.50, 20.00);
 * console.log(changeData.quarters); // 2
 */
export function useCalcChange(amountDue, amountReceived) {
  return useMemo(() => {
    return calcChange(amountDue, amountReceived);
  }, [amountDue, amountReceived]);
}