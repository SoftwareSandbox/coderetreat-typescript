const world = '🗺️';

export function hello(input: string = world): string {
  return `Hello ${input}!`;
}

console.log(hello());
