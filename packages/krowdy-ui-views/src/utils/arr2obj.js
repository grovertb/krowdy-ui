/**
 * Converts an array to object, with custom key and value.
 * @param array The array to transform.
 * @param option The options sould be a object with two optional keys: key and value, functions that receive the item as argument and return a value.
 */
export default function arr2obj(array, options) {
  if(!isValidArray(array))
    return {}

  const keyFunc = getOptionFunction(options, 'key')
  const valueFunc = getOptionFunction(options, 'value')

  return array.reduce((obj, item) => {
    const key = keyFunc ? keyFunc(item) : item
    const value = valueFunc ? valueFunc(item) : item
    if(key || typeof key === 'number')
      obj[key] = value

    return obj
  }, {})
}

function getOptionFunction(option, key) {
  const optionFunc = isValidObject(option) ? option[key] : undefined
  if(optionFunc && typeof optionFunc === 'function')
    return optionFunc

  return undefined
}

function isValidArray(array) {
  return Array.isArray(array) && array.length !== 0
}

function isValidObject(object) {
  return object && typeof object === 'object'
}
