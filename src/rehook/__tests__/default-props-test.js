/* eslint-env jest */

import testUtil from '../test-utils'
import defaultProps from '../default-props'

test('default props without prop', () => {
  const getProps = testUtil(
    defaultProps({
      val: false,
    }),
    {}
  )

  expect(getProps().val).toBe(false)
})

test('default props with prop', () => {
  const getProps = testUtil(
    defaultProps({
      val: false,
    }),
    { val: true }
  )

  expect(getProps().val).toBe(true)
})

test('default props with undefined', () => {
  const getProps = testUtil(
    defaultProps({
      val: false,
    }),
    { val: void 0 }
  )

  expect(getProps().val).toBe(false)
})

test('default props with function', () => {
  const getProps = testUtil(
    defaultProps(props => ({
      val: !props.nval,
    })),
    { nval: true }
  )

  expect(getProps().val).toBe(false)
})
