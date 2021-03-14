export const setValue = (obj: any, path: string, value: any) => {
  const split = path.split('.')
  let o = obj
  while (split.length - 1) {
    const seg = split.shift()!
    if (!(seg in o)) o[seg] = {}
    o = o[seg]
  }
  if (!o) o = {}
  o[split[0]] = value
}

export const getValue = (obj: any, path: string) => {
  const split = path.split('.').reverse()
  let o = { ...obj }
  while (split.length - 1) {
    const seg = split.pop()
    o = o[seg!]
    if (!o) return null
  }
  return o[split.pop()!]
}
