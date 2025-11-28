/**
 * Creates a debounced version of the provided function that delays its execution
 * until after the specified delay has elapsed since the last time it was invoked.
 *
 * @template T - The type of the function to debounce
 * @param {T} func - The function to debounce
 * @param {number} delay - The number of milliseconds to delay execution
 * @returns {(...args: Parameters<T>) => void} A debounced version of the original function
 *
 * @example
 * const handleResize = debounce(() => {
 *   console.log('Window resized');
 * }, 300);
 *
 * window.addEventListener('resize', handleResize);
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const debounce = <T extends (...args: any[]) => void>(
  func: T,
  delay: number
) => {
  let timeout: NodeJS.Timeout;
  return (...args: Parameters<T>) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), delay);
  };
};
