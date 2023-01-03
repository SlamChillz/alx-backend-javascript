export default function updateUniqueItems(map) {
  if (map instanceof Map) {
    map.forEach((v, k, map) => {
      if (v === 1) {
        map.set(k, 100);
      }
    });
    return map;
  }
  throw new Error('Cannot process');
}
