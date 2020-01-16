/* eslint-env jest */
import testUtil from '../test-utils'
import omitProps from '../omit-props'

test('omits props', () => {
  const hook = omitProps(['a', 'c'])
  const getProps = testUtil(hook, { a: true, b: true, c: false })

  expect(getProps()).toEqual({
    b: true,
  })
})
