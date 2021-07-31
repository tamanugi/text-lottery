export function takeRandom(values: string[]): string {
  return values[Math.floor(Math.random() * values.length)];
}
