/**
 *
 * @param {Function|Object} fn
 */
const withProp = (key, fn) => props => ({
  ...props,
  [key]: typeof fn === 'function' ? fn(props) : fn,
})

export default withProp
