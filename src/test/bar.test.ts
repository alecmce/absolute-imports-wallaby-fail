import { bar } from "./bar"

describe('bar test', () => {

  it('tests bar and foo', () => {
    expect(bar('x')).toEqual('bar foo x')
  })

})
