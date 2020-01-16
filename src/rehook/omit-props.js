const omitProps = keys => props => {
  keys = [].concat(keys)
  const result = {}
  for (let key in props) {
    if (keys.indexOf(key) < 0) {
      result[key] = props[key]
    }
  }
  return result
}

export default omitProps
