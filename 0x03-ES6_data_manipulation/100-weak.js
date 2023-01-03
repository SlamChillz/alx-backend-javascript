export const weakMap = new WeakMap();

export function queryAPI(obj) {
  let count = weakMap.get(obj) || 0;
  if (count === 4) {
    throw new Error('Endpoint load is high');
  }
  weakMap.set(obj, count + 1);
}