export function generateDayWiseTimeSeries(
  baseval: number,
  count: number,
  yrange: { min: number; max: number }
): [number, number][] {
  let i = 0
  const series: [number, number][] = []
  while (i < count) {
    const x = baseval
    const y = Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min
    series.push([x, y])
    baseval += 86400000 // Add one day in milliseconds
    i++
  }
  return series
}
function snakeToCamel(str: string): string {
  return str.replace(/_([a-z])/g, (_, letter) => letter.toUpperCase())
}
export function convertKeysToCamel<T>(obj: T): T {
  if (Array.isArray(obj)) {
    return obj.map((item) => convertKeysToCamel(item)) as T
  } else if (obj !== null && typeof obj === 'object') {
    return Object.keys(obj).reduce((acc, key) => {
      const camelKey = snakeToCamel(key)
      ;(acc as any)[camelKey] = convertKeysToCamel((obj as any)[key])
      return acc
    }, {} as T)
  }
  return obj
}
