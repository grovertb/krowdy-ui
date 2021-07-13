export { default as useAuth } from './useAuth'

export const parseQueryString = (querystring) => {
  const params = new URLSearchParams(querystring)

  const obj = {}

  for (const key of params.keys())
    if(params.getAll(key).length > 1)
      obj[key] = params.getAll(key)
    else
      obj[key] = params.get(key)

  return obj
}
