/**
 * @param {Object} defaultProps
 * @returns {Object}
 */
const defaultProps = defaultProps => (props = {}) => {
  const defaults =
    typeof defaultProps === 'function' ? defaultProps(props) : defaultProps
  const result = Object.assign({}, props)
  Object.keys(defaults).forEach(key => {
    if (result[key] === undefined) {
      result[key] = defaults[key]
    }
  })
  return result
}

export default defaultProps
