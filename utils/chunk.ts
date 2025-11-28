/**
 * Splits an array into chunks of a specified size.
 *
 * @template T - The type of elements in the array
 * @param {T[]} array - The array to chunk
 * @param {number} size - The size of each chunk
 * @returns {T[][]} An array of chunks
 *
 * @example
 * const items = [1, 2, 3, 4, 5, 6];
 * const pairs = chunk(items, 2);
 * // Returns: [[1, 2], [3, 4], [5, 6]]
 */
export const chunk = <T>(array: T[], size: number): T[][] => {
  const chunks: T[][] = [];
  for (let i = 0; i < array.length; i += size) {
    chunks.push(array.slice(i, i + size));
  }
  return chunks;
};
