export function takeRandom(values: any[]): string {
  return values[Math.floor(Math.random() * values.length)];
}
