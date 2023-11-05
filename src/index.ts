export function deepMerge(a: Object | Array<any>, b: Object | Array<any>) {
  if (Array.isArray(a) && Array.isArray(b)) {
    return [...a, ...b]
  }

  const merged = { ...a }
  for (const key of Object.keys(b)) {
    if (typeof a[key] === 'object' || Array.isArray(a[key])) {
      merged[key] = deepMerge(a[key], b[key])
    } else {
      merged[key] = b[key]
    }
  }

  return merged
}
