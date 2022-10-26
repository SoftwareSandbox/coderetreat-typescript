import { hello } from './hello-world';

describe('hello function', () => {
  it('without given parameter, should return hello 🗺️️️️', () => {
    const result = hello();
    expect(result).toEqual('Hello 🗺️!');
  });

  it('with given parameter, should return given parameter', () => {
    const result = hello('snarf');
    expect(result).toEqual('Hello snarf!');
  });
});
