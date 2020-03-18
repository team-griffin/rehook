/* eslint-env jest */

import testUtil from '../test-utils'
import withProp from '../with-prop'

test('maps a prop', () => {
  // const getProps = testUtil(withProp(({ b }) => ({ b })), {
  //   a: true,
  //   b: false,
  // })
  const getProps = testUtil(withProp('b', ({ a }) => !a), {
    a: true,
  })

  expect(getProps().a).toBe(true)
  expect(getProps().b).toBe(false)
})
