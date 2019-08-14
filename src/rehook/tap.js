/**
 * @param {Function} fn
 * @returns {Object}
 */
const tap = fn => props => {
  fn(props)
  return props
}

export default tap
