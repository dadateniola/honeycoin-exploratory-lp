/**
 * Returns an array of key-value pairs from the given object, preserving key and value types.
 *
 * @template T - The object type.
 * @param obj - The object whose entries are to be returned.
 * @returns An array of [key, value] tuples with correct typings.
 *
 * @example
 * const obj = { a: 1, b: 2 };
 * const entries = typedEntries(obj); // [ ['a', 1], ['b', 2] ]
 */
export function typedEntries<T extends object>(
  obj: T
): [keyof T, T[keyof T]][] {
  return Object.entries(obj) as [keyof T, T[keyof T]][];
}
