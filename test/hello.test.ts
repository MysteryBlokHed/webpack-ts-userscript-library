import { hello } from '../src'

describe('the hello function', () => {
  it('prints hello world', () => {
    console.log = jest.fn(console.log)
    hello()

    expect(console.log).toHaveBeenCalledWith('Hello, World!')
  })
})
