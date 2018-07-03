import { hello } from './HelloWorld';
import { expect } from 'chai';
import 'mocha';

describe('hello function', () => {
  
  it('without given parameter, should return hello 🗺️️️️ ', () => {
    const result = hello();
    expect(result).to.equal('Hello 🗺️ !');
  });
  
  it('with given parameter, should return given parameter', () => {
    const result = hello('snarf');
    expect(result).to.equal('Hello snarf !');
  });
  
});