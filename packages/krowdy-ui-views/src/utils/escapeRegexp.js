export default function escapeRegexp(text) {
  if(text)
    return text.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
  else
    return ''
}
