export default function isExternalURL(string) {
  if(process.env.NODE_ENV !== 'production')
    if(typeof string !== 'string') {
      throw new Error('Krowdy-UI: isExternalURL(string) expects a string argument.')
    }

  return (
    new RegExp('^(https?:\\/\\/)?' +
    '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' +
    '((\\d{1,3}\\.){3}\\d{1,3}))' +
    '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' +
    '(\\?[;&a-z\\d%_.~+=-]*)?' +
    '(\\#[-a-z\\d_]*)?$', 'i').test(string)
  )
}
