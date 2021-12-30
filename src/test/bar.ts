import { foo } from 'src/test/foo'

export function bar(value: string): string {
  return `bar ${foo(value)}`
}
