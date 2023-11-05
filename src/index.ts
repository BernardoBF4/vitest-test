export function deepMerge(a: Object | Array<any>, b: Object | Array<any>) {
  if (Array.isArray(a) && Array.isArray(b)) {
    return [...a, ...b]
  }

  return Object.assign(a, b)
}
